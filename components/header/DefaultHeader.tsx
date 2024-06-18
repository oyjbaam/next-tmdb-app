import AuthButtonGroup from './authGroup/AuthButtonGroup'
import IsLoginButton from './authGroup/IsLoginButton'
import ToggleThemeButton from './themeGroup/ToggleThemeButton'
import SearchInput from './searchInput'
import ToggleSideBarButton from './ToggleSideBarButton'
import Logo from '../common/Logo'
import FlexBox from '../ui/FlexBox'
import { auth } from '@/auth'

const DefaultHeader = async () => {
  const session = await auth()

  return (
    <header className="w-full py-3 px-4 flex items-center justify-between">
      <FlexBox alignItems="center" className="gap-2">
        <ToggleSideBarButton />
        <Logo />
        <SearchInput />
      </FlexBox>
      <FlexBox justifyContent="between" alignItems="center">
        <ul className="flex items-center gap-4 relative">
          <li>
            <ToggleThemeButton />
          </li>
          {session ? <IsLoginButton session={session} /> : <AuthButtonGroup />}
        </ul>
      </FlexBox>
    </header>
  )
}

export default DefaultHeader
