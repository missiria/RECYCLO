// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import City from "App/Models/City"

export default class CitiesController {
  public async index({ response }) {
    const cities = await City.query().select('id','name').where('active', '=', true)
    return response.ok(cities)
  }

}
