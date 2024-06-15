'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '../ui/carousel'

type CarouselWrapperProps = {
  children: React.ReactNode
}

const CarouselWrapper = ({ children }: CarouselWrapperProps) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>{children}</CarouselContent>
      <CarouselPrevious className="hidden xl:flex" />
      <CarouselNext className="hidden xl:flex" />
    </Carousel>
  )
}

export default CarouselWrapper
