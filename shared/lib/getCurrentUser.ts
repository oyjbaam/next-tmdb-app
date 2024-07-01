'use server'
import { auth } from '@/auth'

export const getcurrentUser = async () => {
  const session = await auth()

  return session?.user
}
