'use client'

import ReactPlayer from 'react-player'

type Props = {
  url: string
}

export function VideoPlayer({ url }: Props) {
  return (
    <div className="relative aspect-video w-full">
      <ReactPlayer
        url={url}
        className="absolute inset-0"
        width="100%"
        height="100%"
        controls
      />
    </div>
  )
}
