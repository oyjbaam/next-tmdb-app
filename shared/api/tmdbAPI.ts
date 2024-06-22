import { requestFetch } from './fetchConfig'
import { type BackDropImageResponseType, type ListResponseType } from '../types'

/**
 *
 * @returns 영화,TV 리스트
 */
export const getMovieTvList = (url: string): Promise<ListResponseType> => {
  return requestFetch(url)
}

/**
 * @returns 홈 배너 이미지 목록
 */
export const getMainBannerImg = (): Promise<BackDropImageResponseType> => {
  return requestFetch('/discover/movie?with_network=123')
}

/**
 * @returns 영화,TV 인기 목록
 */
export const getPopular = (path: string): Promise<ListResponseType> => {
  return requestFetch(`/${path}/popular`)
}

/**
 * @returns 영화,TV 트렌딩 목록
 */
export const getTrending = async (path: string): Promise<ListResponseType> => {
  return requestFetch(`/trending/all/${path}`)
}
