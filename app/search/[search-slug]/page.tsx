import Grid from '@/app/components/common/grid'
import Pagination from '@/app/components/common/pagination'
import { MovieType } from '@/types/movieType'
import { fetcher } from '@/util/fetcher'
import React from 'react'
interface SearchSlugPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
const SearchSlugPage = async ({ params, searchParams }: SearchSlugPageProps) => {
  const page = searchParams.page ?? '1'
  const query = searchParams.query
  const data: MovieType = await fetcher(`/search/multi?query=${query}&page=${page}`, 'get')
  const totalPages =
    data.total_pages > 40
      ? Array.from({ length: 40 }, (_, index) => index + 1)
      : Array.from({ length: data.total_pages }, (_, index) => index + 1)
  return (
    <div className="flex w-full flex-col justify-center gap-5">
      <Grid datas={data.results} />
      <Pagination page={page} totalPages={totalPages} url={`/search/multi?query=${query}&page`} />
    </div>
  )
}

export default SearchSlugPage
