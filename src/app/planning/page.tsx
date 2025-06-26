'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import InteractiveSiteMap from '@/components/InteractiveSiteMap'
import AnimatedTimeline from '@/components/AnimatedTimeline'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import InvestmentChart from '@/components/InvestmentChart'

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
  const [activeTab, setActiveTab] = useState<'overview' | 'site-map' | 'timeline' | 'transformation' | 'investment' | 'community'>('overview')

  const selected = planningAreas.find(area => area.id === selectedArea)

  return (
    <main className="min-h-screen bg-cream overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-stone/10">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-serif text-heritage-green">The Harvest Planning Vision</h1>
              <p className="text-sm text-stone/60">Interactive planning and visualization tools</p>
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

      {/* Main Content */}
      <div className="pt-24 px-4 pb-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-stone/20">
              {[
                { id: 'overview', label: 'Overview', icon: '🏠' },
                { id: 'site-map', label: 'Site Map', icon: '🗺️' },
                { id: 'timeline', label: 'Timeline', icon: '📅' },
                { id: 'transformation', label: 'Before/After', icon: '🔄' },
                { id: 'investment', label: 'Investment', icon: '💰' },
                { id: 'community', label: 'Community', icon: '👥' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-heritage-green text-cream'
                      : 'text-stone/70 hover:text-heritage-green'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          {/* Content based on active tab */}
          {activeTab === 'overview' && (
            <>
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
            </>
          )}

          {/* Interactive Site Map */}
          {activeTab === 'site-map' && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-serif text-heritage-green mb-2">Interactive Site Map</h2>
                <p className="text-stone/70">Explore the property layout and development areas. Zoom, pan, and click on areas for details.</p>
              </div>
              <InteractiveSiteMap />
            </div>
          )}

          {/* Development Timeline */}
          {activeTab === 'timeline' && (
            <div>
              <AnimatedTimeline />
            </div>
          )}

          {/* Before/After Transformation */}
          {activeTab === 'transformation' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-serif text-heritage-green mb-2">Site Transformation</h2>
                <p className="text-stone/70 mb-8">See how The Harvest will transform the former Green Harvest site</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Main Site Transformation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-heritage-green">Overall Site Development</h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <BeforeAfterSlider
                      beforeImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop"
                      afterImage="https://images.unsplash.com/photo-1595475038665-8eb4b3de8c14?w=500&h=300&fit=crop"
                      beforeLabel="Green Harvest Site 2024"
                      afterLabel="The Harvest Vision 2026"
                      className="h-full"
                    />
                  </div>
                </div>

                {/* Therapeutic Gardens */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-heritage-green">Therapeutic Gardens</h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <BeforeAfterSlider
                      beforeImage="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=300&fit=crop"
                      afterImage="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&h=300&fit=crop"
                      beforeLabel="Current State"
                      afterLabel="Accessible Gardens"
                      className="h-full"
                    />
                  </div>
                </div>

                {/* Community Hub */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-heritage-green">Community Hub</h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <BeforeAfterSlider
                      beforeImage="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop"
                      afterImage="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500&h=300&fit=crop"
                      beforeLabel="Existing Building"
                      afterLabel="Community Space"
                      className="h-full"
                    />
                  </div>
                </div>

                {/* Farm Stay */}
                <div className="space-y-4">
                  <h3 className="text-lg font-serif text-heritage-green">Farm Stay Accommodation</h3>
                  <div className="h-64 rounded-lg overflow-hidden">
                    <BeforeAfterSlider
                      beforeImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=500&h=300&fit=crop"
                      afterImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop"
                      beforeLabel="Vacant Land"
                      afterLabel="Sustainable Cabins"
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Investment Overview */}
          {activeTab === 'investment' && (
            <div>
              <InvestmentChart />
            </div>
          )}

          {/* Community Engagement */}
          {activeTab === 'community' && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-serif text-heritage-green mb-2">Community Engagement</h2>
                <p className="text-stone/70 mb-8">Your voice shapes The Harvest. Join the conversation and help us grow.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Feedback Form */}
                <div className="bg-white rounded-lg p-6 border border-stone/20 shadow-sm">
                  <h3 className="text-lg font-serif text-heritage-green mb-4">Share Your Ideas</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-stone/70 mb-2">
                        Which development area interests you most?
                      </label>
                      <select className="w-full p-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-heritage-green/20 focus:border-heritage-green">
                        <option>Select an area...</option>
                        <option>Therapeutic Gardens</option>
                        <option>Commercial Kitchen & Restaurant</option>
                        <option>Community Hub</option>
                        <option>Farm Stay Accommodation</option>
                        <option>Training Center</option>
                        <option>Market Gardens</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone/70 mb-2">
                        Your suggestions or questions
                      </label>
                      <textarea 
                        rows={4}
                        className="w-full p-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-heritage-green/20 focus:border-heritage-green"
                        placeholder="Tell us what you think about our plans, or share ideas for how The Harvest could serve the community..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone/70 mb-2">
                        Your email (optional)
                      </label>
                      <input 
                        type="email"
                        className="w-full p-3 border border-stone/20 rounded-lg focus:ring-2 focus:ring-heritage-green/20 focus:border-heritage-green"
                        placeholder="your@email.com"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full py-3 bg-heritage-green text-cream rounded-lg hover:bg-heritage-green/90 transition-colors"
                    >
                      Submit Feedback
                    </button>
                  </form>
                </div>

                {/* Community Priority Voting */}
                <div className="bg-white rounded-lg p-6 border border-stone/20 shadow-sm">
                  <h3 className="text-lg font-serif text-heritage-green mb-4">Community Priorities</h3>
                  <p className="text-sm text-stone/70 mb-6">
                    Help us understand what matters most to you. Vote for your top development priorities.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      { area: 'Therapeutic Programs', votes: 85, total: 120 },
                      { area: 'Community Events', votes: 92, total: 120 },
                      { area: 'Job Training', votes: 67, total: 120 },
                      { area: 'Farm Stay Tourism', votes: 54, total: 120 },
                      { area: 'Food Production', votes: 78, total: 120 }
                    ].map((item, index) => {
                      const percentage = (item.votes / item.total) * 100
                      return (
                        <div key={item.area} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{item.area}</span>
                            <span className="text-sm text-stone/60">{item.votes} votes</span>
                          </div>
                          <div className="w-full bg-stone/10 rounded-full h-2">
                            <motion.div
                              className="bg-heritage-green h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${percentage}%` }}
                              transition={{ delay: index * 0.1, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone/20">
                    <p className="text-xs text-stone/60 mb-3">Cast your vote:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Therapeutic', 'Community', 'Training', 'Tourism', 'Production'].map((priority) => (
                        <button
                          key={priority}
                          className="px-3 py-1 text-xs border border-heritage-green text-heritage-green rounded-full hover:bg-heritage-green hover:text-cream transition-colors"
                        >
                          {priority}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="bg-heritage-green/5 rounded-lg p-6 border border-heritage-green/20">
                <h3 className="text-lg font-serif text-heritage-green mb-4">Upcoming Community Sessions</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-heritage-green mb-2">Planning Workshop</h4>
                    <p className="text-sm text-stone/70 mb-2">Deep dive into site layout and facility design</p>
                    <p className="text-xs text-warm-soil font-medium">March 15, 2025 • 2:00 PM</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-heritage-green mb-2">Community Café</h4>
                    <p className="text-sm text-stone/70 mb-2">Monthly catch-up and informal planning chat</p>
                    <p className="text-xs text-warm-soil font-medium">March 22, 2025 • 10:00 AM</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <h4 className="font-medium text-heritage-green mb-2">Site Walk</h4>
                    <p className="text-sm text-stone/70 mb-2">Guided tour of the property and development areas</p>
                    <p className="text-xs text-warm-soil font-medium">March 29, 2025 • 9:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          )}

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