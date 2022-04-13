// Node
import React, {useLayoutEffect} from 'react'
import {Link, useParams} from 'react-router-dom'

// Metronic
import {KTSVG} from '../../../../_metronic/helpers'

// Manager
import {RowDetail} from '../../../../Manager/RowDetail'
import ORDER from '../../../../data/orders.json'
import SETTINGS from '../../../../data/settings.json'
interface Props {
  id: string
}

const Overview: React.FC<Props> = () => {
  const {name, address, city, zip_code, phone, website} = SETTINGS.company
  // const [order, setOrder] = useState([])
  const order = ORDER.orders[1]
  const {id} = useParams<{id: string}>()

  useLayoutEffect(() => {
    console.log('Component mounted')
    return () => {
      console.log('Component will be unmount')
    }
  }, [])

  function getOrders() {
    console.log('id', id)
    return ORDER.orders[id as any]
  }

  console.log('Rendered')
  console.log('getOrders()', getOrders())

  return (
    <>
      {order && order.order_id ? order.order_id : 'Not loaded yet'}
      <div className='card mb-4'>
        <div className='card-header'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Details</h3>
          </div>
          <Link to='/order/update' className='btn btn-primary align-self-center'>
            Modifier l'order (#-{order.reference})
          </Link>
        </div>
      </div>
      <div className='card mb-4 py-7 mb-xl-10'>
        <div className='card-body px-9 py-0'>
          <div className='row'>
            <div className='col-md-5'>
              <div className='row mb-7'>
                <div className='col'>
                  <div className='fs-4 fw-bold'>{name}</div>
                </div>
              </div>
              <ul className='list-unstyled'>
                <li>Addresse : {address}</li>
                <li>Ville : {city}</li>
                <li>Code postale : {zip_code}</li>
                <li>Téléphone : {phone}</li>
                <li>Site web : {website}</li>
              </ul>
              <div className='account-details pt-7'>
                <RowDetail label='Objet' field={order.subject} />
                <RowDetail label='Compte' field={`${order.account} (${order.contact})`} />
              </div>
            </div>
            <div className='col-md-7'>
              <div className='row mb-7'>
                <div className='col'>
                  <div className='fs-1 fw-bold'>Bon de commande</div>
                </div>
              </div>
              <RowDetail label='Reference' field={order.reference} />
              <RowDetail label='Date' field={order.received_date} />
              <RowDetail label='Addresse de facturation' field={order.invoice_address} />
            </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='card-header'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Produits / Service :</h3>
          </div>
        </div>
        <div className='card-body'>
          <table className='table table-bordered table-hover'>
            <thead>
              <tr>
                <th>Référence</th>
                <th>Désignation</th>
                <th>Quantité</th>
                <th>Prix UT HT</th>
                <th>TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {order.products.map((product) => (
                <tr key={product.id}>
                  <th>
                    <span className='badge bg-primary rounded-pill me-2'>{product.id}</span>
                  </th>
                  <th>{product.value}</th>
                  <th>{product.quantity}</th>
                  <th>{product.price}</th>
                  <th>
                    <div className='fw-bold'>{product.quantity * product.price} MAD</div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Actions */}
      <div className='card mt-5'>
        <div className='card-footer d-flex justify-content-end py-6 px-9'>
          <button type='submit' className='btn btn-light me-2'>
            Bon de réception
            <KTSVG
              path='/media/icons/duotune/general/gen016.svg'
              className='svg-icon svg-icon-primary svg-icon-2hx ms-2'
            />
          </button>
          <button type='submit' className='btn btn-light me-2'>
            Facture
            <KTSVG
              path='/media/icons/duotune/finance/fin006.svg'
              className='svg-icon svg-icon-primary svg-icon-2hx ms-2'
            />
          </button>
          <button type='submit' className='btn btn-secondary me-2'>
            Imprimer
            <KTSVG
              path='/media/icons/duotune/communication/com008.svg'
              className='svg-icon-muted svg-icon-2hx'
            />
          </button>
          <button type='submit' className='btn btn-primary'>
            Exporter
            <KTSVG
              path='/media/icons/duotune/general/gen016.svg'
              className='svg-icon-muted svg-icon-2hx ms-2'
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default Overview
