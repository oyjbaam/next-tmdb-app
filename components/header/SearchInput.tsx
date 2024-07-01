/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
'use client'
import IconInput from '@/components/ui/input/iconInput'
import { CiSearch } from 'react-icons/ci'
import { useFormState } from 'react-dom'
import { navigateSearchPage } from '@/shared/actions/search'

const SearchInput = () => {
  const [state, formAction] = useFormState(navigateSearchPage, null)

  return (
    <form action={formAction}>
      <IconInput
        icon={CiSearch}
        sizes="sm"
        aria-label="영화,TV 제목 검색창"
        placeholder="영화,TV 제목 검색"
        name="search-input"
      />
    </form>
  )
}

export default SearchInput
