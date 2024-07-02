import React from 'react'
import { getLikedList } from '@/shared/data'
import { getcurrentUser } from '@/shared/lib/getCurrentUser'
import Grid from '@/components/common/Grid'
import Card from '@/components/common/card/Card'
import Link from 'next/link'
import FlexBox from '@/components/ui/FlexBox'

const LikeItemPage = async () => {
  const user = await getcurrentUser()
  const likedList = await getLikedList(user?.id)

  if (!likedList || likedList.length === 0) {
    return (
      <FlexBox alignItems="center" justifyContent="center">
        <h1 className="text-2xl">👉 좋아요 리스트가 없습니다</h1>
      </FlexBox>
    )
  }

  return (
    <Grid>
      {likedList?.map(item => {
        {
          return (
            <Link
              key={item.tmdbId}
              href={`/detail?mediaType=${item.mediaType}&id=${item.tmdbId}`}
              className="w-full h-full"
            >
              <Card data={item} />
            </Link>
          )
        }
      })}
    </Grid>
  )
}

export default LikeItemPage
