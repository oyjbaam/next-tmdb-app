import React from 'react'
import { getMyListById } from '@/shared/data'
import { getcurrentUser } from '@/shared/lib/getCurrentUser'
import Grid from '@/components/common/Grid'
import Link from 'next/link'
import FlexBox from '@/components/ui/FlexBox'
import { Button } from '@/components/ui/button'

const MyListPage = async () => {
  const user = await getcurrentUser()
  const myList = await getMyListById(user?.id)

  if (!myList || myList.length === 0) {
    return (
      <FlexBox alignItems="center" justifyContent="center">
        <h1 className="text-2xl">👉 좋아요 리스트가 없습니다</h1>
      </FlexBox>
    )
  }

  return (
    <Grid>
      {myList.map(item => {
        {
          return (
            <Link key={item.id} href={`/my-list/${item.id}`} className="w-full h-full">
              <Button>{item.name}</Button>
            </Link>
          )
        }
      })}
    </Grid>
  )
}

export default MyListPage
