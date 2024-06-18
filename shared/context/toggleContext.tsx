'use client'
import { createContext, useContext, useEffect, useState } from 'react'

type ValueType = { toggleMenu: boolean; setToggleMenu: React.Dispatch<React.SetStateAction<boolean>> }

const SidebarContext = createContext<ValueType>({ toggleMenu: false, setToggleMenu: () => false })

/**
 * 사이드 네비 토글 Context
 */
const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const value = { toggleMenu, setToggleMenu }

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add('md:pr-[15px]', 'md:overflow-hidden')
    } else {
      document.body.classList.remove('md:pr-[15px]', 'md:overflow-hidden')
    }
  }, [toggleMenu])

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
export default SidebarProvider

export const useSidebarToggle = () => {
  return useContext(SidebarContext)
}
