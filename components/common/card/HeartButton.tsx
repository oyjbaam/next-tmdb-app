'use client'

import React, { useState, MouseEvent } from 'react'
import { IconButton } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import type { CardDataType } from '@/shared/types/cardDataType'
import { toggleLikeMovie } from '@/shared/actions/likeMovie'
import { toast } from 'sonner'
import { useQueryString } from '@/shared/hooks/useQueryString'

type HeartButtonProps = {
  id: number
  cardData: CardDataType
  initialIsLike: boolean
}

const HeartButton = ({ id, cardData, initialIsLike }: HeartButtonProps) => {
  const [isLike, setIsLike] = useState(initialIsLike)
  const { router } = useQueryString()

  const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    try {
      const updatedIsLike = await toggleLikeMovie(cardData)
      if (updatedIsLike.message) {
        if (confirm(updatedIsLike.message)) {
          router.push('/auth/login')
        }
      }
      setIsLike(updatedIsLike.isSuccess)
    } catch (error) {
      console.error('Failed to toggle like:', error)
    }
  }

  const isLikedClass = isLike ? '*:fill-red-400 *:stroke-red-400 ' : ' *:fill-none '

  return (
    <IconButton
      onClick={onClick}
      id={`${id}`}
      intent="text"
      className={`${isLikedClass} text-slate-300 bg-slate-300/30 absolute z-10 right-2 top-2 lg:dark:hover:bg-purple-500 lg:dark:hover:text-slate-300 lg:hover:bg-purple-500 lg:hover:text-slate-300`}
    >
      <Heart />
    </IconButton>
  )
}

export default HeartButton
