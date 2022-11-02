import { DateTime } from 'luxon'
import User from 'App/Models/User';
import Collect from 'App/Models/Collect';
import ImagesDeclaration from 'App/Models/ImagesDeclaration';
import { BaseModel, column, hasOne,HasOne,hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
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

  @column()
  public price: string

  @column()
  public date: string

  @column()
  public time: string

  @column()
  public collector_user_id: number

  @hasMany(() => ImagesDeclaration,{
    foreignKey: 'declaration_id',
  })
  public images: HasMany<typeof ImagesDeclaration>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasOne(() => Collect,{
    localKey: 'collect_id',
    foreignKey: 'id',
  })
  public collect: HasOne<typeof Collect>

  @hasOne(() => User,{
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: HasOne<typeof User>

  @hasOne(() => User,{
    localKey: 'collector_user_id',
    foreignKey: 'id',
  })
  public collector_user: HasOne<typeof User>
}
