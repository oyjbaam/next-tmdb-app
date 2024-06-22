import FilterItem from './FilterItem'
import GenreCheckbox from './GenreCheckbox'
import { getGenreList } from '@/shared/api/tmdbFilterListApi'

type SelectGenreProps = {
  searchParams: Record<string, string | string[] | undefined>
  genListParameter: 'movie' | 'tv'
}

const SelectGenre = async ({ searchParams, genListParameter }: SelectGenreProps) => {
  const res = await getGenreList(genListParameter)
  const initialGenres = Array.isArray(searchParams.with_genres)
    ? searchParams.with_genres
    : searchParams.with_genres
      ? searchParams.with_genres.split(',')
      : []

  return (
    <FilterItem title="장르">
      {res.genres.map((gen, idx) => (
        <GenreCheckbox key={gen.id + idx} initialGenres={initialGenres} genre={gen} />
      ))}
    </FilterItem>
  )
}

export default SelectGenre
