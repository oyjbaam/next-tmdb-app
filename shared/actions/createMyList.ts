'use server'
import { getMyListById } from '../data/movie/myList'
import { db } from '../db'

export const createMyList = async (listName: string, userId: string) => {
  if (!userId) {
    return {
      error: '로그인이 필요합니다.',
    }
  }

  const existingList = await getMyListById(userId)

  if (existingList) {
    return {
      error: 'dd',
    }
  }

  await db.movieList.create({
    data: {
      name: listName,
      userId: userId,
    },
  })
  return { success: `${listName}이 생성되었습니다.` }
}
