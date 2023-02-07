/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../../helpers'

type Props = {
  className: string
}

const TablesWidget5: React.FC<Props> = ({className}) => {
  const ORDERS = [
    {
      order_id: 1,
      enterprise: 'ProFit',
      type: 'Fournisseur',
      category: 'Premium',
      amount: '1500.00',
      state: 'Actif',
    },
    {
      order_id: 2,
      enterprise: 'Akhiyat',
      type: 'ProFit',
      category: 'Premium',
      amount: '1500.00',
      state: 'Actif',
    },
    {
      order_id: 3,
      enterprise: 'EDGENOVA',
      type: 'ProFit',
      category: 'Premium',
      amount: '1500.00',
      state: 'Actif',
    },
    {
      order_id: 4,
      enterprise: 'RECAPA',
      type: 'Fournisseur',
      category: 'Premium',
      amount: '1500.00',
      state: 'Unactif',
    },
    {
      order_id: 5,
      enterprise: 'TECHNICAL SOLUTIONS',
      type: 'Client',
      category: 'Offshoring',
      amount: '1500.00',
      state: 'Actif',
    },
  ]
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Dernières commandes</span>
          <span className='text-muted mt-1 fw-bold fs-7'>Plus de 400 nouvelles commandes</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        <div className='tab-content'>
          {/* begin::Tap pane */}
          <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                {/* begin::Table head */}
                <thead>
                  <tr className='border-0'>
                    <th className='p-0 w-50px'></th>
                    <th className='p-0 min-w-150px'></th>
                    <th className='p-0 min-w-140px'></th>
                    <th className='p-0 min-w-110px'></th>
                    <th className='p-0 min-w-50px'></th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {ORDERS.map((order) => (
                    <tr key={order.order_id}>
                      <td>
                        <div className='symbol symbol-45px me-2'>
                          <span className='symbol-label'>#CM-00{order.order_id}</span>
                        </div>
                      </td>
                      <td>
                        <a href='#' className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                          {order.enterprise}
                        </a>
                        <span className='text-muted fw-bold d-block'>{order.category}</span>
                      </td>
                      <td className='text-end fw-bold'>{order.amount} MAD</td>
                      <td className='text-end'>
                        <span
                          className={
                            order.state === 'Actif' ? 'badge badge-success' : 'badge badge-danger'
                          }
                        >
                          {order.state}
                        </span>
                      </td>
                      <td className='text-end'>
                        <a
                          href='#'
                          className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary'
                        >
                          <KTSVG
                            path='/media/icons/duotune/arrows/arr064.svg'
                            className='svg-icon-2'
                          />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
                {/* end::Table body */}
              </table>
            </div>
            {/* end::Table */}
          </div>
          {/* end::Tap pane */}
        </div>
      </div>
      {/* end::Body */}
    </div>
  )
}

export {TablesWidget5}
