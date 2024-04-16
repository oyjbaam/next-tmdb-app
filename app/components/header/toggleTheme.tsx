'use client'
import React, { useState } from 'react'
import { MoonIcon, ComputerDesktopIcon } from '@heroicons/react/20/solid'
import { SunIcon } from '@heroicons/react/24/outline'
import IconButton from '@/app/ui/iconButton'
import { Button } from '@/app/ui/button'
import useOutsideClick from '@/hooks/useOutsideClick'
import { useTheme } from 'next-themes'

const IconList = [
  { id: 'light', name: 'Light', icon: SunIcon },
  { id: 'dark', name: 'Dark', icon: MoonIcon },
  { id: 'system', name: 'System', icon: ComputerDesktopIcon },
]

const ToggleTheme = () => {
  const [openToggleMenu, setOpenToggleMenu] = useState(false)
  const { theme, setTheme } = useTheme()
  const handleToggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setOpenToggleMenu(prev => !prev)
  }
  const handleSetTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement
    setTheme(target.id)
  }
  const toggleMenuRef = useOutsideClick<HTMLDivElement>(() => setOpenToggleMenu(false))
  const toggleMenuClass = openToggleMenu ? 'ease-out opacity-100 scale-100' : 'ease-in opacity-0 scale-95'

  return (
    <div className="relative inline-block text-left" ref={toggleMenuRef}>
      {theme === 'light' && <IconButton icon={SunIcon} intent="text" onClick={handleToggleMenu} />}
      {theme === 'dark' && <IconButton icon={MoonIcon} intent="text" onClick={handleToggleMenu} />}
      {theme === 'system' && <IconButton icon={ComputerDesktopIcon} intent="text" onClick={handleToggleMenu} />}
      <div
        className={`absolute py-2 right-0 z-20 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-600 transition duration-200 transform ${toggleMenuClass}`}
        role="menu"
        aria-labelledby="menu-button"
      >
        <ul className="flex flex-col gap-4">
          {IconList.map(icon => (
            <li key={icon.name} className="flex items-center cursor-pointer dark:hover:bg-slate-500">
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
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToggleTheme
