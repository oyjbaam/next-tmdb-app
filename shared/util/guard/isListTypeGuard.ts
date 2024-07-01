import {
  MovieListResponseType,
  MovieListSchema,
  PersonListResponseType,
  TvListResponseType,
  TvListSchema,
} from '@/shared/types'

export const isMovieListTypeGuard = (data: unknown): data is MovieListResponseType => {
  return MovieListSchema.safeParse(data).success
}

export const isTvListTypeGuard = (data: unknown): data is TvListResponseType => {
  return TvListSchema.safeParse(data).success
}

export const getCardData = (data: MovieListResponseType | TvListResponseType | PersonListResponseType) => {
  if (isMovieListTypeGuard(data)) {
    return {
      id: data.id,
      title: data.title,
      date: data.release_date,
      imgPath: data.poster_path,
      vote: data.vote_average,
      mediaType: data.media_type ?? 'movie',
    }
  }
  if (isTvListTypeGuard(data)) {
    return {
      id: data.id,
      title: data.name,
      date: data.first_air_date,
      imgPath: data.poster_path,
      vote: data.vote_average,
      mediaType: data.media_type ?? 'tv',
    }
  }
  return {
    id: data.id,
    title: data.name,
    date: data.known_for_department,
    imgPath: data.profile_path,
    vote: data.popularity,
    mediaType: data.media_type,
  }
}
