import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Declaration from 'App/Models/Declaration'

export default class DeclarationSeeder extends BaseSeeder {
  public async run () {
    await Declaration.createMany([
      {
        user_id: 1,
        collect_id: 1,
        quantity: 10,
        status: 'PENDING'
      },
      {
        user_id: 2,
        collect_id: 2,
        quantity: 10,
        status: 'PENDING'
      },
      {
        user_id: 2,
        collect_id: 3,
        quantity: 10,
        status: 'PENDING'
      },
      {
        user_id: 1,
        collect_id: 4,
        quantity: 10,
        status: 'CANCELED'
      }
    ])
  }
}
