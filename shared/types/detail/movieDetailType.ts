import { CommonDetailType } from './commonDetailType'

export type MovieDetailType = {
  budget: number
  belongs_to_collection: BelongsToCollection
  imdb_id: string | null
  original_title: string
  release_date: string
  revenue: number
  runtime: number | null
  title: string
  video: boolean
} & CommonDetailType

type BelongsToCollection = {
  id: number
  name: string
  poster_path: string
  backdrop_path: string
}
