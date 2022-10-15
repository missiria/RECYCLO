// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Account from 'App/Models/Account'
import AccountForm from 'App/Validators/AccountFormValidator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AccountsController {
  /*
  public async index({ response }) {
    const accounts = await Account.all()
    return response.ok(accounts)
  }
  */

  public async show({ auth, response }) {
    const user = auth.use('api').user
    const account: any = await Account.findBy('user_id', user.id)

    if (!account) {
      return response.notFound({ message: 'Compte non trouvée' })
    }

    return response.ok(account)
  }

  // * Update Account
  public async update({ auth, request, response }: HttpContextContract) {
    const user = auth.use('api').user
    if (!user) return response.badRequest('Need to be logged in')

    const { birth_day, birth_month, birth_year, ...rest } = await request.validate(AccountForm)
    console.log(rest)
    const account = await Account.findBy('user_id', user?.id)

    if (!account) return response.notFound({ message: 'Compte non trouvée' })

    await account
      .merge({
        ...rest,
        ...(birth_year &&
          birth_month &&
          birth_day && {
            birth_date: new Date(`${birth_year}/${birth_month}/${birth_day}`),
          }),
      } as unknown as Account)
      .save()

    // * re-create token object
    const token = await auth.use('api').generate(user ?? ({} as User), {
      expiresIn: '30days',
    })

    return Object.assign({ auth: token, account }, user?.serialize())
  }

  public async upload_verification({ auth, request, response }) {
    const user = auth.use('api').user
    //const payload: any = await request.validate( AccountForm )
    const account: any = await Account.findBy('user_id', user.id)

    account.type_verification = request.type

    const frontVerify = request.file('front_card')

    if (frontVerify) {
      await frontVerify.move('uploads/validations/' + user.id, {
        name: 'front_' + Date.now() + '.' + frontVerify.extname,
        overwrite: true,
      })
    }
    account.front_verification_path = frontVerify.filePath
      .replace(/\\/g, '/')
      .replace('uploads/', '')

    const backVerify = request.file('back_card')
    if (backVerify) {
      await backVerify.move('uploads/validations/' + user.id, {
        name: 'back_' + Date.now() + '.' + backVerify.extname,
        overwrite: true,
      })
    }
    account.back_verification_path = backVerify.filePath.replace(/\\/g, '/').replace('uploads/', '')

    await account.save()

    return response.ok(account)
  }

  public async destroy({ auth, response }) {
    const user = auth.use('api').user
    const account: any = await Account.findBy('user_id', user.id)

    if (!account) {
      return response.notFound({ message: 'Compte none trouvé' })
    }

    await account.delete()

    return response.ok({ message: 'Compte est bien supprimer successfully.' })
  }
}
