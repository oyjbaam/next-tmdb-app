'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'

type CarouselWrapperProps = {
  children: React.ReactNode
}

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  return (
    <Carousel className="w-full relative">
      <div
        aria-readonly
        className="absolute pointer-events-none h-full z-10 flex flex-col justify-center px-10 text-white"
      >
        <h2 className="text-5xl font-extrabold">Welcome.</h2>
        <h3 className="text-2xl font-extrabold">Millions of Movies, Tv Shows and People to discover.</h3>
      </div>
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious className="hidden xl:flex" />
      <CarouselNext className="hidden xl:flex" />
    </Carousel>
  )
}

export default CarouselWrapper
