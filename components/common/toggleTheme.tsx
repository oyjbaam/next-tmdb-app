'use client'
import React, { useState } from 'react'
import { IoMoon } from 'react-icons/io5'
import { LuSunDim } from 'react-icons/lu'

import useOutsideClick from '@/shared/hooks/useOutsideClick'
import { useTheme } from 'next-themes'
import { Button, IconButton } from '../ui/button'

const IconList = [
  { id: 'light', name: 'Light', icon: LuSunDim },
  { id: 'dark', name: 'Dark', icon: IoMoon },
]

const ToggleTheme = () => {
  const [openToggleMenu, setOpenToggleMenu] = useState(false)
  const { theme, setTheme } = useTheme()
  const handleToggleMenu = () => {
    setOpenToggleMenu(prev => !prev)
  }
  const handleSetTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setTheme(target.id)
    setOpenToggleMenu(false)
  }
  const toggleMenuRef = useOutsideClick<HTMLDivElement>(() => setOpenToggleMenu(false))
  const shouldShowNav = openToggleMenu ? 'block' : 'hidden'
  return (
    <>
      <div className="relative z-40 inline-block text-left" ref={toggleMenuRef}>
        <IconButton
          aria-label="테마 아이콘"
          icon={theme === 'light' ? LuSunDim : IoMoon}
          intent="text"
          onClick={handleToggleMenu}
        />
        {openToggleMenu && (
          <div
            className={
              'absolute py-2 right-0 z-20 mt-2 origin-top-right animate-motionFromTop rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-600 '
            }
            role="menu"
            aria-labelledby="menu-button"
          >
            <ul className="flex flex-col gap-4">
              {IconList.map(icon => {
                const activeClass = icon.id === theme ? 'text-violet-600 dark:bg-violet-300' : ''
                return (
                  <li
                    key={icon.name}
                    className={`flex items-center cursor-pointer lg:dark:hover:bg-slate-500 ${activeClass}`}
                  >
                    <Button
                      aria-label={`${icon.name} 테마 적용하기`}
                      id={icon.id}
                      leadingIcon={icon.icon}
                      intent="text"
                      onClick={handleSetTheme}
                    >
                      {icon.name}
                    </Button>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
      <div
        className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80 ${shouldShowNav}`}
        aria-hidden="true"
      ></div>
    </>
  )
}

export default ToggleTheme
