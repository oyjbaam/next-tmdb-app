'use client'
import { useCallback } from 'react'
import type { Genre } from '@/shared/types'
import { checkboxStyles } from '@/components/ui/Checkbox'
import Link from 'next/link'
import { useQueryString } from '@/shared/hooks/useQueryString'

type GenreCheckboxProps = {
  genre: Genre
  initialGenres: string[]
}

const GenreCheckbox = ({ genre, initialGenres }: GenreCheckboxProps) => {
  const { searchParams } = useQueryString()

  const generateLink = useCallback(
    (genId: string) => {
      const newQuery = new URLSearchParams(searchParams.toString())
      const updatedGenres = initialGenres.includes(genId)
        ? initialGenres.filter(id => id !== genId)
        : [...initialGenres, genId]

      if (updatedGenres.length > 0) {
        newQuery.set('with_genres', updatedGenres.join(','))
      } else {
        newQuery.delete('with_genres')
      }

      return `?${newQuery.toString()}`
    },
    [searchParams, initialGenres]
  )
  return (
    <Link
      id={String(genre.id)}
      className={checkboxStyles({
        intent: initialGenres.some(id => id === String(genre.id)) ? 'filled' : 'outlined',
        rounded: 'full',
        sizes: 'sm',
      })}
      href={generateLink(String(genre.id))}
    >
      {genre.name}
    </Link>
  )
}

export default GenreCheckbox
