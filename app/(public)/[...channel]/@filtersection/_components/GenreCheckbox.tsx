'use client'
import type { Genre } from '@/shared/types'
import Checkbox from '@/components/ui/Checkbox'
import { useGenreContext } from '@/shared/context/genreProvider'
type GenreCheckboxProps = {
  genre: Genre
}

const GenreCheckbox = ({ genre }: GenreCheckboxProps) => {
  const { handleSelectGenre, checkGenreList } = useGenreContext()

  const isChecked = checkGenreList.includes(String(genre.id))

  return (
    <Checkbox
      onChange={handleSelectGenre}
      id={String(genre.id)}
      rounded="full"
      intent={isChecked ? 'filled' : 'outlined'}
      sizes="sm"
      key={genre.id}
      className=" shrink-0"
      checked={isChecked}
    >
      {genre.name}
    </Checkbox>
  )
}

export default GenreCheckbox
