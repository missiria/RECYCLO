// Node
import React from 'react'
import {Link} from 'react-router-dom'

// Metronic
import {ListsWidget5, TablesWidget5} from '../../../../_metronic/partials/widgets'

export function Overview() {
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='account_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Fiche du compte</h3>
          </div>
          <Link to='/account/settings' className='btn btn-primary align-self-center'>
            Modifier le compte
          </Link>
        </div>
        <div className='card-body p-9'>
          <div className='row'>
            <div className='col-md-7'>
              <div className='row mb-7'>
                <div className='col'>
                  <div className='fs-3 fw-bold'>Details</div>
                </div>
              </div>
              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Raison sociale</label>
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>Sony Global</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Type</label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'>Client</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Référence</label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'>#C-154515</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Adresse de facturation</label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'>4 rue Haj lahbib cité, Agadir 80030</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Secteur d’activité</label>
                <div className='col-lg-8 fv-row'>
                  <span className='fw-bold fs-6'>Location de voiture</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Portable
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title='Phone number must be active'
                  ></i>
                </label>
                <div className='col-lg-8 d-flex align-items-center'>
                  <span className='fw-bolder fs-6 me-2'>0661-377106</span>
                  <span className='badge badge-success'>Vérifié</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Fixe
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title='Phone number must be active'
                  ></i>
                </label>
                <div className='col-lg-8 d-flex align-items-center'>
                  <span className='fw-bolder fs-6 me-2'>0522268598</span>
                  <span className='badge badge-success'>Vérifié</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Site de l'entreprise</label>
                <div className='col-lg-8'>
                  <a
                    href='http://www.edgenova.com'
                    className='fw-bold fs-6 text-dark text-hover-primary'
                  >
                    edgenova.com
                  </a>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>
                  Pays
                  <i
                    className='fas fa-exclamation-circle ms-1 fs-7'
                    data-bs-toggle='tooltip'
                    title="Pays d'origine"
                  ></i>
                </label>

                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>Maroc</span>
                </div>
              </div>

              <div className='row mb-7'>
                <label className='col-lg-4 fw-bold text-muted'>Taille</label>
                <div className='col-lg-8'>
                  <span className='fw-bolder fs-6 text-dark'>10 à 19 salariés</span>
                </div>
              </div>
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

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>
    </>
  )
}
