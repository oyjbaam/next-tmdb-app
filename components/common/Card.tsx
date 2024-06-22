import type { MovieListResponseType, TvListResponseType, PersonListResponseType } from '@/shared/types'
import { getCardData } from '@/shared/util/guard/isListTypeGuard'
import Image from 'next/image'

type CardProps = {
  data: MovieListResponseType | TvListResponseType | PersonListResponseType
  isMain?: boolean
}

const Card = ({ data, isMain = false }: CardProps) => {
  const { title, date, imgPath, vote } = getCardData(data)

  const posterPath = imgPath ? `https://image.tmdb.org/t/p/w500${imgPath}` : '/images/defaultImage.png'

  const widthClass = isMain ? 'w-56' : 'w-96 sm:w-80 md:w-64 lg:w-56'
  const imgHeightClass = isMain
    ? 'h-[20.8125rem]'
    : 'h-[35.8125rem] lg:h-[20.8125rem] md:h-[23.8125rem] sm:h-[29.8125rem]'

  return (
    <div
      className={`${widthClass} shrink-0 justify-between rounded-md flex flex-col overflow-hidden bg-white transition duration-200 cursor-pointer border border-slate-200 lg:hover:border-blue-300 lg:hover:text-blue-400 dark:bg-slate-700 dark:border-slate-600 shadow-md"`}
    >
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
      <div className="p-2">
        <div className="flex justify-between py-1 text-xs font-medium">
          <p>{date}</p>
          <p>{Math.floor(vote)}</p>
        </div>
        <span className="font-bold truncate block">{title}</span>
      </div>
    </div>
  )
}

export default Card
