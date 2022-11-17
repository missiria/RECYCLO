import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Withdrawal from 'App/Models/Withdrawal'

export default class WithdrawalsController {
  public async getWithdrawal({ auth, response }: HttpContextContract) {
    const user = auth.use('api').user
    const withdrawals = await Withdrawal.query().where('user_id', user!.id).preload('bank')
    console.log(withdrawals)
    response.ok(withdrawals)
  }
}
