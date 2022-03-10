import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Declaration extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public collect_id: number

  @column()
  public account_id: number

  @column()
  public quantity: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
