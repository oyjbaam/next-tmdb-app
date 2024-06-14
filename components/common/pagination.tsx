import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button'
import { generatePagination } from '@/shared/util/generatePagination'
interface PaginationProps {
  page: string | string[]
  totalPages: number[]
  param: string
}
const Pagination = ({ page, totalPages, param }: PaginationProps) => {
  const currentPageNum = Number(page)
  const arrNum = generatePagination(currentPageNum, totalPages)
  const prevClass = currentPageNum === 1 ? '' : 'hover:bg-gray-200'
  const nextClass = currentPageNum < totalPages.length ? 'hover:bg-gray-200' : ''
  const pageNumDefaultClass = 'rounded-full inline-flex justify-center overflow-hidden'

  return (
    <nav className="w-full text-center my-8" aria-label="Page navigation">
      <ul className="inline-flex items-center gap-4 text-sm">
        <li className={`${pageNumDefaultClass} w-10 ${prevClass}`}>
          <Link
            href={`${param}${currentPageNum > 1 ? currentPageNum - 1 : 1}`}
            className={buttonStyles({ intent: 'text', rounded: 'full', sizes: 'sm', disabled: currentPageNum === 1 })}
            scroll={currentPageNum === 1 ? false : true}
          >
            Prev
          </Link>
        </li>

        {arrNum.map(page => {
          const isActivePageClass = page === currentPageNum ? 'bg-blue-500 text-white' : ''
          const movePage = typeof page === 'number' ? page : currentPageNum

          return (
            <li className={`${pageNumDefaultClass} w-8 hover:bg-gray-200`} key={page}>
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
        <li className={`${pageNumDefaultClass} w-10 ${nextClass}`}>
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
