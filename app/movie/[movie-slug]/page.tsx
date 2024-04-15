import React from 'react'
import { fetcher } from '@/util/fetcher'
import { MovieType } from '@/types/movieType'
import Pagination from '@/app/components/common/pagination'
import Grid from '@/app/components/common/grid'
import Card from '@/app/ui/card'
import Link from 'next/link'

interface MovieSlugPageProps {
  params: { [key: string]: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

const MovieSlugPage = async ({ params, searchParams }: MovieSlugPageProps) => {
  const page = searchParams.page ?? '1'
  const movieUrl = `/movie/${params['movie-slug']}?page=${page}`
  const data: MovieType = await fetcher(movieUrl, 'get')
  const totalPages =
    data.total_pages > 40
      ? Array.from({ length: 40 }, (_, index) => index + 1)
      : Array.from({ length: data.total_pages }, (_, index) => index + 1)
  return (
    <div className="flex w-full flex-col justify-center gap-5">
      <Grid>
        {data.results.map(movie => (
          <Link href={`/detail/${movie.id}`} key={movie.id}>
            <Card data={movie} />
          </Link>
        ))}
      </Grid>
      <Pagination page={page} totalPages={totalPages} path={`/movie/${params['movie-slug']}?page`} />
    </div>
  )
}

export default MovieSlugPage
