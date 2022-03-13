import React, {FC} from 'react'
import _ from 'lodash'

type Props = {
  totalItems: number
  pageSize: number
  currentPage: number
  onPageChange: any
}

const Pagination: FC<Props> = ({totalItems, pageSize, currentPage, onPageChange}) => {
  console.log('pageSize ', pageSize)
  console.log('onPageChange ', onPageChange)

  const pagesCount = Math.ceil(totalItems / pageSize)
  const pages = _.range(1, pagesCount + 1)

  console.log('pages ', pages)

  return (
    <ul className='pagination py'>
      {pages.map((page) => (
        <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'}>
          <span className='page-link' onClick={() => onPageChange(page)}>
            {page}
          </span>
        </li>
      ))}
    </ul>
  )
}

export {Pagination}
