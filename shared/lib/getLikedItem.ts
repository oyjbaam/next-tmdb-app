'use server'

import { getLikedByUserIdAndTmdbId } from '../data'

export const getLikedItem = async (id: number, userId?: string) => {
  const likedMovie = await getLikedByUserIdAndTmdbId(id, userId)

  return !!likedMovie
}
