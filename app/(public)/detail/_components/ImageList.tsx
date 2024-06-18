import React from 'react'
import FlexBox from '@/components/ui/FlexBox'
import { getVideoOrImage } from '@/shared/api/tmdbDetailApi'
import { isImageResponse } from '@/shared/util/guard/isVideoResponseType'
import Image from 'next/image'
import ImagePopup from './ImagePopup'

type ImageListProps = {
  fetchUrl: string
}

const ImageList = async ({ fetchUrl }: ImageListProps) => {
  const imgData = await getVideoOrImage(fetchUrl, 'images')

  if (!isImageResponse(imgData)) {
    throw new Error('Invalid Image data')
  }

  return (
    <FlexBox className="gap-4">
      {imgData.backdrops.map((image, idx) => {
        const imgSrc = `https://image.tmdb.org/t/p/w154/${image.file_path}`
        return (
          <React.Fragment key={image.file_path}>
            {idx < 3 ? (
              <ImagePopup initialIndex={idx} imgData={imgData.backdrops} defaultImageSrc={imgSrc} />
            ) : idx === 4 ? (
              <FlexBox
                alignItems="center"
                justifyContent="center"
                className="w-1/4 h-full relative aspect-video cursor-pointer"
              >
                <span className="z-10 flex items-center justify-center text-base bg-black/50 text-center text-white w-full h-full">
                  + {imgData.backdrops.length}
                </span>
                <Image src={imgSrc} alt="포스터 이미지" fill sizes="auto" />
              </FlexBox>
            ) : null}
          </React.Fragment>
        )
      })}
    </FlexBox>
  )
}

export default ImageList
