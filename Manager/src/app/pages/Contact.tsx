// Node
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

// Manager
import {Pagination} from '../../Manager/Pagination'
import {Create} from '../modules/contacts/components/modals/Create'

// Metronic
import {KTSVG} from '../../_metronic/helpers'

// Data
import ACCOUNTS from '../../data/accounts.json'
import {ConfirmationDelete} from '../../Manager/Modals/Delete'
import {ContactToolbar} from '../modules/contacts/components/ContactToolbar'

export function Contact() {
  const [selectedContact, setContact] = useState({})
  const [selectedCurrentPage, setCurrentPage] = useState(1)

  const onPageChange = (page: number) => setCurrentPage(page)

  return (
    <div className='card mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header d-flex justify-content-between border-0 pt-5'>
        <h3 className='card-title'>
          <span className='card-label fw-bolder fs-3 mb-1'>Contacts</span>
        </h3>
        <ContactToolbar />
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
                <th className='min-w-150px'>Nom complét</th>
                <th className='min-w-75px'>Rôle</th>
                <th className='min-w-75px'>Téléphone</th>
                <th className='min-w-75px'>Email</th>
                <th className='min-w-75px'>Status</th>
                <th className='min-w-200px text-end rounded-end'>Actions</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {ACCOUNTS.contacts.map((contact) => (
                <tr key={contact.contact_id}>
                  <td className='min-w-25px'>{contact.contact_id}</td>
                  <td>
                    <div className='fw-bold'>{contact.fullname}</div>
                  </td>
                  <td>{contact.role}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                  <td>
                    <div className='fs-7 fw-bold'>
                      <span
                        className={
                          contact.step === 'Active' ? 'badge badge-success' : 'badge badge-warning'
                        }
                      >
                        {contact.step}
                      </span>
                    </div>
                  </td>
                  <td className='text-end'>
                    <Link
                      to='/contact/overview'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/arrows/arr064.svg' className='svg-icon-1' />
                    </Link>
                    <a
                      href='/contact/update'
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
                        setContact({
                          name: contact.fullname,
                          id: contact.contact_id,
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
          totalItems={ACCOUNTS.contacts.length}
          pageSize={2}
          currentPage={selectedCurrentPage}
          onPageChange={onPageChange}
        />
      </div>
      {/* begin::Body */}
      {/* begin:: Modals */}
      <Create />
      <ConfirmationDelete props={selectedContact} />
      {/* end:: Modals */}
    </div>
  )
}
