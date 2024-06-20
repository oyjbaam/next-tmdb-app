import * as z from 'zod'

import { MovieListSchema } from './movieListType'
import { TvListSchema } from './tvListType'
import { PersonListSchema } from './personListType'

const DatesSchema = z.object({
  maximum: z.string(),
  minimum: z.string(),
})

const ResultSchema = z.object({
  page: z.number(),
  results: z.array(z.union([MovieListSchema, TvListSchema, PersonListSchema])),
  total_results: z.number(),
  total_pages: z.number(),
  dates: DatesSchema.optional(),
})

export type ListResponseType = z.infer<typeof ResultSchema>
