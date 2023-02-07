import React from 'react'
import {KTSVG} from '../../../../_metronic/helpers'

export function OrderToolbar() {
  return (
    <div className='card-toolbar d-flex align-items-center'>
      <form action='/contacts' className='ms-3'>
        <div className='row g-3 align-items-center'>
          <div className='col-auto'>
            <input
              type='password'
              id='inputPassword6'
              className='form-control'
              placeholder='Recherche'
              aria-describedby='passwordHelpInline'
            />
          </div>
          <div className='col-auto'>
            <a
              href='/'
              className='d-none d-sm-flex align-items-center btn btn-primary dropdown-toggle'
              id='dropdownUser1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <span className='d-none d-sm-inline mx-1'>
                <i className='bi-diagram-3-fill'></i>
              </span>
            </a>
            <ul className='dropdown-menu px-4 col-md-3' role='menu' aria-labelledby='dLabel'>
              <li className='dropdown-submenu'>
                <div className='fs-4 fw-bold'>Filter Options</div>
                <hr />
                <div className='h6'>Mois</div>
                <div className='mb-3'>
                  <select name='months' className='form-control'>
                    <option value='1'>Janvier</option>
                    <option value='1'>Fevrier</option>
                    <option value='1'>Mars</option>
                    <option value='1'>Mai</option>
                    <option value='1'>Avril</option>
                    <option value='1'>Juin</option>
                    <option value='1'>Juil</option>
                    <option value='1'>Aout</option>
                    <option value='1'>Septembre</option>
                    <option value='1'>Octobre</option>
                    <option value='1'>Novemebre</option>
                    <option value='1'>Decembre</option>
                  </select>
                </div>
                <div className='mb-3'>
                  <label className='form-label fs-5 fw-bold mb-3'>Type:</label>
                  <div
                    className='d-flex flex-column flex-wrap fw-bold'
                    data-kt-compte-table-filter='contact_type'
                  >
                    <label
                      htmlFor='all'
                      className='form-check form-check-sm form-check-custom form-check-solid mb-3 me-5'
                    >
                      <input
                        className='form-check-input'
                        type='radio'
                        name='contact_type'
                        value='all'
                        id='all'
                      />
                      <span className='form-check-label text-gray-600'>Tous</span>
                    </label>
                    <label
                      htmlFor='customers'
                      className='form-check form-check-sm form-check-custom form-check-solid mb-3 me-5'
                    >
                      <input
                        className='form-check-input'
                        type='radio'
                        name='contact_type'
                        id='customers'
                        value='1'
                      />
                      <span className='form-check-label text-gray-600'>Client</span>
                    </label>
                    <label
                      htmlFor='suppliers'
                      className='form-check form-check-sm form-check-custom form-check-solid mb-3 me-5'
                    >
                      <input
                        className='form-check-input'
                        type='radio'
                        name='contact_type'
                        id='suppliers'
                        value='2'
                      />
                      <span className='form-check-label text-gray-600'>Fournisseur</span>
                    </label>
                  </div>
                </div>
                <hr />
                <div className='actions d-flex justify-content-end'>
                  <button type='reset' className='btn btn-light btn-active-light-primary me-2'>
                    Réinitialiser
                  </button>
                  <button type='submit' className='btn btn-primary'>
                    Appliquer
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </form>
      <div className='actions ms-2 d-flex align-items-center pe-2'>
        <a
          href='/contacts'
          className='btn btn-sm btn-primary'
          data-bs-toggle='modal'
          data-bs-target='#modal_create_contact'
        >
          <KTSVG path='/media/icons/duotune/arrows/arr075.svg' className='svg-icon-2' />
          Nouveau bon commande
        </a>
      </div>
    </div>
  )
}
