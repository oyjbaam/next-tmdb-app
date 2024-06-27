'use server'
import * as z from 'zod'
import { LoginSchema } from '@/app/auth/login/schema/loginSchema'
import { getUserByEmail, generateVerifiToken, sendVerificationEmail } from '@/shared/data'
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

  if (!existingUser.emailVerified) {
    const verifiToken = await generateVerifiToken(existingUser.email)

    await sendVerificationEmail(verifiToken.email, verifiToken.token)

    return { success: '인증 이메일이 전송되었습니다.' }
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: '/',
    })
    return { success: '로그인 되었습니다.' }
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.cause?.err instanceof Error) {
        return { error: error.cause.err.message }
      }
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: '이메일 또는 비밀번호를 확인해 주세요' }

        default:
          return { error: 'Something went wrong!' }
      }
    }
    throw error
  }
}
