import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Donation from 'App/Models/Donation'

export default class DonationSeeder extends BaseSeeder {
  public async run () {
    await Donation.createMany([
      {
        email: "missiria@gmail.com",
        full_name: 'Younes MISSIRIA',
        bank: 'BMCI',
        amount: 2500,
        rib: 4441455645565412
      },
      {
        email: "amin@gmail.com",
        full_name: 'Amine AMAZZAL',
        bank: 'BMCE',
        amount: 3200,
        rib: 25441455645565411
      },
      {
        email: "youssef@gmail.com",
        full_name: 'Youssef SAAIOU',
        bank: 'ATTIJARI',
        amount: 4500,
        rib: 25441455645565411
      },
      {
        email: "salem@gmail.com",
        full_name: 'Salem ELHOCEIMI',
        bank: 'BANK OF AMERICA',
        amount: 6100,
        rib: 45451110645555229
      }
    ])
  }
}