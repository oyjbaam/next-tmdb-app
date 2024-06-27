'use server'
import { db } from '../db'
import { getUserByEmail, getVerificationTokenByToken } from '../data'

/**
 * 이메일 인증 토큰 검증 및 업데이트, 삭제
 */
export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token)

  if (!existingToken) {
    return { error: '유효하지 않은 인증입니다.' }
  }

  const hasExpired = new Date(existingToken.expires) < new Date()
  if (hasExpired) {
    return { error: '인증 정보가 만료되었습니다.' }
  }

  const existingUser = await getUserByEmail(existingToken.email)
  if (!existingUser) {
    return { error: '이메일이 존재하지 않습니다.' }
  }

  await db.user.update({
    where: { id: existingUser.id },
    data: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  })

  await db.verificationToken.delete({
    where: { id: existingToken.id },
  })

  return { success: '인증되었습니다.' }
}
