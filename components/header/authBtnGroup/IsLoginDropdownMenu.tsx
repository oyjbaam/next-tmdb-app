import React from 'react'
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { logout } from '@/shared/actions/logout'
import Link from 'next/link'

const IsLoginDropdownMenu = () => {
  return (
    <DropdownMenuContent className="w-32 dark:bg-slate-800" align="end">
      <DropdownMenuLabel className="dark:text-slate-400">My Account</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <Link href="/mypage" title="마이 페이지로 가기">
          <DropdownMenuItem className="cursor-pointer">마이페이지</DropdownMenuItem>
        </Link>
        <Link href="/like-item" title="좋아요 목록 페이지로 가기">
          <DropdownMenuItem className="cursor-pointer">좋아요 목록</DropdownMenuItem>
        </Link>
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
