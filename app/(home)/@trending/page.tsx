import React from 'react'
import TabsWrapper from '@/components/common/TabsWrapper'
import { TabsContent } from '@/components/ui/tabs'
import { getTrending } from '@/shared/api/tmdbAPI'
import Card from '@/components/common/Card'
import Link from 'next/link'

type TrendingPageProps = {
  searchParams: Record<string, string | undefined>
}

const TrendingPage = async ({ searchParams }: TrendingPageProps) => {
  const tabValue = searchParams.trending ?? 'today'
  const url = tabValue === 'today' ? 'day' : 'week'
  const trendingData = await getTrending(url)

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold mt-10 mb-2">Trending</h3>
      <TabsWrapper tabKeys={['Today', 'Weeks']} defaultValue={tabValue} paramKey="trending">
        <TabsContent value="today" className="w-full">
          <div className="overflow-x-scroll flex gap-4 py-4">
            {trendingData.results.map(data => {
              return (
                <Link href={`/detail?mediaType=${data.media_type}&id=${data.id}`} key={data.id}>
                  <Card data={data} isMain />
                </Link>
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value="weeks">
          <div className="overflow-x-scroll flex gap-4 py-4">
            {trendingData.results.map(data => {
              return (
                <Link href={`/detail?mediaType=${data.media_type}&id=${data.id}`} key={data.id}>
                  <Card data={data} isMain />
                </Link>
              )
            })}
          </div>
        </TabsContent>
      </TabsWrapper>
    </div>
  )
}

export default TrendingPage
