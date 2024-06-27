'use client'
import { buttonStyles } from '@/components/ui/button'
import Link from 'next/link'
import { useQueryString } from '@/shared/hooks/useQueryString'
import FlexBox from '@/components/ui/FlexBox'

const FilterSubmitButton = () => {
  const { pathname, params } = useQueryString()

  return (
    <>
      <hr className="dark:bg-slate-400 bg-slate-500 h-[1px] border-0" />
      <FlexBox className="gap-4">
        <Link href={{ pathname, query: '' }} className={buttonStyles({ sizes: 'sm', className: 'w-full' })}>
          되돌리기
        </Link>
        <Link
          className={buttonStyles({ sizes: 'sm', className: 'w-full' })}
          href={{
            pathname,
            query: {
              discover: 'true',
              'primary_release_date.gte': params.get('primary_release_date.gte'),
              'primary_release_date.lte': params.get('primary_release_date.lte'),
              with_genres: params.get('with_genres'),
            },
          }}
        >
          검색
        </Link>
      </FlexBox>
    </>
  )
}

export default FilterSubmitButton
