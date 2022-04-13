import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Messages extends BaseSchema {
  protected tableName = 'messages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table
        .integer('sender_user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE') // delete post when user is deleted

      table
        .integer('received_user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE') // delete post when user is deleted

      table.text('message', 'long')

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
