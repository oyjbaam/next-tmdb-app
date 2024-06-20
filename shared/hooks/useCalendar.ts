import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  startOfMonth,
  startOfWeek,
  subMonths,
  isAfter,
} from 'date-fns'
import { useCallback, useState, useEffect } from 'react'
import { useQueryString } from './useQueryString'

const useCalendar = () => {
  const { searchParams, router } = useQueryString()
  const [currentDate, setCurrentDate] = useState(new Date())
  const [currentYear, currentMonth, currentDay] = format(currentDate, 'yyyy-MM-dd').split('-')
  const [startDate, setStartDate] = useState<string | null>(searchParams.get('primary_release_date.gte'))
  const [endDate, setEndDate] = useState<string | null>(searchParams.get('primary_release_date.lte'))
  const [isSelectingStartDate, setIsSelectingStartDate] = useState(true)
  const startCurrentMonth = startOfMonth(currentDate)
  const endCurrentMonth = endOfMonth(currentDate)
  const startOfFirstWeek = startOfWeek(startCurrentMonth, { weekStartsOn: 0 })
  const endOfLastWeek = endOfWeek(endCurrentMonth, { weekStartsOn: 0 })

  const days = eachDayOfInterval({
    start: startOfFirstWeek,
    end: endOfLastWeek,
  })

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

  const generateLink = useCallback(() => {
    const newQuery = new URLSearchParams(searchParams.toString())
    if (startDate) {
      newQuery.set('primary_release_date.gte', startDate)
    } else {
      newQuery.delete('primary_release_date.gte')
    }

    if (endDate) {
      newQuery.set('primary_release_date.lte', endDate)
    } else {
      newQuery.delete('primary_release_date.lte')
    }
    router.push(`?${newQuery.toString()}`, { scroll: false })
  }, [searchParams, router, startDate, endDate])

  useEffect(() => {
    generateLink()
  }, [generateLink])

  return {
    currentDate: {
      year: currentYear,
      month: currentMonth,
      day: currentDay,
    },
    daysInMonth,
    dispatch: {
      handlePrevMonth,
      handleNextMonth,
      handleSelectDate,
      generateLink,
    },
    startDate,
    endDate,
  }
}
export default useCalendar
