import { DateTime } from 'luxon'
import User from 'App/Models/User';
import Declaration from 'App/Models/Declaration';

import { BaseModel, column, hasOne,HasOne } from '@ioc:Adonis/Lucid/Orm'
export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public declaration_id: number

  @column()
  public user_id: number

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Declaration,{
    localKey: 'declaration_id',
    foreignKey: 'id',
  })
  public declaration: HasOne<typeof Declaration>

  @hasOne(() => User,{
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: HasOne<typeof User>

}
