import { db } from '@/shared/db'

/**
 * @returns db에서 좋아요 영화 목록 조회
 */
export const getLikedByUserIdAndTmdbId = async (id: number, userId: string | undefined) => {
  if (!userId) return
  try {
    const likedMovie = await db.likedMovie.findFirst({
      where: {
        userId: userId,
        tmdbId: id,
      },
    })
    return likedMovie
  } catch (error) {
    console.error('Error fetching liked movie:', error)
    return null
  }
}

/**
 *
 * @returns db에서 좋아요 목록 리스트 리턴
 */
export const getLikedList = async (userId: string | undefined) => {
  if (!userId) return
  try {
    const likedList = await db.likedMovie.findMany({
      where: { userId },
    })
    return likedList
  } catch (error) {
    console.error('Error fetching liked movie:', error)
    return null
  }
}
