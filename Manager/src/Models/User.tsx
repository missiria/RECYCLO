export interface BaseUser {
  email: string
  phone: string
  first_name: string
  last_name: string
  active: boolean

  rememberMeToken?: boolean
}

export interface User extends BaseUser {
  id: number
}
