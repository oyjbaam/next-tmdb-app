'use client'
import { ChangeEvent, useState } from 'react'
import type { Genre } from '@/shared/types'
import Checkbox from '@/components/ui/Checkbox'

type GenreCheckboxProps = {
  data: Genre[]
}

const GenreCheckbox = ({ data }: GenreCheckboxProps) => {
  const [checkList, setCheckList] = useState<string[]>([])

  const handleSelectGenre = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target
    setCheckList(prev => (checked ? [...prev, id] : prev.filter(item => item !== id)))
  }

  return (
    <>
      {data.map(gen => {
        const isChecked = checkList.includes(String(gen.id))
        return (
          <Checkbox
            onChange={handleSelectGenre}
            id={String(gen.id)}
            rounded="full"
            intent={isChecked ? 'filled' : 'outlined'}
            sizes="sm"
            key={gen.id}
            className=" shrink-0"
            checked={isChecked}
          >
            {gen.name}
          </Checkbox>
        )
      })}
    </>
  )
}

export default GenreCheckbox
