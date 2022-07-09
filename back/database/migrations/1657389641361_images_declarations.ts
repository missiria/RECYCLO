import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ImagesDeclarations extends BaseSchema {
  protected tableName = 'images_declarations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('declaration_id').unsigned().references('declarations.id').onDelete('CASCADE')
      table.string('image', 255)
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
