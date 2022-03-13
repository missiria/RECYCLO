import React, {useState, useReducer} from 'react'

const ProductSales: React.FC = () => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0)

  const [row, setRow] = useState<number[]>([1])
  const [price, setPrice] = useState<number>(0)
  const [productQt, setProductQt] = useState<number>(1)

  console.log(ignored)
  return (
    <div className='card mu-5 py-5 mb-xl-5'>
      <div className='card-title mx-5'>
        <h3 className='fw-bolder m-0'>
          <span className='badge bg-info me-2'>2</span>
          Produits
        </h3>
      </div>
      <div className='card-body border-top p-9'>
        <div className='row mb-2'>
          <div className='col-lg-2'>Réference</div>
          <div className='col-lg-4'>Désignation</div>
          <div className='col-lg-2'>QT</div>
          <div className='col-lg-2'>Prix UT HT</div>
          <div className='col-lg-2'>Total</div>
        </div>
        {row.map((line, index) => (
          <div key={index} className='row mb-4'>
            <div className='col-lg-2'>
              <input name='product_reference' type='text' className='form-control' />
            </div>
            <div className='col-lg-4'>
              <input name='product_name' type='text' className='form-control' />
            </div>
            <div className='col-lg-2'>
              <input
                name='product_qt'
                type='number'
                className='form-control'
                defaultValue={1}
                onChange={(event) => {
                  forceUpdate()
                  setProductQt(parseInt(event.target.value))
                }}
              />
            </div>
            <div className='col-lg-2'>
              <input
                name='product_price'
                type='text'
                className='form-control'
                onChange={(event) => {
                  forceUpdate()
                  setPrice(parseInt(event.target.value))
                }}
              />
            </div>
            <div className='col-lg-2'>
              <input
                name='total'
                type='text'
                className='form-control'
                defaultValue='00.00 MAD'
                value={price * productQt}
                disabled
                readOnly
              />
            </div>
          </div>
        ))}
        <div className='row'>
          <div className='col'>
            <div className='text-center'>
              <button
                type='button'
                className='btn btn-primary btn-sm mt-4'
                onClick={() => {
                  forceUpdate()
                  row.push(row.length)
                  setRow(row)
                }}
              >
                Ajouter un autre produit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {ProductSales}
