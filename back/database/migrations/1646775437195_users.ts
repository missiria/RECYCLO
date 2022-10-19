import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.string('email', 255).notNullable().unique()
      table.string('phone', 12).unique()
      table.string('password', 180).notNullable()

      table.string('first_name', 255)
      table.string('last_name', 255)
      table.string('code', 255)
      table.string('forget_password_code', 10).defaultTo(null)

      table.integer('user_id', 12)

      table.enum('role', ['ADMIN', 'MODERATOR', 'USER']).defaultTo('USER')

      table.boolean('is_verified').defaultTo(false)
      table.boolean('active').defaultTo(false)

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
