import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonStyles } from '@/components/ui/button/button'
const NotFound = () => {
  return (
    <div className="pt-40 flex flex-col justify-center items-center gap-y-4 overflow-hidden">
      <h1 className="text-2xl text-center">Page Not Found..🥲</h1>
      <div className="w-[480px] relative h-[204px]">
        <Image src="/images/not-found.gif" alt="not-found 페이지" fill sizes="auto" priority />
      </div>

      <Link href="/" className={buttonStyles({ intent: 'filled' })}>
        메인으로 이동
      </Link>
    </div>
  )
}

export default NotFound
