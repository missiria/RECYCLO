import React, {Suspense, lazy} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {FallbackView} from '../../_metronic/partials'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MenuTestPage} from '../pages/MenuTestPage'
import {Account} from '../pages/Account'
import {Contact} from '../pages/Contact'
import {Order} from '../pages/Order'

export function PrivateRoutes() {
  const BuilderPageWrapper = lazy(() => import('../pages/layout-builder/BuilderPageWrapper'))
  const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  const ContactPage = lazy(() => import('../modules/contacts/ContactPage'))
  const OrderPage = lazy(() => import('../modules/orders/OrderPage'))
  const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))

  return (
    <Suspense fallback={<FallbackView />}>
      <Switch>
        <Route path='/dashboard' component={DashboardWrapper} />
        <Route path='/builder' component={BuilderPageWrapper} />
        <Route path='/crafted/pages/profile' component={ProfilePage} />
        <Route path='/crafted/pages/wizards' component={WizardsPage} />
        <Route path='/crafted/widgets' component={WidgetsPage} />

        {/* Account routes */}
        <Route path='/accounts' component={Account} />
        <Route path='/account/overview' component={AccountPage} />
        <Route path='/account/contacts' component={AccountPage} />
        <Route path='/account/documents' component={AccountPage} />
        <Route path='/account/settings' component={AccountPage} />

        {/* Contact routes */}
        <Route path='/contacts' component={Contact} />
        <Route path='/contact/overview' component={ContactPage} />
        <Route path='/contact/update' component={ContactPage} />

        {/* Orders routes */}
        <Route path='/orders' component={Order} />
        <Route path='/order/overview' component={OrderPage} />
        <Route path='/order/add' component={OrderPage} />
        <Route path='/order/update' component={OrderPage} />

        <Route path='/apps/chat' component={ChatPage} />
        <Route path='/menu-test' component={MenuTestPage} />
        <Redirect from='/auth' to='/dashboard' />
        <Redirect exact from='/' to='/dashboard' />
        <Redirect to='error/404' />
      </Switch>
    </Suspense>
  )
}
