import { fetcher } from '@/lib/actions'
import { MovieType } from '@/types/movieType'
import Grid from '@/app/components/common/grid'
import Link from 'next/link'
import Card from '@/app/ui/card'
import Pagination from '@/app/components/common/pagination'
import { notFound } from 'next/navigation'
import { PATH_NAME } from '../constants'
import React from 'react'

const combineChannelAndPath = (channel: string, path: string, query: string | undefined) => {
  switch (channel) {
    case 'movie':
      return `/${channel}/${path}?page=`
    case 'tv':
      return `/${channel}/${path}?page=`
    case 'search':
      if (!query) return notFound()
      return `/${channel}/${path}?query=${query}&page=`
    default:
      return notFound()
  }
}

interface SlugPageProps {
  params: { [key: string]: string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

const SlugPage = async ({ params, searchParams }: SlugPageProps) => {
  const [channel, path] = params.channel
  const page = typeof searchParams.page === 'string' ? searchParams.page : '1'
  const query = typeof searchParams.query === 'string' ? searchParams.query : undefined

  if (!(path in PATH_NAME) || !path) notFound()
  const fetchUrl = combineChannelAndPath(channel, path, query)
  const fetchResult: MovieType = await fetcher(`${fetchUrl}${page}`, 'get')

  const totalPages = fetchResult.total_pages > 40 ? [...Array(40)] : [...Array(fetchResult.total_pages)]

  return (
    <>
      <Grid>
        {fetchResult.results.map(data => (
          <Link href={`/detail/${data.id}`} key={data.id}>
            <Card data={data} />
          </Link>
        ))}
      </Grid>
      <Pagination page={page} totalPages={totalPages} param={fetchUrl} />
    </>
  )
}

export default SlugPage
