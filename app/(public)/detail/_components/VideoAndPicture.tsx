import React, { Suspense } from 'react'
import VideoList from './VideoList'
import ImageList from './ImageList'
import VideoPictureSkeleton from './VideoPictureSkeleton'
import FlexBox from '@/components/ui/FlexBox'
type VideoAndPictureProps = {
  fetchUrl: string
}

const VideoAndPicture = ({ fetchUrl }: VideoAndPictureProps) => {
  return (
    <div className="space-y-1 w-full">
      <h3 className="text-2xl dark:text-white">VIDEO / PICTURE</h3>
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
          <VideoList fetchUrl={fetchUrl} />
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
          <ImageList fetchUrl={fetchUrl} />
        </Suspense>
      </div>
    </div>
  )
}

export default VideoAndPicture
