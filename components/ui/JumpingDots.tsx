import React from 'react'

const JumpingDots = () => {
  return (
    <div role="status" className="jumping-dots-loader absolute z-50 flex items-center justify-center space-x-2">
      <span aria-hidden className="h-2 w-2 rounded-full bg-primary "></span>
      <span aria-hidden className="h-2 w-2 rounded-full bg-primary "></span>
      <span aria-hidden className="h-2 w-2 rounded-full bg-primary "></span>
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default JumpingDots
