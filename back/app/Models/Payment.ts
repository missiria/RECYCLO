import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => User, {
    foreignKey: 'id',
  })
  @column()
  user_id: HasOne<typeof User>

  @column()
  amount: number

  @column()
  action: 'DONATION' | 'ATM' | 'TRANSFER'

  @column()
  rib: number

  @column()
  full_name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
