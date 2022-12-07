import Notification from 'App/Models/Notification'

export async function createNotification(
  params: Pick<Notification, 'note' | 'type' | 'user_id' | 'status'>
) {
  const notification = await Notification.create(params)
  return notification
}

export function currencyFormat(n: number) {
  const formatter = new Intl.NumberFormat(undefined, {
    currency: 'MAD',
    style: 'currency',
  })

  if (isNaN(n)) {
    return formatter.format(0)
  }
  return formatter.format(n)
}
