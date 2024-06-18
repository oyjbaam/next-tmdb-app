import AuthButtonGroup from './AuthButtonGroup'
import ToggleTheme from './ToggleTheme'
import SearchInput from './searchInput'
import ToggleMenuButton from './ToggleMenuButton'
import Logo from '../common/Logo'
import FlexBox from '../ui/FlexBox'
import { auth } from '@/auth'
import IsLoginButton from './IsLoginButton'

const DefaultHeader = async () => {
  const session = await auth()

  return (
    <header className="w-full py-3 px-4 flex items-center justify-between">
      <FlexBox alignItems="center" className="gap-2">
        <ToggleMenuButton />
        <Logo />
        <SearchInput />
      </FlexBox>
      <FlexBox justifyContent="between" alignItems="center">
        <ul className="flex items-center gap-4 relative">
          <li>
            <ToggleTheme />
          </li>
          {session ? <IsLoginButton session={session} /> : <AuthButtonGroup />}
        </ul>
      </FlexBox>
    </header>
  )
}

export default DefaultHeader
