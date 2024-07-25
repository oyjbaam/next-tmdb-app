'use client'
import React, { MouseEvent, useState } from 'react'
import { List, CirclePlus, X } from 'lucide-react'
import { IconButton, Button } from '@/components/ui/button'
import type { CardDataType } from '@/shared/types/cardDataType'
import FlexBox from '@/components/ui/FlexBox'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input/input'
import { MovieList } from '@prisma/client'
import { createMyList } from '@/shared/actions/createMyList'
import { addMovieToList } from '@/shared/actions/addToMyList'
import { ExtendedUser } from '@/next-auth'

type ListButtonProps = {
  id: number
  cardData: CardDataType
  myList: MovieList[] | null | undefined
  user?: ExtendedUser
}

const ListButton = ({ id, cardData, myList, user }: ListButtonProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [openCreateList, setOpenCreateList] = useState(false)

  const [listName, setListName] = useState('')
  const [message, setMessage] = useState('')
  const handleItemClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleOpenCreateListDialog = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!user) {
      alert('로그인이 필요합니다.')
      return
    }
    setIsDialogOpen(true)
  }
  const toggleCreateListInput = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setOpenCreateList(prev => !prev)
  }

  const handleCreateList = async () => {
    const createListResult = await createMyList(listName, user)
    if (createListResult.error) {
      setMessage(createListResult.error)
    } else {
      setMessage(createListResult.success || '목록이 생성되었습니다.')
      setOpenCreateList(false)
      setListName('')
    }
  }

  const handleAddMyList = async (listId: string) => {
    if (!user) {
      alert('로그인이 필요합니다.')
      return
    }
    const addListResult = await addMovieToList(user.id as string, listId, cardData)
  }

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <IconButton
          onClick={handleOpenCreateListDialog}
          id={`${id}`}
          intent="text"
          className="absolute z-10 right-2 top-12 text-foreground bg-slate-300/50 lg:dark:hover:bg-purple-500 lg:dark:hover:text-white lg:hover:bg-purple-500 lg:hover:text-white"
        >
          <List />
        </IconButton>
      </DialogTrigger>
      <DialogContent onClick={handleItemClick} className="max-w-[300px]">
        <DialogHeader>
          <DialogTitle>목록에 저장</DialogTitle>
        </DialogHeader>
        <ul className="flex flex-col gap-4 py-4 items-start">
          {myList && myList?.length > 0 ? (
            myList?.map(list => {
              return (
                <li key={list.id} className="flex justify-between w-full">
                  <Button intent="text" className="p-0" onClick={() => handleAddMyList(list.id)}>
                    <span className="text-right">{list.name}</span>
                  </Button>
                  <Button intent="text" className="p-0">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </li>
              )
            })
          ) : (
            <li>
              <span>목록이 없습니다.</span>
            </li>
          )}
        </ul>
        {!openCreateList ? (
          <DialogFooter>
            <Button
              intent="text"
              sizes="sm"
              leadingIcon={CirclePlus}
              className="py-1 px-0"
              onClick={toggleCreateListInput}
            >
              목록 생성하기
            </Button>
          </DialogFooter>
        ) : (
          <DialogFooter>
            <FlexBox flexDirection="col" className="w-full space-y-2">
              <Input
                fullwidth
                sizes="sm"
                placeholder="목록의 제목을 입력하세요"
                value={listName}
                onChange={e => setListName(e.target.value)}
              />
              {message && <span className="text-red-500 text-sm">{message}</span>}
              <FlexBox justifyContent="between" className="gap-2">
                <Button sizes="sm" className="py-1" onClick={toggleCreateListInput}>
                  취소
                </Button>
                <Button sizes="sm" className="py-1" onClick={handleCreateList}>
                  목록 생성하기
                </Button>
              </FlexBox>
            </FlexBox>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ListButton
