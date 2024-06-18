import React from 'react'

type SynopsisProps = {
  overview: string
}

const Synopsis = ({ overview }: SynopsisProps) => {
  if (!overview) {
    return null
  }
  return (
    <div className="space-y-1">
      <h3 className="text-2xl dark:text-white">SYNOPSIS</h3>
      <p className="text-base font-sans">{overview}</p>
    </div>
  )
}

export default Synopsis
