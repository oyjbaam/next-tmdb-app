import Image from 'next/image'
import { getCardData } from '@/shared/util/guard/isListTypeGuard'
import { StarIcon } from 'lucide-react'
import { starColor, textColorClass } from '@/shared/util/starColor'
import FlexBox from '@/components/ui/FlexBox'
import HeartButton from './HeartButton'
import ListButton from './ListButton'
import type { MovieListResponseType, TvListResponseType, PersonListResponseType, LikedListType } from '@/shared/types'
import { getLikedByUserIdAndTmdbId } from '@/shared/data'
import { getcurrentUser } from '@/shared/lib/getCurrentUser'

type CardProps = {
  data: MovieListResponseType | TvListResponseType | PersonListResponseType | LikedListType
  isMain?: boolean
}

const Card = async ({ data, isMain = false }: CardProps) => {
  const cardData = getCardData(data)
  const user = await getcurrentUser()
  const { title, date, imgPath, vote, id } = cardData
  const posterPath = imgPath ? `https://image.tmdb.org/t/p/w500${imgPath}` : '/images/defaultImage.png'

  const widthClass = isMain ? 'w-56' : 'w-full max-w-96 sm:w-80 md:w-64 lg:w-56'

  const likedMovie = await getLikedByUserIdAndTmdbId(id, user?.id)
  const initialIsLike = !!likedMovie

  return (
    <div
      className={`${widthClass} relative shrink-0 rounded-md overflow-hidden bg-white transition duration-200 cursor-pointer border border-slate-200 lg:hover:border-blue-300 lg:hover:text-blue-400 dark:bg-slate-700 dark:border-slate-600 shadow-md`}
    >
      <HeartButton id={id} cardData={cardData} initialIsLike={initialIsLike} user={user} />
      <ListButton id={id} cardData={cardData} />
      <div className="w-80"></div>
      <div className={'relative aspect-card backdrop-blur-md'}>
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
      <div className="p-2">
        <div className="flex justify-between py-1 text-xs font-medium ">
          <span>{date}</span>
          <FlexBox className="gap-1" alignItems="center">
            <StarIcon className="h-3 w-3" fill={starColor(vote).color} stroke={starColor(vote).color} />
            <span className={`${textColorClass[starColor(vote).index]}`}>{Math.round(vote)}</span>
          </FlexBox>
        </div>
        <span className="font-bold truncate block">{title}</span>
      </div>
    </div>
  )
}

export default Card
