'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { MovieResults } from '@/shared/types/movieType'
import { TvShowResults } from '@/shared/types/tvType'
import Card from '@/components/ui/card'

type PoularTabsProps = {
  tabText: string
  popularData: MovieResults | TvShowResults
}
const PoularTabs = ({ tabText, popularData }: PoularTabsProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('popular', value)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <Tabs defaultValue={tabText} className="w-full" onValueChange={handleTabChange}>
      <TabsList className="grid grid-cols-2 dark:bg-slate-700 w-full md:w-[400px] lg:w-[400px]">
        <TabsTrigger value="movie" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
          Movie
        </TabsTrigger>
        <TabsTrigger value="tv" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
          Tv
        </TabsTrigger>
      </TabsList>
      <TabsContent value="movie" className="w-full">
        <div className="overflow-x-scroll flex gap-4 py-4">
          {popularData.results.map(movie => (
            <Card key={movie.id} data={movie} isMain />
          ))}
        </div>
      </TabsContent>
      <TabsContent value="tv">
        <div className="overflow-x-scroll flex gap-4 py-4">
          {popularData.results.map(movie => (
            <Card key={movie.id} data={movie} isMain />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default PoularTabs
