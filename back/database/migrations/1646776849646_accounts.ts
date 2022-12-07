import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accounts extends BaseSchema {
  protected tableName = 'accounts'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()

      table.integer('user_id').unsigned().references('users.id').onDelete('CASCADE')

      table.unique(['user_id'])

      table.string('society_id', 11)
      table.enum('gender', ['FEMALE', 'MALE'])
      table.enum('type', ['MENAGE', 'COLLECTOR'])

      // TODO : Edit profile
      table.string('avatar', 255)
      // * New Fields
      table.string('first_name', 10)
      table.string('last_name', 10)
      table.string('email', 20)
      table.string('phone', 10)
      table.string('cin', 10)
      table.dateTime('birth_date', {})

      table.enum('type_verification', ['PERMIT', 'CARTE'])
      table.string('front_verification_path', 255)
      table.string('back_verification_path', 255)

      table.string('address', 255)
      table.integer('city_id').unsigned().references('cities.id').onDelete('CASCADE')

      table.string('country')
      table.string('nationality', 255)
      table.integer('zip_code', 18)

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
