'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TimelineEvent {
  id: string
  title: string
  description: string
  date: string
  status: 'completed' | 'in-progress' | 'planned'
  investment?: string
  phase: 'foundation' | 'development' | 'expansion'
  milestones?: string[]
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 'incorporation',
    title: 'Legal Foundation',
    description: 'Establish incorporated association and governance structure',
    date: 'Q1 2025',
    status: 'in-progress',
    phase: 'foundation',
    milestones: ['Board formation', 'Constitution development', 'Insurance setup']
  },
  {
    id: 'da-approval',
    title: 'Development Approval',
    description: 'Council approval for site development and construction',
    date: 'Q2 2025',
    status: 'planned',
    phase: 'foundation',
    milestones: ['Architect selection', 'DA submission', 'Community consultation']
  },
  {
    id: 'therapeutic-launch',
    title: 'Therapeutic Gardens Launch',
    description: 'First therapeutic horticulture programs begin',
    date: 'Q2 2025',
    status: 'planned',
    investment: '$150,000',
    phase: 'development',
    milestones: ['Garden construction', 'Staff training', 'Program launch']
  },
  {
    id: 'community-hub',
    title: 'Community Hub Opening',
    description: 'Event space and meeting facilities open to public',
    date: 'Q3 2025',
    status: 'planned',
    investment: '$200,000',
    phase: 'development',
    milestones: ['Construction completion', 'Equipment installation', 'First events']
  },
  {
    id: 'kitchen-restaurant',
    title: 'Commercial Kitchen & Restaurant',
    description: 'Social enterprise restaurant begins operations',
    date: 'Q4 2025',
    status: 'planned',
    investment: '$300,000',
    phase: 'development',
    milestones: ['Kitchen fit-out', 'Staff training', 'Menu development']
  },
  {
    id: 'training-center',
    title: 'Training Center Launch',
    description: 'Skills development and education programs begin',
    date: 'Q1 2026',
    status: 'planned',
    investment: '$100,000',
    phase: 'expansion',
    milestones: ['Curriculum development', 'Partnership agreements', 'Student intake']
  },
  {
    id: 'accommodation',
    title: 'Farm Stay Accommodation',
    description: 'Sustainable cabins welcome first guests',
    date: 'Q3 2026',
    status: 'planned',
    investment: '$400,000',
    phase: 'expansion',
    milestones: ['Cabin construction', 'Tourism licensing', 'Booking systems']
  },
  {
    id: 'full-operations',
    title: 'Full Operations Achieved',
    description: 'All development areas operational and financially sustainable',
    date: 'Q4 2026',
    status: 'planned',
    phase: 'expansion',
    milestones: ['70% self-sufficiency', 'Regional hub status', 'Replication planning']
  }
]

const phaseColors = {
  foundation: 'bg-heritage-green text-cream',
  development: 'bg-warm-soil text-cream',
  expansion: 'bg-sage-gray text-cream'
}

const statusColors = {
  completed: 'border-sage-gray bg-sage-gray',
  'in-progress': 'border-harvest-gold bg-harvest-gold',
  planned: 'border-stone/30 bg-white'
}

export default function AnimatedTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null)
  const [visibleEvents, setVisibleEvents] = useState<string[]>([])
  const timelineRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      timelineEvents.forEach((event, index) => {
        setTimeout(() => {
          setVisibleEvents(prev => [...prev, event.id])
        }, index * 200)
      })
    }
  }, [isInView])

  const selectedEventData = timelineEvents.find(event => event.id === selectedEvent)

  return (
    <div ref={timelineRef} className="relative py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-heritage-green mb-4">
            Development Timeline
          </h2>
          <p className="text-stone/70 max-w-2xl mx-auto">
            A phased approach to sustainable growth, building community trust and financial stability at each step
          </p>
        </div>

        {/* Phase Legend */}
        <div className="flex justify-center gap-6 mb-12">
          {Object.entries(phaseColors).map(([phase, className]) => (
            <div key={phase} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${className}`}></div>
              <span className="text-sm capitalize font-medium">{phase}</span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-stone/20"></div>
          
          {/* Animated Progress Line */}
          <motion.div
            className="absolute left-8 top-0 w-0.5 bg-heritage-green"
            initial={{ height: 0 }}
            animate={{ height: isInView ? '100%' : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          ></motion.div>

          {/* Events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ 
                  opacity: visibleEvents.includes(event.id) ? 1 : 0,
                  x: visibleEvents.includes(event.id) ? 0 : -50
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex items-start group cursor-pointer"
                onClick={() => setSelectedEvent(event.id === selectedEvent ? null : event.id)}
              >
                {/* Timeline Dot */}
                <div className={`relative z-10 w-4 h-4 rounded-full border-2 ${statusColors[event.status]} group-hover:scale-125 transition-transform`}>
                  {event.status === 'completed' && (
                    <svg className="w-2 h-2 text-white absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                  {event.status === 'in-progress' && (
                    <div className="w-2 h-2 bg-white rounded-full absolute top-0.5 left-0.5 animate-pulse"></div>
                  )}
                </div>

                {/* Event Content */}
                <div className="ml-6 flex-1">
                  <div className="bg-white rounded-lg border border-stone/20 p-4 shadow-sm group-hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-serif text-lg text-heritage-green group-hover:text-warm-soil transition-colors">
                          {event.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`px-2 py-1 rounded-full text-xs ${phaseColors[event.phase]}`}>
                            {event.phase}
                          </span>
                          <span className="text-sm text-stone/60">{event.date}</span>
                        </div>
                      </div>
                      {event.investment && (
                        <div className="text-right">
                          <div className="text-sm text-stone/60">Investment</div>
                          <div className="text-lg font-medium text-warm-soil">{event.investment}</div>
                        </div>
                      )}
                    </div>
                    
                    <p className="text-stone/80 text-sm mb-3">{event.description}</p>

                    {/* Milestones Preview */}
                    {event.milestones && (
                      <div className="flex flex-wrap gap-1">
                        {event.milestones.slice(0, 3).map((milestone, i) => (
                          <span key={i} className="text-xs bg-stone/10 text-stone/70 px-2 py-1 rounded">
                            {milestone}
                          </span>
                        ))}
                        {event.milestones.length > 3 && (
                          <span className="text-xs text-stone/50">+{event.milestones.length - 3} more</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed View */}
        {selectedEventData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-8 bg-heritage-green/5 rounded-lg p-6 border border-heritage-green/20"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-serif text-heritage-green">
                {selectedEventData.title} - Detailed View
              </h3>
              <button
                onClick={() => setSelectedEvent(null)}
                className="p-1 hover:bg-heritage-green/10 rounded"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-heritage-green mb-2">Key Milestones</h4>
                {selectedEventData.milestones && (
                  <ul className="space-y-2">
                    {selectedEventData.milestones.map((milestone, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-heritage-green rounded-full"></div>
                        <span className="text-sm text-stone/80">{milestone}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-heritage-green mb-1">Timeline</h4>
                  <p className="text-stone/70">{selectedEventData.date}</p>
                </div>
                
                {selectedEventData.investment && (
                  <div>
                    <h4 className="font-medium text-heritage-green mb-1">Investment Required</h4>
                    <p className="text-xl font-light text-warm-soil">{selectedEventData.investment}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-medium text-heritage-green mb-1">Development Phase</h4>
                  <span className={`px-3 py-1 rounded-full text-sm ${phaseColors[selectedEventData.phase]}`}>
                    {selectedEventData.phase}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}