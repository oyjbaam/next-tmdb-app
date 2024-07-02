import {
  MovieListResponseType,
  MovieListSchema,
  PersonListResponseType,
  PersonListSchema,
  TvListResponseType,
  TvListSchema,
  LikedListType,
} from '@/shared/types'

export const isMovieListTypeGuard = (data: unknown): data is MovieListResponseType => {
  return MovieListSchema.safeParse(data).success
}

export const isTvListTypeGuard = (data: unknown): data is TvListResponseType => {
  return TvListSchema.safeParse(data).success
}

export const isPersonListTypeGuard = (data: unknown): data is PersonListResponseType => {
  return PersonListSchema.safeParse(data).success
}

export const getCardData = (
  data: MovieListResponseType | TvListResponseType | PersonListResponseType | LikedListType
) => {
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
  if (isPersonListTypeGuard(data)) {
    return {
      id: data.id,
      title: data.name,
      date: data.known_for_department,
      imgPath: data.profile_path,
      vote: data.popularity,
      mediaType: data.media_type,
    }
  }
  return {
    id: data.tmdbId,
    title: data.title,
    date: data.releaseDate,
    imgPath: data.imgPath,
    vote: data.vote,
    mediaType: data.mediaType,
  }
}
