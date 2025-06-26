'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface PlanningArea {
  id: string
  title: string
  subtitle: string
  color: string
  bgColor: string
  keyPoints: string[]
  status: 'vision' | 'planning' | 'development' | 'active'
  timeline: string
  investment?: string
}

const planningAreas: PlanningArea[] = [
  {
    id: 'therapeutic',
    title: 'Therapeutic Gardens',
    subtitle: 'Healing soil, healing souls',
    color: 'text-heritage-green',
    bgColor: 'bg-heritage-green/10',
    keyPoints: [
      'Partnership with Cath Manuel (Soil to Supper)',
      'Evidence-based horticultural therapy programs',
      'Accessible raised beds and pathways',
      'Healthcare provider partnerships',
      '40+ participants per week capacity'
    ],
    status: 'planning',
    timeline: 'Launch: Q2 2025',
    investment: '$150,000'
  },
  {
    id: 'kitchen',
    title: 'Commercial Kitchen & Restaurant',
    subtitle: 'From our soil to your soul',
    color: 'text-warm-soil',
    bgColor: 'bg-warm-soil/10',
    keyPoints: [
      'Plate It Forward model adaptation',
      'Social enterprise restaurant',
      'Training programs for marginalized workers',
      'Farm-to-table dining experience',
      'Event catering services'
    ],
    status: 'planning',
    timeline: 'Launch: Q4 2025',
    investment: '$300,000'
  },
  {
    id: 'accommodation',
    title: 'Farm Stay Accommodation',
    subtitle: 'Rest, reconnect, regenerate',
    color: 'text-sage-gray',
    bgColor: 'bg-sage-gray/10',
    keyPoints: [
      '4 sustainable cabins planned',
      '2 fully accessible units',
      'Valley views and private spaces',
      'Solar power and rainwater systems',
      'Agritourism experiences'
    ],
    status: 'vision',
    timeline: 'Launch: 2026',
    investment: '$400,000'
  },
  {
    id: 'community',
    title: 'Community Hub & Event Space',
    subtitle: 'Where neighbors become family',
    color: 'text-harvest-gold',
    bgColor: 'bg-harvest-gold/10',
    keyPoints: [
      '100+ capacity event space',
      'Monthly community meals',
      'Seasonal celebrations',
      'Workshop and meeting rooms',
      'Youth programs'
    ],
    status: 'development',
    timeline: 'Launch: Q3 2025',
    investment: '$200,000'
  },
  {
    id: 'training',
    title: 'Training & Education Center',
    subtitle: 'Growing skills, building futures',
    color: 'text-heritage-green',
    bgColor: 'bg-heritage-green/5',
    keyPoints: [
      '20-week hospitality training',
      'Regenerative agriculture courses',
      'Traditional skills workshops',
      'School programs',
      'Professional development'
    ],
    status: 'planning',
    timeline: 'Launch: Q1 2026',
    investment: '$100,000'
  },
  {
    id: 'production',
    title: 'Food Production & CSA',
    subtitle: '31 years of organic legacy continues',
    color: 'text-warm-soil',
    bgColor: 'bg-warm-soil/5',
    keyPoints: [
      'Market gardens expansion',
      '200 CSA member target',
      'Heritage variety preservation',
      'Value-added products',
      'Weekly farmers market'
    ],
    status: 'active',
    timeline: 'Ongoing expansion',
    investment: '$50,000'
  }
]

const statusColors = {
  vision: 'bg-stone/20 text-stone',
  planning: 'bg-heritage-green/20 text-heritage-green',
  development: 'bg-harvest-gold/20 text-harvest-gold',
  active: 'bg-sage-gray/20 text-sage-gray'
}

const statusLabels = {
  vision: 'Visioning',
  planning: 'Planning',
  development: 'In Development',
  active: 'Active'
}

