import React from 'react'

interface GridProps {
  children?: React.ReactNode
}
const Grid = ({ children }: GridProps) => {
  return <div className="grid grid-cols-4 gap-4 justify-items-center">{children}</div>
}

export default Grid
