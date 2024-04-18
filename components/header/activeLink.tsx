'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useSearchParams } from 'next/navigation'
interface ActiveLinkProps {
  children: React.ReactNode | undefined
  href: string
  label: string
}

const ActiveLink = ({ children, href, label }: ActiveLinkProps) => {
  const searchParams = useSearchParams()
  const path = usePathname()

  const isActiveClass = (name: string) => {
    if (name === '/') return null
    if (href.startsWith(name) && searchParams.has('page')) return 'bg-blue-600 text-white'
    return null
  }

  return (
    <Link
      href={href}
      aria-label={`${label} 페이지로 이동`}
      className={`block w-full h-full px-1 py-2 rounded-r-full ${isActiveClass(path)}`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
