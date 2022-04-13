// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User"
import SamlFormValidator from "App/Validators/SamlFormValidator"

export default class SamlsController {
    public async store({request, response}){
        const payload: any = await request.validate( SamlFormValidator )
        const newUser: User = await User.create( payload )

        response.ok(newUser)
    }
}
