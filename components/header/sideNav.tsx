'use client'
import React, { useEffect } from 'react'
import ActiveLink from './activeLink'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { PATH_NAME } from '@/app/constants'
import { useSidebarToggle } from '@/context/toggleContext'
import useOutsideClick from '@/hooks/useOutsideClick'
import Logo from '../common/logo'
import Link from 'next/link'
import IconButton from '../ui/button/iconButton'

const SideNavigation = () => {
  const { toggleMenu, setToggleMenu } = useSidebarToggle()

  const handleToggleMenu = () => {
    setToggleMenu(false)
  }
  const ref = useOutsideClick<HTMLElement>(() => setToggleMenu(false))
  const shouldShowNav = toggleMenu ? 'animate-changeDisplayBlock' : 'hidden'

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add('md:pr-[15px]', 'md:overflow-hidden')
    } else {
      document.body.classList.remove('md:pr-[15px]', 'md:overflow-hidden')
    }
  }, [toggleMenu])

  const currentYear = new Date().getFullYear()

  return (
    <div className={`fixed z-40 inset-0 overflow-y-auto ${shouldShowNav}`} aria-modal="true">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" aria-hidden="true"></div>
      <nav
        ref={ref}
        className={
          'relative flex flex-col left-0 w-52 rounded-r-xl h-screen dark:bg-slate-800 bg-white p-5 animate-motionInLeft'
        }
      >
        <div className="flex justify-between items-center">
          <Link href="/" aria-label="로고이미지 (메인페이지로 이동)">
            <Logo />
          </Link>
          <div
            className="border border-slate-400 rounded-md hover:border-blue-500 transition duration-200"
            onClick={handleToggleMenu}
          >
            <IconButton icon={XMarkIcon} intent="text" />
          </div>
        </div>
        <ul className="text-sm">
          {pathGroup.map(group => {
            return (
              <li key={group.groupName} className="mt-12 lg:mt-8">
                <h5 className="mb-6 lg:mb-5 font-semibold text-slate-900 dark:text-slate-200">{group.groupName}</h5>
                <ul className="space-y-6 lg:space-y-4 border-l border-slate-300 dark:border-slate-600">
                  {group.paths.map(path => {
                    return (
                      <li key={path.text}>
                        <ActiveLink href={path.path} label={path.text}>
                          {path.text}
                        </ActiveLink>
                      </li>
                    )
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
        <footer className="flex items-end flex-grow w-full mb-10">
          <div className="flex items-center gap-4 justify-center border-t w-full py-4 border-slate-300 dark:border-slate-600">
            <h6 className="block">{currentYear} OJ</h6>
            <Link
              href="https://github.com/oyjbaam/next-firebase-app"
              target="_blank"
              className="h-5 w-5 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
            >
              <span className="sr-only">GitHub</span>
              <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
            </Link>
          </div>
        </footer>
      </nav>
    </div>
  )
}

export default SideNavigation

const pathGroup = [
  {
    groupName: 'Movies',
    paths: [
      { text: '인기 영화', path: `/movie/${PATH_NAME.popular}?page=1` },
      { text: '현재 상영중', path: `/movie/${PATH_NAME.now_playing}?page=1` },
      { text: '개봉 예정', path: `/movie/${PATH_NAME.upcoming}?page=1` },
      { text: '높은 평점', path: `/movie/${PATH_NAME.top_rated}?page=1` },
    ],
  },
  {
    groupName: 'TV 프로그램',
    paths: [
      { text: '인기 TV', path: `/tv/${PATH_NAME.popular}?page=1` },
      { text: '오늘 방영', path: `/tv/${PATH_NAME.airing_today}?page=1` },
      { text: 'TV 방영중', path: `/tv/${PATH_NAME.on_the_air}?page=1` },
      { text: '높은 평점', path: `/tv/${PATH_NAME.top_rated}?page=1` },
    ],
  },
]
