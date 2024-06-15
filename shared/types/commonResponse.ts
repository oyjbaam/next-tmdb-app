import { MovieResult } from './movieType'
import { TvShowResult } from './tvType'

export type CommonResponseType<T> = {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type MovieOrTVResponseType = CommonResponseType<MovieResult | TvShowResult>
