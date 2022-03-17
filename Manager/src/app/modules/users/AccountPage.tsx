import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Settings} from './components/settings/Settings'
import {Contacts} from './components/Contacts'
import {Documents} from './components/Documents'
import {AccountHeader} from './components/AccountHeader'

const accountBreadCrumbs: Array<PageLink> = [
  {
    title: 'Compte',
    path: '/account/overview',
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

const AccountPage: React.FC = () => {
  return (
    <>
      <AccountHeader />
      <Switch>
        <Route path='/account/overview'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Apércu</PageTitle>
          <Overview />
        </Route>
        <Route path='/account/settings'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Réglages</PageTitle>
          <Settings />
        </Route>
        <Route path='/account/contacts'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Contacts</PageTitle>
          <Contacts />
        </Route>
        <Route path='/account/documents'>
          <PageTitle breadcrumbs={accountBreadCrumbs}>Documents</PageTitle>
          <Documents />
        </Route>
        <Redirect from='/account' exact={true} to='/account/overview' />
        <Redirect to='/account/overview' />
      </Switch>
    </>
  )
}

export default AccountPage
