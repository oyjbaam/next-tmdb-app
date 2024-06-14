'use server'
import * as z from 'zod'
import bcrypt from 'bcryptjs'
import { db } from '../db'
import { SignupSchema } from '@/app/signup/schema/signupSchema'
import { getUserByEmail } from '../data/user'

export const signup = async (values: z.infer<typeof SignupSchema>) => {
  const validatedFields = SignupSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: '정보를 입력해주세요' }
  }
  const { email, password } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return { error: '이미 가입된 아이디입니다.' }
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })

  // const verificationToken = await generateVerificationToken(email)
  // // TODO : Send verification token email
  // await sendVerificationEmail(verificationToken.email, verificationToken.token)
  return { success: '이메일 인증을 해주세요!' }
}
