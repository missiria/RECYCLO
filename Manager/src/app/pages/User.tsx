// Node
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

// Manager
import { Create } from '../modules/users/components/modals/Create'
import { EDGE_SVG } from '../../Manager/Media'
import { UserToolbar } from '../modules/users/components/UserToolbar'

// Data
import { Spinner } from '../../Manager/Spinner'
import {ConfirmationDelete} from '../../Manager/Modals/Delete'
import useAxios from '../../Manager/services/api.service'

export const User = () => {

  const [selectedUser, setUser] = useState({})

  const { data: users, loading } = useAxios({
    method: "GET",
    url: `/users`,
    headers: {
      accept: '*/*'
    }
  });

  console.log('userS > ', users);

  return (
    <div className='card mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header d-flex justify-content-between border-0 pt-5'>
        <h3 className='card-title'>
          <span className='card-label fw-bolder fs-3 mb-1'>Utilisateurs</span>
        </h3>
        <UserToolbar />
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
                  <th className='min-w-250px'>Email</th>
                  <th className='min-w-75px'>Téléphone</th>
                  <th className='min-w-75px'>Role</th>
                  <th className='min-w-75px'>Status</th>
                  <th className='min-w-200px text-end rounded-end'>Actions</th>
                </tr>
              </thead>
              {/* end::Table head */}
              {/* begin::Table body */}
              <tbody>
                <tr>
                  <td colSpan={8}></td>
                </tr>
                { users && Object.values(users).map((user) => (
                  <tr key={user.id}>
                    <td className='min-w-25px'>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      <span className='badge badge-primary'>{user.role}</span>
                    </td>
                    <td>
                      <div className='fs-7 fw-bold'>
                        <span
                          className={
                            user.active === 1 ? 'badge badge-primary' : 'badge badge-danger'
                          }
                        >
                          {user.active === 1 ? 'Actif' : 'Unactif'}
                        </span>
                      </div>
                    </td>
                    <td className='text-end'>
                      <Link
                        to='/user/overview'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <EDGE_SVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-1' />
                      </Link>
                      <a
                        href='/user/settings'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <EDGE_SVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                      </a>
                      <a
                        href='/'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                        data-bs-toggle='modal'
                        data-bs-target='#modal_delete_confirmation'
                        onClick={() => {
                          setUser({
                            name: user.email,
                            id: user.id,
                          })
                        }}
                      >
                        <EDGE_SVG
                          path='/media/icons/duotune/general/gen027.svg'
                          className='svg-icon-3'
                        />
                      </a>
                    </td>
                  </tr>
                ))}
                { !users && (
                  <tr>
                    <td colSpan={9}>
                      <div className="alert">
                        No users in db !
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
      {/* begin::Body */}
      <Create />
      <ConfirmationDelete props={selectedUser} />
      {/* end:: Modals */}
    </div>
  )
}
