// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'
import Account from 'App/Models/Account'
import User from 'App/Models/User'

import Hash from '@ioc:Adonis/Core/Hash'
import UserForm from 'App/Validators/UserFormValidator'
import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async login({ auth, request, response }:HttpContextContract) {
    const phone = request.input('phone')
    const password = request.input('password')

    // Lookup user manually
    const user = await User.query().where('phone', phone).where('active', 1).first()
    // TODO : Need to login just user who are active
    //.where('active', 1)

    if (user) {
      // Verify password
      if (!(await Hash.verify(user.password, password))) {
        return response.badRequest('Invalid credentials')
      }

      // If user doesn't verify his email
      if (!user.active) {
        return response.badRequest('You need to verify your address email!')
      }

      // Create token
      let token = await auth.use('api').generate(user, {
        expiresIn: '30days',
      })
      
      let account = await Account.findBy('user_id', user.id)
      
      let result = { auth: token, account: account }

      return Object.assign(result, user.serialize())
    } else {
      return { user: "Doesn't exist in our application!" }
    }
  }

  public auth({ request }) {
    return request.cookie('user', [])
  }

  public async logout({ auth, response }) {
    /*
    await auth.use('web').check()
    if (auth.use('web').isAuthenticated) {
      return await auth.use('web').logout()
    } else {
      return response.badRequest('USER/LOGOUT : you credentials')
    }*/
    await auth.use('api').check()
    if (auth.use('api').isAuthenticated) {
      await auth.use('api').revoke()
      return {
        revoked: true,
      }
    } else {
      return response.badRequest('USER/LOGOUT : you credentials')
    }
  }

  public async index({ response }) {
    const users = await User.all()

    return response.ok(users)
  }

  public async store({ request, auth, response }: HttpContextContract) {
    const payload: any = await request.validate(UserForm)

    let account_type = payload.type
    delete payload.type

    // * find if the email is duplicated
    const user = await User.findBy('email', payload.email)
    if (user) return response.badRequest('duplicated')

    const newUser: User = await User.create(payload)

    // * Create & get token object
    const token = await auth.use('api').generate(newUser, {
      expiresIn: '30days',
    })

    let account = await Account.create({
      user_id: newUser.id,
      type: account_type,
    })

    const signature = Route.makeSignedUrl('verifyEmail', {
      email: newUser.email,
    })

    await Mail.send((message) => {
      message
        .from('edge_recyclo@gmail.com')
        .to(newUser.email)
        .subject('Welcome Onboard! RECYCLOO')
        .htmlView('emails/welcome', { newUser, signature: `http://${process.env.HOST}${signature}` })
    })

    // *! Do we need to verify phone number ??!!

    // * Login immediately
    await auth.login(newUser)

    return Object.assign({ auth: token, account }, newUser.serialize())
  }

  public async show({ params, response }) {
    const { id }: { id: number } = params

    const user: any = await User.find(id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }

    return response.ok(user)
  }

  public async destroy({ params, response }) {
    const { id }: { id: Number } = params
    const user: any = await User.find(id)

    if (!user) {
      return response.notFound({ message: 'user not found' })
    }

    await user.delete()

    return response.ok({ message: 'User deleted successfully.' })
  }

  // TODO
  public async forget_password({ response, request }: HttpContextContract) {
    const { email } = request.body()

    const user = await User.findBy('email', email)
    if (!user) return response.notFound(`No user with that email: ${email}`)

    // * Generate a random number of 5 digits on each request
    const verificationCode = Math.floor(Math.random() * 90000) + 10000

    // TODO: FIX => Emails considered as Spam in Gmail
    // @ts-ignore
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

    // * Send the verification code via email
    await Mail.send((message) => {
      message
        .from('edge_recyclo@gmail.com')
        .to(email)
        .subject('Here is you verification code')
        .htmlView('emails/forget_password', { verificationCode })
    })

    // TODO Saving code to DB
    // * -----
    return response.ok({ message: `A verification code is sent to: ${email}` })
  }
}
