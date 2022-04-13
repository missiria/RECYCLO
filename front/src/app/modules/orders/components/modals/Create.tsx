/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
// import Select from 'react-select'
// import {useDispatch} from 'react-redux'
import {useFormik} from 'formik'

import {Input} from '../../../../../Manager/Input'
import {Select} from '../../../../../Manager/Select'

import {KTSVG} from '../../../../../_metronic/helpers'
import * as Yup from 'yup'
// import {register} from '../../../auth/redux/AuthCRUD'
// import * as auth from '../../../auth/redux/AuthRedux'

import {OrderModel} from '../OrderModel'
import ACCOUNTS from '../../../../../data/accounts.json'

const orderSchema = Yup.object().shape({
  account: Yup.string().required('Prénom est requis'),
  reference: Yup.string().required('Nom est requis'),
  order_id: Yup.string().required('Function est requis'),
  invoice_address: Yup.string().required('Entreprise is requis'),
  subject: Yup.string().required('Subject est requis'),
  products: Yup.array().required('products est requis'),
  payment_type: Yup.string().required('Type du paiement est requis'),
  bank_account: Yup.string().required('Compte banquaire est requis'),
})

const Create: FC = () => {
  const initialValues = {
    order_id: 1,
    account: '',
    reference: '',
    invoice_address: '',
    received_date: '',
    contact: '',
    subject: '',
  }
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<OrderModel>(initialValues)

  // const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema: orderSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        // Receiving [data]
        console.log('Data > ', values)
        setTimeout(() => {
          const updatedData = Object.assign(data, values)
          setData(updatedData)
          setLoading(false)
        }, 1000)
        // Add action to Redux
        // register(values.enterprise, values.type, values.category, values.phone)
        //   .then(({data: {accessToken}}) => {
        //     setLoading(false)
        //     dispatch(auth.actions.login(accessToken))
        //   })
        //   .catch(() => {
        //     setLoading(false)
        //     setSubmitting(false)
        //     setStatus('Registration process has broken')
        //   })
      }, 1000)
    },
  })
  // Debug [console]
  // console.log(formik.errors)
  return (
    <div className='modal fade' tabIndex={-1} data-bs-backdrop='static' id='modal_create_contact'>
      <div className='modal-dialog modal-dialog-centered modal-lg mw-950px'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Créer un bon de commande</h5>
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
          <form onSubmit={formik.handleSubmit}>
            <div className='modal-body'>
              <div className='modal-body pt-0'>
                <div className='scroll-y'>
                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      <Select
                        label='Compte'
                        name='enterprise'
                        optionValue='enterprise'
                        options={ACCOUNTS.accounts}
                        validation={formik}
                      />
                    </div>
                    <div className='col-md-6'>
                      <Input label='Réference' type='text' name='reference' validation={formik} />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      <Select
                        label='Contact'
                        name='contact'
                        optionValue='fullname'
                        options={ACCOUNTS.contacts}
                        validation={formik}
                      />
                    </div>
                    <div className='col-md-6'>
                      <Input
                        label='Date d’émission'
                        type='date'
                        name='received_date'
                        validation={formik}
                      />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col'>
                      <Input label='Objet' type='text' name='subject' validation={formik} />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col'>
                      <textarea
                        name='invoice_address'
                        id='invoice_address'
                        className='form-control'
                        placeholder='Adresse de facturation'
                        cols={10}
                        rows={5}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='modal-footer'>
              <button
                type='reset'
                className='btn btn-light'
                data-bs-dismiss='modal'
                aria-label='Fermer'
                disabled={formik.isSubmitting}
              >
                Annuler
              </button>
              <button
                type='submit'
                className='btn btn-lg btn-primary'
                disabled={formik.isSubmitting || !formik.isValid}
              >
                {!loading && <span className='indicator-label'>Entregister</span>}
                {loading && (
                  <span className='indicator-progress' style={{display: 'block'}}>
                    S'il vous plaît, attendez...{' '}
                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export {Create}
