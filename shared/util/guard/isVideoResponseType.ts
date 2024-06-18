import { ImageResponseSchema, ImageResponseType, VideoResponseSchema, VideoResponseType } from '@/shared/types'

export const isVideoResponse = (data: unknown): data is VideoResponseType => {
  return VideoResponseSchema.safeParse(data).success
}
export const isImageResponse = (data: unknown): data is ImageResponseType => {
  return ImageResponseSchema.safeParse(data).success
}
