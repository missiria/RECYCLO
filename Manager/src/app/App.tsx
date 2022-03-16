import React, {Suspense} from 'react'
import {BrowserRouter} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import AuthInit from './modules/auth/redux/AuthInit'
import {Routes} from './routing/Routes'
import { QueryClient, QueryClientProvider } from 'react-query'

type Props = {
  basename: string
}

const queryClient = new QueryClient()

const App: React.FC<Props> = ({basename}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LayoutSplashScreen />}>
        <BrowserRouter basename={basename}>
          <I18nProvider>
            <LayoutProvider>
              <AuthInit>
                <Routes />
              </AuthInit>
            </LayoutProvider>
          </I18nProvider>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  )
}

export {App}
