import React, {FC} from 'react'
import clsx from 'clsx'

type Props = {
  name: string
  type: string
  label: string
  validation: any
}
const Input: FC<Props> = ({name, type, label, validation}) => {
  return (
    <div className='mb-2'>
      <label htmlFor={name} className='required fs-6 fw-bold mb-2'>
        {label}
      </label>
      <input
        name={name}
        type={type}
        id={name}
        {...validation.getFieldProps(name)}
        className={clsx(
          'form-control form-control-lg form-control-solid',
          {'is-invalid': validation.touched[name] && validation.errors[name]},
          {
            'is-valid': validation.touched[name] && !validation.errors[name],
          }
        )}
      />
      {validation.touched[name] && validation.errors[name] && (
        <div className='form-text text-danger'>
          <span role='alert'>{validation.errors[name]}</span>
        </div>
      )}
    </div>
  )
}

export {Input}
