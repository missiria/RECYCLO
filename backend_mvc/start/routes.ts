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

// Route.post('login', async ({ auth, request, response }) => {
//   let { email, password } = request.all()

//   try {
//     if (await auth.use('web').attempt(email, password)) {
//       let user = await User.findBy('email', email)
//       let token = await auth.generate(user)

//       Object.assign(user, token)
//       return response.json(user)
//     }
//   } catch (e) {
//     console.log(e)
//     return response.badRequest({ message: 'You are not registered!' })
//   }
// })

Route.post('login', async ({ auth, request, response }) => {
  const email = request.input('email')
  const password = request.input('password')

  // Lookup user manually
  const user = await User
    .query()
    .where('email', email)
    .where('active', 1)
    .firstOrFail()
  console.log(user);

  // Verify password
  if (!(await Hash.verify(user.password, password))) {
    return response.badRequest('Invalid credentials')
  }

  // Create session
  await auth.use('web').login(user)
})

Route.post('/logout', async ({ auth, response }) => {
  await auth.use('web').revoke()
  return {
    revoked: true,
  }
})

Route.get('users', async () => {
  return Database.from('users').select('*')
})
