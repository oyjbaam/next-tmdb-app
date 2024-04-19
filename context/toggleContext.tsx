'use client'
import { createContext, useContext, useState } from 'react'

type ValueType = { toggleMenu: boolean; setToggleMenu: React.Dispatch<React.SetStateAction<boolean>> }

const SidebarContext = createContext<ValueType>({ toggleMenu: false, setToggleMenu: () => false })
const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const value = { toggleMenu, setToggleMenu }

  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
}
export default SidebarProvider

export const useSidebarToggle = () => useContext(SidebarContext)
