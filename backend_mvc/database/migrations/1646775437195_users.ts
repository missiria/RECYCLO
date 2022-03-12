import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      // Reference tables
      // table
      //   .integer('account_id')
      //   .unsigned()
      //   .references('accounts.id')
      //   .onDelete('CASCADE')

      // table.integer('account_id').references('account_id').inTable('accounts')

      table.string('email', 255).notNullable().unique()
      table.string('password', 180).notNullable()

      table.string('first_name', 180)
      table.string('last_name', 180)
      table.integer('phone', 12)
      table.integer('user_id', 12)
      table.boolean('active')
      table.string('remember_me_token').nullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
