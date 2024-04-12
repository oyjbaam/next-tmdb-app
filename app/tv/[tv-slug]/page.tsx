import Pagination from '@/app/components/common/pagination'
import Grid from '@/app/components/grid'
import { MovieType } from '@/types/movieType'
import { fetcher } from '@/util/fetcher'
import React from 'react'
interface TvSlugPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
const TvSlugPage = async ({ params, searchParams }: TvSlugPageProps) => {
  const page = searchParams.page ?? '1'
  const tvUrl = `/tv/${params['tv-slug']}?page=${page}`
  const data: MovieType = await fetcher(tvUrl, 'get')
  const totalPages =
    data.total_pages > 40
      ? Array.from({ length: 40 }, (_, index) => index + 1)
      : Array.from({ length: data.total_pages }, (_, index) => index + 1)
  return (
    <div className="flex w-full flex-col justify-center gap-5">
      <Grid datas={data.results} />
      <Pagination page={page} totalPages={totalPages} params={params} />
    </div>
  )
}

export default TvSlugPage
