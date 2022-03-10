// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class UsersController {

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
                rules.alpha(),
                rules.minLength(10),
                rules.maxLength(255)
            ]),
            password: schema.string({}, [
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
}