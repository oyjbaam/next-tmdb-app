'use client'
import FilterItem from './FilterItem'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/shared/util/twMerge'
import { format } from 'date-fns'
import Calendar from '@/components/calendar/Calendar'
import { useCalendarContext } from '@/shared/context/calendarProvider'
import { ChannelType } from '@/shared/types'

type SelectDateProps = {
  channel: ChannelType
}

const SelectDate = ({ channel }: SelectDateProps) => {
  const { startDate } = useCalendarContext()

  return (
    <FilterItem title={channel === 'movie' ? '출시 날짜' : '방영 일자'}>
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
          <Calendar />
        </PopoverContent>
      </Popover>
    </FilterItem>
  )
}

export default SelectDate
