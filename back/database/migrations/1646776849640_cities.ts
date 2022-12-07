import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cities extends BaseSchema {
  protected tableName = 'cities'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255)
      table.boolean('active').defaultTo(true)

      table.integer('country_id').unsigned().references('countries.id').onDelete('CASCADE') // delete post when user is deleted

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
