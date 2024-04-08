import React from 'react'

interface ChannelSegmentsProps {
  params: { channel: string }
}

const ChannelSegments = ({ params }: ChannelSegmentsProps) => {
  return <div>{params.channel}</div>
}

export default ChannelSegments
