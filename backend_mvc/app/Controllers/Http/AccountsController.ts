// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Account from 'App/Models/Account'
export default class AccountsController {

  public async index({ response }) {
    const users = await Account.all()
    return response.ok(users)
  }

  public async show({ params, response }) {
    const { id }: { id: Number } = params

    const account: any = await Account.find(id)

    if (!account) {
      return response.notFound({ message: 'Compte none trouvé' })
    }

    return response.ok(account)
  }

  public async destroy({ params, response }) {
    const { id }: { id: Number } = params
    const account: any = await Account.find(id)

    if (!account) {
      return response.notFound({ message: "Compte none trouvé" })
    }

    await account.delete()

    return response.ok({ message: 'Compte est bien supprimer successfully.' })
  }

}
