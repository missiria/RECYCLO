import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @column()
  public number_card: number

  @column()
  public expiry_year: DateTime

  @column()
  public expiry_month: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
