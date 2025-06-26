'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SiteArea {
  id: string
  title: string
  x: number // percentage from left
  y: number // percentage from top
  width: number // percentage width
  height: number // percentage height
  color: string
  status: 'vision' | 'planning' | 'development' | 'active'
  description: string
  investment?: string
  timeline: string
}

const siteAreas: SiteArea[] = [
  {
    id: 'therapeutic',
    title: 'Therapeutic Gardens',
    x: 15,
    y: 25,
    width: 25,
    height: 30,
    color: 'bg-heritage-green/20 border-heritage-green',
    status: 'planning',
    description: 'Accessible raised beds and healing spaces',
    investment: '$150,000',
    timeline: 'Q2 2025'
  },
  {
    id: 'kitchen',
    title: 'Commercial Kitchen',
    x: 45,
    y: 20,
    width: 20,
    height: 25,
    color: 'bg-warm-soil/20 border-warm-soil',
    status: 'planning',
    description: 'Social enterprise restaurant and training facility',
    investment: '$300,000',
    timeline: 'Q4 2025'
  },
  {
    id: 'accommodation',
    title: 'Farm Stay Cabins',
    x: 70,
    y: 15,
    width: 25,
    height: 20,
    color: 'bg-sage-gray/20 border-sage-gray',
    status: 'vision',
    description: '4 sustainable cabins with valley views',
    investment: '$400,000',
    timeline: '2026'
  },
  {
    id: 'community',
    title: 'Community Hub',
    x: 25,
    y: 60,
    width: 30,
    height: 25,
    color: 'bg-harvest-gold/20 border-harvest-gold',
    status: 'development',
    description: 'Event space and meeting rooms',
    investment: '$200,000',
    timeline: 'Q3 2025'
  },
  {
    id: 'production',
    title: 'Market Gardens',
    x: 60,
    y: 50,
    width: 35,
    height: 40,
    color: 'bg-sage-gray/10 border-sage-gray',
    status: 'active',
    description: 'Organic production and CSA program',
    investment: '$50,000',
    timeline: 'Ongoing'
  },
  {
    id: 'training',
    title: 'Training Center',
    x: 10,
    y: 90,
    width: 20,
    height: 15,
    color: 'bg-heritage-green/10 border-heritage-green',
    status: 'planning',
    description: 'Skills development and education',
    investment: '$100,000',
    timeline: 'Q1 2026'
  }
]

const statusColors = {
  vision: 'bg-stone/20 text-stone',
  planning: 'bg-heritage-green/20 text-heritage-green',
  development: 'bg-harvest-gold/20 text-harvest-gold',
  active: 'bg-sage-gray/20 text-sage-gray'
}

