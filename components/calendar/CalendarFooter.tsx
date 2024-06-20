import { useCalendarContext } from '@/shared/context/calendarProvider'
import React from 'react'

const CalendarFooter = () => {
  const { startDate, endDate } = useCalendarContext()
  return (
    <div className="py-2 space-y-1 text-slate-400">
      {startDate ? (
        <div>
          시작 : <span className="dark:text-slate-300"> {startDate}</span>
        </div>
      ) : null}
      {endDate ? (
        <div>
          종료 : <span className="dark:text-slate-300"> {endDate}</span>
        </div>
      ) : null}
    </div>
  )
}

export default CalendarFooter
