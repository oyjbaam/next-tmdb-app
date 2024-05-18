import Credentials from 'next-auth/providers/credentials'
import NextAuth, { NextAuthConfig } from 'next-auth'

const authOptions: NextAuthConfig = {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials
        const users = [{ email: 'test@test.com', password: 'google1234' }]
        const user = users.find(user => user.email === email)
        return user ? { id: '1', email: user.email } : null
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      console.log('jwt token', token)
      return token
    },
    async session({ token, session }) {
      console.log('session', session)
      return session
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
}

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions)
