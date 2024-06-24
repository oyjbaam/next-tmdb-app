import { type NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import { LoginSchema } from '@/app/auth/login/schema/loginSchema'
import { getUserByEmail } from '@/shared/data/user'

export default {
  providers: [
    Google({ clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET }),
    GitHub({ clientId: process.env.GITHUB_ID, clientSecret: process.env.GITHUB_SECRET }),
    Credentials({
      authorize: async credentials => {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { email } = validatedFields.data

          try {
            const user = await getUserByEmail(email)
            if (!user || !user.password) return null

            return user
          } catch (error) {
            console.error('Authorization', error)
            if (error instanceof Error) {
              throw new Error(error.message)
            }
          }
        }

        return null
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
} satisfies NextAuthConfig
