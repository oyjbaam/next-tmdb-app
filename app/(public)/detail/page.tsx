import React from 'react'
import { getDetail } from '@/shared/api/tmdbDetailApi'
import Image from 'next/image'
import { isMovieDetailTypeGuard, isTvDetailTypeGuard, getDetailData } from '@/shared/util/guard/isMovieDetailTypeGuard'
import DetailHeader from './_components/DetailHeader'
import CastList from './_components/CastList'
import VideoAndPicture from './_components/VideoAndPicture'
import Synopsis from './_components/Synopsis'
type DetailPageProps = {
  searchParams: Record<string, string | undefined>
}

const DetailPage = async ({ searchParams }: DetailPageProps) => {
  const mediaType = searchParams.mediaType ?? 'movie'
  const dataId = searchParams.id ?? ''
  const fetchUrl = `/${mediaType}/${dataId}`
  const responseData = await getDetail(fetchUrl)
  const detailData = getDetailData(responseData)
  const isMovie = isMovieDetailTypeGuard(responseData)
  const isTv = isTvDetailTypeGuard(responseData)

  const isMovieOrTv = isMovie || isTv
  const { imgPath, title, overView } = detailData
  const posterPath = imgPath ? `https://image.tmdb.org/t/p/w500${imgPath}` : '/images/defaultImage.png'

  return (
    <>
      <section className="relative h-[750px] w-[500px] rounded-md overflow-hidden ">
        <Image
          src={posterPath}
          alt={title || '포스터 이미지'}
          fill
          sizes="auto"
          className="object-cover"
          title={title || '포스터 이미지'}
        />
      </section>

      <section className="space-y-8 px-5 lg:px-0 max-w-[600px] w-full">
        <DetailHeader data={detailData} />
        {isMovieOrTv && <CastList fetchUrl={fetchUrl} />}
        <Synopsis mediaType={mediaType} overview={overView} />
        {isMovieOrTv && <VideoAndPicture fetchUrl={fetchUrl} />}
      </section>
    </>
  )
}

export default DetailPage
