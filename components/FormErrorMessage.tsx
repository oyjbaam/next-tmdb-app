import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'

type FormErrorMessageProps = {
  message?: string
}

const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  if (!message) return null
  return (
    <div className="dark:bg-red-400/80 bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive dark:text-destructive-foreground">
      <FaExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}

export default FormErrorMessage
