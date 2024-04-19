'use client'
import React, { useState } from 'react'
import { MoonIcon } from '@heroicons/react/20/solid'
import { SunIcon } from '@heroicons/react/24/outline'
import IconButton from '@/components/ui/iconButton'
import { Button } from '@/components/ui/button'
import useOutsideClick from '@/hooks/useOutsideClick'
import { useTheme } from 'next-themes'

const IconList = [
  { id: 'light', name: 'Light', icon: SunIcon },
  { id: 'dark', name: 'Dark', icon: MoonIcon },
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
    setOpenToggleMenu(prev => !prev)
  }
  const toggleMenuRef = useOutsideClick<HTMLDivElement>(() => setOpenToggleMenu(false))

  return (
    <div className="relative inline-block text-left" ref={toggleMenuRef}>
      {theme === 'light' && <IconButton icon={SunIcon} intent="text" onClick={handleToggleMenu} />}
      {theme === 'dark' && <IconButton icon={MoonIcon} intent="text" onClick={handleToggleMenu} />}
      {openToggleMenu && (
        <div
          className={`absolute py-2 right-0 z-20 mt-2 origin-top-right animate-motionFromTop rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-600 `}
          role="menu"
          aria-labelledby="menu-button"
        >
          <ul className="flex flex-col gap-4">
            {IconList.map(icon => {
              const activeClass = icon.id === theme ? 'text-sky-500 dark:bg-slate-500' : ''
              return (
                <li
                  key={icon.name}
                  className={`flex items-center cursor-pointer dark:hover:bg-slate-500 ${activeClass}`}
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
  )
}

export default ToggleTheme
