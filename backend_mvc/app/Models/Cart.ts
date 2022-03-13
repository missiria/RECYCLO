import { User } from 'App/Models/User';
import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })

  public id: number
  public user_id: number

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

  @hasMany(() => User, {
    foreignKey: 'id', // defaults to userId
  })
  public users: HasMany<typeof User>


}
