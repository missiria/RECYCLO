import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Messages extends BaseSchema {
  protected tableName = 'messages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.text('message', 'long')
      table.integer('sender_account_id', 255)
      table.integer('received_account_id', 255)

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
