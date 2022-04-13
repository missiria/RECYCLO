// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Recharge from "App/Models/Recharge"

export default class RechargesController {
  public async index({ response }) {
    const recharges = await Recharge.all()
    return response.ok(recharges)
  }

  public async show({ params, response }) {
    const { id }: { id: Number } = params

    const recharge: any = await Recharge.find(id)

    if (!recharge) {
      return response.notFound({ message: 'Recharge none trouvé' })
    }

    return response.ok(recharge)
  }
}
