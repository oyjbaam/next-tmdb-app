import { requestFetch } from '../fetchConfig'
import { BackDropImage } from '@/shared/types/backDrop'
import { TvShowResults } from '../types/tvType'
import { MovieResults } from '../types/movieType'
import { ResponseDetailValue } from '../types/detailType'

export const getMovieTvList = async (url: string): Promise<MovieResults | TvShowResults> => {
  return requestFetch(url)
}

export const getMainBannerImg = async (): Promise<BackDropImage> => {
  return requestFetch('/discover/movie?with_network=123')
}

export const getDetail = async (url: string): Promise<ResponseDetailValue> => {
  return requestFetch(url)
}

export const getPopular = async (url: string): Promise<MovieResults | TvShowResults> => {
  return requestFetch(url)
}
