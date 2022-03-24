import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'missiria@gmail.com',
        phone: '0656560552',
        password: 'c++',
        role: 'ADMIN',
        active: true
      },
      {
        email: 'amine@gmail.com',
        phone: '0691987003',
        password: 'p@ssword',
        role: 'ADMIN',
        active: true
      },
      {
        email: 'youssef@gmail.com',
        phone: '066262626262',
        password: 'p@ssword',
        role: 'ADMIN',
        active: false
      },
      {
        email: 'salem@gmail.com',
        phone: '066161616161',
        password: '321321321',
        role: 'MODERATOR',
        active: true
      },
      {
        email: 'hassan@gmail.com',
        phone: '066161616161',
        password: '321321321',
        role: 'USER',
        active: true
      }
    ])
  }
}
