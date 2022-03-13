/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG} from '../../_metronic/helpers'
interface Timeline {
  id: string
  title: string
  status: string
  description: string
  className: string
}

type Props = {
  className: string
  title: string
  description: string
  timelines: Timeline[]
}

const ListActivities: React.FC<Props> = ({className, title, description, timelines}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header align-items-center border-0 mt-4'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='fw-bolder mb-2 text-dark'>{title}</span>
          <span className='text-muted fw-bold fs-7'>{description}</span>
        </h3>
        <div className='card-toolbar'>
          {/* begin::Menu */}
          <button
            type='button'
            className='btn btn-sm btn-icon btn-color-primary btn-active-light-primary'
            data-kt-menu-trigger='click'
            data-kt-menu-placement='bottom-end'
            data-kt-menu-flip='top-end'
          >
            <KTSVG path='/media/icons/duotune/general/gen024.svg' className='svg-icon-2' />
          </button>
          <div className='menu menu-sub menu-sub-dropdown w-250px w-md-300px' data-kt-menu='true'>
            <div className='px-7 py-5'>
              <div className='fs-5 text-dark fw-bolder'>Filtrer</div>
            </div>
            <div className='separator border-gray-200'></div>
            <div className='px-7 py-5'>
              <div className='mb-10'>
                <label className='form-label fw-bold'>Status:</label>
                <div>
                  <select
                    className='form-select form-select-solid'
                    data-kt-select2='true'
                    data-placeholder="Sélectionnez l'option"
                    data-allow-clear='true'
                    defaultValue={'1'}
                  >
                    <option></option>
                    <option value='1'>Approuvée</option>
                    <option value='2'>En attente</option>
                    <option value='3'>En cours</option>
                    <option value='4'>Rejetée</option>
                  </select>
                </div>
              </div>

              <div className='mb-10'>
                <label className='form-label fw-bold'>Member Type:</label>
                <div className='d-flex'>
                  <label className='form-check form-check-sm form-check-custom form-check-solid me-5'>
                    <input className='form-check-input' type='checkbox' value='1' />
                    <span className='form-check-label'>Fournisseurs</span>
                  </label>
                  <label className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='2'
                      defaultChecked={true}
                    />
                    <span className='form-check-label'>Clients</span>
                  </label>
                </div>
              </div>

              <div className='mb-10'>
                <label className='form-label fw-bold'>Notifications:</label>
                <div className='form-check form-switch form-switch-sm form-check-custom form-check-solid'>
                  <input
                    className='form-check-input'
                    type='checkbox'
                    value=''
                    name='notifications'
                    defaultChecked={true}
                  />
                  <label className='form-check-label'>Activé</label>
                </div>
              </div>
              <div className='d-flex justify-content-end'>
                <button
                  type='reset'
                  className='btn btn-sm btn-white btn-active-light-primary me-2'
                  data-kt-menu-dismiss='true'
                >
                  Réinitialiser
                </button>
                <button
                  type='submit'
                  className='btn btn-sm btn-primary'
                  data-kt-menu-dismiss='true'
                >
                  Appliquer
                </button>
              </div>
            </div>
          </div>
          {/* end::Menu */}
        </div>
      </div>
      <div className='card-body pt-5'>
        <div className='timeline-label'>
          {timelines.map((timeline, i) => {
            return (
              <div className='timeline-item' key={`${timeline.id}`}>
                <div className='timeline-label fw-bolder text-gray-800 fs-6'>{timeline.title}</div>
                <div className='timeline-badge'>
                  <i className={`fa fa-genderless text-${timeline.status} fs-1`}></i>
                </div>
                <div className={`timeline-content ${timeline.className} ps-3`}>
                  <div dangerouslySetInnerHTML={{__html: timeline.description}} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export {ListActivities}
