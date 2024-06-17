export type CommonDetailType = {
  adult: boolean
  backdrop_path: string
  id: number
  genres: Genre[]
  homepage: string
  origin_country: string[]
  original_language: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  vote_average: number
  vote_count: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
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
