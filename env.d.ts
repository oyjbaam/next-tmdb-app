/* eslint-disable prettier/prettier */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TMDB_API_KEY: string;
      NEXT_PUBLIC_TMDB_BASEURL: string;
    }
  }
}
export {};
