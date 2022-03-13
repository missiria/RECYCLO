import React, {FC} from 'react'

// Manager
import {Input} from '../../../../../Manager/Input'

type Props = {
  validation: any
}

const OrderDetail: FC<Props> = ({validation}) => {
  return (
    <div className='card mu-5 py-5 mb-xl-5'>
      <div
        className='card-title mx-5 cursor-pointer d-block'
        role='button'
        aria-expanded='true'
        data-bs-toggle='collapse'
        data-bs-target='#order_details'
        aria-controls='order_details'
      >
        <h3 className='fw-bolder m-0'>
          <span className='badge bg-info me-2'>1</span>
          informations générales
        </h3>
      </div>
      <div id='order_details' className='collapse show'>
        <div className='card-body border-top p-9'>
          <div className='row mb-2'>
            <div className='col-lg-6'>
              <Input name='account' type='text' label='Entreprise' validation={validation} />
            </div>
            <div className='col-lg-6'>
              <Input name='reference' type='text' label='Réference' validation={validation} />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col-lg-6'>
              <Input name='contact' type='text' label='Entreprise' validation={validation} />
            </div>
            <div className='col-lg-6'>
              <Input
                name='received_date'
                type='date'
                label='Date d’émission'
                validation={validation}
              />
            </div>
          </div>
          <div className='row mb-2'>
            <div className='col'>
              <Input name='subject' type='text' label='Objet' validation={validation} />
            </div>
          </div>
          <div className='row mb-4'>
            <div className='col'>
              <label htmlFor='invoice_address' className='required fs-6 fw-bold mb-2'>
                Adresse de facturation
              </label>
              <textarea
                name='invoice_address'
                id='invoice_address'
                className='form-control'
                placeholder='Adresse de facturation'
                cols={10}
                rows={3}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {OrderDetail}
