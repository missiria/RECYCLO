// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Collect from "App/Models/Collect"
//import CollectFilterForm from "App/Validators/CollectFilterFormValidator"

export default class CollectsController {

  public async index({ response }) {

    //const collects = await Collect.findBy('active',1)
    const collects = await Collect.all()
    return response.ok(collects)
  }

  /*
  public async store({ request, response }) {
    const payload: any = await request.validate(CollectForm)

    const newCollect: Collect = await Collect.create(payload)

    return response.ok(newCollect)
  }*/
}
