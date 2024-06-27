declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CLIENT_URL: string
      TMDB_API_KEY: string
      NEXT_PUBLIC_TMDB_BASEURL: string
      RESEND_API_KEY: string
    }
  }
}
export {}
