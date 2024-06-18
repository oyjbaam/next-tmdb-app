'use client'
import FlexBox from '@/components/ui/FlexBox'
import { useState } from 'react'
import Image from 'next/image'
import { FaCirclePlay } from 'react-icons/fa6'
import type { VideoResultType } from '@/shared/types'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type VideoPopupProps = {
  video: VideoResultType
}

const VideoPopup = ({ video }: VideoPopupProps) => {
  const [selectedVideoKey, setSelectedVideoKey] = useState<string | null>(null)

  const thumbnailUrl = `https://img.youtube.com/vi/${video.key}/mqdefault.jpg`
  return (
    <Dialog>
      {/* 비디오 썸네일 */}
      <DialogTrigger asChild>
        <FlexBox
          role="button"
          aria-label="비디오 팝업 열기"
          alignItems="center"
          justifyContent="center"
          key={video.id}
          className="relative w-1/3 aspect-video "
          onClick={() => setSelectedVideoKey(video.key)}
        >
          <FaCirclePlay className="absolute z-20 w-8 h-8 text-white" aria-label="플레이 버튼 아이콘" />
          <div className="bg-black/50 w-full h-full z-10" aria-hidden></div>
          <Image
            src={thumbnailUrl}
            alt={video.name}
            fill
            sizes="auto"
            className="object-cover"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAALklEQVR42u3NIQEAAAgDMJ4cQXEyIHBbgWW63kUikUgkEolEIpFIJBKJRCKR3CzSYTKXNXu9UQAAAABJRU5ErkJggg=="
            placeholder="blur"
          />
        </FlexBox>
      </DialogTrigger>

      {/* 팝업 비디오 */}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{video.name}</DialogTitle>
          <DialogDescription>{new Date(video.published_at).toLocaleString()}</DialogDescription>
        </DialogHeader>
        {selectedVideoKey && (
          <div className="relative w-full aspect-video">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideoKey}`}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default VideoPopup
