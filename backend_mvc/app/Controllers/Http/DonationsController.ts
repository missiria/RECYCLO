import Donation from 'App/Models/Donation';
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DonationsController {

    public async index({ response }) {
        const users = await Donation.all()
        return response.ok(users)
    }

    public async show({ params, response }) {
        const { id }: { id: Number } = params

        const donation: any = await Donation.find(id)

        if (!donation) {
            return response.notFound({ message: 'Donation none trouvé' })
        }

        return response.ok(donation)
    }

}
