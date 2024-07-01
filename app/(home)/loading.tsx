import React from 'react'

const loading = () => {
  return (
    <div role="status" className=" animate-pulse">
      <div className="h-80 w-full bg-gray-200 dark:bg-slate-700 rounded-md"></div>
      <span role="status" className="sr-only">
        loading...
      </span>
    </div>
  )
}

export default loading
