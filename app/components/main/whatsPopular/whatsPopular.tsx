import React from 'react'
import MovieCard from '@/app/components/common/movieCard'
import { fetcher } from '@/util/fetcher'
import type { MovieType } from '@/types/movieType'
import Tabs from '../tabs'

const WhatsPopular = async () => {
  const movieData: MovieType = await fetcher('/movie/popular', 'get')
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mt-10 mb-2">Whats Popular</h3>
      <Tabs tabPannel={['영화', 'Tv']} />
      <div className="overflow-x-scroll flex gap-4 py-4 h-96">
        {movieData.results.map(movie => (
          <MovieCard key={movie.id} movies={movie} />
        ))}
      </div>
    </div>
  )
}

export default WhatsPopular
