import { ChannelType, GenreResponseType } from '../types'
import { requestFetch } from './fetchConfig'

/**
 * @returns 장르 목록 리스트
 */
export const getGenreList = async (channel: ChannelType): Promise<GenreResponseType> => {
  return requestFetch(`/genre/${channel}/list`)
}
