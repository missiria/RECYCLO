import React, {FC} from 'react'

type Props = {
  label: string
  field: string
}

const RowDetail: FC<Props> = ({label, field}) => {
  return (
    <div className='row mb-7'>
      <label className='col-lg-4 fw-bold text-muted'>{label}</label>
      <div className='col-lg-8'>
        <span className='fw-bolder fs-6 text-dark'>{field}</span>
      </div>
    </div>
  )
}

export {RowDetail}
