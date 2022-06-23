// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Account from 'App/Models/Account'
import AccountForm from 'App/Validators/AccountFormValidator'
import Application from '@ioc:Adonis/Core/Application'

export default class AccountsController {

  /*
  public async index({ response }) {
    const accounts = await Account.all()
    return response.ok(accounts)
  }
  */

  public async show({ auth,response }) {
    const user = auth.use('api').user;
    const account: any = await Account.findBy('user_id',user.id)

    if (!account) {
      return response.notFound({ message: 'Compte none trouvé' })
    }

    return response.ok(account)
  }

  public async store({ auth,request, response }) {

    const user = auth.use('api').user;
    const account: any = await Account.findBy('user_id',user.id)
    if (account) {
      return response.methodNotAllowed({ message: "Compte deja exist" })
    }

    const payload: any = await request.validate(AccountForm)

    payload.user_id = user.id

    const newAccount: Account = await Account.create(payload)

    return response.ok(newAccount)
  }

  public async update({ auth,request, response }) {

    const user = auth.use('api').user;
    const payload: any = await request.validate( AccountForm )
    const account: any = await Account.findBy('user_id',user.id)

    account.gender = payload.gender
    account.society_id = payload.society_id
    account.avatar = payload.avatar
    account.address = payload.address
    account.city = payload.city
    account.nationality = payload.nationality
    account.zip_code = payload.zip_code

    await account.save()

    return response.ok(account)

  }

  public async upload_verfication({ auth,request, response }) {

    const user = auth.use('api').user;
    //const payload: any = await request.validate( AccountForm )
    const account: any = await Account.findBy('user_id',user.id)

    account.type_verification = request.type

    const frontVerify = request.file('front_card')
    console.log('frontVerify')
    console.log(frontVerify)
    if (frontVerify) {
      await frontVerify.move('uploads/validations/'+user.id, {
        name: 'front_'+Date.now()+'.'+frontVerify.extname,
        overwrite: true,
      })
    }
    account.front_verification_path = frontVerify.filePath;

    const backVerify = request.file('back_card')
    if (backVerify) {
      await backVerify.move('uploads/validations/'+user.id, {
        name: 'back_'+Date.now()+'.'+backVerify.extname,
        overwrite: true,
      })
    }
    account.back_verification_path = backVerify.filePath;

    await account.save()

    return response.ok(account)
  }


  public async destroy({ auth,response }) {
    const user = auth.use('api').user;
    const account: any = await Account.findBy('user_id',user.id)

    if (!account) {
      return response.notFound({ message: "Compte none trouvé" })
    }

    await account.delete()

    return response.ok({ message: 'Compte est bien supprimer successfully.' })
  }
}
