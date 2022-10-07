import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Country from 'App/Models/Country'

export default class CountrySeeder extends BaseSeeder {
  public async run () {
    await Country.createMany([
      {
        name: 'Morocco',
        description: 'North of Africa',
        active: true
      },
      {
        name: 'Spain',
        description: 'West south of EU',
        active: true
      },
      {
        name: 'USA',
        description: 'Centre of the world! economically',
        active: true
      }
  ])}
}
