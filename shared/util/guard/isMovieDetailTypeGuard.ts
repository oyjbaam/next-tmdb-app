import { MovieDetailType, MovieDetailSchema, TvDetailType, TvDetailSchema } from '@/shared/types'

export const isMovieDetailTypeGuard = (data: unknown): data is MovieDetailType => {
  return MovieDetailSchema.safeParse(data).success
}

export const isTvDetailTypeGuard = (data: unknown): data is TvDetailType => {
  return TvDetailSchema.safeParse(data).success
}
