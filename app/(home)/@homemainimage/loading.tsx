import React from 'react'

const loading = () => {
  return (
    <div role="status" className="h-80 w-full animate-pulse bg-gray-200 dark:bg-slate-700 rounded-md">
      <span role="status" className="sr-only">
        loading...
      </span>
    </div>
  )
}

export default loading
