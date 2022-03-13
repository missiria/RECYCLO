// Node
import React from 'react'
import {Link} from 'react-router-dom'
import {RowDetail} from '../../../../Manager/RowDetail'
import {SymbolAvatar} from '../../../../Manager/SymbolAvatar'

// Metronic
import {KTSVG} from '../../../../_metronic/helpers'

export function Overview() {
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='contact_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Fiche du contact</h3>
          </div>
          <Link to='/contact/update' className='btn btn-primary align-self-center'>
            Modifier le contact
          </Link>
        </div>
        <div className='card-body p-9 pt-0'>
          <div className='row'>
            <div className='col'>
              <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
                <div className='me-7 mb-4'>
                  <SymbolAvatar letter='C' background='primary' />
                </div>
                <div className='flex-grow-1'>
                  <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
                    <div className='d-flex flex-column'>
                      <div className='d-flex align-items-center mb-2'>
                        <a
                          href='/'
                          className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'
                        >
                          Aissam AKHIYAT
                        </a>
                        <a href='/'>
                          <KTSVG
                            path='/media/icons/duotune/general/gen026.svg'
                            className='svg-icon-1 svg-icon-primary'
                          />
                        </a>
                      </div>
                      <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                        <a
                          href='/'
                          className='d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2'
                        >
                          <KTSVG
                            path='/media/icons/duotune/communication/com006.svg'
                            className='svg-icon-4 me-1'
                          />
                          CEO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-7'>
              <div className='row mb-7'>
                <div className='col'>
                  <div className='fs-3 fw-bold'>Details</div>
                </div>
              </div>
              <RowDetail label='Prénom' field='Aissam' />
              <RowDetail label='Nom' field='AKHIYAT' />
              <RowDetail label='Function' field='CEO' />
              <RowDetail label='Raison sociale' field='Akhiyat Driver Cars' />
              <RowDetail label='Type' field='Client' />
              <RowDetail label='Référence' field='#C-2120124' />
              <RowDetail label='Portable' field='0661-377106' />
              <RowDetail label='Téléphone' field='0528565625' />
            </div>
            <div className='col-md-5'>
              <div className='row mb-7'>
                <div className='col'>
                  <div className='fs-3 fw-bold'>Chiffres clés</div>
                </div>
              </div>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Chiffre d’affaire</label>
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>7800,00 DH</span>
                </div>
              </div>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Recettes encaissées</label>
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>7800,00 DH</span>
                </div>
              </div>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Dépenses réglées</label>
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>0,00 DH</span>
                </div>
              </div>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Dépenses en attente</label>
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>0,00 DH</span>
                </div>
              </div>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Avoirs</label>
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>0,00 DH</span>
                </div>
              </div>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Contacts</label>
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>49 contacts</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
