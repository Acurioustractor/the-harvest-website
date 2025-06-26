import { useState } from 'react'
import NextImage from 'next/image'
import clsx from 'clsx'

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  fill?: boolean
  sizes?: string
  className?: string
  caption?: string
  credit?: string
}

export default function Image({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false,
  fill = false,
  sizes = '100vw',
  className,
  caption,
  credit
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Handle both internal and external images
  const imageSrc = src.startsWith('http') ? src : `/images/${src}`

  return (
    <figure className={clsx('relative', className)}>
      <div className={clsx(
        'relative overflow-hidden bg-stone/5 rounded-lg',
        fill ? 'w-full h-full' : 'inline-block'
      )}>
        <NextImage
          src={imageSrc}
          alt={alt}
          width={fill ? undefined : width}
          height={fill ? undefined : height}
          fill={fill}
          sizes={sizes}
          priority={priority}
          className={clsx(
            'duration-700 ease-in-out',
            isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'
          )}
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
      {(caption || credit) && (
        <figcaption className="mt-2 text-sm text-stone/60 text-center">
          {caption && <span>{caption}</span>}
          {caption && credit && <span> • </span>}
          {credit && <span className="italic">Photo: {credit}</span>}
        </figcaption>
      )}
    </figure>
  )
}