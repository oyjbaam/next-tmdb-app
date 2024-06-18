import { requestFetch } from './fetchConfig'
import {
  type CreditsResponseType,
  type VideoResponseType,
  ImageResponseType,
  MovieDetailType,
  TvDetailType,
} from '../types'

/**
 * @returns 영화,Tv 디테일
 */
export const getDetail = async (url: string): Promise<MovieDetailType | TvDetailType> => {
  return await requestFetch(url)
}

/**
 * @returns 제작 참여 목록
 */
export const getCredits = async (url: string): Promise<CreditsResponseType> => {
  return await requestFetch(`${url}/credits`)
}

/**
 * @returns 비디오/이미지 목록
 */
export const getVideoOrImage = async (
  url: string,
  type: 'videos' | 'images'
): Promise<VideoResponseType | ImageResponseType> => {
  return await requestFetch(`${url}/${type}`)
}
