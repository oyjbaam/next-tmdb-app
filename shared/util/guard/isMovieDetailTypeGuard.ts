import {
  MovieDetailType,
  MovieDetailSchema,
  TvDetailType,
  TvDetailSchema,
  PersonDetailResponseType,
} from '@/shared/types'

export const isMovieDetailTypeGuard = (data: unknown): data is MovieDetailType => {
  return MovieDetailSchema.safeParse(data).success
}

export const isTvDetailTypeGuard = (data: unknown): data is TvDetailType => {
  return TvDetailSchema.safeParse(data).success
}

export const getDetailData = (data: MovieDetailType | TvDetailType | PersonDetailResponseType) => {
  if (isMovieDetailTypeGuard(data)) {
    return {
      original_title: data.original_title,
      title: data.title,
      date: data.release_date,
      runtime: data.runtime,
      vote: data.vote_average,
      imgPath: data.poster_path,
      overView: data.overview,
      genres: data.genres,
    }
  }
  if (isTvDetailTypeGuard(data)) {
    return {
      original_title: data.original_name,
      title: data.name,
      date: data.first_air_date,
      episode: data.number_of_episodes,
      vote: data.vote_average,
      imgPath: data.poster_path,
      overView: data.overview,
      genres: data.genres,
    }
  }
  return {
    original_title: data.name,
    title: data.name,
    date: data.birthday,
    imgPath: data.profile_path,
    overView: data.biography,
  }
}
