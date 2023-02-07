import {toAbsoluteUrl} from '../../../helpers'

export function FallbackView() {
  return (
    <div className='splash-screen'>
      <img src={toAbsoluteUrl('/media/logos/logo.svg')} alt='Start logo' />
      <span>Chargement ...</span>
    </div>
  )
}
