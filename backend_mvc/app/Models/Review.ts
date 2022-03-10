import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Review extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public comment: string

  @column()
  public account_id: number

  @column()
  public category_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
