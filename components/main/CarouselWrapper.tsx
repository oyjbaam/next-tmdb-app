'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'
import useEmblaCarousel from 'embla-carousel-react'

type CarouselWrapperProps = {
  children: React.ReactNode
}

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: false, dragFree: true, containScroll: 'trimSnaps' })

  return (
    <Carousel ref={emblaRef} className="w-full">
      <div className="absolute w-full h-full z-10 flex flex-col justify-center px-10 text-white">
        <h2 className="text-5xl font-extrabold">Test deploy</h2>
        <h3 className="text-2xl font-extrabold">Millions of Movies, Tv Shows and People to discover.</h3>
      </div>
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselWrapper
