import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Declarations extends BaseSchema {
  protected tableName = 'declarations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('collect_id')
      table.integer('user_id')
      // table
      //   .integer('collects_id')
      //   .unsigned()
      //   .references('collects.id')
      //   .onDelete('CASCADE')
      table.float('quantity', 255)
      table.enum('status', ['PENDING', 'VALID', 'CANCELED', 'PAID'])

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
