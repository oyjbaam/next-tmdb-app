import * as z from 'zod'
import { CommonDetailSchema } from './commonDetailType'

const BelongsToCollectionSchema = z.object({
  id: z.number(),
  name: z.string(),
  poster_path: z.string(),
  backdrop_path: z.string(),
})

export const MovieDetailSchema = CommonDetailSchema.extend({
  budget: z.number(),
  belongs_to_collection: BelongsToCollectionSchema.nullish(),
  imdb_id: z.string().nullish(),
  original_title: z.string(),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number().nullish(),
  title: z.string(),
  video: z.boolean(),
})

export type MovieDetailType = z.infer<typeof MovieDetailSchema>
