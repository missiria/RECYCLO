import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Notification from 'App/Models/Notification'

export default class NotificationsController {
  public async getAllNotification({ auth, request, response }: HttpContextContract) {
    // const user = auth.use('api').user
    const notifications = await Notification.all()
    response.ok(notifications ?? [])
  }

  public async getUserNotifications({ auth, request, response }: HttpContextContract){
    const user = auth.use('api').user
    const notifications = await Notification.query().where('user_id', user?.id ?? 0)
    console.log(notifications)
    response.ok(notifications ?? [])
  }
}
