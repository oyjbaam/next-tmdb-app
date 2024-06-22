import React from 'react'
import { getPopular } from '@/shared/api/tmdbAPI'
import TabsWrapper from '@/components/common/TabsWrapper'
import { TabsContent } from '@/components/ui/tabs'
import Card from '@/components/common/Card'
import Link from 'next/link'
import { ChannelType } from '@/shared/types'

type WhatsPopularPageProps = {
  searchParams: Record<string, string | undefined>
}

const WhatsPopularPage = async ({ searchParams }: WhatsPopularPageProps) => {
  const tabValue = (searchParams.popular ?? 'movie') as ChannelType
  const popularData = await getPopular(tabValue)

  return (
    <section className="w-full">
      <h3 className="text-xl font-bold mt-10 mb-2">Whats Popular</h3>
      <TabsWrapper tabKeys={['Movie', 'Tv']} defaultValue={tabValue} paramKey="popular">
        <TabsContent value="movie" className="w-full">
          <div className="overflow-x-scroll flex gap-4 py-4">
            {popularData.results.map(movie => {
              return (
                <Link href={`/detail?mediaType=movie&id=${movie.id}`} key={movie.id}>
                  <Card data={movie} isMain />
                </Link>
              )
            })}
          </div>
        </TabsContent>
        <TabsContent value="tv">
          <div className="overflow-x-scroll flex gap-4 py-4">
            {popularData.results.map(tv => {
              return (
                <Link href={`/detail?mediaType=tv&id=${tv.id}`} key={tv.id}>
                  <Card key={tv.id} data={tv} isMain />
                </Link>
              )
            })}
          </div>
        </TabsContent>
      </TabsWrapper>
    </section>
  )
}

export default WhatsPopularPage
