import React from 'react'
import { cn } from '@/shared/util/twMerge'
import { Button } from '../button'
import { parseISO, isWithinInterval, isThisMonth } from 'date-fns'
import { useCalendarContext } from '@/shared/context/calendarProvider'
import { isSelectDate } from '@/shared/util/isSelectDate'

const weeks = ['일', '월', '화', '수', '목', '금', '토']

const CalendarContent = () => {
  const { daysInMonth, currentDate, startDate, endDate, dispatch } = useCalendarContext()
  const { month, day } = currentDate

  return (
    <>
      <ul className="grid grid-cols-7 w-full justify-items-center">
        {weeks.map(week => {
          return (
            <li key={week} className="h-9 w-9 flex items-center justify-center">
              {week}
            </li>
          )
        })}
      </ul>
      <ul className="grid grid-cols-7 justify-items-center ">
        {daysInMonth.map(item => {
          const itemDate = parseISO(item.date)
          const currentMonthClass = month === item.month ? 'opacity-100' : 'opacity-30'
          const currentDayClass = isThisMonth(itemDate) && day === item.day ? 'dark:bg-slate-700/80 bg-slate-200' : ''

          const isSelectedStartDate = isSelectDate(startDate, itemDate)
          const isSelectedEndDate = isSelectDate(endDate, itemDate)

          const isInRange =
            startDate && endDate
              ? isWithinInterval(item.date, { start: parseISO(startDate), end: parseISO(endDate) })
              : false

          const isSelectedClass =
            isSelectedStartDate || isSelectedEndDate
              ? 'bg-purple-500 dark:lg:hover:text-white text-white lg:hover:text-white'
              : isInRange
                ? 'bg-purple-200 dark:bg-purple-700'
                : ''

          return (
            <li key={item.date} className={cn(currentMonthClass, currentDayClass, 'rounded-md')}>
              <Button
                intent="text"
                className={`w-9 h-9 p-0 font-normal ${isSelectedClass}`}
                aria-selected={isSelectedStartDate || isSelectedEndDate}
                onClick={() => dispatch.handleSelectDate(item.date)}
              >
                {item.day}
              </Button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default CalendarContent
