import Image from 'next/image'
import { getMainBannerImg } from '@/shared/api/tmdbAPI'
import { CarouselItem } from '../ui/carousel'
import CarouselWrapper from './CarouselWrapper'
import React from 'react'

const MainImage = async () => {
  const backDrop = await getMainBannerImg()

  return (
    <CarouselWrapper>
      {backDrop.results.map((item, index) => {
        const imgSrc = `https://image.tmdb.org/t/p/w780${item.backdrop_path}`
        return (
          <CarouselItem key={index}>
            <div className="absolute w-full h-full z-10 flex flex-col justify-center px-10 text-white">
              <h2 className="text-5xl font-extrabold">Test deploy</h2>
              <h3 className="text-2xl font-extrabold">Millions of Movies, Tv Shows and People to discover.</h3>
            </div>
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
          </CarouselItem>
        )
      })}
    </CarouselWrapper>
  )
}

export default MainImage

// import React from 'react'
// import { EmblaOptionsType } from 'embla-carousel'
// import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
// import useEmblaCarousel from 'embla-carousel-react'

// type PropType = {
//   slides: number[]
//   options?: EmblaOptionsType
// }

// const OPTIONS: EmblaOptionsType = {}
// const SLIDE_COUNT = 5
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
// const EmblaCarousel = () => {
//   // const { slides, options } = props
//   const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

//   const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

//   return (
//     <section className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container ">
//           {SLIDES.map(index => {
//             return (
//               <div className="embla__slide bg-white" key={index}>
//                 <div className="embla__slide__number">{index + 1}</div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__buttons">
//           <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
//           <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default EmblaCarousel
