import { ChannelType, GenreResponseType, ListResponseType } from '../types'
import { requestFetch } from './fetchConfig'

/**
 * @returns 장르 목록 리스트
 */
export const getGenreList = (mediaType: ChannelType): Promise<GenreResponseType> => {
  return requestFetch(`/genre/${mediaType}/list`)
}

/**
 * @return 필터 검색 결과
 */
export const getDiscoverList = (mediaType: 'movie' | 'tv', params: string): Promise<ListResponseType> => {
  return requestFetch(`/discover/${mediaType}?${params}`)
}
