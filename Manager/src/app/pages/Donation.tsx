// Node
import React from 'react'
import {Link} from 'react-router-dom'

// Manager
import { EDGE_SVG } from '../../Manager/Media'

// Data
import { Spinner } from '../../Manager/Spinner'
import useAxios from '../../Manager/services/api.service'

export function Donation() {

  const { data: donations, loading } = useAxios({
    method: "GET",
    url: `/donations`,
    headers: {
      accept: '*/*'
    }
  });

  console.log('donations > ', donations);

  return (
    <div className='card mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header d-flex justify-content-between border-0 pt-5'>
        <h3 className='card-title'>
          <span className='card-label fw-bolder fs-3 mb-1'>Donations</span>
        </h3>
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
                  <th className='min-w-25px'>#</th>
                  <th className='min-w-150px'>Nom complet</th>
                  <th className='min-w-150px'>Montant</th>
                  <th className='min-w-75px'>Bank</th>
                  <th className='min-w-75px text-end rounded-end'>Date</th>
                  <th className='min-w-50px text-end rounded-end'>Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                { donations && Object.values(donations).map((donation) => (
                  <tr key={donation.id}>
                    <td className='min-w-25px'>{donation.id}</td>
                    <td>
                      <div className='fw-bold'>{donation.full_name}</div>
                    </td>
                    <td>
                      <div className="fw-bold">
                        {donation.amount} MAD
                      </div>
                    </td>
                    <td>
                      <span className='badge badge-info'>{donation.bank}</span>
                    </td>
                    <td className='text-end rounded-end'>{donation.created_at}</td>
                    <td className='text-end rounded-end'>
                      <Link
                        to={`/donation/${donation.id}`}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <EDGE_SVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-1' />
                      </Link>
                    </td>
                  </tr>
                ))}
                { !donations && (
                  <tr>
                    <td colSpan={9}>
                      <div className="alert">
                        No donations in db !
                      </div>
                    </td>
                  </tr>
                ) }
              </tbody>
              {/* end::Table body */}
            </table>
          {/* end::Table */}
          {loading && <Spinner />}
        </div>
        {/* end::Table container */}
        {/* <Pagination /> */}
      </div>
    </div>
  )
}
