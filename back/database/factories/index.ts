// import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import Factory from '@ioc:Adonis/Lucid/Factory'

export const UserFactory = Factory
  .define(User, ({ faker }) => {
    return {
      phone: faker.phone.phoneFormats(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      first_name: faker.name.findName(),
      last_name: faker.name.lastName(),
      active: faker.datatype.boolean(),
      remember_me_token: faker.datatype.boolean()
    }
  })
  .build()
