'use server'

import { db } from '../db'
import type { CardDataType } from '@/shared/types/cardDataType'

export const addMovieToList = async (userId: string, listId: string, cardData: CardDataType) => {
  const list = await db.movieList.findFirst({
    where: {
      id: listId,
      userId: userId,
    },
  })

  if (!list) {
    throw new Error('목록을 찾을 수 없거나 접근 권한이 없습니다.')
  }

  let existingMovie = await db.movie.findFirst({
    where: { tmdbId: cardData.id },
  })

  if (!existingMovie) {
    existingMovie = await db.movie.create({
      data: {
        tmdbId: cardData.id,
        title: cardData.title,
        releaseDate: cardData.date,
        imgPath: cardData.imgPath,
        vote: cardData.vote ?? 0,
        mediaType: cardData.mediaType,
      },
    })
  }

  const movieInList = await db.movieListMovie.findFirst({
    where: {
      movieListId: listId,
      movieId: existingMovie.id,
    },
  })

  if (!movieInList) {
    await db.movieListMovie.create({
      data: {
        movieListId: listId,
        movieId: existingMovie.id,
      },
    })
  }

  return { success: true, message: '영화가 목록에 추가되었습니다.' }
}
