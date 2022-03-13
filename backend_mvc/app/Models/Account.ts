import { DateTime } from 'luxon'
import User from 'App/Models/User'
import { column, hasOne, HasOne, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  public user_id: number

  @column()
  public gender: string

  @column()
  public type: string

  @column()
  public avatar: string

  @column()
  public address: string

  @column()
  public city: string

  @column()
  public country: string

  @column()
  public nationality: string

  @column()
  public zip_code: string

  @column()
  public phone: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User)
  public users: HasOne<typeof User>

}
