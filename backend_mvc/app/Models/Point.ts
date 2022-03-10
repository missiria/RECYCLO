import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Point extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @column()
  public declaration_id: number

  @column()
  public point: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
