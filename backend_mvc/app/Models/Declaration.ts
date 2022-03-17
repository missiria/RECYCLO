import { DateTime } from 'luxon'
import User from 'App/Models/User';
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
export default class Declaration extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public collect_id: number

  @column()
  public user_id: number

  @column()
  public quantity: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => User)
  public users: HasMany<typeof User>
}
