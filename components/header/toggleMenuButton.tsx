'use client'
import React from 'react'
import IconButton from '../ui/iconButton'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { useSidebarToggle } from '@/context/toggleContext'
const ToggleMenuButton = () => {
  const { setToggleMenu } = useSidebarToggle()

  const handleToggleMenu = () => {
    setToggleMenu(prev => !prev)
  }

  return (
    <div className="border border-slate-400 rounded-md">
      <IconButton icon={Bars3Icon} intent="text" onClick={handleToggleMenu} />
    </div>
  )
}

export default ToggleMenuButton
