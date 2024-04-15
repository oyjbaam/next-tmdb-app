import { fetcher } from '@/util/fetcher'
import { MovieType } from '@/types/movieType'
import Grid from '@/app/components/common/grid'
import Link from 'next/link'
import Card from '@/app/ui/card'
import Pagination from '@/app/components/common/pagination'
import { notFound } from 'next/navigation'
import { PATH_NAME } from '../constants'

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
  const channel = params.channel[0]
  const path = params.channel[1]
  const page = (searchParams.page as string) ?? '1'
  const query = searchParams.query as string

  if (!(path in PATH_NAME) || !path) return notFound()
  const fetchUrl = combineChannelAndPath(channel, path, query)
  const fetchResult: MovieType = await fetcher(`${fetchUrl}${page}`, 'get')

  const totalPages =
    fetchResult.total_pages > 40
      ? Array.from({ length: 40 }, (_, index) => index + 1)
      : Array.from({ length: fetchResult.total_pages }, (_, index) => index + 1)

  return (
    <div className="flex w-full flex-col justify-center gap-5">
      <Grid>
        {fetchResult.results.map(data => (
          <Link href={`/detail/${data.id}`} key={data.id}>
            <Card data={data} />
          </Link>
        ))}
      </Grid>
      <Pagination page={page} totalPages={totalPages} param={fetchUrl} />
    </div>
  )
}

export default SlugPage
