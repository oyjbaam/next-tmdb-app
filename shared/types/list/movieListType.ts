import * as z from 'zod'
import { CommonMediaSchema } from './commonListType'

// 영화 스키마
export const MovieListSchema = CommonMediaSchema.extend({
  title: z.string(),
  original_title: z.string(),
  release_date: z.string().nullable(),
  video: z.boolean(),
})

export type MovieListResponseType = z.infer<typeof MovieListSchema>
