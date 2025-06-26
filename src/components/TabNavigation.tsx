'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

export interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabNavigationProps {
  tabs: Tab[]
}

export default function TabNavigation({ tabs }: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(tabs[0].id)

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className="border-b border-stone/10">
        <div className="container-custom">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  'tab-button whitespace-nowrap',
                  activeTab === tab.id && 'active'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        {tabs.map((tab) => {
          if (tab.id !== activeTab) return null
          
          return (
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="min-h-[60vh]"
            >
              {tab.content}
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
}