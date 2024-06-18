import React from 'react'
import { CircleCheck } from 'lucide-react'
import FlexBox from './ui/FlexBox'
type FormSuccessMessageProps = {
  message?: string
}

const FormSuccessMessage = ({ message }: FormSuccessMessageProps) => {
  if (!message) return null
  return (
    <FlexBox
      justifyContent="center"
      alignItems="center"
      className="bg-emerald-500/15 p-3 rounded-md gap-x-2 text-sm text-emerald-500"
    >
      <CircleCheck className="h-4 w-4" />
      <p>{message}</p>
    </FlexBox>
  )
}

export default FormSuccessMessage
