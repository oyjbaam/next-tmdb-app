'use client'
import React from 'react'
import { IconButton } from '../ui/button'
import { FaBars } from 'react-icons/fa'
import { useSidebarToggle } from '@/shared/hooks/useSidebarToggle'

const ToggleSideBarButton = () => {
  const { setToggleSidebar } = useSidebarToggle()

  const handleToggleSideBar = () => {
    setToggleSidebar(prev => !prev)
  }

  return (
    <div
      role="button"
      aria-label="사이드 메뉴바 열기"
      title="사이드 메뉴바 열기"
      className="border border-slate-400 rounded-md lg:hover:border-violet-500 lg:hover:text-violet-500 transition duration-200"
      onClick={handleToggleSideBar}
    >
      <IconButton icon={FaBars} intent="text" aria-hidden="true" />
    </div>
  )
}

export default ToggleSideBarButton
