'use server'
import type { MovieType } from '@/types/movieType'
import { fetcher } from '@/util/fetcher'
import { redirect } from 'next/navigation'
export const getSearch = async (prevState: null | void, formData: FormData) => {
  const inputText = formData.get('search-input')
  if (!inputText) return
}
