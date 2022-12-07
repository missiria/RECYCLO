import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { createNotification } from 'App/Helpers'
import Notification from 'App/Models/Notification'

export default class NotificationsController {
  public async getAllNotification({ auth, request, response }: HttpContextContract) {
    // const user = auth.use('api').user
    const notifications = await Notification.query().orderBy('created_at', 'desc')
    response.ok(notifications ?? [])
  }

  public async getUserNotifications({ auth, request, response }: HttpContextContract) {
    const user = auth.use('api').user
    const notifications = await Notification.query()
      .where('user_id', user?.id ?? 0)
      .orderBy('created_at', 'desc')

    response.ok(notifications ?? [])
  }

  public async create({ auth, request, response }: HttpContextContract) {
    const { note, type, user_id } = request.body()
    await createNotification({
      user_id,
      note,
      type,
      status: 'UNREAD',
    })

    response.ok({ message: 'Notification created' })
  }

  public async length({ auth, response }: HttpContextContract) {
    const user = auth.use('api').user

    const notifications = await Notification.query().where('user_id', user!.id)

    response.ok({ length: notifications.length })
  }
}
