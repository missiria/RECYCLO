import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reviews extends BaseSchema {
  protected tableName = 'reviews'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('comment', 'long')
      table.integer('account_id')
      table.integer('category_id')
      //   .unsigned()
      //   .references('accounts.id')
      //   .onDelete('CASCADE')
      // table
      //   .integer('category_id')
      //   .unsigned()
      //   .references('categories.id')
      //   .onDelete('CASCADE')
      // table
      //   .foreign('category_id')
      //   .references('categories.id')

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
