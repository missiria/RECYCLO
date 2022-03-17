// Node
import React from 'react'
import {Link} from 'react-router-dom'

// Manager
import { EDGE_SVG } from '../../Manager/Media'

// Data
import { Spinner } from '../../Manager/Spinner'
import useAxios from '../../Manager/services/api.service'

export function Recharge() {
  let validClasses = 'btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1 ';
  const { data: recharges, loading } = useAxios({
    method: "GET",
    url: `/recharges`,
    headers: {
      accept: '*/*'
    }
  });

  console.log('recharges > ', recharges);

  return (
    <div className='card mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header d-flex justify-content-between border-0 pt-5'>
        <h3 className='card-title'>
          <span className='card-label fw-bolder fs-3 mb-1'>Recharges</span>
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
                  <th className='min-w-150px'>Utilisateur</th>
                  <th className='min-w-75px'>Operateur</th>
                  <th className='min-w-150px'>Type</th>
                  <th className='min-w-150px'>Status</th>
                  <th className='min-w-75px text-end rounded-end'>Date</th>
                  <th className='min-w-50px text-end rounded-end'>Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                { recharges && Object.values(recharges).map((recharge) => (
                  <tr key={recharge.id}>
                    <td className='min-w-25px'>{recharge.id}</td>
                    <td>
                      <div className='fw-bold'>{recharge.user_id}</div>
                    </td>
                    <td>
                      <div className="fw-bold">
                        {recharge.operator}
                      </div>
                    </td>
                    <td>
                      <span className='badge badge-info'>{recharge.type}</span>
                    </td>
                    <td>
                      <span className={
                        recharge.status === 'CHARGED' ? 'badge badge-success' : 'badge badge-light'
                      }>
                        {recharge.status}
                      </span>
                    </td>
                    <td className='text-end rounded-end'>{recharge.created_at}</td>
                    <td className='text-end rounded-end'>
                      <Link
                        to={ recharge.status === 'CHARGED' ? '#' : `/recharge/validation/${recharge.id}` }
                        className={ recharge.status === 'CHARGED' ? `${ validClasses } disabled` : validClasses }
                      >
                        Valider
                        <EDGE_SVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-1' />
                      </Link>
                    </td>
                  </tr>
                ))}
                { !recharges && (
                  <tr>
                    <td colSpan={9}>
                      <div className="alert">
                        No recharges in db !
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
