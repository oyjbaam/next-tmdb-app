import { useContext } from 'react'
import { SidebarContext } from '../context/sidebarToggleProvider'

export const useSidebarToggle = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebarToggle must be used within SidebarToggleProvider')
  }
  return context
}
