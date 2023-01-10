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
// Route should be private
Route.group(() => {
  Route.get('users/all', 'UsersController.index')

  Route.get('account', 'AccountsController.show')
  Route.put('accounts/update', 'AccountsController.update')

  // TODO : upload_verfication => rename to => upload_verification
  Route.post('account/upload_verfication', 'AccountsController.upload_verification')

  Route.delete('accounts', 'AccountsController.destroy')

  Route.post('orders', 'OrdersController.index')
  Route.post('orders/:id/accept', 'OrdersController.accept')
  Route.put('orders/:id/update', 'OrdersController.updateOrder')

  Route.post('declarations', 'DeclarationsController.index')
  Route.post('declarations/filtered', 'DeclarationsController.list')
  Route.post('declarations/add', 'DeclarationsController.save')
  Route.put('declarations/update/:id', 'DeclarationsController.update')
  Route.delete('declarations/delete/:id', 'DeclarationsController.remove')

  // * Notification
  Route.get('notifications/all', 'NotificationsController.getAllNotification')
  Route.get('notifications', 'NotificationsController.getUserNotifications')
  Route.get('notifications/length', 'NotificationsController.length')
  Route.post('notifications/create', 'NotificationsController.create')

  // * Wallet
  Route.get('wallet/balance', 'WalletsController.getWalletInfo')

  // * Payment
  Route.post('payment/create', 'PaymentsController.createPayment')
  Route.get('payment/transactions', 'PaymentsController.getPayments')
  Route.resource('recharges', 'RechargesController').apiOnly()

  // * Banks
  Route.get('banks/all', 'BanksController.getAllBanks')

  // * Withdrawals
  Route.get('withdrawals', 'WithdrawalsController.getWithdrawal')

  // Route.get('notifications/all', 'NotificationsController.getAllNotification')

  // * Feedback (Reviews)
  Route.post('feedback/create', 'ReviewsController.createReview')
  Route.get('feedback', 'ReviewsController.getReviewsByUserId')

  // TODO : We should create a public list
  Route.resource('cities', 'CitiesController').apiOnly()
  Route.resource('countries', 'CountriesController').apiOnly()
})
  .prefix('/api/v1')
  .middleware('api_auth')

// This route it's public routes
Route.group(() => {
  Route.post('users', 'UsersController.store')

  // TODO : We should create a public list
  Route.resource('cities', 'CitiesController').apiOnly()
  Route.resource('countries', 'CountriesController').apiOnly()

  // * Forget password
  Route.post('forget_password', 'UsersController.forget_password')

  // * Update password
  Route.post('update_password', 'UsersController.update_password')

  // * Resend verification code
  Route.post('resend_code', 'UsersController.resend_code')

  // * Verify email
  Route.post('verify', 'UsersController.verifyEmail')

  Route.get('collects', 'CollectsController.index')
  Route.get('declarations', 'DeclarationsController.list')

  Route.resource('donations', 'DonationsController').apiOnly()

  // * We don't need this route
  Route.get('/verify/:email', async ({ request }) => {
    if (request.hasValidSignature()) {
      // * here is where we need to update "active" property in the User Model
      return 'Votre compte est verifié par email!'
    }
    return 'Signature is missing or URL was tampered.'
  }).as('verifyEmail')
}).prefix('/api/v1')

// User custom routes
Route.group(() => {
  Route.post('/users/login', 'UsersController.login').as('users.login')
  Route.post('/users/logout', 'UsersController.logout').as('users.logout')
  Route.post('/users/auth', 'UsersController.auth').as('users.auth')
}).prefix('/api/v1')

// Files routes
Route.get('/files/:folder/:image', async ({ response, params }) => {
  return response.download(Application.tmpPath(`uploads/${params.folder}/${params.image}`))
})
Route.get('/files/:type/:folder/:image', async ({ response, params }) => {
  return response.download(
    Application.tmpPath(`uploads/${params.type}/${params.folder}/${params.image}`)
  )
})

// Global route
Route.get('*', async ({ response }) => {
  return response.accepted({ error: 400, message: 'EDGE : Bad Request 400' })
})
