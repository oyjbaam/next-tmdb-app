'use client'
import { useState, useEffect } from 'react'
import { Calendar } from '@/components/ui/calendar'
import FilterItem from './FilterItem'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { CalendarIcon } from 'lucide-react'
import { cn } from '@/shared/util/twMerge'
import { format } from 'date-fns'
import MyCaledar from '@/components/ui/MyCaledar'
const SelectDate = () => {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()

  return (
    <FilterItem title="출시 날짜">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            intent="outlined"
            className={cn(' justify-start text-left font-normal', !startDate && 'text-muted-foreground')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {startDate ? format(startDate, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 dark:bg-slate-900">
          <MyCaledar selected={startDate} onSelect={setStartDate} />
        </PopoverContent>
      </Popover>
      <span>-</span>

      <Popover>
        <PopoverTrigger asChild>
          <Button
            intent="outlined"
            className={cn('justify-start text-left font-normal', !endDate && 'text-muted-foreground')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {endDate ? format(endDate, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 ">
          <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
        </PopoverContent>
      </Popover>
    </FilterItem>
  )
}

export default SelectDate
