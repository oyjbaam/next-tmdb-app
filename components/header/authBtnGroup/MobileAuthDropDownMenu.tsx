import Link from 'next/link'
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

type MobileAuthDropDownMenuProps = {
  onClick: () => void
}

const MobileAuthDropDownMenu = ({ onClick }: MobileAuthDropDownMenuProps) => {
  return (
    <DropdownMenuContent className="w-32 dark:bg-slate-800" align="end">
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <Link title="로그인으로 이동" href="/auth/login" className="text-sm font-bold" onClick={onClick}>
            Login
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link title="회원가입으로 이동" href="/auth/signup" className="text-sm font-bold" onClick={onClick}>
            Signup
          </Link>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  )
}

export default MobileAuthDropDownMenu
