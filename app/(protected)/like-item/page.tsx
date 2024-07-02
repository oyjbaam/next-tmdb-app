import React from 'react'
import { getLikedList } from '@/shared/data'
import { getcurrentUser } from '@/shared/lib/getCurrentUser'
import Grid from '@/components/common/Grid'
import Card from '@/components/common/card/Card'
import Link from 'next/link'

const LikeItemPage = async () => {
  const user = await getcurrentUser()
  const likedList = await getLikedList(user?.id)
  if (!likedList) {
    return null
  }

  return (
    <Grid>
      {likedList?.map(item => {
        {
          return (
            <Link key={item.tmdbId} href={`/detail?mediaType=${item.mediaType}&id=${item.tmdbId}`}>
              <Card data={item} />
            </Link>
          )
        }
      })}
    </Grid>
  )
}

export default LikeItemPage
