'use client'
import React from 'react'
import { IconButton } from '../ui/button'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { useSidebarToggle } from '@/shared/context/toggleContext'

const ToggleMenuButton = () => {
  const { setToggleMenu } = useSidebarToggle()

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev)
  }

  return (
    <div
      role="button"
      aria-label="사이드 메뉴바 열기"
      className="border border-slate-400 rounded-md lg:hover:border-violet-500 lg:hover:text-violet-500 transition duration-200"
      onClick={handleToggleMenu}
    >
      <IconButton icon={Bars3Icon} intent="text" aria-hidden />
    </div>
  )
}

export default ToggleMenuButton
