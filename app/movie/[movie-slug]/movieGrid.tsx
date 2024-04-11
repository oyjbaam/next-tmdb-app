import React from 'react'
import Card from '@/app/ui/card'
import { MovieResultType } from '@/types/movieType'

interface MovieGrid {
  datas: MovieResultType[]
}
const MovieGrid = ({ datas }: MovieGrid) => {
  return (
    <div className="grid grid-cols-4 gap-4 justify-items-center">
      {datas.map(movie => (
        <Card data={movie} key={movie.id}></Card>
      ))}
    </div>
  )
}

export default MovieGrid
