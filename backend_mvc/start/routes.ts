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
import Database from '@ioc:Adonis/Lucid/Database'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('login', async ({ auth, request }) => {
  const email = request.input('email')
  const password = request.input('password')

  await auth.use('web').attempt(email, password)
})

Route.get('dashboard', async ({ auth }) => {
  await auth.use('web').authenticate()

  // ✅ Request authenticated
  console.log(auth.user!)
})

Route.get('users', async () => {
  return Database.from('users').select('*')
})