'use client'

import { useState } from 'react'
import clsx from 'clsx'

interface VideoProps {
  src: string
  title: string
  type?: 'youtube' | 'vimeo' | 'local' | 'descript' | 'embed'
  embedCode?: string
  poster?: string
  aspectRatio?: '16:9' | '4:3' | '1:1'
  autoplay?: boolean
  controls?: boolean
  muted?: boolean
  className?: string
  caption?: string
}

export default function Video({
  src,
  title,
  type = 'local',
  embedCode,
  poster,
  aspectRatio = '16:9',
  autoplay = false,
  controls = true,
  muted = false,
  className,
  caption
}: VideoProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [showVideo, setShowVideo] = useState(autoplay)

  // Extract video ID for YouTube/Vimeo
  const getVideoId = (url: string, platform: string) => {
    if (platform === 'youtube') {
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/)
      return match ? match[1] : url
    }
    if (platform === 'vimeo') {
      const match = url.match(/vimeo\.com\/(\d+)/)
      return match ? match[1] : url
    }
    return url
  }

  const aspectRatioClass = {
    '16:9': 'pb-[56.25%]',
    '4:3': 'pb-[75%]',
    '1:1': 'pb-[100%]'
  }[aspectRatio]

  const videoId = type !== 'local' ? getVideoId(src, type) : null

  const embedSrc = type === 'embed' ? '' : {
    youtube: `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1${autoplay ? '&autoplay=1' : ''}${muted ? '&mute=1' : ''}`,
    vimeo: `https://player.vimeo.com/video/${videoId}?${autoplay ? 'autoplay=1' : ''}${muted ? '&muted=1' : ''}`,
    descript: src,
    local: src.startsWith('http') ? src : `/videos/${src}`
  }[type]

  const thumbnailSrc = poster || (type === 'youtube' ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : null)

  return (
    <figure className={clsx('relative', className)}>
      <div className={clsx(
        'relative overflow-hidden bg-stone/5 rounded-lg',
        aspectRatioClass
      )}>
        {!showVideo && thumbnailSrc && (
          <div className="absolute inset-0">
            <img 
              src={thumbnailSrc} 
              alt={title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => setShowVideo(true)}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
              aria-label={`Play video: ${title}`}
            >
              <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                <svg className="w-8 h-8 text-heritage-green ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </button>
          </div>
        )}
        
        {(showVideo || !thumbnailSrc) && (
          <>
            {type === 'local' ? (
              <video
                className="absolute inset-0 w-full h-full"
                src={embedSrc}
                title={title}
                poster={poster}
                autoPlay={autoplay}
                controls={controls}
                muted={muted}
                onLoadedData={() => setIsLoading(false)}
              />
            ) : type === 'embed' && embedCode ? (
              <div 
                className="absolute inset-0 w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
                dangerouslySetInnerHTML={{ __html: embedCode }}
                onLoad={() => setIsLoading(false)}
              />
            ) : (
              <iframe
                className={clsx(
                  'absolute inset-0 w-full h-full',
                  isLoading && 'opacity-0'
                )}
                src={embedSrc}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            )}
            {isLoading && type !== 'embed' && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-stone/20 border-t-heritage-green rounded-full animate-spin" />
              </div>
            )}
          </>
        )}
      </div>
      
      {caption && (
        <figcaption className="mt-2 text-sm text-stone/60 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}