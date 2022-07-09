import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import City from 'App/Models/City';

export default class CitySeeder extends BaseSeeder {
  public async run () {
    await City.createMany([
      {
          name: "Agadir",
          active:true,
      },
      {
          name: "Mohammedia",
          active:true,
      },
      {
          name: "Rabat",
          active:true,
      },
      {
          name: "Salé",
          active:true,
      },
      {
          name: "tangier",
          active:true,
      },
      {
          name: "Larache",
          active:true,
      },
      {
          name: "Chefchaouen",
          active:true,
      },
      {
          name: "Oujda",
          active:true,
      },
      {
          name: "Marrakech",
          active:true,
      },
      {
          name: "Inezgane",
          active:true,
      },
      {
          name: "Aït Melloul",
          active:true,
      },
      {
          name: "Dcheira El Jihadia",
          active:true,
      },
      {
          name: "Drargua",
          active:true,
      },
      {
        name: "Casablanca",
        active:true,
      }]
    )
  }
}
