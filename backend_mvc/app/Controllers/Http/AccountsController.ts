// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Account from 'App/Models/Account'
import AccountForm from 'App/Validators/AccountFormValidator'
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

  public async store({ request, response }) {
    const payload: any = await request.validate(AccountForm)

    const newAccount: Account = await Account.create(payload)

    return response.ok(newAccount)
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
