import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Notification from 'App/Models/Notification'

export default class NotificationsController {
  public async getAllNotification({ auth, request, response }: HttpContextContract) {
    // const user = auth.use('api').user
    const notifications = await Notification.all()
    response.ok(notifications)
  }
}
