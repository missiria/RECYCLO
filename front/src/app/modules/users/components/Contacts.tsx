// Node
import React from 'react'
import {Link} from 'react-router-dom'

// Data
import ACCOUNTS from '../../../../data/accounts.json'

// Metronic
import {KTSVG} from '../../../../_metronic/helpers'

export function Contacts() {
  const CONTACTS = ACCOUNTS.contacts

  // Log (console)
  console.log(CONTACTS)
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='contacts_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Contacts</h3>
          </div>
          <Link to='/contact/settings' className='btn btn-primary align-self-center'>
            Ajouter un contact
          </Link>
        </div>
        <div className='card-body p-9'>
          <div className='row mb-7'>
            {/* begin::Table container */}
            <div className='table-responsive'>
              {/* begin::Table */}
              <table className='table table-hover table-rounded align-middle gs-3 gy-2'>
                {/* begin::Table head */}
                <thead>
                  <tr className='fw-bolder text-muted bg-light'>
                    <th className='min-w-25px'>#</th>
                    <th className='min-w-150px'>Nom complet</th>
                    <th className='min-w-75px'>Fonction</th>
                    <th className='min-w-75px'>Téléphone</th>
                    <th className='min-w-75px'>Email</th>
                    <th className='min-w-200px text-end rounded-end'>Actions</th>
                  </tr>
                </thead>
                {/* end::Table head */}
                {/* begin::Table body */}
                <tbody>
                  {CONTACTS.map((contact) => (
                    <tr key={contact.contact_id}>
                      <td className='min-w-25px'>{contact.contact_id}</td>
                      <td>
                        <div className='fw-bold'>{contact.fullname}</div>
                      </td>
                      <td>{contact.role}</td>
                      <td>
                        <a href={'tel:' + contact.phone}>{contact.phone}</a>
                      </td>
                      <td>
                        <a href={'email:' + contact.email}>{contact.email}</a>
                      </td>
                      <td className='text-end'>
                        <a
                          href={'email:' + contact.email}
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTSVG
                            path='/media/icons/duotune/communication/com002.svg'
                            className='svg-icon-1'
                          />
                        </a>
                        <a
                          href='/'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                        >
                          <KTSVG
                            path='/media/icons/duotune/art/art005.svg'
                            className='svg-icon-3'
                          />
                        </a>
                        <a
                          href='/'
                          className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
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
          </div>
        </div>
      </div>
    </>
  )
}
