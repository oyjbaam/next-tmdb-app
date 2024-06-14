import React from 'react'

type InnerLayoutProps = {
  children: React.ReactNode
  whatspopular: React.ReactNode
}

const InnerLayout = ({ children, whatspopular }: InnerLayoutProps) => {
  return (
    <div className="inner px-3">
      {children}
      {whatspopular}
    </div>
  )
}

export default InnerLayout
