import React from 'react'

type PageTitleProps = {
  path: string
  channel: string
}
const returnTitle = (path: string, channel: string) => {
  if (channel === 'movie') {
    switch (path) {
      case 'popular':
        return '인기 영화'
      case 'now_playing':
        return '현재 상영중인 영화'
      case 'upcoming':
        return '개봉 예정인 영화'
      case 'top_rated':
        return '높은 평점인 영화'
      default:
        return ''
    }
  }
  switch (path) {
    case 'popular':
      return '인기 TV 프로그램'
    case 'airing_today':
      return '오늘 방영 프로그램'
    case 'on_the_air':
      return 'TV 방영중'
    case 'top_rated':
      return '높은 평점 프로그램'
    default:
      return ''
  }
}

const PageTitle = ({ path, channel }: PageTitleProps) => {
  return (
    <section className="pt-8 pb-4">
      <h1 className="text-xl font-semibold">{returnTitle(path, channel)}</h1>
    </section>
  )
}

export default PageTitle
