// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Declaration from 'App/Models/Declaration'
import ImagesDeclaration from 'App/Models/ImagesDeclaration'
import DeclarationForm from 'App/Validators/DeclarationFormValidator'
import DeclarationFilterForm from 'App/Validators/DeclarationFilterFormValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Collect from '../../Models/Collect'
import User from 'App/Models/User'
import Notification from '../../Models/Notification'
import { createNotification } from 'App/Helpers'

export default class DeclarationsController {
  public async list({ request, response }: HttpContextContract) {
    const { city_id, collect_id, period, status, time } = request.body()
    const declarationsPromise = Declaration.query()
      .preload('images')
      .preload('collect')
      .preload('user', (query) => {
        query.select('*').preload('account', (query) => {
          query.select('*').preload('city', (query) => {
            query.select('id', 'name')
          })
        })
      })
      .where('status', status as string)
      .orderBy('created_at', 'desc')

    if (city_id && city_id !== -1) {
      declarationsPromise.preload('user', (query) => {
        query.select('*').preload('account', (query) => {
          query
            .select('id', 'gender', 'type', 'avatar', 'address', 'city_id')
            .preload('city', (query) => {
              query.select('id', 'name')
            })
        })
      })
    }
    if (collect_id && collect_id !== -1) {
      declarationsPromise.where('collect_id', collect_id)
    }

    if (time) {
      declarationsPromise.where('time', time)
    }

    if (period !== undefined && period !== -1) {
      // 1 : Dernière heure
      // 2 : Aujourd'hui
      // 3 : 7 derniers jours
      // 4 : Ce mois-ci
      if (period == 1) {
        declarationsPromise.where('created_at', '>', 'DATE_SUB(NOW(),INTERVAL 1 HOUR)')
      } else if (period == 2) {
        declarationsPromise.whereRaw('DATE(created_at) = DATE(NOW())')
      } else if (period == 3) {
        declarationsPromise.where('created_at', '>', 'DATE_SUB(NOW(),INTERVAL 7 days)')
      } else if (period == 4) {
        declarationsPromise
          .whereRaw('month(created_at) = month(NOW())')
          .whereRaw('year(created_at) = year(NOW())')
      }
    }

    return response.ok(await declarationsPromise)
  }

  public async index({ request, response }: HttpContextContract) {
    const payload: any = request.body()
    console.log('payload >', payload)

    const declarations = await Declaration.query()
      .preload('images')
      .preload('collect')
      .where('status', payload.status)
      .preload('user', (query) => {
        query.select('*').preload('account', (query) => {
          query.select('*').preload('city', (query) => {
            query.select('id', 'name')
          })
        })
      })
      .orderBy('created_at', 'desc')

    return response.ok(declarations)
  }

  public async show({ params, response }) {
    const { id } = params

    const declaration: any = await Declaration.find(id)

    if (!declaration) {
      return response.notFound({ message: 'Déclaration none trouvé' })
    }

    return response.ok(declaration)
  }

  public async save({ auth, request, response }: HttpContextContract) {
    const user = auth.use('api').user

    const payload: any = request.body()

    payload.user_id = user?.id
    payload.status = 'PENDING'

    const newDeclaration: Declaration = await Declaration.create(payload)

    const images = request.files('images')
    for (let image of images) {
      await image.move('uploads/declarations/' + user?.id, {
        name: 'd_' + Date.now() + '.' + image.extname,
        overwrite: true,
      })

      await ImagesDeclaration.create({
        declaration_id: newDeclaration.id,
        image: image?.filePath?.replace(/\\/g, '/').replace('uploads/', ''),
      })
    }

    await createNotification({
      type: 'DECLARATION',
      note: `${user?.first_name} ${
        user?.last_name
      } a Crée une declaration en ${newDeclaration.createdAt.toLocaleString()} de quantité ${
        newDeclaration.quantity
      }`,
      status: 'UNREAD',
      user_id: user!.id,
    })

    return response.ok({ error: false, message: 'Success' })
  }

  // * Update Declaration
  public async update({ auth, request, response, params }: HttpContextContract) {
    const user = auth.use('api').user
    const { id } = params
    const { status } = request.body()

    const declaration = await Declaration.find(id)
    if (!declaration) return response.notFound({ message: 'Declaration non trouvée' })

    await Promise.all([
      declaration.merge({ status }).save(),
      createNotification({
        type: 'DECLARATION',
        note: `${
          user?.fullName
        } a modifée la declaration en ${declaration.updatedAt.toLocaleString()} de quantité ${
          declaration.quantity
        }`,
        status: 'UNREAD',
        user_id: user!.id,
      }),
    ])

    response.ok({ message: 'Declaration modifiée' })
  }

  // * Delete Declaration
  public async remove({ auth, params, response }: HttpContextContract) {
    const user = auth.use('api').user
    const { id } = params

    const declaration = await Declaration.find(id)
    if (!declaration) return response.notFound({ message: 'Declaration non trouvée' })

    await Promise.all([
      declaration.delete(),
      createNotification({
        type: 'DECLARATION',
        note: `${
          user?.fullName
        } a supprimée la declaration en ${new Date().toLocaleDateString()} de quantité ${
          declaration.quantity
        }`,
        status: 'UNREAD',
        user_id: user!.id,
      }),
    ])

    response.ok({ message: 'Declaration Supprimée' })
  }
}
