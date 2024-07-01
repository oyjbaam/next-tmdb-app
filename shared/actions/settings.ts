'use server'

import { db } from '../db'
import { getUserById } from '../data'
import { MypageSettingsInputsValues } from '@/app/(protected)/mypage/schema/mypageSettingsSchema'
import { auth } from '@/auth'

export const updateInfo = async (values: MypageSettingsInputsValues) => {
  const session = await auth()
  const user = session?.user

  if (!user) return { error: '잘못된 정보입니다.' }

  if (!user.id) {
    return { error: '잘못된 정보입니다.' }
  }

  const dbUser = await getUserById(user.id)

  if (!dbUser) {
    return { error: '잘못된 정보입니다.' }
  }

  if (user.isOAuth) {
    values.email = undefined
    values.password = undefined
    values.newPassword = undefined
  }

  await db.user.update({
    where: { id: dbUser.id },
    data: {
      ...values,
    },
  })

  return { success: '업데이트 되었습니다.' }
}
