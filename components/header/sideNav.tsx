'use client'
import React from 'react'
import ActiveLink from './activeLink'
import { FilmIcon } from '@heroicons/react/24/outline'
import { PATH_NAME } from '@/app/constants'
import { useSidebarToggle } from '@/context/toggleContext'
import useOutsideClick from '@/hooks/useOutsideClick'

const moviePath = [
  { text: '인기 영화', path: `/movie/${PATH_NAME.popular}?page=1` },
  { text: '현재 상영중', path: `/movie/${PATH_NAME.now_playing}?page=1` },
  { text: '개봉 예정', path: `/movie/${PATH_NAME.upcoming}?page=1` },
  { text: '높은 평점', path: `/movie/${PATH_NAME.top_rated}?page=1` },
]
const tvPath = [
  { text: '인기 TV', path: `/tv/${PATH_NAME.popular}?page=1` },
  { text: '오늘 방영', path: `/tv/${PATH_NAME.airing_today}?page=1` },
  { text: 'TV 방영중', path: `/tv/${PATH_NAME.on_the_air}?page=1` },
  { text: '높은 평점', path: `/tv/${PATH_NAME.top_rated}?page=1` },
]

const SideNavigation = () => {
  const { toggleMenu, setToggleMenu } = useSidebarToggle()
  const toggleMenuRef = useOutsideClick(() => setToggleMenu(false))
  if (toggleMenu) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }

  const shouldShowNav = toggleMenu ? 'block' : 'hidden'
  return (
    <div className={`fixed right-0 top-0 left-0 bottom-0 z-20 w-full bg-black/50 ${shouldShowNav}`}>
      <aside
        ref={toggleMenuRef}
        className={`absolute flex flex-col left-0 w-80 rounded-r-lg h-screen dark:bg-slate-800 bg-white p-5 animate-motionInLeft`}
      >
        <div className="text-lg font-semibold pb-2 flex items-center gap-1">
          <FilmIcon className="h-4 w-4" />
          <span>Movie</span>
        </div>
        <ul className="flex gap-2 flex-col ">
          {moviePath.map(path => {
            return (
              <li
                key={path.path}
                className="text-sm hover:bg-blue-600 hover:text-white transition duration-200 rounded-r-full cursor-pointer "
              >
                <ActiveLink href={path.path} label={path.text}>
                  {path.text}
                </ActiveLink>
              </li>
            )
          })}
        </ul>
        <div className="block h-px w-full my-4 bg-gray-600"></div>
        <div className="text-lg font-semibold pb-2 flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
            />
          </svg>

          <span>Tv 프로그램</span>
        </div>
        <ul className="flex gap-2 flex-col">
          {tvPath.map(path => (
            <li
              key={path.path}
              className="text-sm hover:bg-blue-600 hover:text-white transition duration-200 rounded-r-full cursor-pointer"
            >
              <ActiveLink href={path.path} label={path.text}>
                {path.text}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  )
}

export default SideNavigation
