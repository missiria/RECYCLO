/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'

import {KTSVG} from '../../_metronic/helpers'

type Props = {
  props: any
}

const ConfirmationDelete: FC<Props> = ({props}) => {
  const [loading, setLoading] = useState(false)
  // Debug [console]
  // console.log(account.id)
  return (
    <div
      className='modal fade'
      tabIndex={-1}
      data-bs-backdrop='static'
      id='modal_delete_confirmation'
    >
      <div className='modal-dialog modal-dialog-centered modal-sm'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Supprimer le compte ?</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Fermer'
            >
              <KTSVG
                path='/media/icons/duotune/arrows/arr061.svg'
                className='svg-icon svg-icon-2x'
              />
            </div>
          </div>{' '}
          <form>
            <div className='modal-body'>
              <div className='modal-body pt-0 text-center '>
                <div className='fs-2'>{props.name}</div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='reset'
                className='btn btn-light'
                data-bs-dismiss='modal'
                aria-label='Fermer'
              >
                Annuler
              </button>
              <a
                href={`/account/delete/${props.id}`}
                className='btn btn-lg btn-danger'
                onClick={() => {
                  setLoading(true)
                }}
              >
                {!loading && <span className='indicator-label'>Supprimer</span>}
                {loading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    S'il vous plaît, attendez...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export {ConfirmationDelete}
