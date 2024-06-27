'use server'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { db } from '../db'
import { SignupSchema } from '@/app/auth/signup/schema/signupSchema'
import { getUserByEmail, generateVerifiToken, sendVerificationEmail } from '@/shared/data'

export const signup = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: '정보를 입력해주세요' }
  }
  const { name, email, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: '이미 가입된 아이디입니다.' }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  })

  const verificationToken = await generateVerifiToken(email)

  await sendVerificationEmail(verificationToken.email, verificationToken.token)
  return { success: '인증 이메일이 전송되었습니다.' }
}
