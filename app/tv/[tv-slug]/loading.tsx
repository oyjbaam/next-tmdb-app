import CardSkeleton from '@/app/components/common/cardSkeleton'
import React from 'react'

const TvLoading = () => {
  return (
    <div className="grid grid-cols-4 gap-4 justify-items-center">
      <CardSkeleton />
    </div>
  )
}

export default TvLoading
