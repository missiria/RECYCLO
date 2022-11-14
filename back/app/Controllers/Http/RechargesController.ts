import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Recharge from "App/Models/Recharge"
import Notification from '../../Models/Notification';

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

  public async store({ auth, request, response }: HttpContextContract){
    const payload = request.body()
    const user = auth.use('api').user

    await Recharge.create({
      user_id: user?.id,
      ...payload
    })

    await Notification.create({
      status: "UNREAD",
      type: "PAYMENT",
      // @ts-ignore
      user_id: user?.id,
      note: `${user?.fullName} a crée un rechage de type ${payload.type} `
    })

    response.ok({ message: 'Recharge enregistrée' })
  }
}
