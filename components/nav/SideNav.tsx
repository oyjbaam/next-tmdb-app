'use client'
import React from 'react'
import useOutsideClick from '@/shared/hooks/useOutsideClick'
import SideNavHeader from './SideNavHeader'
import SideNavFooter from './SideNavFooter'
import SideNavLinkList from './SideNavLinkList'
import { motion, AnimatePresence } from 'framer-motion'
import { useSidebarToggle } from '@/shared/hooks/useSidebarToggle'

const SideNavigation = () => {
  const { toggleSidebar, setToggleSidebar } = useSidebarToggle()
  const ref = useOutsideClick<HTMLElement>(() => setToggleSidebar(false))

  return (
    <AnimatePresence>
      {toggleSidebar && (
        <motion.div
          initial={{ opacity: 0, left: -100, display: 'none' }}
          animate={{ opacity: 1, left: 0, display: 'block' }}
          exit={{ opacity: 0, left: -100, display: 'none' }}
          transition={{ duration: 0.1, ease: 'easeOut' }}
          className="fixed z-40 inset-0 overflow-y-auto"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" aria-hidden="true"></div>
          <nav
            ref={ref}
            className="relative flex flex-col left-0 w-52 rounded-r-xl h-screen dark:bg-slate-800 bg-white p-5"
          >
            <SideNavHeader />
            <SideNavLinkList />
            <SideNavFooter />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SideNavigation
