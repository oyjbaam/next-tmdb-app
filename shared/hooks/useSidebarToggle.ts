import { useContext } from 'react'
import { SidebarContext } from '../context/sidebarToggleContext'

export const useSidebarToggle = () => {
  return useContext(SidebarContext)
}
