import * as z from 'zod'

const BackdropSchema = z.object({
  aspect_ratio: z.number(),
  height: z.number(),
  iso_639_1: z.string().nullish(),
  file_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  width: z.number(),
})

const LogoSchema = z.object({
  aspect_ratio: z.number(),
  height: z.number(),
  iso_639_1: z.string().nullish(),
  file_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  width: z.number(),
})

const PosterSchema = z.object({
  aspect_ratio: z.number(),
  height: z.number(),
  iso_639_1: z.string().nullish(),
  file_path: z.string(),
  vote_average: z.number(),
  vote_count: z.number(),
  width: z.number(),
})

export const ImageResponseSchema = z.object({
  backdrops: z.array(BackdropSchema),
  id: z.number(),
  logos: z.array(LogoSchema),
  posters: z.array(PosterSchema),
})

export type ImageResponseType = z.infer<typeof ImageResponseSchema>

export type ImageBackdropType = z.infer<typeof BackdropSchema>
