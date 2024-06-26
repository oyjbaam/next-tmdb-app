'use client'
import { useCallback } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useQueryString } from '@/shared/hooks/useQueryString'

type TabsWrapperProps = {
  tabKeys: string[]
  children: React.ReactNode
  defaultValue: string
  paramKey: string
}

const TabsWrapper = ({ children, tabKeys, defaultValue, paramKey }: TabsWrapperProps) => {
  const { router, pathname, searchParams } = useQueryString()

  const handleTabChange = useCallback(
    (value: string) => {
      const updatedParams = new URLSearchParams(searchParams.toString())
      updatedParams.set(paramKey, value)

      router.replace(`${pathname}?${updatedParams.toString()}`, { scroll: false })
    },
    [searchParams, pathname, router, paramKey]
  )

  return (
    <Tabs defaultValue={defaultValue} className="w-full" onValueChange={handleTabChange}>
      <TabsList className="grid grid-cols-2 dark:bg-slate-700 w-full md:w-[400px] bg-slate-200">
        {tabKeys.map((tab, index) => {
          return (
            <TabsTrigger
              key={tab}
              value={tabKeys[index].toLowerCase()}
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white dark:lg:hover:bg-slate-600 lg:hover:bg-slate-300 data-[state=active]:lg:hover:bg-purple-500 data-[state=active]:dark:lg:hover:bg-purple-500"
            >
              {tabKeys[index]}
            </TabsTrigger>
          )
        })}
      </TabsList>
      {children}
    </Tabs>
  )
}

export default TabsWrapper
