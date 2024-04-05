import React from 'react'

interface MoviePageLayoutProps {
  children: React.ReactNode
}

const MoviePageLayout = ({ children }: MoviePageLayoutProps) => {
  return <>{children}</>
}

export default MoviePageLayout
