import * as z from 'zod'

const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
})

const ProductionCompanySchema = z.object({
  id: z.number(),
  logo_path: z.string().nullable(),
  name: z.string(),
  origin_country: z.string(),
})

const ProductionCountrySchema = z.object({
  iso_3166_1: z.string(),
  name: z.string(),
})

const SpokenLanguageSchema = z.object({
  english_name: z.string(),
  iso_639_1: z.string(),
  name: z.string(),
})

export const CommonDetailSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable(),
  genres: z.array(GenreSchema),
  homepage: z.string().nullable(),
  id: z.number(),
  original_language: z.string(),
  overview: z.string().nullable(),
  popularity: z.number(),
  poster_path: z.string().nullable(),
  production_companies: z.array(ProductionCompanySchema),
  production_countries: z.array(ProductionCountrySchema),
  spoken_languages: z.array(SpokenLanguageSchema),
  status: z.string(),
  tagline: z.string().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
})

export type CommonDetailType = z.infer<typeof CommonDetailSchema>
