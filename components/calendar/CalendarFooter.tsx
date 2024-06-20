import { useCalendarContext } from '@/shared/context/calendarProvider'
import React from 'react'

const CalendarFooter = () => {
  const { startDate, endDate } = useCalendarContext()
  return (
    <div className="py-2 space-y-1">
      {startDate ? (
        <div>
          <span>시작 : {startDate}</span>
        </div>
      ) : null}
      {endDate ? (
        <div>
          <span>종료 : {endDate}</span>
        </div>
      ) : null}
    </div>
  )
}

export default CalendarFooter
