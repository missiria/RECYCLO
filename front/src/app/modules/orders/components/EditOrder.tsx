import React, {useState} from 'react'
import * as Yup from 'yup'
import {useFormik} from 'formik'

// Metronic
import {KTSVG} from '../../../../_metronic/helpers'
import {OrderModel, initValues as initialValues} from './OrderModel'

// Manager
import {Input} from '../../../../Manager/Input'
import {Select} from '../../../../Manager/Select'
import {ProductSales} from './blocks/ProductSales'
import {OrderDetail} from './blocks/OrderDetail'

const orderSchema = Yup.object().shape({
  account: Yup.string().required('Compte est requis'),
  reference: Yup.string().required('Nom est requis'),
  order_id: Yup.string().required('Function est requis'),
  invoice_address: Yup.string().required('Entreprise is requis'),
  subject: Yup.string().required('Objet est requis'),
  products: Yup.array().required('produits est requis'),
  payment_type: Yup.string().required('Type du paiement est requis'),
  bank_account: Yup.string().required('Compte banquaire est requis'),
})

const EditOrder: React.FC = () => {
  const [data, setData] = useState<OrderModel>(initialValues)
  const [loading, setLoading] = useState(false)
  const formik = useFormik<OrderModel>({
    initialValues,
    validationSchema: orderSchema,
    onSubmit: (values) => {
      setLoading(true)
      setTimeout(() => {
        const updatedData = Object.assign(data, values)
        setData(updatedData)
        setLoading(false)
      }, 1000)
    },
  })
  return (
    <div className='order-confirmation'>
      <div className='card mb-7'>
        <div className='card-header border-0'>
          <div className='card-title m-0'>
            <h1 className='fw-bolder m-0'>
              {data.account} <span className='fs-4 ms-2'>#{data.reference}</span>
            </h1>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} noValidate className='form'>
        {/* Order detail */}
        <OrderDetail validation={formik} />
        {/* Products & Services */}
        <ProductSales />
        {/* Conditions */}
        <div className='card mu-5 py-5 mb-xl-5'>
          <div className='card-title mx-5'>
            <h3 className='fw-bolder m-0'>
              <span className='badge bg-info me-2'>3</span>
              Condition de paiement
            </h3>
          </div>
          <div className='card-body border-top p-9'>
            <div className='row mb-2'>
              <div className='col-lg-6'>
                <Select
                  label='Mode de paiement'
                  name='payment_type'
                  options={[
                    {id: '1', value: 'Chéque'},
                    {id: '2', value: 'Virement'},
                    {id: '3', value: 'Cash'},
                  ]}
                  validation={formik}
                />
              </div>
              <div className='col-lg-6'>
                <Input
                  name='bank_account'
                  type='text'
                  label='Compte bancaire'
                  validation={formik}
                />
              </div>
            </div>
            <div className='row mb-4'>
              <div className='col'>
                <label htmlFor='note' className='required fs-6 fw-bold mb-2'>
                  Note
                </label>
                <textarea
                  name='note'
                  id='note'
                  className='form-control'
                  cols={10}
                  rows={1}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        {/* Actions */}
        <div className='card mt-5'>
          <div className='card-footer d-flex justify-content-end py-6 px-9'>
            <button
              type='reset'
              className='btn btn-light me-2'
              aria-label='Fermer'
              disabled={formik.isSubmitting}
            >
              Annuler
            </button>
            <button type='submit' className='btn btn-light me-2' disabled={loading}>
              {!loading && 'Convertir en bon de réception'}
              <KTSVG
                path='/media/icons/duotune/general/gen016.svg'
                className='svg-icon svg-icon-primary svg-icon-2hx ms-2'
              />
            </button>
            <button type='submit' className='btn btn-light me-2' disabled={loading}>
              {!loading && 'Convertir en facture'}{' '}
              <KTSVG
                path='/media/icons/duotune/finance/fin006.svg'
                className='svg-icon svg-icon-primary svg-icon-2hx ms-2'
              />
            </button>
            <button type='submit' className='btn btn-primary' disabled={loading}>
              {!loading && 'Entregister'}
              {loading && (
                <span className='indicator-progress' style={{display: 'block'}}>
                  Please wait...
                  <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                </span>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export {EditOrder}
