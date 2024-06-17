import { MovieDetailType } from '@/shared/types'

export const isMovieDetailTypeGuard = <T extends 'movie' | 'tv'>(
  object: unknown,
  mediaType: T
): object is MovieDetailType => {
  if (mediaType === 'movie' && typeof object === 'object' && object !== null) {
    return 'title' in object
  }
  return false
}
