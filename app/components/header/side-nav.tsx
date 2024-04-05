import Link from 'next/link'
import React from 'react'
import Button from '@/app/ui/button'
const moviePath = [
  { text: '인기 영화', path: '/movie/popular' },
  { text: '현재 상영중', path: '/movie/now_playing' },
  { text: '개봉 예정', path: '/movie/upcoming' },
  { text: '높은 평점', path: '/movie/top_rated' },
]

const tvPath = [
  { text: '인기 TV', path: '/tv/popular' },
  { text: '오늘 방영', path: '/tv/airing_today' },
  { text: 'TV 방영중', path: '/tv/on_the_air' },
  { text: '높은 평점', path: '/tv/top_rated' },
]
const SideNavigation = () => {
  return (
    <aside className="col-span-1">
      <div className="text-xl font-semibold pb-2">Movie</div>
      <ul className="flex gap-2 flex-col">
        {moviePath.map(path => (
          <li
            key={path.path}
            className="text-sm hover:bg-white hover:text-indigo-600 transition duration-200 rounded-r-full cursor-pointer"
          >
            <Link href={path.path} className="block w-full h-full px-1 py-2" aria-label={`${path.text}페이지로 이동`}>
              {path.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="block h-px w-full my-4 bg-gray-600"></div>
      <div className="text-xl font-semibold pb-2">Tv 프로그램</div>
      <ul className="flex gap-2 flex-col">
        {tvPath.map(path => (
          <li
            key={path.path}
            className="text-sm hover:bg-white hover:text-indigo-600 transition duration-200 rounded-r-full cursor-pointer"
          >
            <Link href={path.path} className="block w-full h-full px-1 py-2" aria-label={`${path.text}페이지로 이동`}>
              {path.text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default SideNavigation
