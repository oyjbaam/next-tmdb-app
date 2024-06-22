import { Genre } from '@/shared/types'

export type DetailDataType = {
  original_title: string | null
  title: string | null
  date: string | null
  runtime?: number | null
  episode?: number
  vote?: number
  imgPath: string | null
  overView: string | null
  genres?: Genre[]
}
