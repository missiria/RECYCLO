import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Withdrawal from 'App/Models/Withdrawal'

export default class WithdrawalSeeder extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await Withdrawal.createMany([
      {
        user_id: 6,
        account_id: 4,
        bank_id: 2,
        amount: 900,
        withdrawal_code: 745896254,
        expires_in: new Date(new Date().setDate(new Date().getDate() + 2)),
        status: 'PENDING',
      },
      {
        user_id: 7,
        account_id: 5,
        bank_id: 2,
        amount: 900,
        withdrawal_code: 365214076,
        expires_in: new Date(new Date().setDate(new Date().getDate() + 2)),
        status: 'PAID',
      },
    ])
  }
}
