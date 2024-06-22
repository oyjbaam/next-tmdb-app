import React from 'react'
import Image from 'next/image'

const NoResults = () => {
  return (
    <div className="pt-40 flex flex-col justify-center items-center gap-y-4 overflow-hidden">
      <h1 className="text-2xl text-center">결과가 없습니다. 🥲</h1>
      <div className="w-[480px] relative h-[204px]">
        <Image src="/images/not-found.gif" alt="not-found 페이지" fill sizes="auto" priority />
      </div>
    </div>
  )
}

export default NoResults
