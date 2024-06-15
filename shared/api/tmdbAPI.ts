import { requestFetch } from '../fetchConfig'
import type {
  MovieResponseType,
  BackDropImageResponseType,
  DetailValueResponseType,
  TvShowResponse,
  MovieOrTVResponseType,
} from '../types'

export const getMovieTvList = async (url: string): Promise<MovieResponseType | TvShowResponse> => {
  return requestFetch(url)
}

export const getMainBannerImg = async (): Promise<BackDropImageResponseType> => {
  return requestFetch('/discover/movie?with_network=123')
}

export const getDetail = async (url: string): Promise<DetailValueResponseType> => {
  return requestFetch(url)
}

export const getPopular = async (path: string): Promise<MovieOrTVResponseType> => {
  return requestFetch(`/${path}/popular`)
}

export const getTrending = async (path: string): Promise<MovieOrTVResponseType> => {
  return requestFetch(`/trending/all/${path}`)
}
