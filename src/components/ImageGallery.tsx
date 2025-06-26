'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from './Image'
import clsx from 'clsx'

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  credit?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
  columns?: 2 | 3 | 4
  className?: string
}

export default function ImageGallery({ images, columns = 3, className }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  }[columns]

  return (
    <>
      <div className={clsx(`grid ${gridCols} gap-4`, className)}>
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative overflow-hidden rounded-lg aspect-[4/3]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${100/columns}vw`}
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
            {image.caption && (
              <p className="mt-2 text-sm text-stone/60">{image.caption}</p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-cream transition-colors"
                aria-label="Close image"
              >
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="relative">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
                {(selectedImage.caption || selectedImage.credit) && (
                  <div className="mt-4 text-center text-white">
                    {selectedImage.caption && <p>{selectedImage.caption}</p>}
                    {selectedImage.credit && <p className="text-sm opacity-70 mt-1">Photo: {selectedImage.credit}</p>}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}