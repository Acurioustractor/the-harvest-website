'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SiteArea {
  id: string
  title: string
  x: number // percentage from left
  y: number // percentage from top
  width: number // percentage width
  height: number // percentage height
  color: string
  hoverColor: string
  status: 'vision' | 'planning' | 'development' | 'active'
  description: string
  investment?: string
  timeline: string
  features: string[]
}

const siteAreas: SiteArea[] = [
  {
    id: 'therapeutic',
    title: 'Therapeutic Gardens',
    x: 12,
    y: 20,
    width: 28,
    height: 35,
    color: 'bg-heritage-green/10 border-heritage-green/40',
    hoverColor: 'bg-heritage-green/20 border-heritage-green',
    status: 'planning',
    description: 'Accessible raised beds and healing spaces designed for therapeutic horticulture programs',
    investment: '$150,000',
    timeline: 'Launch Q2 2025',
    features: ['Raised accessible beds', 'Sensory plants', 'Healing pathways', 'Weather shelter']
  },
  {
    id: 'kitchen',
    title: 'Commercial Kitchen & Restaurant',
    x: 45,
    y: 15,
    width: 25,
    height: 30,
    color: 'bg-warm-soil/10 border-warm-soil/40',
    hoverColor: 'bg-warm-soil/20 border-warm-soil',
    status: 'planning',
    description: 'Social enterprise restaurant and training facility following Plate It Forward model',
    investment: '$300,000',
    timeline: 'Opening Q4 2025',
    features: ['Commercial kitchen', 'Training facility', 'Farm-to-table dining', 'Event catering']
  },
  {
    id: 'community',
    title: 'Community Hub',
    x: 20,
    y: 60,
    width: 35,
    height: 25,
    color: 'bg-harvest-gold/10 border-harvest-gold/40',
    hoverColor: 'bg-harvest-gold/20 border-harvest-gold',
    status: 'development',
    description: 'Flexible event space and meeting rooms for community gatherings',
    investment: '$200,000',
    timeline: 'Opening Q3 2025',
    features: ['Event space (100+ capacity)', 'Meeting rooms', 'Community kitchen', 'Accessible amenities']
  },
  {
    id: 'production',
    title: 'Market Gardens',
    x: 65,
    y: 45,
    width: 30,
    height: 40,
    color: 'bg-sage-gray/10 border-sage-gray/40',
    hoverColor: 'bg-sage-gray/20 border-sage-gray',
    status: 'active',
    description: 'Organic market gardens continuing Green Harvest\'s 31-year legacy',
    investment: '$50,000',
    timeline: 'Expanding ongoing',
    features: ['Seasonal vegetables', 'Heritage varieties', 'CSA program', 'Weekly markets']
  },
  {
    id: 'accommodation',
    title: 'Farm Stay Cabins',
    x: 75,
    y: 10,
    width: 22,
    height: 25,
    color: 'bg-stone/10 border-stone/40',
    hoverColor: 'bg-stone/20 border-stone',
    status: 'vision',
    description: 'Sustainable accommodation offering authentic agritourism experiences',
    investment: '$400,000',
    timeline: 'Development 2026',
    features: ['4 sustainable cabins', '2 accessible units', 'Valley views', 'Solar & rainwater']
  },
  {
    id: 'training',
    title: 'Training Center',
    x: 8,
    y: 88,
    width: 25,
    height: 10,
    color: 'bg-heritage-green/5 border-heritage-green/30',
    hoverColor: 'bg-heritage-green/15 border-heritage-green/70',
    status: 'planning',
    description: 'Skills development in hospitality, agriculture, and traditional crafts',
    investment: '$100,000',
    timeline: 'Launch Q1 2026',
    features: ['20-week programs', 'Hospitality training', 'Agricultural skills', 'Certification']
  }
]

const statusInfo = {
  vision: { label: 'Visioning', color: 'bg-stone/20 text-stone/80', dot: 'bg-stone/60' },
  planning: { label: 'Planning', color: 'bg-heritage-green/20 text-heritage-green', dot: 'bg-heritage-green' },
  development: { label: 'In Development', color: 'bg-harvest-gold/20 text-harvest-gold', dot: 'bg-harvest-gold' },
  active: { label: 'Active', color: 'bg-sage-gray/20 text-sage-gray', dot: 'bg-sage-gray' }
}

