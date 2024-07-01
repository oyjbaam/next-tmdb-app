import { db } from '@/shared/db'

/**
 * @returns email로 db에서 인증 토큰 찾아 리턴
 */
export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({ where: { email } })
    return verificationToken
  } catch {
    return null
  }
}

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({ where: { token } })
    return verificationToken
  } catch {
    return null
  }
}
