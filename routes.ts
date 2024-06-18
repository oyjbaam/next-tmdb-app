export const publicRoutes: string[] = ['/movie/:path*', '/tv/:path*']

export const movieChannelRoutes: string[] = [
  '/movie/popular',
  '/movie/now_playing',
  '/movie/upcoming',
  '/movie/top_rated',
]

export const tvChannelRoutes: string[] = ['/tv/popular', '/tv/airing_today', '/tv/on_the_air', '/tv/top_rated']

/**
 * 인증에 사용되는 경로 배열
 */
export const authRoutes: string[] = ['/auth/login', '/auth/signup', '/auth/error']

/**
 * API 인증 경로의 접두사 이 접두사로 시작하는 경로는 API 인증 목적으로 사용
 */
export const apiAuthPrefix: string = '/api/auth'
