import FlexBox from '@/components/ui/FlexBox'
import { getCredits } from '@/shared/api/tmdbDetailApi'
import React from 'react'
import Image from 'next/image'

type CastListProps = {
  fetchUrl: string
}

const CastList = async ({ fetchUrl }: CastListProps) => {
  const creditsData = await getCredits(fetchUrl)

  return (
    <div className="space-y-1">
      <h3 className="text-2xl dark:text-white">THE CAST</h3>
      <FlexBox className="flex-wrap gap-4 w-full">
        {creditsData.cast.slice(0, 9).map(item => {
          const imgPath = item.profile_path
            ? `https://image.tmdb.org/t/p/w45${item.profile_path}`
            : '/images/pngwing.png'

          return (
            <div key={item.id} className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-400 shrink-0">
              <Image
                title={item.name ?? '프로필 이미지'}
                src={imgPath}
                alt={item.name ? `${item.name} 프로필 이미지` : '프로필 이미지'}
                fill
                sizes="auto"
                className=" object-cover object-top"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAAL0lEQVR42u3NMQEAAAgDIJfcNPY0g4cfFCDT9S4SiUQikUgkEolEIpFIJBKJ5GYBnpg5OxOuJSoAAAAASUVORK5CYII="
              />
            </div>
          )
        })}
        {creditsData.cast.length > 10 && (
          <FlexBox className="relative w-10 h-10 rounded-full overflow-hidden bg-slate-400 shrink-0">
            <span className="z-10 flex items-center justify-center text-base bg-black/50 text-center text-white w-full h-full">
              + {creditsData.cast.slice(10, creditsData.cast.length).length}
            </span>
            <Image
              title="프로필 이미지"
              src="/images/pngwing.png"
              alt="프로필 이미지"
              fill
              sizes="auto"
              className=" object-cover object-top"
            />
          </FlexBox>
        )}
      </FlexBox>
    </div>
  )
}

export default CastList
