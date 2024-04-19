'use client'

import { useEffect } from 'react'

const ErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error('errorpage', error)
  }, [error])
  return <div>{error.message}</div>
}

export default ErrorPage
