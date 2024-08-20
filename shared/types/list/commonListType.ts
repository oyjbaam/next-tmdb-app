import * as z from 'zod'

// 공통 미디어 스키마
export const CommonMediaSchema = z.object({
  adult: z.boolean().optional(),
  backdrop_path: z.string().nullable().optional(),
  genre_ids: z.array(z.number()).optional(),
  id: z.number(),
  original_language: z.string().nullable().optional(),
  poster_path: z.string().nullable().optional(),
  popularity: z.number().optional(),
  overview: z.string().nullable().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
  media_type: z.string().optional(),
})
