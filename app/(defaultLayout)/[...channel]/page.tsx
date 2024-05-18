import { fetcher } from '@/lib/actions'
import { MovieResults } from '@/types/movieType'
import { TvShowResults } from '@/types/tvType'
import Grid from '@/components/common/grid'
import Link from 'next/link'
import Card from '@/components/ui/card'
import Pagination from '@/components/common/pagination'
import { notFound } from 'next/navigation'
import { PATH_NAME } from '../../constants'
import React from 'react'
import { combineChannelAndPath } from '@/util/combineChannelAndPath'

interface ChannelPageProps {
  params: Record<string, string[]>
  searchParams: Record<string, string | string[] | undefined>
}

const ChannelPage = async ({ params, searchParams }: ChannelPageProps) => {
  const [channel, path] = params.channel
  const page = typeof searchParams.page === 'string' ? searchParams.page : '1'
  const query = typeof searchParams.query === 'string' ? searchParams.query : undefined
  if (!(path in PATH_NAME) || !path) notFound()
  const fetchUrl = combineChannelAndPath(channel, path, query)
  const parameters = query ? `query=${query}&page=${page}` : `page=${page}`
  const fetchResult = await fetcher<MovieResults | TvShowResults>(fetchUrl, undefined, parameters)

  const totalPages =
    fetchResult.total_pages > 40
      ? Array.from({ length: 40 }, (_, index) => index + 1)
      : Array.from({ length: fetchResult.total_pages }, (_, index) => index + 1)
  const paginationParam = query ? `${fetchUrl}?query=${query}&page=` : `${fetchUrl}?page=`

  return (
    <>
      <Grid>
        {fetchResult.results.map(data => {
          const mediaType = data.media_type ? data.media_type : channel
          return (
            <Link href={`/detail/${mediaType}/${data.id}`} key={data.id}>
              <Card data={data} />
            </Link>
          )
        })}
      </Grid>
      <Pagination page={page} totalPages={totalPages} param={paginationParam} />
    </>
  )
}

export default ChannelPage
