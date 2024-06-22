'use client'
import { buttonStyles } from '@/components/ui/button'
import Link from 'next/link'
import { useQueryString } from '@/shared/hooks/useQueryString'

const FilterSubmitButton = () => {
  const { pathname, params } = useQueryString()

  return (
    <>
      <hr className="dark:bg-slate-400 bg-slate-500 h-[1px] border-0" />
      <Link
        className={buttonStyles({ sizes: 'sm', className: 'w-full' })}
        href={{ pathname, query: params.toString() + '&discover=true' }}
      >
        검색
      </Link>
    </>
  )
}

export default FilterSubmitButton
