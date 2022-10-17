import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'

import Account from 'App/Models/Account'

import { column, hasOne, HasOne, computed, BaseModel, beforeSave } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })

  public id: number

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public phone: number | string

  @column()
  public code: string

  @column()
  public forget_password_code: string

  @column()
  public is_verified: boolean

  @column()
  public role: string

  @column()
  public active: boolean

  @column()
  public rememberMeToken?: string


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @computed()
  public get fullName() {
    return `${this.first_name} ${this.last_name}`
  }

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasOne(() => Account,{
    localKey: 'id',
    foreignKey: 'user_id',
  })
  public account: HasOne<typeof Account>
}
