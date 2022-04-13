import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accounts extends BaseSchema {
  protected tableName = 'accounts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table
        .integer('user_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE') // delete post when user is deleted

      table.unique(['user_id'])

      table.string('first_name', 180)
      table.string('last_name', 180)
      table.string('society_id', 11)
      table.enum('gender', ['FEMALE', 'MALE'])
      table.enum('type', ['COLLECTOR', 'WORKER'])
      table.string('avatar', 255)
      table.string('address', 255)
      table.string('city', 255)
      table.string('country', 255)
      table.string('nationality', 255)
      table.integer('zip_code', 18)

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
