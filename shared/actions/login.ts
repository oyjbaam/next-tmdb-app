'use server'
import * as z from 'zod'
import { LoginSchema } from '@/app/auth/login/schema/loginSchema'
import { getUserByEmail } from '../data/user'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: '입력정보가 잘못되었습니다.' }
  }
  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: '이메일이 존재하지 않습니다.' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/',
    })
    return { success: 'Login successful!' }
  } catch (error) {
    // todo
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' }

        default:
          return { error: 'Something went wrong!' }
      }
    }

    throw error
  }
}
