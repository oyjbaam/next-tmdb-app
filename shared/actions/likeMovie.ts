'use server'

import { db } from '../db'
import type { CardDataType } from '@/shared/types/cardDataType'
import { getLikedMovieById } from '../data'
import { ExtendedUser } from '@/next-auth'

export const toggleLikeMovie = async (cardData: CardDataType, user?: ExtendedUser) => {
  if (!user) {
    return {
      error: '로그인이 필요합니다.',
    }
  }

  try {
    const existingLike = await getLikedMovieById(cardData.id, user.id)

    if (existingLike) {
      // 이미 좋아요한 경우, 좋아요 취소
      await db.likedMovie.delete({
        where: { id: existingLike.id },
      })

      return { success: '' }
    } else {
      // 새로운 좋아요 추가
      await db.likedMovie.create({
        data: {
          userId: user.id as string,
          tmdbId: cardData.id,
          title: cardData.title,
          releaseDate: cardData.date ? new Date(cardData.date) : null,
          imgPath: cardData.imgPath || null,
          vote: cardData.vote,
          mediaType: cardData.mediaType,
        },
      })

      return { success: '' }
    }
  } catch (error) {
    console.error('Error in toggleLikeMovie:', error)
    throw error
  }
}
