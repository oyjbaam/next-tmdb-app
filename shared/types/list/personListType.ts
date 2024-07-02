import * as z from 'zod'
import { CommonMediaSchema } from './commonListType'

// Known For 스키마
const KnownForSchema = z.object({
  backdrop_path: z.string().nullable(),
  id: z.number(),
  title: z.string().optional(),
  original_title: z.string().optional(),
  name: z.string().optional(),
  original_name: z.string().optional(),
  overview: z.string().nullable().optional(),
  poster_path: z.string().nullable(),
  media_type: z.string(),
  adult: z.boolean().optional(),
  original_language: z.string().optional(),
  genre_ids: z.array(z.number()).optional(),
  popularity: z.number().optional(),
  release_date: z.string().optional(),
  first_air_date: z.string().optional(),
  video: z.boolean().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
  origin_country: z.array(z.string()).optional(),
})

// 인물 스키마
export const PersonListSchema = CommonMediaSchema.extend({
  name: z.string(),
  original_name: z.string(),
  media_type: z.literal('person'),
  popularity: z.number().optional(),
  gender: z.number(),
  known_for_department: z.string(),
  profile_path: z.string().nullable(),
  known_for: z.array(KnownForSchema),
})

export type PersonListResponseType = z.infer<typeof PersonListSchema>
