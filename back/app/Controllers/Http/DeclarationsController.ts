// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Declaration from 'App/Models/Declaration'
import ImagesDeclaration from 'App/Models/ImagesDeclaration'
import DeclarationForm from 'App/Validators/DeclarationFormValidator'
import DeclarationFilterForm from 'App/Validators/DeclarationFilterFormValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Collect from '../../Models/Collect'
import User from 'App/Models/User'

export default class DeclarationsController {
  public async list({ request, response }) {
    const payload: any = await request.validate(DeclarationFilterForm)

    const declarations = await Declaration.query()
      .select(
        'id',
        'collect_id',
        'user_id',
        'quantity',
        'status',
        'date',
        'time',
        'created_at',
        'updated_at'
      )
      .preload('images', (query) => {
        query.select('id', 'declaration_id', 'image')
      })
      .preload('collect', (query) => {
        query.select('id', 'collect_name', 'image', 'point', 'description')
      })
      .preload('user', (query) => {
        query
          .select('id', 'first_name', 'last_name', 'email', 'phone')
          .preload('account', (query) => {
            query
              .select('id', 'gender', 'type', 'avatar', 'address', 'country', 'city_id')
              .preload('city', (query) => {
                query.select('id', 'name')
              })
          })
      })
      .where((query) => {
        query.where('status', 'VALID')

        if (!payload.time) {
          query.where('time', payload.time)
        }

        if (payload.collect_id !== undefined && payload.collect_id !== -1) {
          query.where('collect_id', payload.collect_id)
        }

        if (payload.city_id !== undefined && payload.city_id !== -1) {
          query.whereHas('user', (query) => {
            query.whereHas('account', (query) => {
              query.where('city_id', payload.city_id)
            })
          })
        }

        if (payload.peroid !== undefined && payload.peroid !== -1) {
          // 1 : Dernière heure
          // 2 : Aujourd'hui
          // 3 : 7 derniers jours
          // 4 : Ce mois-ci
          if (payload.peroid == 1) {
            query.where('created_at', '>', 'DATE_SUB(NOW(),INTERVAL 1 HOUR)')
          } else if (payload.peroid == 2) {
            query.whereRaw('DATE(created_at) = DATE(NOW())')
          } else if (payload.peroid == 3) {
            query.where('created_at', '>', 'DATE_SUB(NOW(),INTERVAL 7 days)')
          } else if (payload.peroid == 4) {
            query
              .whereRaw('month(created_at) = month(NOW())')
              .whereRaw('year(created_at) = year(NOW())')
          }
        }
      })

    return response.ok(declarations)
  }

  public async index({ request, response }: HttpContextContract) {
    const payload: any = request.body()
    console.log('payload >', payload)

    const declarations = await Declaration.query()
      .preload('images')
      .preload('collect')
      .where('status', payload.status)
    // .where('user_id', user.id)

    for (const declaration of declarations) {
      // @ts-ignore
      declaration.user = await User.findBy('id', declaration.user_id)
    }

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


    return response.ok({ error: false, message: 'Success' })
  }
}
