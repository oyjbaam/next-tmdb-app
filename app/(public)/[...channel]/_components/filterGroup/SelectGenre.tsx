import { getGenreList } from '@/shared/api/tmdbFilterListApi'
import { ChannelType } from '@/shared/types'
import Checkbox from '@/components/ui/Checkbox'
import FilterItem from './FilterItem'

type SelectGenreProps = {
  channel: ChannelType
}

const SelectGenre = async ({ channel }: SelectGenreProps) => {
  const res = await getGenreList(channel)

  return (
    <FilterItem title="장르">
      {res.genres.map(gen => {
        return (
          <Checkbox rounded="full" intent="outlined" sizes="sm" key={gen.id} className=" shrink-0">
            {gen.name}
          </Checkbox>
        )
      })}
    </FilterItem>
  )
}

export default SelectGenre
