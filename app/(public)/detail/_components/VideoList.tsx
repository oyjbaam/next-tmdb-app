import FlexBox from '@/components/ui/FlexBox'
import { getVideoOrImage } from '@/shared/api/tmdbDetailApi'
import React from 'react'
import { isVideoResponse } from '@/shared/util/guard/isVideoResponseType'
import VideoPopup from './VideoPopup'
import { MediaType } from '@/shared/types'

type VideoListProps = {
  dataId: string
  mediaType: MediaType
}

const VideoList = async ({ dataId, mediaType }: VideoListProps) => {
  const videoData = await getVideoOrImage(mediaType, dataId, 'videos')

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
