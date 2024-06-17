import { MovieDetailType } from './movieDetailType'
import { TvDetailType } from './tvDetailType'

export type DetailValueResponseType<T> = T extends 'movie' ? MovieDetailType : TvDetailType
