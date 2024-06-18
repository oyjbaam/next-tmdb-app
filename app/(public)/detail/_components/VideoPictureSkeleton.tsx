import React from 'react'

const VideoPictureSkeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse w-1/4 flex-shrink-0 rounded-md flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700"
    >
      <div className="aspect-video bg-slate-200  dark:bg-slate-700"></div>

      <span role="status" className="sr-only">
        loading...
      </span>
    </div>
  )
}

export default VideoPictureSkeleton
