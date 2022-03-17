// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Declaration from 'App/Models/Declaration'

export default class DeclarationsController {

    public async index({ response }) {
        const declarations = await Declaration.all()
        return response.ok(declarations)
    }

    public async show({ params, response }) {
        const { id }: { id: Number } = params

        const declaration: any = await Declaration.find(id)

        if (!declaration) {
            return response.notFound({ message: 'Déclaration none trouvé' })
        }

        return response.ok(declaration)
    }

}
