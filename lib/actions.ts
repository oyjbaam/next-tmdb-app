'use server'
import { fetchOption } from '@/util/fetchOption'
import { BASE_URL } from '@/util/fetchOption'
import type { Method } from '@/util/fetchOption'
import { redirect } from 'next/navigation'
/**
 * @param url path
 * @param method 'get' | 'post' | 'delete' | 'put' | 'patch'
 * @returns res.json()
 */
export const fetcher = async (url: string, method: Method) => {
  const res = await fetch(`${BASE_URL}${url}`, fetchOption(method))
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong Error..')
  }
}

export const navigateSearchPage = async (prevState: null | void, formData: FormData) => {
  const inputText = formData.get('search-input') as string
  if (!inputText.trim()) return
  redirect(`/search/multi?query=${inputText}&page=1`)
}
