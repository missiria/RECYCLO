import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Declaration from 'App/Models/Declaration'

export default class WalletsController {
  public async getWalletInfo({ auth, response }: HttpContextContract) {
    const user = auth.use('api').user

    const declarations = await Declaration.query()
      .preload('collect')
      .where('status', 'PAID')
      .where('user_id', user!.id)

    // * Calculate the amount (Sold actuel)
    const amount = declarations.reduce((acc, curr) => {
      return acc + curr.collect.point / 100
    }, 0)

    // * Calculate profit percentage
    const DATE = new Date()
    const LAST_MONTH = new Date(DATE.setMonth(DATE.getMonth() - 1))

    const lastMonthDeclarations = await Declaration.query().where('created_at', '<', LAST_MONTH)
    const lastMonthAmount = lastMonthDeclarations.reduce((acc, curr) => {
      return acc + curr.collect.point / 100
    }, 0)

    // * the percentage
    const percentage = (Math.abs(amount - lastMonthAmount) / lastMonthAmount) * 100

    return response.ok({ amount, percentage })
  }

  public async getTransactions({}: HttpContextContract) {}
}
