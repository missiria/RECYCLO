// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Account from 'App/Models/Account'
import AccountFormUpdate from 'App/Validators/Accounts/AccountFormUpdateValidator'
import AccountFormStore from 'App/Validators/Accounts/AccountFormStoreValidator'

export default class AccountsController {

  public async index({ response }) {
    const accounts = await Account.all()
    return response.ok(accounts)
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
    const payload: any = await request.validate(AccountFormStore)

    // one user have one account
    const newAccount: Account = await Account.create(payload)

    return response.ok(newAccount)
  }

  public async update({ request, auth, response }) {

    const payload: any = await request.validate( AccountFormUpdate )

    await auth.use('api').check()
    if(auth.use('api').isAuthenticated)
    {
      const user = auth.use('api').user;
      const account: any = await Account.find(user.id)

      account.gender = payload.gender
      account.type = payload.type
      account.society_id = payload.society_id
      account.avatar = payload.avatar
      account.address = payload.address
      account.city = payload.city
      account.country = payload.country
      account.nationality = payload.nationality
      account.zip_code = payload.zip_code

      await account.save()

      return response.ok(account)
    }
    return response.forbidden({ error: 'Unauthorized' })

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
