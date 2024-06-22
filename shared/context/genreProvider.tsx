'use client'
import { ChangeEvent, createContext, useContext } from 'react'
import useSelectGenre from '../hooks/useSelectGenre'

type GenreContextType = {
  checkGenreList: string[]
  handleSelectGenre: (e: ChangeEvent<HTMLInputElement>) => void
}

export const GenreContext = createContext<GenreContextType | null>(null)

const GenreProvider = ({ children }: { children: React.ReactNode }) => {
  const genre = useSelectGenre()

  return <GenreContext.Provider value={genre}>{children}</GenreContext.Provider>
}

export default GenreProvider

export const useGenreContext = () => {
  const context = useContext(GenreContext)
  if (!context) {
    throw new Error('useGenreContext must be used within GenreProvider')
  }
  return context
}
