import * as z from 'zod'
import { CommonMediaSchema } from './commonListType'
// 알려진 항목 스키마
const KnownForSchema = z.object({
  backdrop_path: z.string().nullable(),
  id: z.number(),
  original_title: z.string().optional(),
  overview: z.string().nullable(),
  poster_path: z.string().nullable(),
  media_type: z.string(),
  adult: z.boolean().optional(),
  title: z.string().optional(),
  original_language: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
  release_date: z.string().optional(),
  video: z.boolean().optional(),
  vote_average: z.number(),
  vote_count: z.number(),
  name: z.string().optional(),
  original_name: z.string().optional(),
  first_air_date: z.string().optional(),
  origin_country: z.array(z.string()).optional(),
})

// 인물 스키마
export const PersonListSchema = CommonMediaSchema.extend({
  profile_path: z.string().nullable(),
  popularity: z.number(),
  id: z.number(),
  media_type: z.literal('person'),
  name: z.string(),
  gender: z.number(),
  known_for_department: z.string(),
  known_for: z.array(KnownForSchema),
  adult: z.boolean().optional(),
})

export type PersonListResponseType = z.infer<typeof PersonListSchema>
