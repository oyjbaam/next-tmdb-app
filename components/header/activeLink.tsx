'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type ActiveLinkProps = {
  children: React.ReactNode | undefined
  href: string
  label: string
}

const ActiveLink = ({ children, href, label }: ActiveLinkProps) => {
  const path = usePathname()

  const isActiveClass = (name: string) => {
    if (href.startsWith(name) && name !== '/')
      return 'text-violet-500 border-violet-400 font-semibold dark:text-violet-400 dark:border-violet-400'
    return 'lg:hover:border-violet-400 lg:dark:hover:border-violet-400 text-slate-700 lg:hover:text-violet-800 dark:text-slate-400 lg:dark:hover:text-violet-400'
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
