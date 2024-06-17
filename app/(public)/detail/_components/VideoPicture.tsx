import React from 'react'
import VideoList from './VideoList'
import ImageList from './ImageList'

type VideoPictureProps = {
  fetchUrl: string
}

const VideoPicture = ({ fetchUrl }: VideoPictureProps) => {
  return (
    <div className="space-y-1 w-full">
      <h3 className="text-2xl dark:text-white">VIDEO / PICTURE</h3>
      <VideoList fetchUrl={fetchUrl} />
      <ImageList fetchUrl={fetchUrl} />
    </div>
  )
}

export default VideoPicture
