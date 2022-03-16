import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'missiria@gmail.com',
        password: 'c++',
        first_name: 'Younes',
        last_name: 'MISSIRIA',
        active: true
      },
      {
        email: 'amine@gmail.com',
        password: 'p@ssword',
        first_name: 'Amine',
        last_name: 'AMAZZAL',
        active: true
      }
    ])
  }
}
