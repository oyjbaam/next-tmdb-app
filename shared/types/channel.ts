import { PATH_NAME } from '@/app/constants'

export type ChannelType = 'movie' | 'tv' | 'search'
export type MediaType = 'movie' | 'tv' | 'person'
export type PathType = keyof typeof PATH_NAME
