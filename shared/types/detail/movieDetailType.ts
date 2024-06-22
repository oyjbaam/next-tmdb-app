import * as z from 'zod'
import { CommonDetailSchema } from './commonDetailType'

const BelongsToCollectionSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
  })
  .nullable()

export const MovieDetailSchema = CommonDetailSchema.extend({
  budget: z.number(),
  belongs_to_collection: BelongsToCollectionSchema,
  imdb_id: z.string().nullable(),
  original_title: z.string(),
  release_date: z.string(),
  revenue: z.number(),
  runtime: z.number().nullable(),
  title: z.string(),
  video: z.boolean(),
})

export type MovieDetailType = z.infer<typeof MovieDetailSchema>
