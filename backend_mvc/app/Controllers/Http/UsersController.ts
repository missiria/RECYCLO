// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UsersController {

    public async login({ auth, request, response }) {
        const email = request.input('email')
        const password = request.input('password')

        // Lookup user manually
        const user = await User
          .query()
          .where('email', email)
          .where('active', 1)
          .firstOrFail()

        // Verify password
        if (!(await Hash.verify(user.password, password))) {
          return response.badRequest('Invalid credentials')
        }

        // Create session
        return await auth.use('web').login(user)
    }

    public async logout({ auth, response }) {
        if ( auth.use('web').isLoggedIn ) {
            return await auth.use('web').logout()
        } else {
            return response.badRequest('USER/LOGOUT : you credentials')
        }
    }

    public async index({ response }) {
        const users = await User.all()

        return response.ok(users)
    }

    public async store({ request, response }) {
        const userSchema = schema.create({
            email: schema.string({ trim: true }, [
                rules.email({
                    sanitize: true,
                    ignoreMaxLength: true,
                    domainSpecificValidation: true
                }),
                rules.unique({ table: 'users', column: 'email', caseInsensitive: true }),
                rules.minLength(10),
                rules.maxLength(255)
            ]),
            password: schema.string({}, [
                rules.minLength(10),
                rules.maxLength(255)
            ]),
            first_name: schema.string({}, [
                rules.maxLength(255)
            ]),
            last_name: schema.string({}, [
                rules.maxLength(255)
            ]),
            phone: schema.number(),
            active: schema.boolean(),
        })

        const payload: any = await request.validate({ schema: userSchema })
        const newUser: User = await User.create(payload)

        return response.ok(newUser)
    }

    public async show({ params, response }) {
        const { id }: { id: Number } = params

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
}