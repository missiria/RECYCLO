import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Withdrawals extends BaseSchema {
  protected tableName = 'withdrawals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('account_id', 255)
      table.float('amount', 255)
      table.enum('status', ['PENDING', 'VALID', 'PAID', 'CANCELED'])

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
