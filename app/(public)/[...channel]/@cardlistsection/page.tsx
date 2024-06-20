import Grid from '@/components/common/grid'
import Link from 'next/link'
import Card from '@/components/common/Card'
import Pagination from '@/components/common/pagination'
import { notFound } from 'next/navigation'
import React from 'react'
import { combineChannelAndPath } from '@/shared/util/combineChannelAndPath'
import { getMovieTvList } from '@/shared/api/tmdbAPI'
import { PATH_NAME } from '@/app/constants'
import { ChannelType, PathType } from '@/shared/types/channel'

type CardListSectionProps = {
  params: Record<string, [ChannelType, PathType]>
  searchParams: Record<string, string | string[] | undefined>
}

const CardListSection = async ({ params, searchParams }: CardListSectionProps) => {
  const [channel, path] = params.channel
  const page = typeof searchParams.page === 'string' ? searchParams.page : '1'
  const query = typeof searchParams.query === 'string' ? searchParams.query : undefined
  if (!(path in PATH_NAME) || !path) notFound()
  const fetchUrl = combineChannelAndPath(channel, path, query)

  const parameters = query ? `query=${query}&page=${page}` : `page=${page}`

  const fetchResult = await getMovieTvList(`${fetchUrl}?${parameters}`)

  const totalPages =
    fetchResult.total_pages > 40
      ? Array.from({ length: 40 }, (_, index) => index + 1)
      : Array.from({ length: fetchResult.total_pages }, (_, index) => index + 1)

  return (
    <>
      <Grid>
        {fetchResult.results.map((data, idx) => {
          const mediaType = data.media_type ? data.media_type : channel
          return (
            <Link href={`/detail?mediaType=${mediaType}&id=${data.id}`} key={data.id + idx}>
              <Card data={data} />
            </Link>
          )
        })}
      </Grid>
      <Pagination page={page} totalPages={totalPages} query={query} />
    </>
  )
}

export default CardListSection
