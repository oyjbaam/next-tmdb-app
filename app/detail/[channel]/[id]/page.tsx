import React from 'react'
import { fetcher } from '@/shared/actions'
import type { ICommonDetail, ITvDetail, IMovieDetail } from '@/shared/types/detailType'
import Image from 'next/image'
interface DetailPageProps {
  params: Record<string, string>
}
type ResponseValue = ICommonDetail & ITvDetail & IMovieDetail

const DetailPage = async ({ params }: DetailPageProps) => {
  const { channel, id } = params
  const fetchUrl = `/${channel}/${id}?language=ko-kr`

  const data = await fetcher<ResponseValue>(fetchUrl)
  // console.log(data)
  const imgPath = `https://image.tmdb.org/t/p/w500${data.poster_path}` ?? '/images/defaultPosterImage.png'
  // console.log(imgPath)
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="relative h-[750px] w-[500px] rounded-md overflow-hidden">
          {/* <Image
            src={imgPath}
            alt={data.name || data.title || '포스터 이미지'}
            fill
            sizes="auto"
            className="object-cover"
            title={data.name || data.title || '포스터 이미지'}
          /> */}
        </div>
        <div>
          <h2 className="text-3xl font-bold">{data.title || data.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
