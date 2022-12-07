import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Payment from './Payment'

export default class Bank extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  bank_name: string

  @column()
  phone_number: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
