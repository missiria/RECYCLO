import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Bank from 'App/Models/Bank'

export default class BanksController {
  public async getAllBanks({ response }: HttpContextContract) {
    const banks = await Bank.query().orderBy('id', 'asc')

    return response.ok(banks)
  }
}
