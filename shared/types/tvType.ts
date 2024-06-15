import { CommonResponseType } from './commonResponse'

export type TvShowResponse = CommonResponseType<TvShowResult>

export type TvShowResult = {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  media_type: string
  original_language: string
  overview: string
  popularity: number
  poster_path: string | null
  vote_average: number
  vote_count: number
  name: string
  original_name: string
  first_air_date: string
  origin_country: string[]
}
