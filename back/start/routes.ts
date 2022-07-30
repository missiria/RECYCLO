import Route from '@ioc:Adonis/Core/Route'
import Application from '@ioc:Adonis/Core/Application'
/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
// Accounts
Route.group(() => {
  //Route.post('accounts', 'AccountsController.store')

  Route.get('account', 'AccountsController.show')
  Route.put('accounts', 'AccountsController.update')

  // TODO : upload_verfication => rename to => upload_verification
  Route.post('account/upload_verfication', 'AccountsController.upload_verfication')

  Route.delete('accounts', 'AccountsController.destroy')

  Route.post('orders', 'OrdersController.index')
  Route.post('orders/:id/accept', 'OrdersController.accept')

  Route.post('declarations', 'DeclarationsController.index')
  Route.post('declarations/add', 'DeclarationsController.save')
})
  .prefix('/api/v1')
  .middleware('api_auth')

// Users, Donations, declarations,Recharges,collects
Route.group(() => {
  Route.resource('cities', 'CitiesController').apiOnly()
  Route.post('users', 'UsersController.store')
  Route.get('collects', 'CollectsController.index')
  Route.get('declarations', 'DeclarationsController.list')

  //Route.resource('users', 'UsersController').apiOnly()

  Route.resource('donations', 'DonationsController').apiOnly()
  //Route.resource('declarations', 'DeclarationsController').apiOnly()
  Route.resource('recharges', 'RechargesController').apiOnly()
  //Route.resource('collects', 'CollectsController').apiOnly()

  Route.get('/verify/:email', async ({ request }) => {
    if (request.hasValidSignature()) {
      return 'Votre compte est verifié par email!'
    }
    return 'Signature is missing or URL was tampered.'
  }).as('verifyEmail')

}).prefix('/api/v1')

// auth
Route.group(() => {
  Route.post('/users/login', 'UsersController.login').as('users.login')
  Route.post('/users/logout', 'UsersController.logout').as('users.logout')
  Route.post('/users/auth', 'UsersController.auth').as('users.auth')
}).prefix('/api/v1')

Route.get('/files/:folder/:image', async ({ response, params }) => {
  return response.download(Application.makePath(`uploads/${params.folder}/${params.image}`))
})

Route.get('/files/:type/:folder/:image', async ({ response, params }) => {
  return response.download(
    Application.makePath(`uploads/${params.type}/${params.folder}/${params.image}`)
  )
})

Route.get('*', async ({ response }) => {
  return response.accepted({ error: 400, message: 'Bad Request' })
  //return response.badRequest({error:400,message:'Bad Request'});
})
