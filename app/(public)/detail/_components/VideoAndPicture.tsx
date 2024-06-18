import React from 'react'
import VideoList from './VideoList'
import ImageList from './ImageList'

type VideoAndPictureProps = {
  fetchUrl: string
}

const VideoAndPicture = ({ fetchUrl }: VideoAndPictureProps) => {
  return (
    <div className="space-y-1 w-full">
      <h3 className="text-2xl dark:text-white">VIDEO / PICTURE</h3>
      <VideoList fetchUrl={fetchUrl} />
      <ImageList fetchUrl={fetchUrl} />
    </div>
  )
}

export default VideoAndPicture
