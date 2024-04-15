import Link from 'next/link'
import { buttonStyles } from '@/app/ui/button'

interface PaginationProps {
  page: string | string[]
  totalPages: (number | string)[]
  param: string
}
const Pagination = ({ page, totalPages, param }: PaginationProps) => {
  const pageNum = Number(page)
  let startArrayNumber: (number | string)[] = []
  let dotsInitial = '...'
  let dotsLeft = '... '
  let dotsRight = ' ...'

  if (totalPages.length < 6) {
    startArrayNumber = [...totalPages]
  } else if (pageNum >= 1 && pageNum <= 3) {
    startArrayNumber = [1, 2, 3, 4, dotsInitial, totalPages.length]
  } else if (pageNum === 4) {
    const sliced = totalPages.slice(0, 5)
    startArrayNumber = [...sliced, dotsInitial, totalPages.length]
  } else if (pageNum > 4 && pageNum < totalPages.length - 2) {
    const sliced1 = totalPages.slice(pageNum - 2, pageNum)
    const sliced2 = totalPages.slice(pageNum, pageNum + 1)
    startArrayNumber = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, totalPages.length]
  } else if (pageNum > totalPages.length - 3) {
    const sliced = totalPages.slice(totalPages.length - 4)
    startArrayNumber = [1, dotsLeft, ...sliced]
  }

  return (
    <nav className="w-full text-center" aria-label="Page navigation">
      <ul className="inline-flex items-center gap-4 text-sm">
        <li
          className={`rounded-full inline-flex justify-center overflow-hidden w-10 ${
            pageNum === 1 ? '' : 'hover:bg-gray-200'
          } `}
        >
          <Link
            // href={createQueryString(param, `${pageNum > 1 ? pageNum - 1 : 1}`)}
            href={`${param}${pageNum > 1 ? pageNum - 1 : 1}`}
            className={buttonStyles({ intent: 'text', rounded: 'full', sizes: 'sm', disabled: pageNum === 1 })}
          >
            Prev
          </Link>
        </li>

        {startArrayNumber.map((page, index) => {
          const isActivePageClass = page === pageNum ? 'bg-blue-500 text-white' : ''
          const movePage =
            page === dotsLeft ? pageNum - 1 : page === dotsInitial || page === dotsRight ? pageNum + 1 : page

          return (
            <li className="rounded-full inline-flex justify-center overflow-hidden w-8 hover:bg-gray-200" key={index}>
              <Link
                href={`${param}${movePage}`}
                className={buttonStyles({ intent: 'text', rounded: 'full', sizes: 'sm', className: isActivePageClass })}
              >
                {page}
              </Link>
            </li>
          )
        })}
        <li
          className={`rounded-full inline-flex justify-center overflow-hidden w-10 ${
            pageNum < totalPages.length ? 'hover:bg-gray-200' : ''
          } `}
        >
          <Link
            href={`${param}${pageNum < totalPages.length ? pageNum + 1 : pageNum}`}
            className={buttonStyles({
              intent: 'text',
              rounded: 'full',
              sizes: 'sm',
              disabled: pageNum === totalPages.length,
            })}
          >
            Next
          </Link>
        </li>
      </ul>
    </nav>
  )
}
export default Pagination
