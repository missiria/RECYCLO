import { schema, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AccountFormValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    gender: schema.enum.optional(['FEMALE', 'MALE']),
    avatar: schema.string.optional({}, [rules.minLength(4)]),
    address: schema.string.optional({}, [rules.minLength(4)]),
    city: schema.string.optional({}, [rules.minLength(4)]),
    country: schema.string.optional({}, [rules.minLength(4)]),
    nationality: schema.string.optional({}, [rules.minLength(4)]),
    society_id: schema.string.optional(),
    type: schema.enum.optional(['MENAGE', 'COLLECTOR']),
    zip_code: schema.number.optional(),
    // * New Fields
    city_id: schema.number.optional(),
    cin: schema.string.optional(),
    birth_date: schema.date.optional({ format: 'yyyy-MM-dd' }),
    first_name: schema.string.optional({}, [rules.minLength(10)]),
    last_name: schema.string.optional({}, [rules.minLength(10)]),
    phone: schema.string.optional({}, [rules.minLength(10)]),
    email: schema.string.optional({}, [rules.minLength(10)]),

    // * merge these values to birth_date
    birth_day: schema.string.optional(),
    birth_month: schema.string.optional(),
    birth_year: schema.string.optional(),
  })
  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
