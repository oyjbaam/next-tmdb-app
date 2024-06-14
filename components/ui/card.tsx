'use client'
import type { Movie } from '@/shared/types/movieType'
import type { TvShow } from '@/shared/types/tvType'
import Image from 'next/image'
interface CardProps {
  data: Movie | TvShow
}
const movieAndTvShowTypeGuard = (object: unknown): object is Movie => {
  if (object !== null && typeof object === 'object') {
    return 'title' in object
  }
  return false
}

const Card = ({ data }: CardProps) => {
  const title = movieAndTvShowTypeGuard(data) ? data.title : data.name
  const date = movieAndTvShowTypeGuard(data) ? data.release_date : data.first_air_date
  const isPosterPath = data.poster_path
    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
    : '/images/defaultImage.png'
  return (
    <div className="w-96 sm:w-80 md:w-64 lg:w-56 justify-between rounded-md flex flex-col overflow-hidden bg-white transi duration-200 cursor-pointer border border-slate-200 hover:border-yellow-300 hover:text-yellow-400 dark:bg-slate-700 dark:border-slate-600 shadow-md">
      <div className="relative h-[35.8125rem] lg:h-[20.8125rem] md:h-[23.8125rem] sm:h-[29.8125rem] bg-yellow-400/30 backdrop-blur-md">
        <Image
          src={isPosterPath}
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
          <p>{Math.floor(data.vote_average || 0)}</p>
        </div>
        <span className="font-bold truncate block">{title}</span>
      </div>
    </div>
  )
}

export default Card
