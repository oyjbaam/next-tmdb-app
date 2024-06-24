'use server'
import * as z from 'zod'
import { LoginSchema } from '@/app/auth/login/schema/loginSchema'
import { getUserByEmail } from '../data/user'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'
import bcrypt from 'bcryptjs'

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: '입력 정보가 잘못되었습니다.' }
  }
  const { email, password } = validatedFields.data

  const existingUser = await getUserByEmail(email)
  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: '아이디가 존재하지 않습니다.' }
  }

  const passwordsMatch = await bcrypt.compare(password, existingUser.password)
  if (!passwordsMatch) {
    return { error: '아이디 또는 패스워드를 확인해주세요.' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/',
    })
    return { success: 'Login successful!' }
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause?.err instanceof Error) {
        return { error: error.cause.err.message }
      }
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
