import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="inner">{children}</main>
}

export default layout
