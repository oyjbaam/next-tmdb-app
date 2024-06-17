import { MovieListResultType } from '@/shared/types'

export const isMovieListTypeGuard = (object: unknown): object is MovieListResultType => {
  if (object !== null && typeof object === 'object') {
    return 'title' in object
  }
  return false
}
