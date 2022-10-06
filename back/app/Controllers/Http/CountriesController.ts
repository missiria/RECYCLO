// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Country from "App/Models/Country"

export default class CountriesController {
  public async index({ response }) {
    const countries = await Country.all()

    return response.ok(countries)
  }
}
