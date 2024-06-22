import { requestFetch } from './fetchConfig'
import {
  type CreditsResponseType,
  type VideoResponseType,
  ImageResponseType,
  MovieDetailType,
  TvDetailType,
  PersonDetailResponseType,
  MediaType,
} from '../types'

/**
 * @returns 영화,Tv 디테일
 */
export const getDetail = (
  mediaType: MediaType,
  id: string
): Promise<MovieDetailType | TvDetailType | PersonDetailResponseType> => {
  return requestFetch(`/${mediaType}/${id}`)
}

/**
 * @returns 제작 참여 목록
 */
export const getCredits = (mediaType: MediaType, id: string): Promise<CreditsResponseType> => {
  return requestFetch(`/${mediaType}/${id}/credits`)
}

/**
 * @returns 비디오/이미지 목록
 */
export const getVideoOrImage = (
  mediaType: MediaType,
  id: string,
  type: 'videos' | 'images'
): Promise<VideoResponseType | ImageResponseType> => {
  return requestFetch(`/${mediaType}/${id}/${type}`)
}
