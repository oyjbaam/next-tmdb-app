import React from 'react'

interface MovieSegmentsProps {
  params: { channel: string }
}

const MovieSegments = ({ params }: MovieSegmentsProps) => {
  return <div>{params.channel}</div>
}

export default MovieSegments
