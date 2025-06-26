'use client'

import { useState, useRef, useCallback } from 'react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
  className = ""
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [isDragging])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }, [isDragging])

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden cursor-ew-resize select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After Image (Background) */}
      <div className="relative w-full h-full">
        <img 
          src={afterImage} 
          alt={afterLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        
        {/* After Label */}
        <div className="absolute top-4 right-4 bg-heritage-green text-cream px-3 py-1 rounded-full text-sm font-medium">
          {afterLabel}
        </div>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
      >
        <img 
          src={beforeImage} 
          alt={beforeLabel}
          className="w-full h-full object-cover"
          draggable={false}
        />
        
        {/* Before Label */}
        <div className="absolute top-4 left-4 bg-warm-soil text-cream px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* Slider Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-heritage-green flex items-center justify-center">
          <div className="flex space-x-0.5">
            <div className="w-0.5 h-4 bg-heritage-green rounded"></div>
            <div className="w-0.5 h-4 bg-heritage-green rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}