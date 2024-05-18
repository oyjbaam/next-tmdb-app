'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
interface ActiveLinkProps {
  children: React.ReactNode | undefined
  href: string
  label: string
}

const ActiveLink = ({ children, href, label }: ActiveLinkProps) => {
  const path = usePathname()

  const isActiveClass = (name: string) => {
    if (href.startsWith(name) && name !== '/')
      return 'text-sky-500 border-sky-400 font-semibold dark:text-sky-400 dark:border-sky-400'
    return 'hover:border-slate-400 dark:hover:border-slate-200 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'
  }

  return (
    <Link
      href={href}
      aria-label={`${label} 페이지로 이동`}
      className={`block border-l pl-4 -ml-px border-transparent ${isActiveClass(path)}`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
