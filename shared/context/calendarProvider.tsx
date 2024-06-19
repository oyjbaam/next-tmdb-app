'use client'
import { createContext, useContext } from 'react'
import useCalendar from '../hooks/useCalendar'

type DateInfo = {
  year: string
  month: string
  day: string
}
type CalendarContextType = {
  currentDate: DateInfo
  daysInMonth: (DateInfo & { date: string; dayIndexOfWeek: number })[]
  dispatch: {
    handlePrevYear: () => void
    handleNextYear: () => void
    handlePrevMonth: () => void
    handleNextMonth: () => void
    handleSelectDate: (date: string) => void
  }
  startDate: string | null
  endDate: string | null
}

export const CalendarContext = createContext<CalendarContextType | null>(null)

const CalendarProvider = ({ children }: { children: React.ReactNode }) => {
  const calendar = useCalendar()

  return <CalendarContext.Provider value={calendar}>{children}</CalendarContext.Provider>
}

export default CalendarProvider

export const useCalendarContext = () => {
  const context = useContext(CalendarContext)
  if (!context) {
    throw new Error('useCalendarContext must be used within CalendarProvider')
  }
  return context
}
