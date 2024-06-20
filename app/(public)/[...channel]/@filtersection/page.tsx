import React from 'react'
import { ChannelType, PathType } from '@/shared/types/channel'
import SelectGenre from './_components/SelectGenre'
import SelectDate from './_components/SelectDate'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ChevronDown } from 'lucide-react'
import FlexBox from '@/components/ui/FlexBox'
import CalendarProvider from '@/shared/context/calendarProvider'
import { getGenreList } from '@/shared/api/tmdbFilterListApi'
import FilterSubmitButton from './_components/FilterSubmitButton'
import GenreProvider from '@/shared/context/genreProvider'

type FilterSectionProps = {
  params: Record<string, [ChannelType, PathType]>
}

const FilterSection = async ({ params }: FilterSectionProps) => {
  const [channel] = params.channel

  if (channel === 'search') {
    return null
  }
  const res = await getGenreList(channel)

  return (
    <section className="space-y-3 mb-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-0">
          <AccordionTrigger>
            <FlexBox alignItems="center" className="gap-2">
              <h2 className="text-base">필터</h2>
              <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </FlexBox>
          </AccordionTrigger>
          <AccordionContent className="p-1 space-y-3">
            <CalendarProvider>
              <GenreProvider>
                <SelectGenre data={res.genres} />
                <SelectDate />
                <FilterSubmitButton />
              </GenreProvider>
            </CalendarProvider>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default FilterSection
