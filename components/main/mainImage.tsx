import Image from 'next/image'
import { getMainBannerImg } from '@/shared/api/tmdbAPI'
import { CarouselItem } from '../ui/carousel'
import CarouselWrapper from './CarouselWrapper'

const MainImage = async () => {
  const backDrop = await getMainBannerImg()

  return (
    <CarouselWrapper>
      {backDrop.results.map((item, index) => {
        const imgSrc = `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
        return (
          <CarouselItem key={index}>
            <div className="p-1">
              <div>
                <div className="relative w-full h-80 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt="main page image"
                    fill
                    className="object-cover object-top opacity-40 saturate-50"
                    priority
                    decoding="async"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        )
      })}
    </CarouselWrapper>
  )
}

export default MainImage
