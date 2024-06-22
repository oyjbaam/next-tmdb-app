import { isSameDay, parseISO } from 'date-fns'

export const isSelectDate = (selectDate: string | null, itemDate: Date): boolean => {
  return selectDate ? isSameDay(parseISO(selectDate), itemDate) : false
}
