import * as z from 'zod'

export const MypageSettingsSchema = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(
      z
        .string()
        .min(6, {
          message: '비밀번호는 6자 이상 입력해주세요.',
        })
        .max(12, {
          message: '비밀번호는 12자 이하로 입력해주세요.',
        })
    ),
    newPassword: z.optional(z.string()),
  })
  .refine(
    data => {
      if (data.password && !data.newPassword) {
        return false
      }

      return true
    },
    { message: 'New password is required!', path: ['newPassword'] }
  )
  .refine(
    data => {
      if (data.newPassword && !data.password) {
        return false
      }
      return true
    },
    { message: 'password is required!', path: ['password'] }
  )
export type MypageSettingsInputsValues = z.infer<typeof MypageSettingsSchema>
