import React from 'react'
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { logout } from '@/shared/actions/logout'

const IsLoginDropdownMenu = () => {
  return (
    <DropdownMenuContent className="w-32 dark:bg-slate-800" align="end">
      <DropdownMenuLabel className="dark:text-slate-400">My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem role="button" className="cursor-pointer">
          Settings
        </DropdownMenuItem>
        <DropdownMenuItem></DropdownMenuItem>
        <DropdownMenuItem></DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem
        role="button"
        className="text-sm font-bold cursor-pointer"
        aria-label="로그아웃 버튼"
        title="로그아웃 버튼"
        onClick={() => logout()}
      >
        Logout
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}

export default IsLoginDropdownMenu
