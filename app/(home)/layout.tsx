import React from 'react'

type InnerLayoutProps = {
  children: React.ReactNode
  homemainimage: React.ReactNode
  whatspopular: React.ReactNode
  trending: React.ReactNode
}

const InnerLayout = ({ children, homemainimage, whatspopular, trending }: InnerLayoutProps) => {
  return (
    <div className="inner px-3">
      {children}
      {homemainimage}
      {whatspopular}
      {trending}
    </div>
  )
}

export default InnerLayout
