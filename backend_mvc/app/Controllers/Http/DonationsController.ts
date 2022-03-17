import Donation from 'App/Models/Donation';
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DonationsController {

    public async index({ response }) {
        const users = await Donation.all()
        return response.ok(users)
    }

}
