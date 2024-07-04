'use server'
import { db } from '@/shared/db'

/**
 *
 * @returns db에서 만든 목록 조회
 */
export const getMyListById = async (userId: string | undefined) => {
  if (!userId) return
  try {
    const myList = db.movieList.findMany({
      where: { id: userId },
    })
    return myList
  } catch (error) {
    console.error('Error fetching liked movie:', error)
    return null
  }
}
