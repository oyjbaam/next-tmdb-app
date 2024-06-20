'use client'
import { Genre } from '@/shared/types'
import FilterItem from './FilterItem'
import GenreCheckbox from './GenreCheckbox'

type SelectGenreProps = {
  data: Genre[]
}

const SelectGenre = ({ data }: SelectGenreProps) => {
  return (
    <FilterItem title="장르">
      {data.map(gen => (
        <GenreCheckbox key={gen.id} genre={gen} />
      ))}
    </FilterItem>
  )
}

export default SelectGenre
