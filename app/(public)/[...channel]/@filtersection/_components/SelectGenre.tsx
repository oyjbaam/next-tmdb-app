import { getGenreList } from '@/shared/api/tmdbFilterListApi'
import { ChannelType } from '@/shared/types'
import FilterItem from './FilterItem'
import GenreCheckbox from './GenreCheckbox'

type SelectGenreProps = {
  channel: ChannelType
}

const SelectGenre = async ({ channel }: SelectGenreProps) => {
  const res = await getGenreList(channel)

  return (
    <FilterItem title="장르">
      <GenreCheckbox data={res.genres} />
    </FilterItem>
  )
}

export default SelectGenre
