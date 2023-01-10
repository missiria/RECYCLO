// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Route from '@ioc:Adonis/Core/Route'
import Account from 'App/Models/Account'
import User from 'App/Models/User'

import Hash from '@ioc:Adonis/Core/Hash'
import UserForm from 'App/Validators/UserFormValidator'
import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async login({ auth, request, response }: HttpContextContract) {
    const phone = request.input('phone')
    const password = request.input('password')

    // Lookup user manually
    const user = await User.query().where('phone', phone).first()
    // TODO : Need to login just user who are active

    if (user) {
      // Verify password

      if (!(await Hash.verify(user.password, password))) {
        return response.badRequest('Invalid credentials')
      }

      // If user doesn't verify his email
      if (!user.active) {
        return response.badRequest({user: 'You need to verify your address email!'})
      }

      // Create token
      let token = await auth.use('api').generate(user, {
        expiresIn: '30days',
      })

      let account = await Account.findBy('user_id', user.id)

      let result = { auth: token, account }

      return Object.assign(result, user.serialize())
    } else {
      return response.badRequest({ user: "You Doesn't exist in our application!" })
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

    // TODO : To verify
    let account_type = payload.type
    delete payload.type

    // * Generate the code for confirm the user email
    payload['code'] = generateCode()

    // * find if the email is duplicated
    const user = await User.findBy('email', payload.email)
    if (user) return response.badRequest('duplicated')

    // * Create a new user
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

    // * Send code verify his email
    await Mail.send((message) => {
      message
        .from(process.env.EMAIL as string)
        .to(newUser.email)
        .subject('Welcome Onboard! RECYCLOO')
        .htmlView('emails/welcome', {
          newUser,
          signature: `http://${process.env.HOST}${signature}`,
          code: payload['code'],
        })
    })

    return Object.assign({ auth: token, account }, newUser.serialize())
  }

  public async verifyEmail({ request, auth, response }: HttpContextContract){
    // * Get the email from body
    const { email } = request.body()

    // * find the user
    const user = await User.findBy("email", email)
    if(!user) return response.notFound('No user with that email')

    // * Update the active field & Find account for that user
    const [{}, account]  = await Promise.all([
      await user.merge({ active: true }).save(),
      await Account.findBy('user_id', user.id)
    ])

    // * Create & get token object
    const token = await auth.use('api').generate(user, {
      expiresIn: '30days',
    })

    // * Response : send the user object
    // Example of notification
    // notification(user, note: `You account has been active successful!`)
    return Object.assign({ auth: token, account }, user.serialize())
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
    const payload = request.body()

    // * Generate the code for confirm the user email
    payload['code'] = generateCode()


    // * Checker for the user
    const user = await User.findBy('email', payload.email)
    if (!user) return response.notFound(`No user with that email: ${payload.email}`)

    await user.merge({ forget_password_code: payload['code'] }).save(),

    // * Send the verification code via email
    await Mail.send((message) => {
      message
        .from(process.env.EMAIL as string)
        .to(payload.email)
        .subject('Here is you verification code')
        .htmlView('emails/forget_password', { verificationCode: payload['code'] })
    })

    return response.ok({ message: `A verification code is sent to: ${payload.email}`, code: payload['code'] })
  }

  public async update_password({ response, request }: HttpContextContract){
    // * Get the email
    const { email, password } = request.body()

    // * Find the user
    const user = await User.findBy('email', email)
    if(!user)
      return response.status(400).json({ user: "You Doesn't exist in our application!" })

    // * Change the password
    await user.merge({ password }).save()

    // * Response
    return response.status(201).json({ message: "You've changed your password successfully" })
  }

  public async resend_code({ response, request }: HttpContextContract){
    // * Get the email
    const payload = request.body()
    console.log(payload);

    // * Generate the code for confirm the user email
    payload['code'] = generateCode()

    // * Checker for the user
    const user = await User.findBy('email', payload.email)
    if (!user) return response.notFound(`No user with that email: ${payload.email}`)

    // * Update code in DB
    await user.merge({ forget_password_code: payload['code'] }).save()

      if(!payload.activation){
          // * Send the verification code via email
          await Mail.send((message) => {
            message
              .from(process.env.EMAIL as string)
              .to(payload.email)
              .subject('Here is you verification code')
              .htmlView('emails/forget_password', { verificationCode: payload['code'] })
          })
      } else {
        // * Send code verify his email
        await Mail.send((message) => {
          message
            .from(process.env.EMAIL as string)
            .to(user.email)
            .subject('Welcome Onboard! RECYCLOO')
            .htmlView('emails/welcome', {
              user,
              signature: ``,
              code: payload['code'],
            })
        })
    }

    // * Response
    return response.status(200).json({ message: `A verification code is sent to: ${payload.email}`, code: payload['code'] })
  }
}



export const generateCode = () => {
  return Math.floor(Math.random() * 9000) + 1000
}
