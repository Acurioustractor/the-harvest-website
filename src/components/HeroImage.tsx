import { motion } from 'framer-motion'
import Image from './Image'
import clsx from 'clsx'

interface HeroImageProps {
  src: string
  alt: string
  title?: string
  subtitle?: string
  height?: 'full' | 'large' | 'medium'
  overlay?: boolean
  className?: string
}

export default function HeroImage({
  src,
  alt,
  title,
  subtitle,
  height = 'large',
  overlay = true,
  className
}: HeroImageProps) {
  const heightClasses = {
    full: 'h-screen',
    large: 'h-[70vh] min-h-[500px]',
    medium: 'h-[50vh] min-h-[400px]'
  }

  return (
    <section className={clsx('relative', heightClasses[height], className)}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40" />
        )}
      </div>

      {/* Content */}
      {(title || subtitle) && (
        <div className="relative h-full flex items-center justify-center">
          <div className="container-custom text-center text-white">
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light mb-4"
              >
                {title}
              </motion.h1>
            )}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}