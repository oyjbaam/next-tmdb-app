import * as z from 'zod'

export const PersonDetailSchema = z.object({
  adult: z.boolean(),
  also_known_as: z.array(z.string()).nullable(),
  biography: z.string().nullable(),
  birthday: z.string().nullable(),
  deathday: z.string().nullable(),
  gender: z.number().nullable(),
  homepage: z.string().nullable(),
  id: z.number(),
  imdb_id: z.string().nullable(),
  known_for_department: z.string(),
  name: z.string().nullable(),
  place_of_birth: z.string().nullable(),
  popularity: z.number().nullable(),
  profile_path: z.string().nullable(),
})

export type PersonDetailResponseType = z.infer<typeof PersonDetailSchema>
