import NextAuth from 'next-auth'
import authConfig from './authConfig'
import { getUserById } from '@/shared/data/user'
import { getAccountByUserId } from '@/shared/data/account'

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    signIn: async () => true,
    jwt: async ({ token }) => {
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub)
      if (!existingUser) return token
      const existingAccount = await getAccountByUserId(existingUser.id)

      token.isOAuth = !!existingAccount
      token.name = existingUser.name
      token.email = existingUser.email
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled
      return token
    },
    session: async ({ session, token }) => {
      if (token.sub && session.user) {
        session.user.id = token.sub
      }

      if (token.role && session.user) {
        session.user.role = token.role
      }
      if (session.user) {
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean
        session.user.name = token.name
        session.user.email = token.email as string
        session.user.isOAuth = token.isOAuth as boolean
      }
      // console.log('session', session)
      return session
    },
    redirect: async ({ url, baseUrl }) => {
      console.log('baseUrl', baseUrl)
      if (url.startsWith('/')) return `${baseUrl}${url}`
      if (url) {
        const { search, origin } = new URL(url)
        console.log('urldddd', url)
        const callbackUrl = new URLSearchParams(search).get('callbackUrl')
        console.log('callbackUrl', callbackUrl)
        console.log('origin', origin)
      }
      // if (url.startsWith(baseUrl)) {
      //   console.log('urldddddd', url);
      //   const callbackUrl = new URL(url).searchParams.get('callbackUrl');
      //   console.log('callbackUrl', callbackUrl);
      //   if (callbackUrl) {
      //     const decodedCallbackUrl = decodeURIComponent(callbackUrl);
      //     console.log('`${baseUrl}${decodedCallbackUrl}`', `${baseUrl}${decodedCallbackUrl}`);
      //     return `${baseUrl}${decodedCallbackUrl}`;
      //   }
      //   return url;
      // }

      return baseUrl
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24,
  },
  ...authConfig,
})
