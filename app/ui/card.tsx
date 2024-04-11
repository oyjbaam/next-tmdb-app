'use client'
import React from 'react'
import type { MovieResultType } from '@/types/movieType'
import Image from 'next/image'

interface CardProps {
  data: MovieResultType
}

const Card = ({ data }: CardProps) => {
  return (
    <div className="w-52 h-full min-h-min flex-shrink-0 rounded-md flex flex-col overflow-hidden bg-white transi duration-200 cursor-pointer border border-transparent hover:border hover:border-yellow-300 hover:text-yellow-400 shadow-md">
      <div className="h-72 w-full bg-slate-600 p-2 relative">
        <Image
          src={`https://image.tmdb.org/t/p/w300${data.poster_path}` || ''}
          alt={data.title || '포스터 이미지'}
          fill
          loading="lazy"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAEPCAYAAAAK3PthAAACDUlEQVR42u3TQREAAAQAMLpr5vSSwcNv67CcngrgJMUBcUAcEAfEAXHEAXFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxAHFAHBAHxAFxQBxxQBwQB8QBcUAccUAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHEAcEAfEAXFAHBBHHBAHxAFxQBwQRxwQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAcQB8QBcUAcEAfEEQfEAXFAHBAHxBEHxAFxQBwQB8QBxIFnC3VU/G2o0/WFAAAAAElFTkSuQmCC"
          title={data.title || '포스터 이미지'}
        />
      </div>
      <div className="p-2">
        <div className="flex justify-between py-1 text-xs font-medium">
          <p>{data.release_date}</p>
          <p>{Math.floor(data.vote_average || 0)}</p>
        </div>
        <span className="font-bold">
          {(data.title?.length ?? 0) > 18 ? data.title?.slice(0, 18) + '...' : data.title}
        </span>
      </div>
    </div>
  )
}

export default Card
