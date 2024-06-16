import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button'
import ToggleTheme from '../common/toggleTheme'
import SearchInput from './searchInput'
import ToggleMenuButton from '../common/toggleMenuButton'
import Logo from '../common/logo'
import FlexBox from '../ui/FlexBox'

const MainHeader = () => {
  return (
    <header className="w-full py-3 px-3 flex items-center justify-between">
      <FlexBox alignItems="center" className="gap-2">
        <ToggleMenuButton />
        <Link href="/" aria-label="로고이미지 (메인페이지로 이동)">
          <Logo />
        </Link>
        <SearchInput />
      </FlexBox>
      <FlexBox justifyContent="between" alignItems="center">
        <ul className="flex items-center gap-2 relative">
          <li>
            <ToggleTheme />
          </li>
          <li className="hidden md:flex">
            <Link
              className={buttonStyles({ intent: 'filled', sizes: 'sm' })}
              href="/auth/login"
              aria-label="로그인 페이지로 이동"
            >
              Login
            </Link>
          </li>
          <li className="hidden md:flex">
            <Link
              className={buttonStyles({ intent: 'filled', sizes: 'sm' })}
              href="/auth/signup"
              aria-label="회원가입 페이지로 이동"
            >
              Signup
            </Link>
          </li>
        </ul>
      </FlexBox>
    </header>
  )
}

export default MainHeader
