import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Bank from 'App/Models/Bank'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasOne(() => User, {
    foreignKey: 'id',
  })
  user: HasOne<typeof User>

  @column()
  user_id: number

  @column()
  amount: number

  @column()
  action: 'DONATION' | 'ATM' | 'TRANSFER'

  @column()
  rib: number

  @column()
  full_name: string

  @column()
  bank_id: number

  @belongsTo(() => Bank, {
    foreignKey: 'bank_id',
  })
  public bank: BelongsTo<typeof Bank>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
