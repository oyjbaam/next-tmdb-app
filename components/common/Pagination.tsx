'use client'
import { MouseEvent, useCallback } from 'react'
import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button'
import { generatePagination } from '@/shared/util/generatePagination'
import { useQueryString } from '@/shared/hooks/useQueryString'

type PaginationProps = {
  page: string
  totalPages: number[]
  query?: string
}

const Pagination = ({ page, totalPages, query }: PaginationProps) => {
  const { searchParams } = useQueryString()
  const currentPageNum = Number(page)
  const arrNum = generatePagination(currentPageNum, totalPages)
  const pageLiClass = 'rounded-full inline-flex justify-center overflow-hidden'

  const handleDisabledClick = (e: MouseEvent<HTMLAnchorElement>, disabled: boolean) => {
    if (disabled) {
      e.preventDefault()
    }
  }
  const generateLink = useCallback(
    (newPage: number) => {
      const newQuery = new URLSearchParams(searchParams.toString())
      newQuery.set('page', String(newPage))
      if (query) {
        newQuery.set('query', query)
      }

      return `?${newQuery.toString()}`
    },
    [query, searchParams]
  )
  return (
    <nav className="w-full text-center my-8" aria-label="Page navigation">
      <ul className="inline-flex items-center gap-1 text-sm md:gap-4">
        <li className={`${pageLiClass} w-10`}>
          <Link
            href={generateLink(currentPageNum > 1 ? currentPageNum - 1 : 1)}
            className={buttonStyles({ intent: 'text', rounded: 'full', sizes: 'sm', disabled: currentPageNum === 1 })}
            scroll={currentPageNum === 1 ? false : true}
            onClick={e => handleDisabledClick(e, currentPageNum === 1)}
          >
            Prev
          </Link>
        </li>

        {arrNum.map((page, idx) => {
          const isActivePageClass =
            page === currentPageNum ? 'bg-violet-500 lg:hover:bg-violet-700 text-white lg:hover:text-white' : ''
          const movePage = typeof page === 'number' ? page : currentPageNum

          return (
            <li className={`${pageLiClass} w-8`} key={page + `${idx}`}>
              <Link
                href={generateLink(movePage)}
                className={buttonStyles({ intent: 'text', rounded: 'full', sizes: 'sm', className: isActivePageClass })}
                scroll={typeof page === 'number' ? true : false}
              >
                {page}
              </Link>
            </li>
          )
        })}
        <li className={`${pageLiClass} w-10`}>
          <Link
            href={generateLink(currentPageNum < totalPages.length ? currentPageNum + 1 : currentPageNum)}
            className={buttonStyles({
              intent: 'text',
              rounded: 'full',
              sizes: 'sm',
              disabled: currentPageNum === totalPages.length,
            })}
            scroll={currentPageNum === totalPages.length ? false : true}
            onClick={e => handleDisabledClick(e, currentPageNum === totalPages.length)}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Pagination
