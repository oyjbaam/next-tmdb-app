'use client'
import type { Movie } from '@/types/movieType'
import type { TvShow } from '@/types/tvType'
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
    ? `https://image.tmdb.org/t/p/w300${data.poster_path}`
    : '/images/defaultImage.png'

  return (
    <div className="w-52 h-full min-h-min flex-shrink-0 rounded-md flex flex-col overflow-hidden bg-white transi duration-200 cursor-pointer border border-slate-200 hover:border-yellow-300 hover:text-yellow-400 dark:bg-slate-700 dark:border-slate-600 shadow-md">
      <div className="h-72 w-full p-2 relative">
        <Image
          src={isPosterPath}
          alt={title || '포스터 이미지'}
          fill
          loading="lazy"
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOcWAMAAaQBDwT95dwAAAAASUVORK5CYII="
          title={title || '포스터 이미지'}
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
