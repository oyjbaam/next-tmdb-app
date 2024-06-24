import { DefaultSession } from 'next-auth'

export type ExtendedUser = DefaultSession['user'] & {
  isTwoFactorEnabled: boolean
  isOAuth: boolean
}
export declare module 'next-auth' {
  interface Session {
    user: ExtendedUser
  }
}

export declare module '@auth/core/jwt' {
  interface JWT {
    accessToken: string
  }
}
