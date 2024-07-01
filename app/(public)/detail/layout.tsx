import React from 'react'

type DetailLayoutProps = {
  children: React.ReactNode
  similar: React.ReactNode
}

const DetailLayout = ({ children, similar }: DetailLayoutProps) => {
  return (
    <div className="inner leading-none">
      <div className="space-y-8 lg:space-y-0 justify-items-center lg:grid lg:grid-cols-2 lg:pt-20 flex flex-col justify-center items-center lg:items-start">
        {children}
      </div>
      {similar}
    </div>
  )
}

export default DetailLayout
