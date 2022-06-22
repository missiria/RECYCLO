import { extname } from 'path'
import Route from '@ioc:Adonis/Core/Route'
import Drive from '@ioc:Adonis/Core/Drive';
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


Route.get('/', async ({auth, request}) => {
  await auth.use('web').check();
  if ( auth.use('web').isAuthenticated ) {
    return request.cookie('user', [])
  } else {
    // const url = await Drive.getUrl('collects/ci_1.png')
    // return url;
    return { hello: "HackerZ !!!" }
  }
})

// Route.get('/uploads/*', async ({ request, response }) => {
//   const location = request.param('*').join('/')

//   const { size } = await Drive.getStats(location)

//   response.type(extname(location))
//   response.header('content-length', size)

//   return response.stream(await Drive.getStream(location))
// })

// Users, Accounts, Donations, Recharges
Route.group(() => {

  Route.resource('users', 'UsersController').apiOnly()
  //Route.resource('accounts', 'AccountsController').apiOnly()

  Route.get('accounts', 'AccountsController.index')
  Route.post('accounts', 'AccountsController.store')
  Route.put('accounts', 'AccountsController.update')
  Route.delete('accounts', 'AccountsController.destroy')

  Route.resource('donations', 'DonationsController').apiOnly()
  Route.resource('declarations', 'DeclarationsController').apiOnly()
  Route.resource('recharges', 'RechargesController').apiOnly()
  Route.resource('collects', 'CollectsController').apiOnly()




  Route.post('/users/login', 'UsersController.login').as('users.login')
  Route.post('/users/logout', 'UsersController.logout').as('users.logout')
  Route.post('/users/auth', 'UsersController.auth').as('users.auth')

}).prefix('/api/v1')
