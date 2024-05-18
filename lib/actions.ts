'use server'
import { fetchOption, Method } from '@/util/fetchOption'
import { redirect } from 'next/navigation'

const BASE_URL = process.env.NEXT_PUBLIC_BASEURL

/**
 * @param path (required) url-path, string
 * @param method (optional) 'get' | 'post' | 'delete' | 'put' | 'patch'
 * @param query (optional) query parameter | string
 * @param cache (optional(default)) cacheOption "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload";
 * @param next (optional) revalidate?: number | false , tags?: string[]
 * @returns res.json()
 */
export const fetcher = async <T>(
  path: string,
  method: Method = 'get',
  query?: string,
  cache?: RequestCache,
  next?: NextFetchRequestConfig
): Promise<T> => {
  const fetchUrl = query ? `${BASE_URL}${path}?language=ko-kr&${query}` : `${BASE_URL}${path}?language=ko-kr`

  const res = await fetch(fetchUrl, { ...fetchOption(method), cache, next })
  if (res.ok) {
    return res.json()
  } else {
    throw new Error('Something went wrong Error..')
  }
}

export const navigateSearchPage = async (prevState: null | void, formData: FormData) => {
  const inputText = formData.get('search-input') as string
  const query = encodeURIComponent(inputText)
  if (!inputText.trim()) return
  redirect(`/search/multi?query=${query}&page=1`)
}
