// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Declaration from 'App/Models/Declaration'
import ImagesDeclaration from 'App/Models/ImagesDeclaration'
import DeclarationForm from 'App/Validators/DeclarationFormValidator'
import DeclarationFilterForm from 'App/Validators/DeclarationFilterFormValidator'

export default class DeclarationsController {

  public async list({ response }) {

    const declarations = await Declaration.query().select('id','collect_id','user_id','quantity','status','date','time','created_at','updated_at').preload('images',(query)=>{
      query.select('id','declaration_id','image')
    })
    .preload('collect',(query)=>{
      query.select('id','collect_name','image','point','description')
    })
    .preload('user',(query)=>{
      query.select('id','first_name','last_name','email','phone').preload('account',(query)=>{
        query.select('id','gender','type','avatar','address','country','city_id').preload('city',(query)=>{
          query.select('id','name')
        })
        //add city
      })
    }).where('status', 'VALID')

    return response.ok(declarations)
  }

  public async index({ auth,request,response }) {

    const user = auth.use('api').user;
    const payload: any = await request.validate(DeclarationFilterForm)

    const declarations = await Declaration.query().preload('images').preload('collect').where('status', payload.status).where('user_id', user.id)

    return response.ok(declarations)
  }

  public async show({ params, response }) {
      const { id }: { id: Number } = params

      const declaration: any = await Declaration.find(id)

      if (!declaration) {
          return response.notFound({ message: 'Déclaration none trouvé' })
      }

      return response.ok(declaration)
  }

  public async save({ auth,request, response }) {

    const user = auth.use('api').user;

    const payload: any = await request.validate(DeclarationForm)

    payload.user_id = user.id
    payload.status = 'PENDING'

    const newDeclaration: Declaration = await Declaration.create(payload)

    const images  = request.files('images')
    for (let image of images) {
      await image.move('uploads/declarations/'+user.id, {
        name: 'd_'+Date.now()+'.'+image.extname,
        overwrite: true,
      })

      await ImagesDeclaration.create({
        declaration_id: newDeclaration.id,
        image: image.filePath.replace(/\\/g, '/').replace('uploads/', ''),
      });
    }

    return response.ok({error:false,message : 'Success'})
  }
}
