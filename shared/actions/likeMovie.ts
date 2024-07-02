'use server'

import { db } from '../db'
import type { CardDataType } from '@/shared/types/cardDataType'
import { getLikedByUserIdAndTmdbId } from '../data'
import { ExtendedUser } from '@/next-auth'
import { revalidatePath } from 'next/cache'

export const toggleLikeMovie = async (cardData: CardDataType, user?: ExtendedUser) => {
  if (!user) {
    return {
      error: '로그인이 필요합니다.',
    }
  }

  try {
    const existingLike = await getLikedByUserIdAndTmdbId(cardData.id, user.id)

    if (existingLike) {
      // 이미 좋아요한 경우, 좋아요 취소
      await db.likedMovie.delete({
        where: { id: existingLike.id },
      })
      revalidatePath('/')
    } else {
      // 새로운 좋아요 추가
      await db.likedMovie.create({
        data: {
          userId: user.id as string,
          tmdbId: cardData.id,
          title: cardData.title,
          releaseDate: cardData.date,
          imgPath: cardData.imgPath,
          vote: cardData.vote ?? 0,
          mediaType: cardData.mediaType,
        },
      })
      revalidatePath('/')
    }
  } catch (error) {
    console.error('Error in toggleLikeMovie:', error)
    throw error
  }
}
