import React from 'react'
import { getDetail } from '@/shared/api/tmdbDetailApi'
import Image from 'next/image'
import { isMovieDetailTypeGuard } from '@/shared/util/guard/isMovieDetailTypeGuard'
import DetailHeader from './_components/DetailHeader'
import CastList from './_components/CastList'
import VideoAndPicture from './_components/VideoAndPicture'

type DetailPageProps = {
  searchParams: Record<string, string | undefined>
}

const DetailPage = async ({ searchParams }: DetailPageProps) => {
  const mediaType = searchParams.mediaType as 'movie' | 'tv'
  const dataId = searchParams.id ?? ''
  const fetchUrl = `/${mediaType}/${dataId}`
  const detailData = await getDetail(fetchUrl)

  const imgPath = detailData.poster_path
    ? `https://image.tmdb.org/t/p/w500${detailData.poster_path}`
    : '/images/defaultPosterImage.png'

  const isMovie = isMovieDetailTypeGuard(detailData)

  return (
    <>
      <section className="relative h-[750px] w-[500px] rounded-md overflow-hidden ">
        <Image
          src={imgPath}
          alt={(isMovie ? detailData.title : detailData.name) ?? '포스터 이미지'}
          fill
          sizes="auto"
          className="object-cover"
          title={(isMovie ? detailData.title : detailData.name) ?? '포스터 이미지'}
        />
      </section>

      <section className="space-y-8 px-5 lg:px-0 max-w-[600px] w-full">
        <DetailHeader data={detailData} />
        <CastList fetchUrl={fetchUrl} />

        <div className="space-y-1">
          <h3 className="text-2xl dark:text-white">SYNOPSIS</h3>
          <p className="text-base font-sans">{detailData.overview}</p>
        </div>

        <VideoAndPicture fetchUrl={fetchUrl} />
      </section>
    </>
  )
}

export default DetailPage
