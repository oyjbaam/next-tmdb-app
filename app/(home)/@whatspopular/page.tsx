import React from 'react'
import { getPopular } from '@/shared/api/tmdbAPI'
import PoularTabs from './_components/PoularTabs'

type WhatsPopularPageProps = {
  searchParams: Record<string, string | undefined>
}

const WhatsPopularPage = async ({ searchParams }: WhatsPopularPageProps) => {
  const tabText = searchParams.popular ?? 'movie'
  const popularData = await getPopular(`/${tabText}/popular`)

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mt-10 mb-2">Whats Popular</h3>
      <PoularTabs tabText={tabText} popularData={popularData} />
    </div>
  )
}

export default WhatsPopularPage
