// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import UserForm from 'App/Validators/UserFormValidator'

export default class UsersController {

  public async login({ auth, request, response })
  {
    const phone = request.input('phone')
    const password = request.input('password')

    // Lookup user manually
    const user = await User.query().where('phone', phone).first()
    //.where('active', 1)

    if ( user ) {
      // Verify password
      if (!(await Hash.verify(user.password, password))) {
        return response.badRequest('Invalid credentials')
      }

      // Create token
      let token = await auth.use('api').generate(user, {
        expiresIn: '90days'
      })

      let result = {auth:token};
      return Object.assign(result,user.serialize());
    } else {
      return {user: "Doesn't exist in our application!"}
    }
  }

  public auth({request}) {
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
    if(auth.use('api').isAuthenticated)
    {
      await auth.use('api').revoke()
      return {
        revoked: true
      }
    }
    else {
      return response.badRequest('USER/LOGOUT : you credentials')
    }
  }

  public async index({ response }) {
    const users = await User.all()

    return response.ok(users)
  }

  public async store({ request, auth }) {

    const payload: any = await request.validate( UserForm )
    const newUser: User = await User.create( payload )

    // Create token
    let token = await auth.use('api').generate(newUser, {
      expiresIn: '90days'
    })

    let result = {auth:token};
    return Object.assign(result,newUser.serialize());
    //return response.ok(newUser)
  }

  public async show({ params, response }) {
    const { id }: { id: Number } = params

    const user: any = await User.find(id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }

    return response.ok(user)
  }

  public async update({ request, params, response }) {

    const payload: any = await request.validate( UserForm )

    const { id }: { id: Number } = params

    const user: any = await User.find(id)

    if (!user) {
      return response.notFound({ message: 'User not found' })
    }

    user.first_name = payload.first_name
    user.last_name = payload.last_name

    await user.save()

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
}
