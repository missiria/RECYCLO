// Order Model
export interface OrderModel {
  order_id: number
  account: string
  reference: string
  invoice_address?: string
  received_date: string
  contact: string
  subject: string
  products?: any[]

  //Payment
  payment_type?: string
  bank_account?: string
  conditions?: string
  note?: string
}

export const initValues: OrderModel = {
  order_id: 1,
  account: 'AKHIYAT DRIVER CARS',
  reference: 'C-15485748',
  invoice_address: 'Riad salam N° 152',
  received_date: '31/10/2021',
  contact: 'Aissam AKHIYAT',
  subject: "Création d'une App du management",
  products: [
    {id: 1, value: 'ERP'},
    {id: 2, value: 'CRM'},
  ],
  payment_type: 'Virement',
  bank_account: '2445 0001 4598 4560',
  conditions: 'Verifier SVP avant de mettre la prod',
  note: 'Mon premiére commande !',
}
