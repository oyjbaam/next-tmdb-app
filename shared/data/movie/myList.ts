'use server'
import { db } from '@/shared/db'
import { revalidateTag } from 'next/cache'
/**
 *
 * @returns db에서 만든 목록 조회
 */
export const getMyListById = async (userId: string | undefined) => {
  if (!userId) return
  try {
    const myList = db.movieList.findMany({
      where: { userId },
    })
    revalidateTag(`mylist:${userId}`)
    return myList
  } catch (error) {
    console.error('Error fetching liked movie:', error)
    return null
  }
}
