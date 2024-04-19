import { notFound } from 'next/navigation'
export const combineChannelAndPath = (channel: string, path: string, query: string | undefined) => {
  switch (channel) {
    case 'movie':
      return `/${channel}/${path}?language=ko-kr&page=`
    case 'tv':
      return `/${channel}/${path}?language=ko-kr&page=`
    case 'search':
      if (!query) return notFound()
      return `/${channel}/${path}?language=ko-kr&query=${query}&page=`
    default:
      return notFound()
  }
}
