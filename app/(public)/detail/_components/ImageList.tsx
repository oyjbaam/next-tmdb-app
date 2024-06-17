import FlexBox from '@/components/ui/FlexBox'
import { getVideoOrImage } from '@/shared/api/tmdbDetailApi'
import React from 'react'
import { isImageResponse } from '@/shared/util/guard/isVideoResponseType'

type ImageListProps = {
  fetchUrl: string
}

const ImageList = async ({ fetchUrl }: ImageListProps) => {
  const videoData = await getVideoOrImage(fetchUrl, 'images')

  if (!isImageResponse(videoData)) {
    throw new Error('Invalid Image data')
  }

  return (
    <FlexBox className="h-20 gap-4">
      {/* {videoData.results.slice(0, 3).map(video => {
          return (
            <div key={video.id} className=" w-1/3 h-full bg-white">
              dd
            </div>
          )
        })} */}
    </FlexBox>
  )
}

export default ImageList
