import React from 'react'
import { Oswald } from 'next/font/google'

type DetailLayoutProps = {
  children: React.ReactNode
}

const oswald = Oswald({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const DetailLayout = ({ children }: DetailLayoutProps) => {
  return (
    <div
      className={`${oswald.className} space-y-8 lg:space-y-0 leading-none inner justify-items-center lg:grid lg:grid-cols-2 pt-20 flex flex-col justify-center items-center lg:items-start`}
    >
      {children}
    </div>
  )
}

export default DetailLayout
