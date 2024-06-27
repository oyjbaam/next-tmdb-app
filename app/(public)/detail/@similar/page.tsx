import { getSimilarContents } from '@/shared/api/tmdbDetailApi'
import { MediaType } from '@/shared/types'
import React from 'react'
import Card from '@/components/common/card/Card'
import FlexBox from '@/components/ui/FlexBox'

type SimilarPageProps = {
  searchParams: Record<string, string | undefined>
}

const SimilarPage = async ({ searchParams }: SimilarPageProps) => {
  const mediaType = searchParams.mediaType as MediaType
  const dataId = searchParams.id ?? ''
  const responseData = await getSimilarContents(mediaType, dataId)

  return (
    <section className="w-full pt-10 my-10 border-t border-slate-500">
      <h3 className="text-xl font-bold mb-2">비슷한 컨텐츠</h3>
      <FlexBox className="overflow-x-scroll gap-4 py-4">
        {responseData.results.map(data => {
          const type = data.media_type ? data.media_type : mediaType
          return <Card href={`/detail?mediaType=${type}&id=${data.id}`} key={data.id} data={data} isMain />
        })}
      </FlexBox>
    </section>
  )
}

export default SimilarPage
