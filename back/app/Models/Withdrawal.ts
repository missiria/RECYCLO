import { DateTime } from 'luxon'
import User from 'App/Models/User'
import { BaseModel, BelongsTo, belongsTo, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Bank from 'App/Models/Bank'

export default class Withdrawal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public account_id: number

  @column()
  public user_id: number

  @column()
  public bank_id: number

  @column()
  public withdrawal_code: number

  @belongsTo(() => Bank, {
    foreignKey: 'bank_id',
  })
  public bank: BelongsTo<typeof Bank>

  @column()
  public amount: number

  @column()
  public status: string

  @column()
  public expires_in: Date | string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User)
  public users: HasMany<typeof User>
}
