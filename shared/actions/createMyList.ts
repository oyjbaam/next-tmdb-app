'use server'
import { ExtendedUser } from '@/next-auth'
import { getMyListById } from '../data/movie/myList'
import { db } from '../db'

export const createMyList = async (listName: string, user?: ExtendedUser) => {
  if (!user) {
    return {
      error: '로그인이 필요합니다.',
    }
  }

  const existingList = await getMyListById(user.id)

  if (existingList?.some(list => list.name === listName)) {
    return {
      error: '이미 존재하는 목록 이름입니다.',
    }
  }

  await db.movieList.create({
    data: {
      name: listName,
      userId: user.id as string,
    },
  })
  return { success: `'${listName}' 목록이 생성되었습니다.` }
}
