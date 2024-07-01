'use server'

import { db } from '../db'
import type { CardDataType } from '@/shared/types/cardDataType'
import { getLikedMovieById } from '../data'
import { getcurrentUser } from '../lib/getCurrentUser'

export async function toggleLikeMovie(cardData: CardDataType): Promise<{ isSuccess: boolean; message: string }> {
  const user = await getcurrentUser()

  if (!user) {
    return {
      isSuccess: false,
      message: '로그인이 필요합니다.',
    }
  }

  try {
    const existingLike = await getLikedMovieById(cardData.id, user.id)

    if (existingLike) {
      // 이미 좋아요한 경우, 좋아요 취소
      await db.likedMovie.delete({
        where: { id: existingLike.id },
      })

      return { isSuccess: false, message: '' }
    } else {
      // 새로운 좋아요 추가
      await db.likedMovie.create({
        data: {
          userId: user.id,
          tmdbId: cardData.id,
          title: cardData.title,
          releaseDate: cardData.date ? new Date(cardData.date) : null,
          imgPath: cardData.imgPath || null,
          vote: cardData.vote,
          mediaType: cardData.mediaType,
        },
      })

      return { isSuccess: true, message: '' }
    }
  } catch (error) {
    console.error('Error in toggleLikeMovie:', error)
    throw error
  }
}
