'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface InvestmentData {
  category: string
  amount: number
  color: string
  description: string
  timeline: string
}

const investmentData: InvestmentData[] = [
  {
    category: 'Commercial Kitchen',
    amount: 300000,
    color: 'bg-warm-soil',
    description: 'Professional kitchen equipment, social enterprise setup',
    timeline: 'Q4 2025'
  },
  {
    category: 'Farm Stay Cabins',
    amount: 400000,
    color: 'bg-sage-gray',
    description: '4 sustainable cabins with accessibility features',
    timeline: '2026'
  },
  {
    category: 'Community Hub',
    amount: 200000,
    color: 'bg-harvest-gold',
    description: 'Event space, meeting rooms, accessibility upgrades',
    timeline: 'Q3 2025'
  },
  {
    category: 'Therapeutic Gardens',
    amount: 150000,
    color: 'bg-heritage-green',
    description: 'Accessible garden beds, pathways, tools',
    timeline: 'Q2 2025'
  },
  {
    category: 'Training Center',
    amount: 100000,
    color: 'bg-heritage-green/70',
    description: 'Educational facilities and equipment',
    timeline: 'Q1 2026'
  },
  {
    category: 'Production Expansion',
    amount: 50000,
    color: 'bg-sage-gray/70',
    description: 'Market garden infrastructure and CSA setup',
    timeline: 'Ongoing'
  }
]

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export default function InvestmentChart() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  
  const totalInvestment = investmentData.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-serif text-heritage-green mb-2">Investment Overview</h2>
        <p className="text-3xl font-light text-warm-soil mb-2">{formatCurrency(totalInvestment)}</p>
        <p className="text-stone/70">Total development investment across all phases</p>
      </div>

      {/* Bar Chart */}
      <div className="space-y-4">
        {investmentData.map((item, index) => {
          const percentage = (item.amount / totalInvestment) * 100
          const isSelected = selectedCategory === item.category
          
          return (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(isSelected ? null : item.category)}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium text-heritage-green">{item.category}</h3>
                <div className="text-right">
                  <span className="text-lg font-medium text-warm-soil">{formatCurrency(item.amount)}</span>
                  <span className="text-sm text-stone/60 ml-2">({percentage.toFixed(1)}%)</span>
                </div>
              </div>
              
              <div className="relative">
                {/* Background bar */}
                <div className="w-full h-8 bg-stone/10 rounded-full overflow-hidden">
                  {/* Progress bar */}
                  <motion.div
                    className={`h-full ${item.color} transition-all duration-300 ${
                      isSelected ? 'opacity-100 shadow-lg' : 'opacity-80'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                  />
                </div>
                
                {/* Timeline badge */}
                <div className="absolute right-2 top-1 text-xs text-white/90 font-medium">
                  {item.timeline}
                </div>
              </div>

              {/* Expanded details */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-3 p-4 bg-heritage-green/5 rounded-lg border border-heritage-green/20"
                >
                  <p className="text-stone/80 mb-2">{item.description}</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-stone/60">Timeline: {item.timeline}</span>
                    <span className="text-stone/60">
                      {percentage.toFixed(1)}% of total investment
                    </span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Funding Sources */}
      <div className="grid md:grid-cols-2 gap-6 mt-12 pt-8 border-t border-stone/20">
        <div>
          <h3 className="font-serif text-lg text-heritage-green mb-4">Funding Strategy</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-stone/70">Grant Funding</span>
              <span className="font-medium">70%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone/70">Community Investment</span>
              <span className="font-medium">20%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone/70">Earned Revenue</span>
              <span className="font-medium">10%</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-lg text-heritage-green mb-4">Revenue Projections</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-stone/70">Year 1</span>
              <span className="font-medium">15% self-sufficiency</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone/70">Year 2</span>
              <span className="font-medium">55% self-sufficiency</span>
            </div>
            <div className="flex justify-between">
              <span className="text-stone/70">Year 3</span>
              <span className="font-medium text-heritage-green">70% self-sufficiency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}