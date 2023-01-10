// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import Declaration from 'App/Models/Declaration'
import OrderForm from 'App/Validators/OrderFormValidator'
import Notification from '../../Models/Notification'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { createNotification } from 'App/Helpers'

export default class OrdersController {
  public async index({ auth, request, response }) {
    const user = auth.use('api').user
    const payload: any = await request.validate(OrderForm)

    const orders = await Order.query()
      .preload('declaration', (query) => {
        query
          .preload('collect', (query) => {
            query.select('id', 'collect_name', 'image', 'point', 'description')
          })
          .preload('user', (query) => {
            query.select('id', 'first_name', 'last_name', 'email', 'phone')
          })
      })
      .where('status', payload.status)
      .where('user_id', user.id)
    return response.ok(orders)
  }

  public async accept({ auth, params, response }: HttpContextContract) {
    const { id } = params

    const user = auth.use('api').user

    const declaration = await Declaration.find(id)

    if (!declaration) {
      return response.notFound({ message: 'Déclaration none trouvé' })
    }

    const newOrder: Order = await Order.create({
      declaration_id: id,
      user_id: user?.id,
      status: 'PENDING',
    })

    declaration.status = 'VALID'
    declaration.save()

    // * Create notifications
    await createNotification({
      note: `le collecteur ${user?.first_name} ${
        user?.last_name
      } a validée la déclaration qui est créé en ${declaration.createdAt.toLocaleString()} de quantité ${
        declaration.quantity
      }`,
      type: 'DECLARATION',
      status: 'UNREAD',
      user_id: user!.id,
    })

    return response.ok({ error: false, message: 'Success', order: newOrder })
  }

  public async updateOrder({ auth, params, request, response }: HttpContextContract) {
    const { id } = params
    const { status } = request.body()
    const user = auth.use('api').user

    const declaration = await Declaration.find(id)
    const order = await Order.findBy('declaration_id', declaration?.id)

    if (!declaration || !order) {
      return response.notFound({ message: 'Element non trouvé' })
    }

    await order.merge({ status }).save()
    console.log('reached')
    // * Create notifications
    await createNotification({
      note: `${user?.first_name} ${user?.last_name} Modifier la declaration ${
        declaration.id
      } créé en ${declaration.createdAt.toLocaleString()} de quantité ${declaration.quantity}`,
      type: 'DECLARATION',
      status: 'UNREAD',
      user_id: user!.id,
    })

    response.ok({ message: 'Order modifiée' })
  }
}
