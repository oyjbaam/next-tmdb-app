import * as z from 'zod'
import { CommonDetailSchema } from './commonDetailType'

const CreatedBySchema = z.object({
  id: z.number(),
  credit_id: z.string(),
  name: z.string(),
  gender: z.number(),
  profile_path: z.string().nullish(),
})

const NextEpisodeToAirSchema = z.object({
  id: z.number(),
  overview: z.string(),
  name: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  air_date: z.string(),
  episode_number: z.number(),
  episode_type: z.string(),
  production_code: z.string(),
  runtime: z.number().nullish(),
  season_number: z.number(),
  show_id: z.number(),
  still_path: z.string(),
})

const LastEpisodeToAirSchema = z.object({
  id: z.number(),
  overview: z.string(),
  name: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  air_date: z.string(),
  episode_number: z.number(),
  episode_type: z.string(),
  production_code: z.string(),
  runtime: z.number().nullish(),
  season_number: z.number(),
  show_id: z.number(),
  still_path: z.string(),
})

const NetworksSchema = z.object({
  id: z.number(),
  logo_path: z.string().nullish(),
  name: z.string(),
  origin_country: z.string(),
})

const SeasonsSchema = z.object({
  air_date: z.string(),
  episode_count: z.number(),
  id: z.number(),
  name: z.string(),
  overview: z.string(),
  poster_path: z.string().nullish(),
  season_number: z.number(),
  vote_average: z.number(),
})

const TvDetailSchema = CommonDetailSchema.extend({
  created_by: z.array(CreatedBySchema),
  episode_run_time: z.array(z.number()),
  first_air_date: z.string(),
  in_production: z.boolean(),
  languages: z.string(),
  last_air_date: z.string(),
  last_episode_to_air: LastEpisodeToAirSchema,
  name: z.string(),
  next_episode_to_air: NextEpisodeToAirSchema,
  networks: z.array(NetworksSchema),
  number_of_episodes: z.number(),
  number_of_seasons: z.number(),
  original_name: z.string(),
  seasons: z.array(SeasonsSchema),
  type: z.string(),
})

export type TvDetailType = z.infer<typeof TvDetailSchema>
