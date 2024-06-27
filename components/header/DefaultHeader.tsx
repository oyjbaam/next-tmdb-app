import AuthButtonGroup from './authBtnGroup/AuthButtonGroup'
import ToggleThemeButton from './themeGroup/ToggleThemeButton'
import SearchInput from './SearchInput'
import ToggleSideBarButton from './ToggleSideBarButton'
import Logo from '../common/Logo'
import FlexBox from '../ui/FlexBox'
import { auth } from '@/auth'
import MoblieAuthButtonGroup from './authBtnGroup/MoblieAuthButtonGroup'

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
        <ul className="flex items-center gap-2 relative">
          <ToggleThemeButton />
          {session ? <MoblieAuthButtonGroup session={session} /> : <AuthButtonGroup />}
        </ul>
      </FlexBox>
    </header>
  )
}

export default DefaultHeader
