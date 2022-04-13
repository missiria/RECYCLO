import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Recharges extends BaseSchema {
  protected tableName = 'recharges'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id')
      table.enum('operator', ['ORANGE', 'IAM', 'INWI'])
      table.enum('type', ['INTERNET', 'MINUTES', 'BALANCE'])
      table.enum('status', ['PENDING', 'CHARGED'])
      table.integer('amount')

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