export default function InteractiveSiteMap() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

  const selectedAreaData = siteAreas.find(area => area.id === selectedArea)

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <div className="relative w-full h-[500px] bg-gradient-to-br from-sage-gray/5 to-heritage-green/5 rounded-xl border border-stone/20 overflow-hidden">
        
        {/* Map Background */}
        <div className="absolute inset-0 p-4">
          {/* Property Boundary */}
          <div className="w-full h-full border-2 border-dashed border-stone/30 rounded-lg relative">
            {/* Property Label */}
            <div className="absolute top-2 left-2 text-xs text-stone/50 font-medium">
              9 Gumland Drive, Witta QLD
            </div>
            
            {/* Entrance/Access */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-stone/20 rounded-t-lg">
              <div className="text-xs text-center text-stone/60 mt-1">Entry</div>
            </div>
          </div>
        </div>

        {/* Development Areas */}
        {siteAreas.map((area) => {
          const isHovered = hoveredArea === area.id
          const isSelected = selectedArea === area.id
          
          return (
            <motion.div
              key={area.id}
              className={`absolute cursor-pointer transition-all duration-300 border-2 rounded-lg ${
                isHovered || isSelected ? area.hoverColor : area.color
              } ${isSelected ? 'ring-2 ring-heritage-green/50 ring-offset-2' : ''}`}
              style={{
                left: `${area.x}%`,
                top: `${area.y}%`,
                width: `${area.width}%`,
                height: `${area.height}%`
              }}
              onMouseEnter={() => setHoveredArea(area.id)}
              onMouseLeave={() => setHoveredArea(null)}
              onClick={() => setSelectedArea(area.id === selectedArea ? null : area.id)}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                scale: isSelected ? 1.05 : 1,
                zIndex: isSelected ? 20 : isHovered ? 10 : 1
              }}
            >
              {/* Area Content */}
              <div className="p-3 h-full flex flex-col justify-between relative">
                {/* Status Indicator */}
                <div className="absolute top-2 right-2">
                  <div className={`w-3 h-3 rounded-full ${statusInfo[area.status].dot}`}></div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-sm font-semibold text-heritage-green leading-tight mb-1">
                    {area.title}
                  </h3>
                  <div className={`inline-block px-2 py-1 rounded-full text-xs ${statusInfo[area.status].color}`}>
                    {statusInfo[area.status].label}
                  </div>
                </div>

                {/* Timeline */}
                <div className="text-xs text-stone/70 font-medium">
                  {area.timeline}
                </div>
              </div>

              {/* Hover Tooltip */}
              <AnimatePresence>
                {isHovered && !isSelected && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-4 border border-stone/20 min-w-[200px] z-30"
                  >
                    <h4 className="font-semibold text-heritage-green mb-1">{area.title}</h4>
                    <p className="text-xs text-stone/70 mb-2">{area.description}</p>
                    {area.investment && (
                      <p className="text-sm font-semibold text-warm-soil">{area.investment}</p>
                    )}
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-stone/20 rotate-45"></div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}

        {/* Legend */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-stone/20">
          <h4 className="text-xs font-semibold text-stone/70 mb-2">Development Status</h4>
          <div className="space-y-1">
            {Object.entries(statusInfo).map(([status, info]) => (
              <div key={status} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${info.dot}`}></div>
                <span className="text-xs text-stone/70">{info.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-sm border border-stone/20">
          <p className="text-xs text-stone/60">
            💡 Click on areas to explore details
          </p>
        </div>
      </div>

      {/* Selected Area Details */}
      <AnimatePresence>
        {selectedAreaData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-xl border border-stone/20 shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-serif text-heritage-green mb-2">
                    {selectedAreaData.title}
                  </h3>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm ${statusInfo[selectedAreaData.status].color}`}>
                    {statusInfo[selectedAreaData.status].label}
                  </div>
                </div>
                <button
                  onClick={() => setSelectedArea(null)}
                  className="p-2 hover:bg-stone/10 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-stone/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-heritage-green mb-2">Overview</h4>
                    <p className="text-stone/80">{selectedAreaData.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-heritage-green mb-2">Key Features</h4>
                    <ul className="space-y-1">
                      {selectedAreaData.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-heritage-green rounded-full"></div>
                          <span className="text-sm text-stone/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-stone/5 rounded-lg p-3">
                      <h4 className="font-semibold text-heritage-green mb-1">Timeline</h4>
                      <p className="text-stone/70">{selectedAreaData.timeline}</p>
                    </div>
                    {selectedAreaData.investment && (
                      <div className="bg-warm-soil/5 rounded-lg p-3">
                        <h4 className="font-semibold text-heritage-green mb-1">Investment</h4>
                        <p className="text-lg font-semibold text-warm-soil">{selectedAreaData.investment}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-heritage-green/5 rounded-lg p-4">
                    <h4 className="font-semibold text-heritage-green mb-2">How You Can Help</h4>
                    <div className="space-y-2 text-sm text-stone/70">
                      <p>• Share your ideas and feedback</p>
                      <p>• Join community planning sessions</p>
                      <p>• Consider partnership opportunities</p>
                      <p>• Volunteer for working bees</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}