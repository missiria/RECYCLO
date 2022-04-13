import Account from 'App/Models/Account';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class AccountSeeder extends BaseSeeder {
  public async run () {
    await Account.createMany([
      {
        user_id: 1,
        first_name: 'Younes',
        last_name: 'DOE',
        gender: 'MALE',
        type: 'COLLECTOR',
        address: "lorem ipsum",
        city: 'Lviv',
        country: 'UKRAINE',
        nationality: 'Ukrainian',
        society_id: 'S638250',
        zip_code: 20000
      },
      {
        user_id: 2,
        first_name: 'Amine',
        last_name: 'DOE',
        gender: 'MALE',
        type: 'COLLECTOR',
        address: "lorem ipsum",
        city: 'Lviv',
        country: 'MAROC',
        nationality: 'MA',
        society_id: 'G638250',
        zip_code: 80000
      }
    ])
  }
}
