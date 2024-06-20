import {
  addMonths,
  addYears,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
  subMonths,
  subYears,
  isAfter,
} from 'date-fns'
import { useState } from 'react'

const useCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentYear, currentMonth, currentDay] = format(currentDate, 'yyyy-MM-dd').split('-')
  const [startDate, setStartDate] = useState<string | null>(null)
  const [endDate, setEndDate] = useState<string | null>(null)
  const [isSelectingStartDate, setIsSelectingStartDate] = useState(true)

  const startCurrentMonth = startOfMonth(currentDate)
  const endCurrentMonth = endOfMonth(currentDate)
  const startOfFirstWeek = startOfWeek(startCurrentMonth, { weekStartsOn: 0 })
  const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 })

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  })

  const handlePrevYear = () => {
    setCurrentDate(prevDate => subYears(prevDate, 1))
  }

  const handleNextYear = () => {
    setCurrentDate(prevDate => addYears(prevDate, 1))
  }
  const handlePrevMonth = () => {
    setCurrentDate(prevDate => subMonths(prevDate, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(prevDate => addMonths(prevDate, 1))
  }

  const handleSelectDate = (date: string) => {
    if (isSelectingStartDate) {
      setStartDate(date)
      setEndDate(null)
      setIsSelectingStartDate(false)
    } else {
      const start = startDate ? new Date(startDate) : null
      const end = new Date(date)

      if (start && isAfter(start, end)) {
        setStartDate(date)
        setEndDate(startDate)
      } else {
        setEndDate(date)
      }
      setIsSelectingStartDate(true)
    }
  }

  const daysInMonth = days.map(day => {
    return {
      date: format(day, 'yyyy-MM-dd'),
      year: format(day, 'yyyy'),
      month: format(day, 'MM'),
      day: format(day, 'dd'),
      dayIndexOfWeek: getDay(day),
    }
  })

  return {
    currentDate: {
      year: currentYear,
      month: currentMonth,
      day: currentDay,
    },
    daysInMonth,
    dispatch: {
      handlePrevYear,
      handleNextYear,
      handlePrevMonth,
      handleNextMonth,
      handleSelectDate,
    },
    startDate,
    endDate,
  }
}
export default useCalendar
