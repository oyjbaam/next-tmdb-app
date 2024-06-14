import React from 'react'
import { getDetail } from '@/shared/api/tmdbAPI'
import Image from 'next/image'

type DetailPageProps = {
  params: Record<string, string>
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { channel, id } = params
  const fetchUrl = `/${channel}/${id}`
  const data = await getDetail(fetchUrl)

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
