/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC, useState} from 'react'
import {useFormik} from 'formik'

import {Input} from '../../../../../Manager/Input'
import {Select} from '../../../../../Manager/Select'

import { EDGE_SVG } from '../../../../../Manager/Media'
import * as Yup from 'yup'

import SETTINGS from '../../../../../data/settings.json'
import useAxios from '../../../../../Manager/services/api.service'

const initialValues = {
  email: '',
  first_name: '',
  last_name: '',
  type: '',
  phone: '',
  zipcode: '',
  address: '',
  country: 'Maroc',
  city: 'Agadir',
}

const createAccountSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Minimum 3 caractères')
    .required('Email est requis'),
  first_name: Yup.string()
    .min(3, 'Minimum 3 caractères')
    .max(50, 'Maximum 50 caractères')
    .required('Prénom est requis'),
  last_name: Yup.string()
    .min(3, 'Minimum 3 caractères')
    .max(50, 'Maximum 50 caractères')
    .required('Nom est requis'),
  phone: Yup.string()
    .min(3, 'Minimum 10 caractères')
    .max(50, 'Maximum 14 caractères')
    .required('Email est requis'),
  address: Yup.string()
    .min(3, 'Minimum 10 caractères')
    .max(50, 'Maximum 14 caractères')
    .required('Adresse est requis'),
  type: Yup.string().required('Le type du compte est requis'),
  password: Yup.string()
    .min(8, 'Minimum 8 caractères')
    .max(24, 'Maximum 24 caractères')
    .required('Password est requis'),
  zipcode: Yup.string().required('Code postale est requis'),
})

const Create: FC = () => {
  const [loading, setLoading] = useState(false)

  const { data, loading: isLoading } = useAxios({
    method: "POST",
    url: `/accounts`,
    headers: {
      accept: '*/*'
    }
  });

  console.log('DATA > ', data);
  console.log('DATA > ', isLoading);


  const formik = useFormik({
    initialValues,
    validationSchema: createAccountSchema,
    onSubmit: (newAccount, {setStatus, setSubmitting}) => {
      setLoading(true)
      setTimeout(() => {

        // Receiving [data]
        console.log('Data > ', newAccount)

        // createAccount(newAccount)


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
    <div className='modal fade' tabIndex={-1} data-bs-backdrop='static' id='modal_create_account'>
      <div className='modal-dialog modal-dialog-centered modal-lg mw-950px'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title'>Ajouter un compte</h5>
            <div
              className='btn btn-icon btn-sm btn-active-light-primary ms-2'
              data-bs-dismiss='modal'
              aria-label='Fermer'
            >
              <EDGE_SVG
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
                      <Input label='Prénom' type='text' name='first_name' validation={formik} />
                    </div>
                    <div className='col-md-6'>
                      <Input label='Nom' type='text' name='last_name' validation={formik} />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      <Input label='ID National' type='text' name='society_id' validation={formik} />
                    </div>
                    <div className='col-md-6'>
                      <Select
                        label='Type'
                        name='type'
                        options={SETTINGS.account_type}
                        validation={formik}
                      />
                    </div>
                  </div>
                  <div className='row g-9 mb-3'>
                    <div className='col-md-8'>
                      <Input label='Adresse' type='text' name='address' validation={formik} />
                    </div>
                    <div className='col-md-4'>
                      <Input label='Code postale' type='text' name='zipcode' validation={formik} />
                    </div>
                  </div>
                  <div className='row mb-3'>
                    <div className='col-md-6'>
                      <Select
                        label='Ville'
                        name='city'
                        options={SETTINGS.cities}
                        validation={formik}
                      />
                    </div>
                    <div className='col-md-6'>
                      <Select
                        label='Pays'
                        name='country'
                        options={SETTINGS.countries}
                        validation={formik}
                      />
                    </div>
                  </div>
                  <div className='accordion' id='add_user'>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='add_user_header_1'>
                        <button
                          className='accordion-button fs-4 fw-bold collapsed'
                          type='button'
                          data-bs-toggle='collapse'
                          data-bs-target='#add_user_body_1'
                          aria-expanded='false'
                          aria-controls='add_user_body_1'
                        >
                          Login access
                          <span className='ms-2 rotate-180'>
                            <i className='bi-chevron-down'></i>
                          </span>
                        </button>
                      </h2>
                      <div
                        id='add_user_body_1'
                        className='accordion-collapse collapse'
                        aria-labelledby='add_user_header_1'
                        data-bs-parent='#add_user'
                      >
                        <div className='accordion-body'>
                          <div className='row mb-3'>
                            <div className='col-md-6'>
                              <Input
                                label='Email'
                                type='email'
                                name='email'
                                validation={formik}
                              />
                            </div>
                            <div className='col-md-6'>
                              <Input label='Téléphone' type='text' name='phone' validation={formik} />
                            </div>
                          </div>
                          <div className='row mb-3'>
                            <div className='col'>
                              <Input label='Password' type='password' name='password' validation={formik} />
                            </div>
                          </div>
                        </div>
                      </div>
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
