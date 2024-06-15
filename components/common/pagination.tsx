import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button'
import { generatePagination } from '@/shared/util/generatePagination'
type PaginationProps = {
  page: string | string[]
  totalPages: number[]
  param: string
}
const Pagination = ({ page, totalPages, param }: PaginationProps) => {
  const currentPageNum = Number(page)
  const arrNum = generatePagination(currentPageNum, totalPages)
  const pageLiClass = 'rounded-full inline-flex justify-center overflow-hidden'

  return (
    <nav className="w-full text-center my-8" aria-label="Page navigation">
      <ul className="inline-flex items-center gap-4 text-sm">
        <li className={`${pageLiClass} w-10`}>
          <Link
            href={`${param}${currentPageNum > 1 ? currentPageNum - 1 : 1}`}
            className={buttonStyles({ intent: 'text', rounded: 'full', sizes: 'sm', disabled: currentPageNum === 1 })}
            scroll={currentPageNum === 1 ? false : true}
          >
            Prev
          </Link>
        </li>

        {arrNum.map(page => {
          const isActivePageClass =
            page === currentPageNum ? 'bg-violet-500 lg:hover:bg-violet-700 text-white lg:hover:text-white' : ''
          const movePage = typeof page === 'number' ? page : currentPageNum

          return (
            <li className={`${pageLiClass} w-8`} key={page}>
              <Link
                href={`${param}${movePage}`}
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
            href={`${param}${currentPageNum < totalPages.length ? currentPageNum + 1 : currentPageNum}`}
            className={buttonStyles({
              intent: 'text',
              rounded: 'full',
              sizes: 'sm',
              disabled: currentPageNum === totalPages.length,
            })}
            scroll={currentPageNum === totalPages.length ? false : true}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Pagination
