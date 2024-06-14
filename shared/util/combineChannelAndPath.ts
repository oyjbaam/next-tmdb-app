import { notFound } from 'next/navigation'
/**
 *
 * @param channel
 * @param path
 * @param query
 * @returns
 */
export const combineChannelAndPath = (channel: string, path: string, searchQuery: string | undefined) => {
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
