import React from 'react'
import { fetcher } from '@/lib/actions'
import type { ICommonDetail, ITvDetail, IMovieDetail } from '@/types/detailType'
import Image from 'next/image'
import defaultPosterImage from '@/app/assets/images/defaultImage.png'
interface DetailPageProps {
  params: Record<string, string>
}
type ResponseValue = ICommonDetail & ITvDetail & IMovieDetail

const DetailPage = async ({ params }: DetailPageProps) => {
  const { channel, id } = params
  const fetchUrl = `/${channel}/${id}?language=ko-kr`

  const data = await fetcher<ResponseValue>(fetchUrl, 'get')
  const imgPath = `https://image.tmdb.org/t/p/w500${data.poster_path}` ?? defaultPosterImage
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="relative h-[750px] w-[500px] rounded-md overflow-hidden">
          <Image
            src={imgPath}
            alt={data.name || data.title || '포스터 이미지'}
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            title={data.name || data.title || '포스터 이미지'}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{data.name || data.title}</h2>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
