// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Order from 'App/Models/Order'
import Declaration from 'App/Models/Declaration'
import OrderForm from 'App/Validators/OrderFormValidator'

export default class OrdersController {

  public async index({ auth,request,response }) {

    const user = auth.use('api').user;
    const payload: any = await request.validate(OrderForm)

    const orders = await Order.query().preload('declaration',(query)=>{
      query.preload('collect',(query)=>{
        query.select('id','collect_name','image','point','description')
      }).preload('user',(query)=>{
        query.select('id','first_name','last_name','email','phone')
      })
    }).where('status', payload.status).where('user_id', user.id)
    return response.ok(orders)
  }

  public async accept({ auth,params,response }) {

    const { id }: { id: number } = params
    const user = auth.use('api').user;

    const declaration: any = await Declaration.find(id)

    if (!declaration) {
      return response.notFound({ message: 'Déclaration none trouvé' })
    }

    const newOrder: Order = await Order.create({
      declaration_id: id,
      user_id : user.id,
      status : 'PENDING',
    })

    declaration.status = 'PAID'
    declaration.save()

    return response.ok({error:false,message : 'Success',order:newOrder})
  }

}
