// Node
import React from 'react'
import {Link} from 'react-router-dom'

// Manager
import { EDGE_SVG } from '../../Manager/Media'

// Data
// import declarations from '../../data/declarations.json'
import { Spinner } from '../../Manager/Spinner'
import useAxios from '../../Manager/services/api.service'

export function Declaration() {

  const { data: declarations, loading } = useAxios({
    method: "GET",
    url: `/declarations`,
    headers: {
      accept: '*/*'
    }
  });

  console.log('declarations > ', declarations);

  return (
    <div className='card mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header d-flex justify-content-between border-0 pt-5'>
        <h3 className='card-title'>
          <span className='card-label fw-bolder fs-3 mb-1'>Déclarations</span>
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
                  <th className='min-w-75px'>Collect</th>
                  <th className='min-w-150px'>Quantity</th>
                  <th className='min-w-150px'>Status</th>
                  <th className='min-w-75px text-end rounded-end'>Date</th>
                  <th className='min-w-50px text-end rounded-end'>Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                { declarations && Object.values(declarations).map((declaration) => (
                  <tr key={declaration.id}>
                    <td className='min-w-25px'>{declaration.id}</td>
                    <td>
                      <div className='fw-bold'>{declaration.user_id}</div>
                    </td>
                    <td>
                      <div className="fw-bold">
                        {declaration.quantity} KG
                      </div>
                    </td>
                    <td>
                      <span className='badge badge-info'>{declaration.collect_id}</span>
                    </td>
                    <td>
                      <span className='badge badge-primary'>{declaration.status}</span>
                    </td>
                    <td className='text-end rounded-end'>{declaration.created_at}</td>
                    <td className='text-end rounded-end'>
                      <Link
                        to={`/declaration/validation/${declaration.id}`}
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        Valider
                        <EDGE_SVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-1' />
                      </Link>
                    </td>
                  </tr>
                ))}
                { !declarations && (
                  <tr>
                    <td colSpan={9}>
                      <div className="alert">
                        No declarations in db !
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
