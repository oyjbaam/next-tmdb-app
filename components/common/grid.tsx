import React from 'react'

interface GridProps {
  children?: React.ReactNode
}
const Grid = ({ children }: GridProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-center lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
      {children}
    </div>
  )
}

export default Grid
