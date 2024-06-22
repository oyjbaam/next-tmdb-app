import { ChannelType, GenreResponseType, ListResponseType } from '../types'
import { requestFetch } from './fetchConfig'

/**
 * @returns 장르 목록 리스트
 */
export const getGenreList = (channel: ChannelType): Promise<GenreResponseType> => {
  return requestFetch(`/genre/${channel}/list`)
}

/**
 * @return 필터 검색 결과
 */
export const getDiscoverList = (tpye: 'movie' | 'tv', params: string): Promise<ListResponseType> => {
  return requestFetch(`/discover/${tpye}?${params}`)
}
