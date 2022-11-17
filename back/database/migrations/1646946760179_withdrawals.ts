import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Withdrawals extends BaseSchema {
  protected tableName = 'withdrawals'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE') // delete post when user is deleted
      table.integer('account_id').unsigned().references('accounts.id').onDelete('CASCADE')
      table.integer('bank_id').unsigned().references('banks.id').onDelete('CASCADE')
      table.integer('withdrawal_code', 15)
      table.float('amount', 255)
      table.timestamp('expires_in', {})
      // table
      table.enum('status', ['PENDING', 'VALID', 'PAID', 'CANCELED'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
