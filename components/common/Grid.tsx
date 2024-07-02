import React from 'react'

type GridProps = {
  children?: React.ReactNode
}
const Grid = ({ children }: GridProps) => {
  return (
    <section className="grid grid-cols-2 gap-4 justify-items-center xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {children}
    </section>
  )
}

export default Grid
