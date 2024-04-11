import React from 'react'
import Tabs from '../components/main/tabs'
import { fetcher } from '@/util/fetcher'
import { MovieType } from '@/types/movieType'
import Card from '../ui/card'

const WhatsPopularPage = async () => {
  const movieData: MovieType = await fetcher('/movie/popular', 'get')
  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mt-10 mb-2">Whats Popular</h3>
      <div className="overflow-x-scroll flex gap-4 py-4 h-96">
        {movieData.results.map(movie => (
          <Card key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  )
}

export default WhatsPopularPage
