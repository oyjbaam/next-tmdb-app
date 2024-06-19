'use client'
import { createContext, useEffect, useState } from 'react'

type ValueType = { toggleSidebar: boolean; setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>> }

export const SidebarContext = createContext<ValueType>({ toggleSidebar: false, setToggleSidebar: () => false })

/**
 * 사이드 네비 토글 Context
 */
const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  const value = { toggleSidebar, setToggleSidebar }

  useEffect(() => {
    if (toggleSidebar) {
      document.body.classList.add('md:pr-[15px]', 'md:overflow-hidden')
    } else {
      document.body.classList.remove('md:pr-[15px]', 'md:overflow-hidden')
    }
  }, [toggleSidebar])

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
export default SidebarProvider
