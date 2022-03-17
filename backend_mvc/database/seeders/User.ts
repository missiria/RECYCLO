import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'missiria@gmail.com',
        password: 'c++',
        active: true
      },
      {
        email: 'amine@gmail.com',
        password: 'p@ssword',
        active: true
      }
    ])
  }
}
