'use client'
import FilterItem from './FilterItem'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/shared/util/twMerge'
import { format } from 'date-fns'
import CalendarWrapper from '@/components/ui/calendar/CalendarWrapper'
import { useCalendarContext } from '@/shared/context/calendarProvider'

const SelectDate = () => {
  const { startDate } = useCalendarContext()

  return (
    <FilterItem title="출시 날짜">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            intent="outlined"
            className={cn(' justify-start text-left font-normal', !startDate && 'text-muted-foreground')}
          >
            <CalendarIcon className="h-4 w-4" />
            {startDate ? format(startDate, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 dark:bg-slate-900">
          <CalendarWrapper />
        </PopoverContent>
      </Popover>
    </FilterItem>
  )
}

export default SelectDate
