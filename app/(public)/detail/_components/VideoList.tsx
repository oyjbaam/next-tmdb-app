import FlexBox from '@/components/ui/FlexBox'
import { getVideoOrImage } from '@/shared/api/tmdbDetailApi'
import React from 'react'
import { isVideoResponse } from '@/shared/util/guard/isVideoResponseType'

import VideoPopup from './VideoPopup'

type VideoListProps = {
  fetchUrl: string
}

const VideoList = async ({ fetchUrl }: VideoListProps) => {
  const videoData = await getVideoOrImage(fetchUrl, 'videos')

  if (!isVideoResponse(videoData)) {
    throw new Error('Invalid video data')
  }

  return (
    <FlexBox className="gap-4">
      {videoData.results.slice(0, 3).map(video => (
        <VideoPopup key={video.id} video={video} />
      ))}
    </FlexBox>
  )
}

export default VideoList
