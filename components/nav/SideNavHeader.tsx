import Logo from '../common/Logo'
import { IconButton } from '../ui/button'
import { RxCross2 } from 'react-icons/rx'
import FlexBox from '../ui/FlexBox'
import { useSidebarToggle } from '@/shared/hooks/useSidebarToggle'

const SideNavHeader = () => {
  const { setToggleSidebar } = useSidebarToggle()

  return (
    <FlexBox justifyContent="between" alignItems="center">
      <Logo />
      <div
        role="button"
        aria-label="사이드바 닫기"
        className="border border-slate-400 rounded-md lg:hover:border-violet-500 transition duration-200"
        onClick={() => setToggleSidebar(false)}
      >
        <IconButton icon={RxCross2} intent="text" aria-hidden />
      </div>
    </FlexBox>
  )
}

export default SideNavHeader
