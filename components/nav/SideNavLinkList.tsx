import { PATH_NAME } from '@/app/constants'
import ActiveLink from './ActiveLink'
import { useSidebarToggle } from '@/shared/hooks/useSidebarToggle'

const SideNavLinkList = () => {
  const { setToggleSidebar } = useSidebarToggle()

  return (
    <ul className="text-sm">
      {pathGroup.map(group => {
        return (
          <li key={group.groupName} className="mt-12 lg:mt-8" onClick={() => setToggleSidebar(false)}>
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
  )
}

export default SideNavLinkList

const pathGroup = [
  {
    groupName: 'Movies',
    paths: [
      { text: '인기 영화', path: `/movie/${PATH_NAME.popular}` },
      { text: '현재 상영중', path: `/movie/${PATH_NAME.now_playing}` },
      { text: '개봉 예정', path: `/movie/${PATH_NAME.upcoming}` },
      { text: '높은 평점', path: `/movie/${PATH_NAME.top_rated}` },
    ],
  },
  {
    groupName: 'TV 프로그램',
    paths: [
      { text: '인기 TV', path: `/tv/${PATH_NAME.popular}` },
      { text: '오늘 방영', path: `/tv/${PATH_NAME.airing_today}` },
      { text: 'TV 방영중', path: `/tv/${PATH_NAME.on_the_air}` },
      { text: '높은 평점', path: `/tv/${PATH_NAME.top_rated}` },
    ],
  },
]
