import React from 'react'
import { getDetail } from '@/shared/api/tmdbAPI'
import Image from 'next/image'
import { isMovieDetailTypeGuard } from '@/shared/util/guard/isMovieDetailTypeGuard'
import DetailHeader from './_components/DetailHeader'

type DetailPageProps = {
  searchParams: Record<string, string | undefined>
}

const DetailPage = async ({ searchParams }: DetailPageProps) => {
  const mediaType = searchParams.mediaType as 'movie' | 'tv'
  const dataId = searchParams.id ?? ''
  const fetchUrl = `/${mediaType}/${dataId}`
  const detailData = await getDetail<typeof mediaType>(fetchUrl)

  const imgPath = `https://image.tmdb.org/t/p/w500${detailData.poster_path}` ?? '/images/defaultPosterImage.png'
  const isMovie = isMovieDetailTypeGuard(detailData, 'movie')

  return (
    <>
      <section className="relative h-[750px] w-[500px] rounded-md overflow-hidden">
        <Image
          src={imgPath}
          alt={(isMovie ? detailData.title : detailData.name) ?? '포스터 이미지'}
          fill
          sizes="auto"
          className="object-cover"
          title={(isMovie ? detailData.title : detailData.name) ?? '포스터 이미지'}
        />
      </section>
      <section>
        <DetailHeader data={detailData} />

        <div>
          <h3>The CAST</h3>
        </div>
      </section>
    </>
  )
}

export default DetailPage
