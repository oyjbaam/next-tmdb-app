import React from 'react'

type SynopsisProps = {
  overview: string | null
  mediaType: string | undefined
}

const Synopsis = ({ overview, mediaType }: SynopsisProps) => {
  if (!overview || !mediaType) {
    return null
  }
  return (
    <div className="space-y-1">
      <h3 className="text-2xl dark:text-white">{mediaType === 'person' ? 'BIOGRAPHY' : 'SYNOPSIS'}</h3>
      <p className="text-base font-sans">{overview}</p>
    </div>
  )
}

export default Synopsis
