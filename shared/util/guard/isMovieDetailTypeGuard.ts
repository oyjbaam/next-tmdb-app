import { MovieDetailType, MovieDetailSchema } from '@/shared/types'

export const isMovieDetailTypeGuard = (data: unknown): data is MovieDetailType => {
  return MovieDetailSchema.safeParse(data).success
}
