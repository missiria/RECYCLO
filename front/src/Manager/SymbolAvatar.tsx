import React, {FC} from 'react'

type Props = {
  letter: string
  background: string
}
const SymbolAvatar: FC<Props> = ({letter, background}) => {
  return (
    <div className='symbol symbol-50 0px symbol-lg-100px symbol-fixed position-relative'>
      <div className={`symbol-label fs-1 fw-bold bg-primary text-inverse-danger ${background}`}>
        {letter}
      </div>
      <div className='position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px'></div>
    </div>
  )
}

export {SymbolAvatar}
