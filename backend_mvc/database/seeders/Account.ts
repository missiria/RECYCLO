import Account from 'App/Models/Account';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class AccountSeeder extends BaseSeeder {
  public async run () {
    await Account.createMany([
      {
        gender: 'MALE',
        type: 'COLLECTOR',
        address: "lorem ipsum",
        city: 'Lviv',
        country: 'Ukraine',
        nationality: 'Ukrainian',
        society_id: 'S638250',
        zip_code: 20000
      },
      {
        gender: 'MALE',
        type: 'COLLECTOR',
        address: "lorem ipsum",
        city: 'Lviv',
        country: 'Ukraine',
        nationality: 'Ukrainian',
        society_id: 'S638250',
        zip_code: 20000
      }
    ])
  }
}
