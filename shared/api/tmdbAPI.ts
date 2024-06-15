import { requestFetch } from '../fetchConfig'
import type {
  MovieResponseType,
  BackDropImageResponse,
  DetailValueResponse,
  TvShowResponse,
  TredingResponseType,
} from '../types'

export const getMovieTvList = async (url: string): Promise<MovieResponseType | TvShowResponse> => {
  return requestFetch(url)
}

export const getMainBannerImg = async (): Promise<BackDropImageResponse> => {
  return requestFetch('/discover/movie?with_network=123')
}

export const getDetail = async (url: string): Promise<DetailValueResponse> => {
  return requestFetch(url)
}

export const getPopular = async (path: string): Promise<MovieResponseType | TvShowResponse> => {
  return requestFetch(`/${path}/popular`)
}

export const getTrending = async (path: string): Promise<TredingResponseType> => {
  return requestFetch(`/trending/all/${path}`)
}
