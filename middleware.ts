import authConfig from './auth/authConfig'
import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import { authRoutes, apiAuthPrefix, publicRoutes } from './routes'
import { match } from 'path-to-regexp'
const { auth } = NextAuth(authConfig)

export default auth(req => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  if (isApiAuthRequest(apiAuthPrefix)) {
    return NextResponse.next()
  }

  // 로그인 한 사용자 '/'으로 리디렉션
  if (isAuthRoute(nextUrl.pathname)) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL('/', nextUrl))
    }
    return NextResponse.next()
  }

  // 로그인 X면서, 로그인 필요 페이지 접근시 '/auth/login'으로 리디렉션
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(new URL('/auth/login', nextUrl))
  }
  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}

const isApiAuthRequest = (pathname: string) => pathname.startsWith(apiAuthPrefix)

const isAuthRoute = (pathname: string) => authRoutes.some(url => Boolean(match(url)(pathname)))

const isPublicRoute = (pathname: string) => publicRoutes.some(url => Boolean(match(url)(pathname)))
