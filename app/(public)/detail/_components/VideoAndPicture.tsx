import React, { Suspense } from 'react'
import VideoList from './VideoList'
import ImageList from './ImageList'

type VideoAndPictureProps = {
  fetchUrl: string
}

const VideoAndPicture = ({ fetchUrl }: VideoAndPictureProps) => {
  return (
    <div className="space-y-1 w-full">
      <h3 className="text-2xl dark:text-white">VIDEO / PICTURE</h3>
      <div className="space-y-2">
        <Suspense fallback={<>loading..</>}>
          <VideoList fetchUrl={fetchUrl} />
        </Suspense>
        <Suspense fallback={<>loading..</>}>
          <ImageList fetchUrl={fetchUrl} />
        </Suspense>
      </div>
    </div>
  )
}

export default VideoAndPicture
