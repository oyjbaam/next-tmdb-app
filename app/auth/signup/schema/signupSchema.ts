import * as z from 'zod'

export const SignupSchema = z
  .object({
    name: z.string().min(1, {
      message: '이름을 입력해주세요.',
    }),
    email: z.string().email({ message: '이메일 형식으로 입력해주세요.' }),
    password: z.string().min(6, {
      message: '비밀번호는 6자 이상이어야 합니다.',
    }),
    confirmPassword: z.optional(z.string()),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: '패스워드가 일치하지 않습니다.',
    path: ['confirmPassword'],
  })

export type SignupInputsValues = z.infer<typeof SignupSchema>

export const defaultValues: SignupInputsValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}
