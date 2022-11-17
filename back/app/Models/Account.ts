import { DateTime } from 'luxon'
import User from 'App/Models/User'
import City from 'App/Models/City'
import { column, hasOne, HasOne, belongsTo, BelongsTo, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class Account extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number

  @column()
  public gender: string

  @column()
  public type: string

  @column()
  public society_id: string

  @column()
  public avatar: string

  @column()
  public address: string

  // * New Fields -----
  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public cin: string

  @column()
  public phone: string

  @column()
  public email: string

  @column()
  public birth_date: string | Date

  @column()
  public city_id: number
  // * ----------

  @column()
  public country: string

  @column()
  public nationality: string

  @column()
  public type_verification: string

  @column()
  public front_verification_path: string

  @column()
  public back_verification_path: string

  @column()
  public zip_code: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @belongsTo(() => City, { localKey: 'id', foreignKey: 'city_id' })
  public city: BelongsTo<typeof City>
}
