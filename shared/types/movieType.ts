import { CommonResponseType } from './commonResponse'

export type MovieResponseType = CommonResponseType<MovieResult> & { dates: Dates }

type Dates = {
  maximum: string
  minimum: string
}

export type MovieResult = {
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
  release_date: string
  video: boolean
  title: string
  original_title: string
}
