// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Collect from "App/Models/Collect"

export default class CollectsController {
  public async index({ response }) {
    const collects = await Collect.all()
    return response.ok(collects)
  }
}
