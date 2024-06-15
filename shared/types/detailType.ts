export type DetailValueResponse = CommonDetail & TvDetail & MovieDetail
export type CommonDetail = {
  adult: boolean
  backdrop_path: string | null
  id: number
  genres: Genre[]
  homepage: string | null
  original_language: string
  overview: string
  popularity: number
  poster_path: string | null
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string | null
  vote_average: number
  vote_count: number
}
export type MovieDetail = {
  adult: boolean
  belongs_to_collection: string | null
  budget: number
  imdb_id: string | null
  original_title: string
  release_date: string
  revenue: number
  runtime: number | null
  title: string
  video: boolean
}
export type TvDetail = {
  created_by: CreatedBy[]
  episode_run_time: number[]
  first_air_date: string
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air: string | null
  networks: Networks[]
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_name: string
  seasons: Seasons[]
  type: string
}
type CreatedBy = {
  id: number
  credit_id: string
  name: string
  gender: number
  profile_path: string | null
}

type LastEpisodeToAir = {
  id: number
  name: string
  overview: string
  air_date: string
  episode_number: number
  production_code: string
  season_number: number
  still_path: string | null
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

type Genre = {
  id: number
  name: string
}

type ProductionCompany = {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

type ProductionCountry = {
  iso_3166_1: string
  name: string
}

type SpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}
