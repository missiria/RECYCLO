import React, {FC} from 'react'
import clsx from 'clsx'

type Props = {
  name: string
  label: string
  validation: any
  optionValue?: string
  options: any
}
const Select: FC<Props> = ({name, label, validation, options, optionValue}) => {
  console.log('Error > ', validation.errors[name])
  return (
    <div className='mb-2'>
      <label htmlFor={name} className='required fs-6 fw-bold mb-2'>
        {label}
      </label>
      <select
        name={name}
        id={name}
        {...validation.getFieldProps(name)}
        className={clsx(
          'form-control form-control-lg form-control-solid',
          {'is-invalid': validation.touched[name] && validation.errors[name]},
          {
            'is-valid': validation.touched[name] && !validation.errors[name],
          }
        )}
      >
        <option value=''>Selectionnez une option</option>
        {options.map((option: any) => (
          <option key={option.id} value={option.id}>
            {optionValue ? option[optionValue] : option.value}
          </option>
        ))}
      </select>
      {validation.touched[name] && validation.errors[name] && (
        <div className='form-text text-danger'>
          <span role='alert'>{validation.errors[name]}</span>
        </div>
      )}
    </div>
  )
}

export {Select}
