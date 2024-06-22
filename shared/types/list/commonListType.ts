import * as z from 'zod'

// 공통 미디어 스키마
export const CommonMediaSchema = z.object({
  adult: z.boolean().optional(),
  backdrop_path: z.string().nullable(),
  genre_ids: z.array(z.number()),
  id: z.number(),
  original_language: z.string(),
  poster_path: z.string().nullable(),
  popularity: z.number(),
  overview: z.string().nullable(),
  vote_average: z.number(),
  vote_count: z.number(),
  media_type: z.string().optional(),
})
