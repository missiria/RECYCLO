import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Recharge from 'App/Models/Recharge'

export default class RechargeSeeder extends BaseSeeder {
  public async run() {
    await Recharge.createMany([
      {
        user_id: 1,
        type: 'BALANCE',
        operator: 'ORANGE',
        status: 'PENDING',
        amount: 300
      },
      {
        user_id: 2,
        type: 'INTERNET',
        operator: 'ORANGE',
        status: 'PENDING',
        amount: 25
      },
      {
        user_id: 1,
        type: 'MINUTES',
        operator: 'ORANGE',
        status: 'PENDING',
        amount: 20
      },
      {
        user_id: 1,
        type: 'INTERNET',
        operator: 'ORANGE',
        status: 'CHARGED',
        amount: 100
      },
    ])
  }
}
