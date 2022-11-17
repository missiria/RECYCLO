import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Notification from 'App/Models/Notification'
import Payment from 'App/Models/Payment'
import Withdrawal from 'App/Models/Withdrawal'

export default class PaymentsController {
  async createPayment({ auth, request, response }: HttpContextContract) {
    const user = auth.use('api').user
    const payload = request.body()

    await Payment.create({
      // @ts-ignore
      user_id: user?.id,
      ...payload,
    })

    await Notification.create({
      // @ts-ignore
      user_id: user?.id,
      type: 'PAYMENT',
      status: 'UNREAD',
      note: `${user?.fullName} aver perfomée une transaction`,
    })

    response.ok({ message: 'Transaction Crée ' })
  }

  async getPayments({ auth, request, response }: HttpContextContract) {
    const user = auth.use('api').user
    const transactions = await Payment.query().where('user_id', user!.id).preload('bank')

    response.ok(transactions)
  }
}
