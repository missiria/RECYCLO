import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Donations extends BaseSchema {
  protected tableName = 'donations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      // table
      //   .integer('account_id')
      //   .unsigned()
      //   .references('accounts.id')
      //   .onDelete('CASCADE')
      table.string('full_name', 255)
      table.string('bank', 255)
      table.string('rib', 24)
      table.float('amount', 255)

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
