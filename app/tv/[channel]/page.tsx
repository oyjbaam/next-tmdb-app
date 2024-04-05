import React from 'react'

interface TvSegmentsProps {
  params: { channel: string }
}

const TvSegments = ({ params }: TvSegmentsProps) => {
  return <div>{params.channel}</div>
}

export default TvSegments
