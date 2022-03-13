import React, {useState} from 'react'
import {IEditContact, EditContactInitValues as initialValues} from './ContactModel'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import {Input} from '../../../../Manager/Input'

const EditContactSchema = Yup.object().shape({
  first_name: Yup.string().required('Prénom est requis'),
  last_name: Yup.string().required('Nom est requis'),
  role: Yup.string().required('Function est requis'),
  enterprise: Yup.string().required('Entreprise is requis'),
  phone: Yup.string().required('Téléphone phone est requis'),
  email: Yup.string().required('Email est requis'),
})

const EditContact: React.FC = () => {
  const [data, setData] = useState<IEditContact>(initialValues)

  const [loading, setLoading] = useState(false)
  const formik = useFormik<IEditContact>({
    initialValues,
    validationSchema: EditContactSchema,
    onSubmit: (values) => {
      setLoading(true)
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
    },
  })

  return (
    <div className='card mb-5 mb-xl-10'>
      <div
        className='card-header border-0 cursor-pointer'
        role='button'
        data-bs-toggle='collapse'
        data-bs-target='#contact_details'
        aria-expanded='true'
        aria-controls='contact_details'
      >
        <div className='card-title m-0'>
          <h3 className='fw-bolder m-0'>
            {data.first_name} {data.last_name} <span className='badge bg-success'>{data.role}</span>
          </h3>
        </div>
      </div>
      <div id='contact_details' className='collapse show'>
        <form onSubmit={formik.handleSubmit} noValidate className='form'>
          <div className='card-body border-top p-9'>
            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label fw-bold fs-6'>Logo</label>
              <div className='col-lg-8'>
                <div
                  className='image-input image-input-outline'
                  data-kt-image-input='true'
                  style={{backgroundImage: `url(${data.avatar}})`}}
                >
                  <div
                    className='image-input-wrapper w-125px h-125px'
                    style={{backgroundImage: `url(${data.avatar}})`}}
                  ></div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Nom complet</label>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <Input name='first_name' type='text' label='Prénom' validation={formik} />
                  </div>
                  <div className='col-lg-6 fv-row'>
                    <Input name='last_name' type='text' label='Nom' validation={formik} />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Compte</label>
              <div className='col-lg-8 fv-row'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <Input name='enterprise' type='text' label='Societé' validation={formik} />
                  </div>
                  <div className='col-lg-6 fv-row'>
                    <Input name='role' type='text' label='Function' validation={formik} />
                  </div>
                </div>
              </div>
            </div>

            <div className='row mb-6'>
              <label className='col-lg-4 col-form-label required fw-bold fs-6'>Contact</label>
              <div className='col-lg-8 fv-row'>
                <div className='row'>
                  <div className='col-lg-6 fv-row'>
                    <Input name='phone' type='text' label='Portable' validation={formik} />
                  </div>
                  <div className='col-lg-6 fv-row'>
                    <Input name='email' type='email' label='Email' validation={formik} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Entregister'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...{' '}
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export {EditContact}
