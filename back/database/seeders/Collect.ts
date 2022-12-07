// import Drive from '@ioc:Adonis/Core/Drive';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Collect from 'App/Models/Collect'

export default class CollectSeeder extends BaseSeeder {
  public async run() {
    await Collect.createMany([
      {
        collect_name: 'Plastique',
        // image: await Drive.getUrl('collects/ci_1.png'),
        image: 'collects/ci_1.png',
        point: 50,
        description: 'lorem ipsum',
      },
      {
        collect_name: 'Carton-Papier',
        // image: await Drive.getUrl('collects/ci_2.png'),
        image: 'collects/ci_2.png',
        point: 100,
        description: 'lorem ipsum',
      },
      {
        collect_name: 'Metal',
        // image: await Drive.getUrl('collects/ci_3.png'),
        image: 'collects/ci_3.png',
        point: 20,
        description: 'lorem ipsum',
      },
      {
        collect_name: 'Huile Végétale',
        // image: await Drive.getUrl('collects/ci_4.png'),
        image: 'collects/ci_4.png',
        point: 200,
        description: 'lorem ipsum',
      },
    ])
  }
}
