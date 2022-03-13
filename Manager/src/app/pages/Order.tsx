// Node
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

// Manager
import {Pagination} from '../../Manager/Pagination'
import {Create} from '../modules/orders/components/modals/Create'

// Metronic
import {KTSVG} from '../../_metronic/helpers'

// Data
import ORDERS from '../../data/orders.json'
import {ConfirmationDelete} from '../../Manager/Modals/Delete'
import {OrderToolbar} from '../modules/orders/components/OrderToolbar'

export function Order() {
  const [selectedOrder, setOrder] = useState({})
  const [selectedCurrentPage, setCurrentPage] = useState(1)

  const onPageChange = (page: number) => setCurrentPage(page)

  return (
    <div className='card mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header d-flex justify-content-between border-0 pt-5'>
        <h3 className='card-title'>
          <span className='card-label fw-bolder fs-3 mb-1'>Bons de commande</span>
        </h3>
        <OrderToolbar />
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-hover table-rounded align-middle gs-2 gy-2'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-light'>
                <th className='min-w-25px'>Référence</th>
                <th className='min-w-150px'>Compte</th>
                <th className='min-w-75px'>Objet</th>
                <th className='min-w-75px'>Date d’émission</th>
                <th className='min-w-75px'>Contact</th>
                <th className='min-w-75px'>Status</th>
                <th className='min-w-200px text-end rounded-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {ORDERS.orders.map((order) => (
                <tr key={order.order_id}>
                  <td className='min-w-25px'>{order.reference}</td>
                  <td>
                    <div className='fw-bold'>{order.account}</div>
                  </td>
                  <td>{order.subject}</td>
                  <td>{order.received_date}</td>
                  <td>{order.contact}</td>
                  <td>
                    <div className='fs-7 fw-bold'>
                      <span
                        className={
                          order.state === 'Payé' ? 'badge badge-success' : 'badge badge-warning'
                        }
                      >
                        {order.state}
                      </span>
                    </div>
                  </td>
                  <td className='text-end'>
                    <Link
                      to={`order/add/${order.order_id}`}
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/finance/fin002.svg'
                        className='svg-icon-muted svg-icon-2hx'
                      />{' '}
                    </Link>
                    <Link
                      to={`/order/overview/${order.order_id}`}
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-1' />
                    </Link>
                    <a
                      href='/order/update'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='/'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                      data-bs-toggle='modal'
                      data-bs-target='#modal_delete_confirmation'
                      onClick={() => {
                        setOrder({
                          name: order.reference,
                          id: order.order_id,
                        })
                      }}
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
        <Pagination
          totalItems={ORDERS.orders.length}
          pageSize={5}
          currentPage={selectedCurrentPage}
          onPageChange={onPageChange}
        />
      </div>
      {/* begin::Body */}
      {/* begin:: Modals */}
      <Create />
      <ConfirmationDelete props={selectedOrder} />
      {/* end:: Modals */}
    </div>
  )
}
