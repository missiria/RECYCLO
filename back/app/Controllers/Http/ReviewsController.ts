import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Review from 'App/Models/Review'
// import { createNotification } from 'App/Helpers';

export default class ReviewsController {
  // * Create Feedback (Review)
  public async createReview({ auth, request, response }: HttpContextContract) {
    const user = auth.use('api').user
    const payload = request.body()

    await Review.create({
      user_id: user!.id,
      active: false,
      ...payload,
    })

    response.ok({ message: 'Thank your for your feedback' })
  }

  // * Get Reviews for a user
  public async getReviewsByUserId({ auth, response }: HttpContextContract) {
    const user = auth.use('api').user

    const reviews = await Review.query().where('user_id', user!.id)

    response.ok(reviews)
  }
}
