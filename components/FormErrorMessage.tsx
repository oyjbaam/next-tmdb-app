import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import FlexBox from './ui/FlexBox'
type FormErrorMessageProps = {
  message?: string
}

const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  if (!message) return null
  return (
    <FlexBox
      justifyContent="center"
      alignItems="center"
      className="dark:bg-red-400/80 bg-destructive/15 p-3 rounded-md gap-x-2 text-sm text-destructive dark:text-destructive-foreground"
    >
      <FaExclamationTriangle className="h-4 w-4" />
      <span>{message}</span>
    </FlexBox>
  )
}

export default FormErrorMessage
