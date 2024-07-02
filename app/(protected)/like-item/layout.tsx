import React from 'react'

const LikeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="inner pt-8 ">
      <h1 className="text-xl font-semibold mb-4">좋아요 목록</h1>
      {children}
    </section>
  )
}

export default LikeLayout
