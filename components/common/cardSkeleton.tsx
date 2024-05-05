import React from 'react'

const CardSkeleton = () => {
  return (
    <>
      {[...Array(20)].map(skeleton => {
        return (
          <div
            key={skeleton}
            className="w-52 h-full min-h-min flex-shrink-0 rounded-md flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700"
          >
            <div className="h-72 w-full bg-slate-200 p-2 relative dark:bg-slate-700"></div>
            <div className="p-2">
              <div className="py-1">
                <div className="h-2 flex justify-between gap-4">
                  <div className="bg-slate-200 flex-grow rounded-md dark:bg-slate-700"></div>
                  <div className="bg-slate-200 w-4 rounded-md dark:bg-slate-700"> </div>
                </div>
              </div>
              <div className="h-3 bg-slate-200 rounded-md dark:bg-slate-700"> </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CardSkeleton
