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
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')
  console.log('email > ', email);

  try {
    const token = await auth.use('api').attempt(email, password, {
      expiresIn: '7days'
    })
    return token
  } catch {
    return response.badRequest('Invalid credentials')
  }
})

Route.post('create', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  // Lookup user manually
  const user = await User
    .query()
    .where('email', email)
    .where('id', 1)
    .firstOrFail()

  // Verify password
  if (!(await Hash.verify(user.password, password))) {
    return response.badRequest('Invalid credentials')
  }

  // Generate token
  const token = await auth.use('api').generate(user)

  return token;
})

Route.get('dashboard', async ({ auth }) => {
  await auth.use('api').authenticate()

  // ✅ Request authenticated
  console.log(auth.use('api').user!)
})

Route.post('/logout', async ({ auth, response }) => {
  await auth.use('api').revoke()
  return {
    revoked: true
  }
})

Route.get('users', async () => {
  return Database.from('users').select('*')
})