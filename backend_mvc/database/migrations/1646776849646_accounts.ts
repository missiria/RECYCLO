import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accounts extends BaseSchema {
  protected tableName = 'accounts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.integer('society_id', 11)
      table.string('full_name', 255)
      table.tinyint('gender', 11)
      table.tinyint('type', 2)
      table.string('avatar', 255)
      table.string('address', 255)
      table.string('city', 255)
      table.string('country', 255)
      table.string('nationality', 255)
      table.integer('zip_code', 18)
      table.integer('phone', 12)

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
