'use client'
import React, { MouseEvent } from 'react'
import { List } from 'lucide-react'
import { IconButton } from '@/components/ui/button'
import type { CardDataType } from '@/shared/types/cardDataType'

type ListButtonProps = {
  id: number
  cardData: CardDataType
}

const ListButton = ({ id, cardData }: ListButtonProps) => {
  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log(e.currentTarget.id)
    console.log(cardData)
  }
  return (
    <IconButton
      onClick={onClick}
      id={`${id}`}
      intent="text"
      className="absolute z-10 right-2 top-12 text-slate-300 bg-slate-300/30 lg:dark:hover:bg-purple-500 lg:dark:hover:text-white lg:hover:bg-purple-500 lg:hover:text-white"
    >
      <List />
    </IconButton>
  )
}

export default ListButton
