import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {EditOrder} from './components/EditOrder'
import Overview from './components/Overview'

const OrderBreadCrumbs: Array<PageLink> = [
  {
    title: 'Orders',
    path: '/order/overview',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const OrderPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/order/overview/:id' component={Overview} />
        <Route path='/order/update'>
          <PageTitle breadcrumbs={OrderBreadCrumbs}>Modifier</PageTitle>
          <EditOrder />
        </Route>
        <Route path='/order/add'>
          <PageTitle breadcrumbs={OrderBreadCrumbs}>Valider</PageTitle>
          <EditOrder />
        </Route>
        <Redirect from='/order' exact={true} to='/order/overview' />
        <Redirect to='/order/overview' />
      </Switch>
    </>
  )
}

export default OrderPage
