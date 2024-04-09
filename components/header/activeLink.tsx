'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface ActiveLinkProps {
  children?: React.ReactNode
  href: string
  label: string
}

const ActiveLink = ({ children, href, label }: ActiveLinkProps) => {
  const path = usePathname()
  const isActiveClass = path.startsWith(href) ? 'bg-white text-indigo-600 ' : null

  return (
    <Link
      href={href}
      aria-label={`${label} 페이지로 이동`}
      className={`block w-full h-full px-1 py-2 rounded-r-full ${isActiveClass}`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
