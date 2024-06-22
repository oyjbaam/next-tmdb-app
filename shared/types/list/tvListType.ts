import { CommonMediaSchema } from './commonListType'
import * as z from 'zod'

export const TvListSchema = CommonMediaSchema.extend({
  name: z.string(),
  original_name: z.string(),
  first_air_date: z.string().nullable(),
  origin_country: z.array(z.string()),
})

export type TvListResponseType = z.infer<typeof TvListSchema>
