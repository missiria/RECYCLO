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

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({auth}) => {
  await auth.use('web').check();
  if ( auth.use('web').isAuthenticated ) {
    return { hello: 'Connected !' }
  } else {
    return { hello: "HackerZ !!!" }
  }
})

// Users, Accounts, Donations, Recharges
Route.group(() => {

  Route.resource('users', 'UsersController').apiOnly()
  Route.resource('accounts', 'AccountsController').apiOnly()
  Route.resource('donations', 'DonationsController').apiOnly()
  Route.resource('declarations', 'DeclarationsController').apiOnly()
  Route.resource('recharges', 'RechargesController').apiOnly()

  Route.post('/users/login', 'UsersController.login').as('users.login')
  Route.post('/users/logout', 'UsersController.logout').as('users.logout')
}).prefix('/api/v1')