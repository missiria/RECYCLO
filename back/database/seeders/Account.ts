import Account from 'App/Models/Account';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class AccountSeeder extends BaseSeeder {
  public async run () {
    await Account.createMany([
      {
        user_id: 5,
        gender: 'MALE',
        type: 'COLLECTOR',
        address: "lorem ipsum",
        city_id: 1,
        country: 'UKRAINE',
        nationality: 'Ukrainian',
        society_id: 'S638250',
        zip_code: 20000
      }
    ])
  }
}
