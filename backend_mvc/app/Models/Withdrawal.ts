import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Withdrawal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @column()
  public amount: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
