import Route from '@ioc:Adonis/Core/Route'
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

  Route.get('accounts', 'AccountsController.index')
  Route.post('accounts', 'AccountsController.store')
  Route.put('accounts', 'AccountsController.update')
  Route.delete('accounts', 'AccountsController.destroy')

}).prefix('/api/v1').middleware('api_auth')


// Users, Donations, declarations,Recharges,collects
Route.group(() => {

  Route.resource('users', 'UsersController').apiOnly()

  Route.resource('donations', 'DonationsController').apiOnly()
  Route.resource('declarations', 'DeclarationsController').apiOnly()
  Route.resource('recharges', 'RechargesController').apiOnly()
  Route.resource('collects', 'CollectsController').apiOnly()

}).prefix('/api/v1')

// auth
Route.group(() => {

  Route.post('/users/login', 'UsersController.login').as('users.login')
  Route.post('/users/logout', 'UsersController.logout').as('users.logout')
  Route.post('/users/auth', 'UsersController.auth').as('users.auth')

}).prefix('/api/v1')

Route.get('*', async ({response}) => {
  return response.badRequest({error:400,message:'Bad Request'});
})
