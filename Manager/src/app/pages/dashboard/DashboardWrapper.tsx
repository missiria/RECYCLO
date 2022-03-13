/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {FC} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  MixedWidget2,
  MixedWidget10,
  //MixedWidget11,
  //ListsWidget2,
  //ListsWidget3,
  //ListsWidget4,
  //ListsWidget6,
  //TablesWidget10,
} from '../../../_metronic/partials/widgets'

import {ListActivities, ChartVentes} from '../../widgets'

const timelines = [
  {
    id: '1',
    title: '08:42',
    status: 'warning',
    description: 'Les contours vous gardent honnête. Et garder la structure',
    className: 'fw-mormal text-muted',
  },
  {
    id: '2',
    title: '01:00',
    status: 'success',
    description: `Faire un paiement <a href='#' className='text-primary'>EURO 700</a>. to AKHIYAT`,
    className: 'fw-bolder text-gray-800',
  },
  {
    id: '3',
    title: '16:50',
    status: 'primary',
    description: 'Se livrer à une mauvaise conduite et garder la structure en bon état',
    className: 'fw-mormal text-muted',
  },
  {
    id: '4',
    title: '21:03',
    status: 'danger',
    description: `Nouvelle commande passée <a href='#' className='text-primary'>#CMD-2356</a>.`,
    className: 'fw-bold text-gray-800',
  },
  {
    id: '5',
    title: '10:30',
    status: 'success',
    description: `Réunion de préparation au lancement de l'application mobile KPI Finance`,
    className: 'fw-mormal text-muted',
  },
]

const dataNetProfit = [50, 60, 70, 80, 60, 50, 70, 60]
const dataRevenue = [50, 60, 70, 80, 60, 50, 70, 60]

const DashboardPage: FC = () => (
  <>
    {/* begin::Row */}
    <div className='row gy-5 g-xl-8'>
      <div className='col-xxl-4'>
        <MixedWidget2
          className='card-xl-stretch mb-xl-8'
          chartColor='danger'
          chartHeight='200px'
          strokeColor='#cb1e46'
        />
      </div>
      <div className='col-xxl-4'>
        <MixedWidget10
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='150px'
        />
        <ChartVentes
          className='card-xxl-stretch-50 mb-5 mb-xl-8'
          chartColor='primary'
          chartHeight='175px'
          title='Ventes'
          description='8 Oct - 26 Oct 2021'
          totalMontant='15,300 MAD'
          dataNetProfit={dataNetProfit}
          dataRevenue={dataRevenue}
        />
      </div>
      <div className='col-xxl-4'>
        <ListActivities
          className='card-xxl-stretch'
          title='Activities'
          description='3500 ventes'
          timelines={timelines}
        />
      </div>
    </div>
    {/* end::Row */}

    {/*
    <div className='row gy-5 gx-xl-8'>
      <div className='col-xxl-4'>
        <ListsWidget3 className='card-xxl-stretch mb-xl-3' />
      </div>
      <div className='col-xl-8'>
        <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
      </div>
    </div>
    */}

    {/*
    <div className='row gy-5 g-xl-8'>
      <div className='col-xl-4'>
        <ListsWidget2 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget6 className='card-xl-stretch mb-xl-8' />
      </div>
      <div className='col-xl-4'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={5} />
      </div>
    </div>
     */}

    {/* <div className='row g-5 gx-xxl-8'>
      <div className='col-xxl-4'>
        <MixedWidget8
          className='card-xxl-stretch mb-xl-3'
          chartColor='success'
          chartHeight='150px'
        />
      </div>
      <div className='col-xxl-8'>
        <TablesWidget5 className='card-xxl-stretch mb-5 mb-xxl-8' />
      </div>
    </div> */}
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
