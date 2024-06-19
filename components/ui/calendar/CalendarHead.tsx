import FlexBox from '../FlexBox'
import { Button } from '../button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCalendarContext } from '@/shared/context/calendarProvider'
import { format } from 'date-fns'

const CalendarHead = () => {
  const { currentDate, dispatch } = useCalendarContext()
  const { year, month } = currentDate
  const { handleNextMonth, handlePrevMonth } = dispatch
  return (
    <FlexBox alignItems="center" justifyContent="between" className="w-full h-10">
      <Button intent="outlined" className="w-7 h-7 p-0" onClick={handlePrevMonth}>
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <span className="text-base ">
        {format(month, 'LLL')} {year}
      </span>
      <Button intent="outlined" className="w-7 h-7 p-0" onClick={handleNextMonth}>
        <ChevronRight className="w-4 h-4" />
      </Button>
    </FlexBox>
  )
}

export default CalendarHead
