'use client'
import React, { useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { LuSunDim } from 'react-icons/lu'
import ThemeDropdownMenu from './ThemeDropdownMenu'
import { useTheme } from 'next-themes'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { IconButton } from '../ui/button'

const ToggleTheme = () => {
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="테마 아이콘" icon={theme === 'light' ? LuSunDim : IoMoon} intent="text" />
        </DropdownMenuTrigger>
        <ThemeDropdownMenu />
      </DropdownMenu>
      {open && (
        <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" aria-hidden="true" />
      )}
    </>
  )
}

export default ToggleTheme
