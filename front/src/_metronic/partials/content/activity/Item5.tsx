/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

const Item5: FC = () => {
  return (
    <div className='timeline-item'>
      <div className='timeline-line w-40px'></div>

      <div className='timeline-icon symbol symbol-circle symbol-40px'>
        <div className='symbol-label bg-light'>
          <KTSVG
            path='/media/icons/duotune/art/art005.svg'
            className='svg-icon-2 svg-icon-gray-500'
          />
        </div>
      </div>

      <div className='timeline-content mb-10 mt-n1'>
        <div className='pe-3 mb-5'>
          <div className='fs-5 fw-bold mb-2'>
            3 nouveaux concepts de conception d'applications ajoutés:
          </div>
          <div className='d-flex align-items-center mt-1 fs-6'>
            <div className='text-muted me-2 fs-7'>Crée le 4:23 PM par</div>
            <div
              className='symbol symbol-circle symbol-25px'
              data-bs-toggle='tooltip'
              data-bs-boundary='window'
              data-bs-placement='top'
              title='Marcus Dotson'
            >
              <img src={toAbsoluteUrl('/media/avatars/150-3.jpg')} alt='img' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {Item5}