export default function PlanningPage() {
  const [selectedArea, setSelectedArea] = useState<string | null>(null)
  const [hoveredArea, setHoveredArea] = useState<string | null>(null)

  const selected = planningAreas.find(area => area.id === selectedArea)

  return (
    <main className="min-h-screen bg-cream overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone/10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif text-heritage-green">The Harvest Planning Vision</h1>
              <p className="text-sm text-stone/60">Click on each area to explore our development plans</p>
            </div>
            <a 
              href="/"
              className="px-4 py-2 text-sm border border-heritage-green text-heritage-green rounded hover:bg-heritage-green/5 transition-colors"
            >
              Back to Site
            </a>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="pt-24 px-4 pb-8 h-screen overflow-auto">
        <div className="max-w-7xl mx-auto">
          {/* Status Legend */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {Object.entries(statusLabels).map(([status, label]) => (
              <div key={status} className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs ${statusColors[status as keyof typeof statusColors]}`}>
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Planning Areas Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {planningAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedArea(area.id === selectedArea ? null : area.id)}
                onMouseEnter={() => setHoveredArea(area.id)}
                onMouseLeave={() => setHoveredArea(null)}
                className={`
                  relative p-6 rounded-lg border-2 cursor-pointer transition-all duration-300
                  ${area.bgColor} 
                  ${selectedArea === area.id 
                    ? 'border-heritage-green shadow-lg scale-105' 
                    : hoveredArea === area.id 
                      ? 'border-stone/30 shadow-md scale-102' 
                      : 'border-stone/20'
                  }
                `}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${statusColors[area.status]}`}>
                    {statusLabels[area.status]}
                  </span>
                </div>

                <h3 className={`text-xl font-serif mb-2 ${area.color}`}>
                  {area.title}
                </h3>
                <p className="text-sm text-stone/60 mb-4 italic">
                  {area.subtitle}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-stone/70">Timeline:</span>
                    <span className="font-medium">{area.timeline}</span>
                  </div>
                  {area.investment && (
                    <div className="flex items-center justify-between">
                      <span className="text-stone/70">Investment:</span>
                      <span className="font-medium">{area.investment}</span>
                    </div>
                  )}
                </div>

                {/* Preview of key points on hover */}
                {hoveredArea === area.id && selectedArea !== area.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-stone/20"
                  >
                    <p className="text-xs text-stone/60">
                      {area.keyPoints[0]}...
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Detailed View */}
          {selected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 p-8 bg-white rounded-lg shadow-lg border border-stone/20"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className={`text-2xl font-serif mb-2 ${selected.color}`}>
                    {selected.title}
                  </h2>
                  <p className="text-stone/60 italic">{selected.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedArea(null)}
                  className="p-2 hover:bg-stone/10 rounded transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-lg mb-4 text-heritage-green">Key Features</h3>
                  <ul className="space-y-3">
                    {selected.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sage-gray mt-1">•</span>
                        <span className="text-stone/80">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-lg mb-2 text-heritage-green">Development Status</h3>
                    <div className="space-y-2">
                      <div className={`inline-flex px-3 py-1 rounded-full text-sm ${statusColors[selected.status]}`}>
                        {statusLabels[selected.status]}
                      </div>
                      <p className="text-stone/70 text-sm">{selected.timeline}</p>
                    </div>
                  </div>
                  
                  {selected.investment && (
                    <div>
                      <h3 className="font-serif text-lg mb-2 text-heritage-green">Investment Required</h3>
                      <p className="text-2xl font-light text-warm-soil">{selected.investment}</p>
                      <p className="text-xs text-stone/60 mt-1">Includes infrastructure, equipment, and setup costs</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Next Steps */}
              <div className="mt-8 pt-6 border-t border-stone/20">
                <h3 className="font-serif text-lg mb-3 text-heritage-green">Next Steps</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-sm">
                    <span className="font-medium text-stone/80">Community Input</span>
                    <p className="text-stone/60 mt-1">Share your thoughts and ideas for this area</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-stone/80">Partnership Opportunities</span>
                    <p className="text-stone/60 mt-1">Connect with us to support development</p>
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-stone/80">Volunteer</span>
                    <p className="text-stone/60 mt-1">Join working bees and planning sessions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Summary Stats */}
          <div className="mt-12 grid md:grid-cols-4 gap-6 p-8 bg-white/50 rounded-lg">
            <div className="text-center">
              <p className="text-3xl font-light text-heritage-green mb-2">6</p>
              <p className="text-sm text-stone/60">Development Areas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-warm-soil mb-2">$1.3M</p>
              <p className="text-sm text-stone/60">Total Investment</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-harvest-gold mb-2">2025-2027</p>
              <p className="text-sm text-stone/60">Development Timeline</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-light text-sage-gray mb-2">500+</p>
              <p className="text-sm text-stone/60">Community Members</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center pb-8">
            <h2 className="text-2xl font-serif text-heritage-green mb-4">
              Help Shape Our Future
            </h2>
            <p className="text-stone/70 mb-6 max-w-2xl mx-auto">
              This is a living vision that grows with community input. Join us at our next planning 
              session to share your ideas and help build something extraordinary together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/get-involved"
                className="px-6 py-3 bg-heritage-green text-cream rounded hover:bg-heritage-green/90 transition-colors"
              >
                Get Involved
              </a>
              <a 
                href="mailto:hello@theharvest.org.au"
                className="px-6 py-3 border border-heritage-green text-heritage-green rounded hover:bg-heritage-green/5 transition-colors"
              >
                Share Feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}