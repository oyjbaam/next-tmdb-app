'use client'
import IconInput from '@/app/ui/iconInput'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { useFormState } from 'react-dom'
import { getSearch } from '@/lib/actions'
import { useRouter } from 'next/navigation'

const SearchInput = () => {
  const router = useRouter()

  const goSearchPage = (prevState: null | void, formData: FormData) => {
    const inputText = formData.get('search-input')
    router.push(`/search/multi?query=${inputText}&page=1`)
  }

  const [state, formAction] = useFormState(goSearchPage, null)

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
