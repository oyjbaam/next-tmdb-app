import { ImageBackdropType } from '@/shared/types'
import { useState, useEffect } from 'react'

const useImagePopup = (imgData: ImageBackdropType[], initialIndex: number) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [isOpen, setIsOpen] = useState(false)

  const totalLength = imgData.length
  const getImgSrc = (index: number) => `https://image.tmdb.org/t/p/w780/${imgData[index].file_path}`
  const currentImgSrc = getImgSrc(currentIndex)
  const nextImgSrc = getImgSrc((currentIndex + 1) % totalLength)

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % totalLength)
  }
  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + totalLength) % totalLength)
  }

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex)
    }
  }, [isOpen, initialIndex])

  return { currentImgSrc, nextImgSrc, handleNext, handlePrev, setIsOpen, isOpen, totalLength, currentIndex }
}

export default useImagePopup
