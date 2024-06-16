import { requestFetch } from './fetchConfig'
import type {
  MovieResponseType,
  BackDropImageResponseType,
  DetailValueResponseType,
  TvShowResponse,
  MovieOrTVResponseType,
} from '../types'

/**
 * @returns 영화,TV 리스트
 */
export const getMovieTvList = async (url: string): Promise<MovieResponseType | TvShowResponse> => {
  return requestFetch(url)
}

/**
 * @returns 홈 배너 이미지 목록
 */
export const getMainBannerImg = async (): Promise<BackDropImageResponseType> => {
  return requestFetch('/discover/movie?with_network=123')
}

/**
 * @returns 영화,Tv 디테일
 */
export const getDetail = async (url: string): Promise<DetailValueResponseType> => {
  return requestFetch(url)
}

/**
 * @returns 영화,TV 인기 목록
 */
export const getPopular = async (path: string): Promise<MovieOrTVResponseType> => {
  return requestFetch(`/${path}/popular`)
}

/**
 * @returns 영화,TV 트렌딩 목록
 */
export const getTrending = async (path: string): Promise<MovieOrTVResponseType> => {
  return requestFetch(`/trending/all/${path}`)
}
