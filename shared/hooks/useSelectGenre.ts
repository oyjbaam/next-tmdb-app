import { useState, ChangeEvent } from 'react'

const useSelectGenre = () => {
  const [checkGenreList, setCheckGenreList] = useState<string[]>([])

  const handleSelectGenre = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target
    setCheckGenreList(prev => (checked ? [...prev, id] : prev.filter(item => item !== id)))
  }

  return {
    checkGenreList,
    handleSelectGenre,
  }
}

export default useSelectGenre
