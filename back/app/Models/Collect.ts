import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
export default class Collect extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public collect_name: string

  @column()
  public image: string

  @column()
  public point: number

  @column()
  public description: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
