import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ApiAuth {
  public async handle({ auth,response }: HttpContextContract, next: () => Promise<void>) {
    await auth.use('api').check()

    if (!auth.use('api').isAuthenticated) {
      response.status(401).json({error:401,message:'Must be logged in'})
      //response.unauthorized({error:401,message:'Must be logged in'})
      return
    }
    await next()
  }
}
