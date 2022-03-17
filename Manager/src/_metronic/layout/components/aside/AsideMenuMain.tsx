/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      {/* Production Sidebar */}
      <AsideMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Recycle life</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/accounts'
        title='Comptes'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='/accounts' title='Liste' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Rapports' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItem
        to='/declarations'
        icon='/media/icons/duotune/communication/com007.svg'
        title='Déclarations'
        fontIcon='bi-user'
      />
      <AsideMenuItem
        to='/donations'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Donations'
        fontIcon='bi-group'
      />
      <AsideMenuItem
        to='/recharges'
        icon='/media/icons/duotune/communication/com008.svg'
        title='Recharges'
        fontIcon='bi-user'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Modules</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Ventes'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-order'
      >
        <AsideMenuItem to='/orders' title='Commandes' hasBullet={true} />
        <AsideMenuItem to='/order/settings' title='Configuration' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Catalogue'
        icon='/media/icons/duotune/general/gen008.svg'
        fontIcon='bi-order'
      >
        <AsideMenuItem to='/crafted/account/overview' title='Produits' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/overview' title='Services' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Catégories' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/settings' title='Rapports' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Stocks'
        icon='/media/icons/duotune/graphs/gra010.svg'
        fontIcon='bi-order'
      >
        <AsideMenuItem to='/crafted/widgets/statistics' title='Mouvement' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/overview' title='inventaires' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Rapports' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Ressources humaines'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-order'
      >
        <AsideMenuItem to='/crafted/widgets/statistics' title='Employés' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/overview' title='Congés' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/overview' title='Presence' hasBullet={true} />
        <AsideMenuItem to='/crafted/account/overview' title='Notes internes' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Paie' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Rapports' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Paramétrages</span>
        </div>
      </div>
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen049.svg'
        title='Utilisateurs'
        fontIcon='bi-users'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Mise en page'
        fontIcon='bi-layers'
      />
      <AsideMenuItem
        to='/builder'
        icon='/media/icons/duotune/coding/cod001.svg'
        title='Réglages'
        fontIcon='bi-layers'
      />
    </>
  )
}
