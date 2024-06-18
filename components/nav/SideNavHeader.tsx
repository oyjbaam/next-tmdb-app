import Link from 'next/link'
import Logo from '../common/Logo'
import { IconButton } from '../ui/button'
import { RxCross2 } from 'react-icons/rx'

import { useSidebarToggle } from '@/shared/context/toggleContext'
import FlexBox from '../ui/FlexBox'

const SideNavHeader = () => {
  const { setToggleMenu } = useSidebarToggle()

  return (
    <FlexBox justifyContent="between" alignItems="center">
      <Link href="/" aria-label="로고이미지 (메인페이지로 이동)">
        <Logo />
      </Link>
      <div
        role="button"
        aria-label="사이드바 닫기"
        className="border border-slate-400 rounded-md lg:hover:border-violet-500 transition duration-200"
        onClick={() => setToggleMenu(false)}
      >
        <IconButton icon={RxCross2} intent="text" aria-hidden />
      </div>
    </FlexBox>
  )
}

export default SideNavHeader
