import React from 'react'
import { StarIcon } from 'lucide-react'
import FlexBox from '@/components/ui/FlexBox'
import { DetailDataType } from '../types/detailData'
import { Oswald } from 'next/font/google'
import { starColor, textColorClass } from '@/shared/util/starColor'
import HeartButton from '@/components/common/card/HeartButton'
import { getLikedItem } from '@/shared/lib/getLikedItem'
import { getcurrentUser } from '@/shared/lib/getCurrentUser'

type DetailHeaderProps = {
  data: DetailDataType
  dataId: number
}

const oswald = Oswald({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const DetailHeader = async ({ data, dataId }: DetailHeaderProps) => {
  const user = await getcurrentUser()
  const initialIsLike = await getLikedItem(dataId, user?.id)

  const cardData = {
    id: dataId,
    title: data.title as string,
    date: data.date,
    imgPath: data.imgPath,
    vote: data.vote || 0,
    mediaType: data.mediaType,
  }

  return (
    <header className="space-y-4">
      <div className={`${oswald.className}`}>
        <h1 className="text-6xl font-bold dark:text-white">{(data.original_title || '').toUpperCase()}</h1>
        <h2 className="text-3xl mt-1">{(data.title || '').toUpperCase()}</h2>
      </div>

      <ul className="flex flex-wrap *:shrink-0 *:relative gap-4 mt-4 text-base *:ml-2 *:before:content-[''] *:before:block *:before:absolute *:before:w-1 *:before:aspect-square *:before:rounded-full *:before:bg-slate-400 *:before:-left-2 *:before:top-[10px]">
        <li>
          <span>{data.date}</span>
        </li>

        {data.runtime && (
          <li>
            <span>{data.runtime} min</span>
          </li>
        )}

        {data.episode && (
          <li>
            <span>{data.episode} Episodes</span>
          </li>
        )}

        {data.genres && (
          <>
            {data.genres.map(item => {
              return (
                <li key={item.id}>
                  <span>{item.name}</span>
                </li>
              )
            })}
          </>
        )}
      </ul>
      {data.vote !== null && data.vote !== undefined && (
        <FlexBox alignItems="center" className="gap-4">
          <FlexBox alignItems="center" className={`gap-2 ${textColorClass[starColor(data.vote).index]}`}>
            <StarRating voteAverage={data.vote} />
            <span className="text-base">{data.vote.toFixed(1)}</span>
          </FlexBox>
          <HeartButton initialIsLike={initialIsLike} id={dataId} user={user} cardData={cardData} isCard={false} />
        </FlexBox>
      )}

      {data.popularity !== null && data.popularity !== undefined && (
        <FlexBox alignItems="center" className="gap-4">
          <FlexBox alignItems="center" className="gap-2 text-yellow-400">
            <StarIcon className="w-5 h-5" fill="gold" />
            <span className="text-base">{data.popularity.toFixed(1)}</span>
          </FlexBox>
          <HeartButton initialIsLike={initialIsLike} id={dataId} user={user} cardData={cardData} isCard={false} />
        </FlexBox>
      )}
    </header>
  )
}

export default DetailHeader

type StarRatingProps = {
  voteAverage: number
}

const StarRating = ({ voteAverage }: StarRatingProps) => {
  const rating = Math.round(voteAverage) / 2
  const stars = Array.from({ length: 5 }, (_, index) => index + 1)

  return (
    <FlexBox className="gap-2">
      {stars.map(star => {
        return (
          <StarIcon
            className="w-5 h-5"
            key={star}
            fill={rating >= star ? starColor(voteAverage).color : 'none'}
            stroke={starColor(voteAverage).color}
          />
        )
      })}
    </FlexBox>
  )
}
