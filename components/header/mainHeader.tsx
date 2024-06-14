import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button'
import ToggleTheme from './toggleTheme'
import SearchInput from './searchInput'
import ToggleMenuButton from './toggleMenuButton'
import Logo from '../common/logo'
const MainHeader = () => {
  return (
    <header className="w-full py-3 px-3 flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <ToggleMenuButton />
        <Link href="/" aria-label="로고이미지 (메인페이지로 이동)">
          <Logo />
        </Link>
        <SearchInput />
      </div>
      <div className="flex justify-between items-center">
        <ul className="flex items-center gap-2 relative">
          <li className="">
            <ToggleTheme />
          </li>
          <li className="hidden md:flex">
            <Link
              className={buttonStyles({ intent: 'filled', sizes: 'sm' })}
              href="/login"
              aria-label="로그인 페이지로 이동"
            >
              Login
            </Link>
          </li>
          <li className="hidden md:flex">
            <Link
              className={buttonStyles({ intent: 'filled', sizes: 'sm' })}
              href="/signup"
              aria-label="회원가입 페이지로 이동"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default MainHeader
