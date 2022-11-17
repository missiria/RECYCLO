import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Bank from 'App/Models/Bank'

export default class BankSeeder extends BaseSeeder {
  public async run() {
    await Bank.createMany([
      {
        bank_name: 'Société géneral',
        phone_number: '0615478596',
      },
      {
        bank_name: 'Bank of Africa',
        phone_number: '0616740147',
      },
      {
        bank_name: 'BMCI',
        phone_number: '0614523096',
      },
      {
        bank_name: 'Attijari Wafabank',
        phone_number: '0652369685',
      },
    ])
  }
}
