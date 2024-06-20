import React from 'react'

type ChannelLayoutProps = {
  children: React.ReactNode
  filtersection: React.ReactNode
  cardlistsection: React.ReactNode
}

const ChannelLayout = ({ children, filtersection, cardlistsection }: ChannelLayoutProps) => {
  return (
    <div className="inner">
      {children}
      {filtersection}
      {cardlistsection}
    </div>
  )
}

export default ChannelLayout
