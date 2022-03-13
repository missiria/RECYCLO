export interface IEditContact {
  avatar: string
  first_name: string
  last_name: string
  role: string
  enterprise: string
  phone: string
  email: string
}

export interface IDeactivateContact {
  confirm: boolean
}

export const EditContactInitValues: IEditContact = {
  avatar: 'https://picsum.photos/125/125?grayscale',
  first_name: 'Aissam',
  last_name: 'AKHIYAT',
  role: 'CEO',
  enterprise: 'AKHIYAT DRIVER CARS',
  phone: '0 656 560 552',
  email: 'contact@akhiyat-driver-cars.com',
}

export const deactivateContact: IDeactivateContact = {
  confirm: false,
}
