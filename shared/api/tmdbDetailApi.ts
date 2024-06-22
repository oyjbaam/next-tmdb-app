import { requestFetch } from './fetchConfig'
import {
  type CreditsResponseType,
  type VideoResponseType,
  ImageResponseType,
  MovieDetailType,
  TvDetailType,
  PersonDetailResponseType,
} from '../types'

/**
 * @returns 영화,Tv 디테일
 */
export const getDetail = (url: string): Promise<MovieDetailType | TvDetailType | PersonDetailResponseType> => {
  return requestFetch(url)
}

/**
 * @returns 제작 참여 목록
 */
export const getCredits = (url: string): Promise<CreditsResponseType> => {
  return requestFetch(`${url}/credits`)
}

/**
 * @returns 비디오/이미지 목록
 */
export const getVideoOrImage = (
  url: string,
  type: 'videos' | 'images'
): Promise<VideoResponseType | ImageResponseType> => {
  return requestFetch(`${url}/${type}`)
}
