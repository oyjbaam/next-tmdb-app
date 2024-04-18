'use client'
import IconInput from '@/components/ui/iconInput'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useFormState } from 'react-dom'
import { navigateSearchPage } from '@/lib/actions'

const SearchInput = () => {
  const [state, formAction] = useFormState(navigateSearchPage, null)

  return (
    <form action={formAction}>
      <IconInput
        icon={MagnifyingGlassIcon}
        sizes="sm"
        aria-label="영화,TV 제목 검색창"
        placeholder="영화,TV 제목 검색"
        name="search-input"
      />
    </form>
  )
}

export default SearchInput
