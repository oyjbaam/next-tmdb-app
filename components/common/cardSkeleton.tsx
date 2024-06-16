import React from 'react'

const CardSkeleton = () => {
  return (
    <>
      {[...Array(20)].map((_, idx) => {
        return (
          <div
            key={idx}
            className="xl:w-[13.875rem] md:w-[15.875rem] sm:w-[19.875rem] w-[23.875rem] max-h-fit flex-shrink-0 rounded-md flex flex-col overflow-hidden border border-slate-200 dark:border-slate-700"
          >
            <div className="aspect-card h-[35.8125rem] lg:h-[20.8125rem] md:h-[23.8125rem] sm:h-[29.8125rem] bg-slate-200 p-2 relative dark:bg-slate-700"></div>
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
