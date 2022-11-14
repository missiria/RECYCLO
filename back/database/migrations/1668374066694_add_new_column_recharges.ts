import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Recharges extends BaseSchema {
  protected tableName = 'recharges'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('phone')
    })
  }

  public async down () {
    this.schema.alterTable(this.tableName, (table) => {
      table.dropColumn('phone')
    })
  }
}
