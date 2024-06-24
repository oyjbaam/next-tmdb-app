import React, { Suspense } from 'react'
import VideoList from './VideoList'
import ImageList from './ImageList'
import VideoPictureSkeleton from './VideoPictureSkeleton'
import FlexBox from '@/components/ui/FlexBox'
import { MediaType } from '@/shared/types'
import { Oswald } from 'next/font/google'
type VideoAndPictureProps = {
  dataId: string
  mediaType: MediaType
}
const oswald = Oswald({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})
const VideoAndPicture = ({ mediaType, dataId }: VideoAndPictureProps) => {
  return (
    <div className="space-y-1 w-full">
      <h3 className={`${oswald.className} text-2xl dark:text-white`}>VIDEO / PICTURE</h3>
      <div className="space-y-2">
        <Suspense
          fallback={
            <FlexBox className="gap-4">
              {[...Array(3)].map((_, idx) => (
                <VideoPictureSkeleton key={idx} />
              ))}
            </FlexBox>
          }
        >
          <VideoList dataId={dataId} mediaType={mediaType} />
        </Suspense>
        <Suspense
          fallback={
            <FlexBox className="gap-4">
              {[...Array(4)].map((_, idx) => (
                <VideoPictureSkeleton key={idx} />
              ))}
            </FlexBox>
          }
        >
          <ImageList dataId={dataId} mediaType={mediaType} />
        </Suspense>
      </div>
    </div>
  )
}

export default VideoAndPicture