export default function InteractiveSiteMap() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)
  const [zoom, setZoom] = useState(1)
  const [pan, setPan] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  
  const mapRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.target === mapRef.current) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y })
    }
  }, [pan])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }, [isDragging, dragStart])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault()
    const newZoom = Math.max(0.5, Math.min(3, zoom + (e.deltaY > 0 ? -0.1 : 0.1)))
    setZoom(newZoom)
  }, [zoom])

  const resetView = () => {
    setZoom(1)
    setPan({ x: 0, y: 0 })
  }

  const selectedAreaData = siteAreas.find(area => area.id === selectedArea)

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-sage-gray/10 to-heritage-green/10 rounded-lg overflow-hidden border border-stone/20">
      {/* Controls */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
        <button
          onClick={() => setZoom(Math.min(3, zoom + 0.2))}
          className="w-8 h-8 bg-white/90 hover:bg-white rounded border border-stone/20 flex items-center justify-center text-heritage-green font-bold"
        >
          +
        </button>
        <button
          onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
          className="w-8 h-8 bg-white/90 hover:bg-white rounded border border-stone/20 flex items-center justify-center text-heritage-green font-bold"
        >
          −
        </button>
        <button
          onClick={resetView}
          className="px-2 py-1 bg-white/90 hover:bg-white rounded border border-stone/20 text-xs text-heritage-green"
        >
          Reset
        </button>
      </div>

      {/* Legend */}
      <div className="absolute top-4 right-4 z-20 bg-white/90 rounded-lg p-3 space-y-2">
        <p className="text-xs font-medium text-stone/70">Development Status</p>
        {Object.entries(statusColors).map(([status, className]) => (
          <div key={status} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${className}`}></div>
            <span className="text-xs capitalize">{status}</span>
          </div>
        ))}
      </div>

      {/* Site Map */}
      <div
        ref={mapRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onWheel={handleWheel}
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
          transformOrigin: 'center center'
        }}
      >
        {/* Background site outline */}
        <div className="absolute inset-4 border-2 border-dashed border-stone/30 rounded-lg">
          <div className="absolute top-2 left-2 text-xs text-stone/50">
            9 Gumland Drive, Witta
          </div>
        </div>

        {/* Site Areas */}
        {siteAreas.map((area) => (
          <motion.div
            key={area.id}
            className={`absolute border-2 rounded-lg cursor-pointer transition-all duration-200 ${area.color} ${
              hoveredArea === area.id ? 'shadow-lg scale-105 z-10' : 'z-5'
            } ${selectedArea === area.id ? 'ring-2 ring-heritage-green ring-offset-2' : ''}`}
            style={{
              left: `${area.x}%`,
              top: `${area.y}%`,
              width: `${area.width}%`,
              height: `${area.height}%`
            }}
            onMouseEnter={() => setHoveredArea(area.id)}
            onMouseLeave={() => setHoveredArea(null)}
            onClick={(e) => {
              e.stopPropagation()
              setSelectedArea(area.id === selectedArea ? null : area.id)
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Area Content */}
            <div className="p-2 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xs font-medium text-heritage-green leading-tight">
                  {area.title}
                </h3>
                <div className={`inline-block mt-1 px-2 py-0.5 rounded-full text-xs ${statusColors[area.status]}`}>
                  {area.status}
                </div>
              </div>
              
              {/* Timeline */}
              <div className="text-xs text-stone/70">
                {area.timeline}
              </div>
            </div>

            {/* Hover Tooltip */}
            <AnimatePresence>
              {hoveredArea === area.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-3 border border-stone/20 whitespace-nowrap z-20"
                >
                  <p className="text-sm font-medium text-heritage-green">{area.title}</p>
                  <p className="text-xs text-stone/70">{area.description}</p>
                  {area.investment && (
                    <p className="text-xs text-warm-soil font-medium">{area.investment}</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* Detailed Panel */}
      <AnimatePresence>
        {selectedAreaData && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="absolute top-0 right-0 w-80 h-full bg-white shadow-xl border-l border-stone/20 z-30"
          >
            <div className="p-6 h-full overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-serif text-heritage-green">
                  {selectedAreaData.title}
                </h2>
                <button
                  onClick={() => setSelectedArea(null)}
                  className="p-1 hover:bg-stone/10 rounded"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-4">
                <div className={`inline-block px-3 py-1 rounded-full text-sm ${statusColors[selectedAreaData.status]}`}>
                  {selectedAreaData.status}
                </div>

                <p className="text-stone/80">{selectedAreaData.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-medium text-heritage-green mb-1">Timeline</h3>
                    <p className="text-sm text-stone/70">{selectedAreaData.timeline}</p>
                  </div>
                  {selectedAreaData.investment && (
                    <div>
                      <h3 className="font-medium text-heritage-green mb-1">Investment</h3>
                      <p className="text-sm text-warm-soil font-medium">{selectedAreaData.investment}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-stone/20">
                  <h3 className="font-medium text-heritage-green mb-2">Next Steps</h3>
                  <ul className="text-sm text-stone/70 space-y-1">
                    <li>• Community consultation sessions</li>
                    <li>• Partnership development</li>
                    <li>• Funding applications</li>
                    <li>• Design development</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}