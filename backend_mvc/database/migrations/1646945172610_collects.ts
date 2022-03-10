import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Collects extends BaseSchema {
  protected tableName = 'collects'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('collect_category_id', 255)
      table.string('collect_name', 255)
      table.string('image', 255)
      table.float('point', 255)
      table.text('description')

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