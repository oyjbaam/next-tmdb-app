import { MovieListResponseType, MovieListSchema, TvListResponseType, TvListSchema } from '@/shared/types'

export const isMovieListTypeGuard = (data: unknown): data is MovieListResponseType => {
  return MovieListSchema.safeParse(data).success
}

export const isTvListTypeGuard = (data: unknown): data is TvListResponseType => {
  return TvListSchema.safeParse(data).success
}
