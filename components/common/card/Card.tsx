'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MouseEvent } from 'react'
import { getCardData } from '@/shared/util/guard/isListTypeGuard'
import { StarIcon, Heart } from 'lucide-react'
import { starColor, textColorClass } from '@/shared/util/starColor'
import FlexBox from '@/components/ui/FlexBox'
import { IconButton } from '@/components/ui/button'
import type { MovieListResponseType, TvListResponseType, PersonListResponseType } from '@/shared/types'

type CardProps = {
  data: MovieListResponseType | TvListResponseType | PersonListResponseType
  isMain?: boolean
  href: string
}

const Card = ({ data, isMain = false, href }: CardProps) => {
  const { title, date, imgPath, vote } = getCardData(data)

  const posterPath = imgPath ? `https://image.tmdb.org/t/p/w500${imgPath}` : '/images/defaultImage.png'

  const widthClass = isMain ? 'w-56' : 'w-full max-w-96 sm:w-80 md:w-64 lg:w-56'
  const imgHeightClass = isMain
    ? 'h-[20.8125rem]'
    : 'h-[35.8125rem] lg:h-[20.8125rem] md:h-[23.8125rem] sm:h-[29.8125rem]'

  const handleClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const { id } = e.currentTarget
    console.log(id)
    if (id === 'heart-btn') {
      e.preventDefault()
    }
  }

  return (
    <div
      className={`${widthClass} flex flex-col justify-between relative shrink-0 rounded-md overflow-hidden bg-white transition duration-200 cursor-pointer border border-slate-200 lg:hover:border-blue-300 lg:hover:text-blue-400 dark:bg-slate-700 dark:border-slate-600 shadow-md`}
    >
      <IconButton id="heart-btn" intent="text" className="absolute z-10 right-2 top-2 text-slate-300">
        <Heart />
      </IconButton>
      <div className={`relative ${imgHeightClass} backdrop-blur-md`}>
        <Image
          src={posterPath}
          alt={title || '포스터 이미지'}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcWAMAAaQBDwT95dwAAAAASUVORK5CYII="
          title={title || '포스터 이미지'}
          fill
          sizes="auto"
        />
      </div>
      <Link href={href} className="p-2">
        <div className="flex justify-between py-1 text-xs font-medium">
          <span>{date}</span>
          <FlexBox className="gap-1" alignItems="center">
            <StarIcon className="h-3 w-3" fill={starColor(vote).color} stroke={starColor(vote).color} />
            <span className={`${textColorClass[starColor(vote).index]}`}>{Math.round(vote)}</span>
          </FlexBox>
        </div>
        <span className="font-bold truncate block">{title}</span>
      </Link>
    </div>
  )
}

export default Card
