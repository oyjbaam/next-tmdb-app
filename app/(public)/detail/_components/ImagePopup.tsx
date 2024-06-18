'use client'
import { useState, useEffect } from 'react'
import FlexBox from '@/components/ui/FlexBox'
import Image from 'next/image'
import type { ImageBackdropType } from '@/shared/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

type ImagePopupProps = {
  imgData: ImageBackdropType[]
  initialIndex: number
  defaultImageSrc: string
}

const ImagePopup = ({ imgData, initialIndex, defaultImageSrc }: ImagePopupProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

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
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* 이미지 썸네일 */}
      <DialogTrigger asChild>
        <FlexBox
          role="button"
          aria-label="이미지 팝업 열기"
          alignItems="center"
          justifyContent="center"
          key={defaultImageSrc}
          className="relative w-1/4 aspect-video"
        >
          <Image src={defaultImageSrc} alt="포스터 이미지" fill sizes="auto" />
        </FlexBox>
      </DialogTrigger>

      {/* 팝업 이미지 */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <span>
              {currentIndex + 1} {'/'} {totalLength}
            </span>
            <Button intent="text" sizes="sm" onClick={handlePrev}>
              Prev
            </Button>
            <Button intent="text" sizes="sm" onClick={handleNext}>
              Next
            </Button>
          </DialogDescription>
        </DialogHeader>
        <div className="relative w-full aspect-video">
          <Image
            src={currentImgSrc}
            alt="포스터 이미지"
            fill
            sizes="auto"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArwAAAEsCAQAAACLPagWAAADCUlEQVR42u3UAQkAAAgDMJ/UKFa3hSBsIZaeAuBQxAsgXgDxAiBeAPECIF4A8QIgXgDxAogXAPECiBcA8QKIFwDxAogXQLwAiBdAvACIF0C8AIgXQLwA4gVAvADiBUC8AOIFQLwA4gUQLwDiBRAvAOIFEC8A4gUQL4B4ARAvgHgBEC+AeAEQL4B4AcQLgHgBxAuAeAHEC4B4AcQLIF4AxAsgXgDECyBeAMQLIF4A8QIgXgDxAiBeAPECIF4A8QKIFwDxAogXAPECiBcA8QKIF0C8AIgXQLwAiBdAvACIF0C8AOIFQLwA4gVAvADiBUC8AOIFEK94AcQLIF4AxAsgXgDECyBeAMQLIF4A8QIgXgDxAiBeAPECIF4A8QKIFwDxAogXAPECiBcA8QKIF0C8AIgXQLwAiBdAvACIF0C8AOIFQLwA4gVAvADiBUC8AOIFEC8A4gUQLwDiBRAvAOIFEC+AeAEQL4B4ARAvgHgBEC+AeAHEC4B4AcQLgHgBxAuAeAHECyBeAMQLIF4AxAsgXgDECyBeAPECIF4A8QIgXgDxAiBeAPECiBcA8QKIFwDxAogXAPECiBdAvACIF0C8AIgXQLwAiBdAvADiFS+AeAHEC4B4AcQLgHgBxAuAeAHECyBeAMQLIF4AxAsgXgDECyBeAPECIF4A8QIgXgDxAiBeAPECiBcA8QKIFwDxAogXAPECiBdAvACIF0C8AIgXQLwAiBdAvADiBUC8AOIFQLwA4gVAvADiBRAvAOIFEC8A4gUQLwDiBRAvgHgBEC+AeAEQL4B4ARAvgHgBxAuAeAHEC4B4AcQLgHgBxAsgXgDECyBeAMQLIF4AxAsgXgDxAiBeAPECIF4A8QIgXgDxAogXAPECiBcA8QKIFwDxAogXQLziBRAvgHgBEC+AeAEQL4B4ARAvgHgBxAuAeAHEC4B4AcQLgHgBxAsgXgDECyBeAMQLIF4AxAsgXgDxAiBeAPECIF4A8QIgXgDxAogXAPECiBcA8QKIFwDxAogXQLwAiBdAvACIF+CDBQV1BWRByjJCAAAAAElFTkSuQmCC"
          />
          {/* 미리 로드된 다음 이미지 */}
          <div className="hidden">
            <Image src={nextImgSrc} width={100} height={100} alt="Next 포스터 이미지" sizes="auto" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ImagePopup
