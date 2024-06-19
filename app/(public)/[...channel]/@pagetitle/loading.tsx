import React from 'react'

const loading = () => {
  return (
    <div role="status" className=" animate-pulse w-40 h-8 bg-slate-200 rounded-md dark:bg-slate-700">
      <span role="status" className="sr-only">
        loading...
      </span>
    </div>
  )
}

export default loading
