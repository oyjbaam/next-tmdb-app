import Link from 'next/link'
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'

const MobileAuthDropDownMenu = () => {
  return (
    <DropdownMenuContent className="w-32 dark:bg-slate-800" align="end">
      <DropdownMenuGroup>
        <Link title="로그인으로 이동" href="/auth/login" className="text-sm font-bold">
          <DropdownMenuItem>Login</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <Link title="회원가입으로 이동" href="/auth/signup" className="text-sm font-bold">
          <DropdownMenuItem>Signup</DropdownMenuItem>
        </Link>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  )
}

export default MobileAuthDropDownMenu
