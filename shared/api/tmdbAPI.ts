import { requestFetch } from '../fetchConfig'
import { BackDropImage } from '@/shared/types/backDrop'
export const getMovieTvList = async () => {
  return requestFetch('')
}

export const getMainBannerImg = async (): Promise<BackDropImage> => {
  return requestFetch('/discover/movie?with_network=123')
}
