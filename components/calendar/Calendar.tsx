import React from 'react'
import CalendarHead from './CalendarHead'
import CalendarContent from './CalendarContent'
import CalendarFooter from './CalendarFooter'

const Calendar = () => {
  return (
    <div className="p-2">
      <CalendarHead />
      <CalendarContent />
      <CalendarFooter />
    </div>
  )
}

export default Calendar
