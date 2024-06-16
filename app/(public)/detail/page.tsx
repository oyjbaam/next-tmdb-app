import React from 'react'
import { getDetail } from '@/shared/api/tmdbAPI'
import Image from 'next/image'

type DetailPageProps = {
  searchParams: Record<string, string | string[] | undefined>
}

const DetailPage = async ({ searchParams }: DetailPageProps) => {
  const mediaType = searchParams.mediaType ?? ''
  const dataId = searchParams.id ?? ''
  const fetchUrl = `/${mediaType}/${dataId}`
  const detailData = await getDetail(fetchUrl)

  const imgPath = `https://image.tmdb.org/t/p/w500${detailData.poster_path}` ?? '/images/defaultPosterImage.png'

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="relative h-[750px] w-[500px] rounded-md overflow-hidden">
          <Image
            src={imgPath}
            alt={detailData.name || detailData.title || '포스터 이미지'}
            fill
            sizes="auto"
            className="object-cover"
            title={detailData.name || detailData.title || '포스터 이미지'}
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{detailData.title || detailData.name}</h2>
        </div>
      </div>
    </div>
  )
}

export default DetailPage
