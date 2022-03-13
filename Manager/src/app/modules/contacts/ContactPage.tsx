import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {EditContact} from './components/EditContact'

const contactBreadCrumbs: Array<PageLink> = [
  {
    title: 'Contacts',
    path: '/contact/overview',
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

const ContactPage: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path='/contact/overview'>
          <PageTitle breadcrumbs={contactBreadCrumbs}>Apércu</PageTitle>
          <Overview />
        </Route>
        <Route path='/contact/update'>
          <PageTitle breadcrumbs={contactBreadCrumbs}>Modifier</PageTitle>
          <EditContact />
        </Route>
        <Redirect from='/contact' exact={true} to='/contact/overview' />
        <Redirect to='/contact/overview' />
      </Switch>
    </>
  )
}

export default ContactPage
