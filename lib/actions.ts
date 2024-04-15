'use server'
import { redirect } from 'next/navigation'
export const navigateSearchPage = async (prevState: null | void, formData: FormData) => {
  const inputText = formData.get('search-input') as string
  if (!inputText.trim()) return
  redirect(`/search/multi?query=${inputText}&page=1`)
}
