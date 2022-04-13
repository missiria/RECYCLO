// Node
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

// Manager
import {Pagination} from '../../Manager/Pagination'
import {Create} from '../modules/accounts/components/modals/Create'

// Metronic
import { EDGE_SVG } from '../../Manager/Media'
import {AccountToolbar} from '../modules/accounts/components/AccountToolbar'

// Data
// import ACCOUNTS from '../../data/accounts.json'
import { Spinner } from '../../Manager/Spinner'
import {ConfirmationDelete} from '../../Manager/Modals/Delete'
import useAxios from '../../Manager/services/api.service'

export function Account() {

  const [selectedAccount, setAccount] = useState({})
  const [selectedCurrentPage, setCurrentPage] = useState(1)

  const { data: accounts, loading } = useAxios({
    method: "GET",
    url: `/accounts`,
    headers: {
      accept: '*/*'
    }
  });

  const onPageChange = (page: number) => setCurrentPage(page)

  console.log('ACCOUNTS > ', accounts);

  return (
    <div className='card mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header d-flex justify-content-between border-0 pt-5'>
        <h3 className='card-title'>
          <span className='card-label fw-bolder fs-3 mb-1'>Comptes</span>
        </h3>
        <AccountToolbar />
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
                  <th className='min-w-150px'>Fullname</th>
                  <th className='min-w-150px'>ID National</th>
                  <th className='min-w-75px'>Type</th>
                  <th className='min-w-75px'>Téléphone</th>
                  <th className='min-w-75px'>Ville</th>
                  <th className='min-w-75px'>Pays</th>
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
                { accounts && Object.values(accounts).map((account) => (
                  <tr key={account.id}>
                    <td className='min-w-25px'>{account.id}</td>
                    <td>
                      <div className='fw-bold'>
                      {account.gender} - {account.first_name} {account.last_name}
                      </div>
                    </td>
                    <td>{account.society_id}</td>
                    <td>
                      <span className='badge badge-info'>{account.type}</span>
                    </td>
                    <td>{account.phone}</td>
                    <td>{account.city}</td>
                    <td>{account.country}</td>
                    <td>
                      <div className='fs-7 fw-bold'>
                        <span
                          className={
                            account.state === 'Actif' ? 'badge badge-success' : 'badge badge-warning'
                          }
                        >
                          {account.state}
                        </span>
                      </div>
                    </td>
                    <td className='text-end'>
                      <Link
                        to='/account/overview'
                        className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                      >
                        <EDGE_SVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-1' />
                      </Link>
                      <a
                        href='/account/settings'
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
                          setAccount({
                            name: account.society_id,
                            id: account.id,
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
                { !accounts && (
                  <tr>
                    <td colSpan={9}>
                      <div className="alert">
                        No accounts in db !
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
      <Pagination
        totalItems={Object.keys([1, 2]).length}
        pageSize={2}
        currentPage={selectedCurrentPage}
        onPageChange={onPageChange}
      />
      <Create />
      <ConfirmationDelete props={selectedAccount} />
      {/* end:: Modals */}
    </div>
  )
}
