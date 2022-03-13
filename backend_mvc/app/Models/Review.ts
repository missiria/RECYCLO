import { DateTime } from 'luxon'
import User from 'App/Models/User'
import { column, hasOne, HasOne, BaseModel } from '@ioc:Adonis/Lucid/Orm'

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

  @hasOne(() => User)
  public user_id: HasOne<typeof User>

}
