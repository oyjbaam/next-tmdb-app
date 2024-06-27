import NextAuth from 'next-auth'
import authConfig from './authConfig'
import { getUserById } from '@/shared/data/user'
import { getAccountByUserId } from '@/shared/data/account'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/shared/db'

export const { handlers, signIn, signOut, auth } = NextAuth({
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      })
    },
  },
  callbacks: {
    signIn: async ({ user, account }) => {
      // 이메일 확인 없이 Oauth 허용
      if (account?.provider !== 'credentials') return true

      if (user.id) {
        const existingUser = await getUserById(user.id)

        // 이메일 확인 없이 로그인 방지
        if (!existingUser || !existingUser.emailVerified) {
          return false
        }
      }
      return true
    },
    jwt: async ({ token }) => {
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
      const existingAccount = await getAccountByUserId(existingUser.id)

      token.isOAuth = !!existingAccount
      token.name = existingUser.name
      token.email = existingUser.email

      return token
    },
    session: async ({ session, token }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (session.user) {
        session.user.name = token.name
        session.user.email = token.email as string
        session.user.isOAuth = token.isOAuth as boolean
      }

      return session
    },
  },
  adapter: PrismaAdapter(db),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },
  ...authConfig,
})
