import { Genre } from '@/shared/types'
import FilterItem from './FilterItem'
import GenreCheckbox from './GenreCheckbox'

type SelectGenreProps = {
  data: Genre[]
  searchParams: Record<string, string | string[] | undefined>
}

const SelectGenre = ({ data, searchParams }: SelectGenreProps) => {
  const initialGenres = Array.isArray(searchParams.with_genres)
    ? searchParams.with_genres
    : searchParams.with_genres
      ? searchParams.with_genres.split(',')
      : []

  return (
    <FilterItem title="장르">
      {data.map((gen, idx) => (
        <GenreCheckbox key={gen.id + idx} initialGenres={initialGenres} genre={gen} />
      ))}
    </FilterItem>
  )
}

export default SelectGenre
