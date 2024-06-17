import { CommonDetailType } from './commonDetailType'

export type TvDetailType = {
  created_by: CreatedBy[]
  episode_run_time: number[]
  first_air_date: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air: NextEpisodeToAir
  networks: Networks[]
  number_of_episodes: number
  number_of_seasons: number
  original_name: string
  seasons: Seasons[]
  type: string
} & CommonDetailType

type CreatedBy = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string | null
}
type NextEpisodeToAir = {
  id: number
  overview: string
  name: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: number | null
  season_number: number
  show_id: number
  still_path: string
}

type LastEpisodeToAir = {
  id: number
  overview: string
  name: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: number | null
  season_number: number
  show_id: number
  still_path: string
}

type Networks = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

type Seasons = {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string | null
  season_number: number
  vote_average: number
}
