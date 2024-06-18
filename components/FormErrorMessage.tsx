import React from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

type FormErrorMessageProps = {
  message?: string
}

const FormErrorMessage = ({ message }: FormErrorMessageProps) => {
  if (!message) return null
  return (
    <div className="dark:bg-red-400/80 bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive dark:text-destructive-foreground">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}

export default FormErrorMessage
