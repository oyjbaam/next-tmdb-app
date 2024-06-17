import FlexBox from '@/components/ui/FlexBox'
import { getVideoOrImage } from '@/shared/api/tmdbDetailApi'
import React from 'react'
import { isVideoResponse } from '@/shared/util/guard/isVideoResponseType'

type VideoListProps = {
  fetchUrl: string
}

const VideoList = async ({ fetchUrl }: VideoListProps) => {
  const videoData = await getVideoOrImage(fetchUrl, 'videos')

  if (!isVideoResponse(videoData)) {
    throw new Error('Invalid video data')
  }

  return (
    <FlexBox className="h-20 gap-4">
      {videoData.results.slice(0, 3).map(video => {
        return (
          <div key={video.id} className=" w-1/3 h-full bg-white">
            dd
          </div>
        )
      })}
    </FlexBox>
  )
}

export default VideoList
