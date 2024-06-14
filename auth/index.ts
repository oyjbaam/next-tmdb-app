import NextAuth from 'next-auth'
import authConfig from './authConfig'

export const { handlers, signIn, signOut, auth } = NextAuth({
  callbacks: {
    signIn: async () => true,
    jwt: async ({ token, user, trigger, session }) => {
      if (user) {
        token.accessToken = user.accessToken
        token.userId = user.id || ''
      }
      if (trigger === 'update' && session) {
        token = { ...token, ...session.user }
      }
      return token
    },
    session: async ({ session, token }) => {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
        session.user.id = token.userId
      }
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
