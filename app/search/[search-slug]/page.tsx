import Grid from '@/app/components/common/grid'
import Pagination from '@/app/components/common/pagination'
import Card from '@/app/ui/card'
import { MovieType } from '@/types/movieType'
import { fetcher } from '@/util/fetcher'
import Link from 'next/link'

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
      <Grid>
        {data.results.map(search => (
          <Link href={`/detail/${search.id}`} key={search.id}>
            <Card data={search} />
          </Link>
        ))}
      </Grid>
      <Pagination page={page} totalPages={totalPages} path={`/search/multi?query=${query}&page`} />
    </div>
  )
}

export default SearchSlugPage
