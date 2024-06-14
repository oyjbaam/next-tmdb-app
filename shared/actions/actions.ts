'use server'
import { redirect } from 'next/navigation'

export const navigateSearchPage = async (prevState: null | void, formData: FormData) => {
  const inputText = formData.get('search-input') as string
  const query = encodeURIComponent(inputText)
  if (!inputText.trim()) return
  redirect(`/search/multi?query=${query}&page=1`)
}
