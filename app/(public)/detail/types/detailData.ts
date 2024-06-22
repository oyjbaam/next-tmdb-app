import { Genre } from '@/shared/types'

export type DetailDataType = {
  original_title: string | null
  title: string | null
  date: string | null
  runtime?: number | null
  episode?: number
  vote?: number | null
  imgPath: string | null
  overView: string | null
  genres?: Genre[]
  popularity?: number | null
}
