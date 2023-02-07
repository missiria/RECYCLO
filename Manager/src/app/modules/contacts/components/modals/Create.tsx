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

import {IEditContact} from '../ContactModel'
import SETTINGS from '../../../../../data/settings.json'
import ACCOUNTS from '../../../../../data/accounts.json'

const createContactSchema = Yup.object().shape({
  first_name: Yup.string().required('Prénom est requis'),
  last_name: Yup.string().required('Nom est requis'),
  role: Yup.string().required('Function est requis'),
  enterprise: Yup.string().required('Entreprise is requis'),
  phone: Yup.string().required('Téléphone phone est requis'),
  email: Yup.string().required('Email est requis'),
})

const Create: FC = () => {
  const initialValues = {
    avatar: 'https://picsum.photos/125/125?grayscale',
    first_name: '',
    last_name: '',
    role: '',
    enterprise: '',
    phone: '',
    email: '',
  }
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<IEditContact>(initialValues)

  // const dispatch = useDispatch()

  const formik = useFormik({
    initialValues,
    validationSchema: createContactSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {
        // Receiving [data]
        console.log('Data > ', values)
        setTimeout(() => {
          values.first_name = data.first_name
          values.last_name = data.last_name
          values.enterprise = data.enterprise
          values.role = data.role
          values.phone = data.phone
          values.email = data.email
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
            <h5 className='modal-title'>Ajouter un contact</h5>
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
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className='modal-body'>
              <div className='modal-body pt-0'>
                <div className='scroll-y'>
                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      <Input label='Prénom' type='text' name='first_name' validation={formik} />
                    </div>
                    <div className='col-md-6'>
                      <Input label='Nom' type='text' name='last_name' validation={formik} />
                    </div>
                  </div>
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
                      <Select
                        label='Rôle'
                        name='role'
                        options={SETTINGS.contact_positions}
                        validation={formik}
                      />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      <Input label='Téléphone' type='text' name='phone' validation={formik} />
                    </div>
                    <div className='col-md-6'>
                      <Input label='Email' type='text' name='email' validation={formik} />
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
