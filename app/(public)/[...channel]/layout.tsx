import React from 'react'

type ChannelLayoutProps = {
  children: React.ReactNode
  filtersection: React.ReactNode
  pagetitle: React.ReactNode
}

const ChannelLayout = ({ children, filtersection, pagetitle }: ChannelLayoutProps) => {
  return (
    <div className="inner">
      {pagetitle}
      {filtersection}
      {children}
    </div>
  )
}

export default ChannelLayout
