import { notFound } from 'next/navigation'
import { ChannelType, PathType } from '../types/channel'
/**
 *
 * @param channel
 * @param path
 * @param query
 * @returns
 */
export const combineChannelAndPath = (channel: ChannelType, path: PathType, searchQuery: string | undefined) => {
  switch (channel) {
    case 'movie':
      return `/${channel}/${path}`
    case 'tv':
      return `/${channel}/${path}`
    case 'search':
      if (!searchQuery) return notFound()
      return `/${channel}/${path}`
    default:
      return notFound()
  }
}
