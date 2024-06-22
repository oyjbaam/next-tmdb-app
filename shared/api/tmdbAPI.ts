'use server'
import { requestFetch } from './fetchConfig'
import { ChannelType, PathType, type BackDropImageResponseType, type ListResponseType } from '../types'

/**
 * @returns 영화,TV 리스트
 */
export const getMovieTvList = (channel: ChannelType, path: PathType, params: string): Promise<ListResponseType> => {
  return requestFetch(`/${channel}/${path}?${params}`)
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
export const getPopular = (tabValue: ChannelType): Promise<ListResponseType> => {
  return requestFetch(`/${tabValue}/popular`)
}

/**
 * @returns 영화,TV 트렌딩 목록
 */
export const getTrending = async (tabValue: 'day' | 'week'): Promise<ListResponseType> => {
  return requestFetch(`/trending/all/${tabValue}`)
}
