/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Toggle} from './Toggle'
import {KTSVG} from '../../../helpers'

export function ExploreMain() {
  return (
    <>
      <Toggle />
      {/* begin::Exolore drawer */}
      <div
        id='kt_explore'
        className='bg-body'
        data-kt-drawer='true'
        data-kt-drawer-name='explore'
        data-kt-drawer-activate='true'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
        data-kt-drawer-direction='end'
        data-kt-drawer-toggle='#kt_explore_toggle'
        data-kt-drawer-close='#kt_explore_close'
      >
        {/* begin::Card  */}
        <div className='card shadow-none w-100'>
          {/* begin::Header */}
          <div className='card-header' id='kt_explore_header'>
            <h5 className='card-title fw-bold text-gray-600'>Abonnement</h5>
            <div className='card-toolbar'>
              <button
                type='button'
                className='btn btn-sm btn-icon explore-btn-dismiss me-n5'
                id='kt_explore_close'
              >
                <KTSVG path='/media/icons/duotune/arrows/arr061.svg' className='svg-icon-2' />
              </button>
            </div>
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className='card-body' id='kt_explore_body'>
            {/* begin::Content */}
            <div
              id='kt_explore_scroll'
              className='scroll-y me-n5 pe-5'
              data-kt-scroll='true'
              data-kt-scroll-height='auto'
              data-kt-scroll-wrappers='#kt_explore_body'
              data-kt-scroll-dependencies='#kt_explore_header, #kt_explore_footer'
              data-kt-scroll-offset='5px'
            >
              <div className='mb-7'>
                <div className='d-flex flex-stack'>
                  <h3 className='mb-0'>Manager Licenses</h3>
                  <a href='/licenses/standard' className='fw-bold'>
                    Licence FAQs
                  </a>
                </div>
              </div>

              <div className='rounded border border-dashed border-gray-300 py-4 px-6 mb-5'>
                <div className='d-flex flex-stack'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center mb-1'>
                      <div className='fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1'>
                        Starter Pack
                      </div>
                    </div>
                    <div className='fs-7 text-muted'>Modules : CRM, Achats, Ventes</div>
                  </div>
                  <div className='text-nowrap'>
                    <span className='text-dark fs-1 fw-bolder'>4000 </span>
                    <span className='text-muted fs-7 fw-bold'>MAD</span>
                  </div>
                </div>
              </div>

              <div className='rounded border border-dashed border-gray-300 py-4 px-6 mb-5'>
                <div className='d-flex flex-stack'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center mb-1'>
                      <div className='fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1'>Gold Pack</div>
                    </div>
                    <div className='fs-7 text-muted'>Modules : CRM, Achats, Ventes, Stocks</div>
                  </div>
                  <div className='text-nowrap'>
                    <span className='text-dark fs-1 fw-bolder'>8000 </span>
                    <span className='text-muted fs-7 fw-bold'>MAD</span>
                  </div>
                </div>
              </div>

              <div className='rounded border border-dashed border-gray-300 py-4 px-6 mb-5'>
                <div className='d-flex flex-stack'>
                  <div className='d-flex flex-column'>
                    <div className='d-flex align-items-center mb-1'>
                      <div className='fs-6 fw-bold text-gray-800 fw-bold mb-0 me-1'>
                        Module sur mésure ?
                      </div>
                    </div>
                    <div className='fs-7 text-muted'>Pour les modules sur mésure.</div>
                  </div>

                  <div className='text-nowrap'>
                    <a href='/contact' className='btn btn-sm btn-success'>
                      Nous contacter
                    </a>
                  </div>
                </div>
              </div>

              <a href={process.env.REACT_APP_PURCHASE_URL} className='btn btn-primary mb-15 w-100'>
                J'en profite
              </a>
            </div>
            {/* end::Content */}
          </div>
          {/* end::Body */}
        </div>
        {/* begin::Card */}
      </div>
      {/* end::Exolore drawer */}
    </>
  )
}
