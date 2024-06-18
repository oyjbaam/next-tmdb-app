import AuthButtonGroup from './AuthButtonGroup'
import ToggleTheme from './ToggleTheme'
import SearchInput from './searchInput'
import ToggleMenuButton from './ToggleMenuButton'
import Logo from '../common/Logo'
import FlexBox from '../ui/FlexBox'
import { auth } from '@/auth'

const DefaultHeader = async () => {
  const session = await auth()

  return (
    <header className="w-full py-3 px-3 flex items-center justify-between">
      <FlexBox alignItems="center" className="gap-2">
        <ToggleMenuButton />
        <Logo />
        <SearchInput />
      </FlexBox>
      <FlexBox justifyContent="between" alignItems="center">
        <ul className="flex items-center gap-2 relative">
          <li>
            <ToggleTheme />
          </li>
          {session ? 'dd' : <AuthButtonGroup />}
        </ul>
      </FlexBox>
    </header>
  )
}

export default DefaultHeader
