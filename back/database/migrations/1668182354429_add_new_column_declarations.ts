import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Declarations extends BaseSchema {
  protected tableName = 'declarations'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      // table.float('price')
      // table.string('date')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
    })
  }
}
