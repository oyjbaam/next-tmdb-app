'use client'

import React, { useState, MouseEvent } from 'react'
import { IconButton } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import type { CardDataType } from '@/shared/types/cardDataType'
import { toggleLikeMovie } from '@/shared/actions/addToLikeList'
import { ExtendedUser } from '@/next-auth'
import { cn } from '@/shared/util/twMerge'

type HeartButtonProps = {
  id: number
  cardData: CardDataType
  initialIsLike: boolean
  user?: ExtendedUser
  isCard: boolean
}

const HeartButton = ({ id, cardData, initialIsLike, user, isCard = false }: HeartButtonProps) => {
  const [isLike, setIsLike] = useState(initialIsLike)

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsLike(prev => !prev)
    try {
      const updatedIsLike = await toggleLikeMovie(cardData, user)
      if (updatedIsLike) {
        alert(updatedIsLike.error)
      }
    } catch (error) {
      setIsLike(prev => !prev)
      console.error('Failed to toggle like:', error)
    }
  }

  const isLikedClass = isLike && user ? '*:fill-red-400 *:stroke-red-400 ' : ' *:fill-none '
  const isCardPosition = isCard ? 'absolute z-10 right-2 top-2' : ''
  return (
    <IconButton
      onClick={onClick}
      id={String(id)}
      intent="text"
      className={cn(
        isLikedClass,
        isCardPosition,
        'text-foreground bg-slate-300/50 lg:dark:hover:bg-purple-500 lg:dark:hover:text-slate-300 lg:hover:bg-purple-500 lg:hover:text-slate-300'
      )}
    >
      <Heart />
    </IconButton>
  )
}

export default HeartButton
