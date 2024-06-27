import Grid from '@/components/common/grid'
import Link from 'next/link'
import Card from '@/components/common/Card'
import Pagination from '@/components/common/pagination'
import { notFound } from 'next/navigation'
import { getMovieTvList } from '@/shared/api/tmdbAPI'
import { PATH_NAME } from '@/app/constants'
import { ChannelType, PathType } from '@/shared/types/channel'
import { getDiscoverList } from '@/shared/api/tmdbFilterListApi'
import NoResults from './_components/NoResults'
import { ListResponseType } from '@/shared/types'

type CardListSectionProps = {
  params: Record<string, [ChannelType, PathType]>
  searchParams: Record<string, string | string[] | undefined>
}

const CardListSection = async ({ params, searchParams }: CardListSectionProps) => {
  const [channel, path] = params.channel
  const page = (searchParams.page || '1') as string
  const query = (searchParams.query || '') as string
  const genre = searchParams.with_genres || ''
  const startDate = searchParams['primary_release_date.gte'] || ''
  const endDate = searchParams['primary_release_date.lte'] || ''
  const discover = searchParams.discover || ''

  if (!(path in PATH_NAME) || !path) notFound()

  const parameters = query ? `query=${query}&page=${page}` : `page=${page}`
  const discoverPrams = `with_genres=${genre}&primary_release_date.gte=${startDate}&primary_release_date.lte=${endDate}&page=${page}`

  let fetchResult: ListResponseType
  if (discover === 'true' && channel !== 'search') {
    fetchResult = await getDiscoverList(channel, discoverPrams)
  } else {
    fetchResult = await getMovieTvList(channel, path, parameters)
  }

  const totalPages =
    fetchResult.total_pages > 40
      ? Array.from({ length: 40 }, (_, index) => index + 1)
      : Array.from({ length: fetchResult.total_pages }, (_, index) => index + 1)

  return (
    <>
      {fetchResult.results.length > 0 ? (
        <Grid>
          {fetchResult.results.map((data, idx) => {
            const mediaType = data.media_type ? data.media_type : channel
            return (
              <Link
                href={`/detail?mediaType=${mediaType}&id=${data.id}`}
                key={data.id + idx}
                className="w-full sm:w-80 md:w-64 lg:w-56 max-w-96"
              >
                <Card data={data} />
              </Link>
            )
          })}
        </Grid>
      ) : (
        <NoResults />
      )}
      <Pagination page={page} totalPages={totalPages} query={query} />
    </>
  )
}

export default CardListSection
