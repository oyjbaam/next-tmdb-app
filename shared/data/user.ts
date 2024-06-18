import { db } from '../db'

/**
 *
 * @returns db에서 email 조회
 */
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } })
    return user
  } catch {
    return null
  }
}

/**
 *
 * @returns db에서 id 조회
 */
export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } })
    return user
  } catch {
    return null
  }
}
