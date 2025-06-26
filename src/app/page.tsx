'use client'

import { motion } from 'framer-motion'
import TabNavigation, { Tab } from '@/components/TabNavigation'

const TherapeuticGardens = () => (
  <div className="section-padding">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-light mb-6 text-heritage-green">
          Therapeutic Gardens
        </h2>
        <p className="subheading mb-12">
          Healing soil, healing souls. Evidence-based horticultural therapy programs designed 
          with healthcare partners.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div className="space-y-4">
          <h3 className="text-xl font-serif text-heritage-green">Programs Offered</h3>
          <ul className="space-y-3 text-stone/80">
            <li>• Individual therapeutic sessions</li>
            <li>• Group wellness programs</li>
            <li>• Disability support services</li>
            <li>• Mental health recovery gardens</li>
            <li>• Aged care engagement</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-serif text-heritage-green">Our Approach</h3>
          <p className="text-stone/80">
            Working with Cath Manuel from Soil to Supper, we create personalized programs 
            that connect participants with nature's rhythms. Our accessible garden spaces 
            and adaptive tools ensure everyone can experience the joy of growing.
          </p>
        </div>
      </div>
    </div>
  </div>
)

const CommunityHub = () => (
  <div className="section-padding">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-light mb-6 text-heritage-green">
          Community Hub
        </h2>
        <p className="subheading mb-12">
          A gathering place where community decisions happen over shared meals and 
          seasonal celebrations connect neighbors.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
          <h3 className="font-serif text-lg mb-2">Event Space</h3>
          <p className="text-sm text-stone/70">
            Flexible venue for workshops, celebrations, and community gatherings
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
          <h3 className="font-serif text-lg mb-2">Commercial Kitchen</h3>
          <p className="text-sm text-stone/70">
            Professional facility for food production, training, and events
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
          <h3 className="font-serif text-lg mb-2">Learning Center</h3>
          <p className="text-sm text-stone/70">
            Workshops on regenerative agriculture, traditional skills, and slow living
          </p>
        </div>
      </div>
    </div>
  </div>
)

const FarmStayTourism = () => (
  <div className="section-padding">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-light mb-6 text-heritage-green">
          Farm Stay & Tourism
        </h2>
        <p className="subheading mb-12">
          Authentic agritourism experiences where visitors participate in farm life, 
          not just observe it.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        <div>
          <h3 className="text-xl font-serif text-heritage-green mb-4">Accommodation</h3>
          <p className="text-stone/80 mb-4">
            Four sustainable cabins designed for accessibility and comfort, offering 
            valley views and connection to nature. Each cabin features solar power, 
            rainwater systems, and private outdoor spaces.
          </p>
          <ul className="space-y-2 text-sm text-stone/70">
            <li>• 2 fully accessible cabins</li>
            <li>• Self-contained facilities</li>
            <li>• Sustainable systems</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-serif text-heritage-green mb-4">Experiences</h3>
          <p className="text-stone/80 mb-4">
            Hands-on participation in daily farm activities, seasonal harvests, and 
            traditional skills workshops. Learn regenerative agriculture practices 
            while contributing to the working farm.
          </p>
          <ul className="space-y-2 text-sm text-stone/70">
            <li>• Morning farm tours</li>
            <li>• Harvest participation</li>
            <li>• Traditional craft workshops</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

const TrainingPrograms = () => (
  <div className="section-padding">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-light mb-6 text-heritage-green">
          Training & Education
        </h2>
        <p className="subheading mb-12">
          Building skills and confidence through practical learning in hospitality, 
          agriculture, and traditional crafts.
        </p>
      </div>
      
      <div className="space-y-8 mt-16 max-w-4xl mx-auto">
        <div className="bg-cream border border-stone/10 rounded-lg p-8">
          <h3 className="text-xl font-serif text-heritage-green mb-3">Hospitality Training</h3>
          <p className="text-stone/80 mb-4">
            Real-world experience in our commercial kitchen and event spaces, preparing 
            participants for careers in food service and tourism.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 bg-sage-gray/20 rounded-full">Food Safety Certification</span>
            <span className="px-3 py-1 bg-sage-gray/20 rounded-full">Event Management</span>
            <span className="px-3 py-1 bg-sage-gray/20 rounded-full">Farm-to-Table Service</span>
          </div>
        </div>
        
        <div className="bg-cream border border-stone/10 rounded-lg p-8">
          <h3 className="text-xl font-serif text-heritage-green mb-3">Agricultural Skills</h3>
          <p className="text-stone/80 mb-4">
            Learn regenerative farming practices, organic growing methods, and sustainable 
            land management through hands-on experience.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            <span className="px-3 py-1 bg-sage-gray/20 rounded-full">Organic Production</span>
            <span className="px-3 py-1 bg-sage-gray/20 rounded-full">Soil Health</span>
            <span className="px-3 py-1 bg-sage-gray/20 rounded-full">Market Gardening</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const FoodProduction = () => (
  <div className="section-padding">
    <div className="container-custom">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-serif font-light mb-6 text-heritage-green">
          Food Production
        </h2>
        <p className="subheading mb-12">
          31 years of organic legacy continues with regenerative practices that 
          nurture soil, community, and local food systems.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div>
          <h3 className="font-serif text-lg mb-3">Market Gardens</h3>
          <p className="text-stone/80 text-sm">
            Seasonal produce grown using organic and regenerative methods, 
            supplying local markets and our kitchen.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-3">Heritage Varieties</h3>
          <p className="text-stone/80 text-sm">
            Preserving rare and heritage plant varieties, maintaining genetic 
            diversity and cultural food traditions.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-lg mb-3">Value-Added Products</h3>
          <p className="text-stone/80 text-sm">
            Seasonal preserves, ferments, and prepared foods created in our 
            commercial kitchen from farm produce.
          </p>
        </div>
      </div>
      
      <div className="mt-16 p-8 bg-warm-soil/5 rounded-lg">
        <p className="text-center text-stone/80 italic">
          "Building on Green Harvest's foundation, we demonstrate that regenerative 
          agriculture can be both ecologically sound and economically viable."
        </p>
      </div>
    </div>
  </div>
)

const tabs: Tab[] = [
  {
    id: 'therapeutic',
    label: 'Therapeutic Gardens',
    content: <TherapeuticGardens />
  },
  {
    id: 'community',
    label: 'Community Hub',
    content: <CommunityHub />
  },
  {
    id: 'tourism',
    label: 'Farm Stay',
    content: <FarmStayTourism />
  },
  {
    id: 'training',
    label: 'Training',
    content: <TrainingPrograms />
  },
  {
    id: 'food',
    label: 'Food Production',
    content: <FoodProduction />
  }
]

export default function Home() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream/95 to-cream/90" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="hero-text text-heritage-green mb-6">
            The Harvest
          </h1>
          <p className="subheading max-w-2xl mx-auto mb-2">
            Where time slows, roots deepen, and community grows
          </p>
          <p className="text-sm text-stone/60 font-light">
            Witta • Slow Living • Deep Roots
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-0.5 h-16 bg-stone/20 animate-pulse" />
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-lg sm:text-xl text-stone/80 leading-relaxed"
            >
              The Harvest transforms the former Green Harvest site into Queensland's 
              premier regenerative agriculture destination. A place where therapeutic 
              horticulture meets social enterprise, creating meaningful work for 
              marginalized communities while preserving 31 years of organic legacy.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 border-2 border-sage-gray/20 rounded-full mx-auto mb-6" />
              <h3 className="font-serif text-xl text-heritage-green mb-3">
                Therapeutic Impact
              </h3>
              <p className="text-stone/70">
                Professional horticultural therapy programs supporting mental health, 
                disability, and aged care communities
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 border-2 border-sage-gray/20 rounded-full mx-auto mb-6" />
              <h3 className="font-serif text-xl text-heritage-green mb-3">
                Community Owned
              </h3>
              <p className="text-stone/70">
                Democratically governed by and for the Witta community, ensuring 
                local benefit and authentic participation
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 border-2 border-sage-gray/20 rounded-full mx-auto mb-6" />
              <h3 className="font-serif text-xl text-heritage-green mb-3">
                Regenerative Agriculture
              </h3>
              <p className="text-stone/70">
                Demonstrating sustainable farming that heals soil and community 
                while creating economic opportunity
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas Tabs */}
      <section id="programs" className="bg-white">
        <div className="py-12 sm:py-16 border-b border-stone/10">
          <div className="container-custom text-center">
            <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-4">
              Our Programs
            </h2>
            <p className="text-stone/70 max-w-2xl mx-auto">
              Five interconnected areas working together to create a thriving community hub
            </p>
          </div>
        </div>
        <TabNavigation tabs={tabs} />
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-6">
                Join Us in Growing Something Beautiful
              </h2>
              <p className="text-stone/80 mb-8">
                Whether you're a long-time Witta resident, former Green Harvest customer, 
                or someone who shares our vision for community-led regenerative agriculture, 
                there's a place for you at The Harvest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/get-involved" 
                  className="px-6 py-3 bg-heritage-green text-cream rounded hover:bg-heritage-green/90 transition-colors"
                >
                  Get Involved
                </a>
                <a 
                  href="/visit" 
                  className="px-6 py-3 border border-heritage-green text-heritage-green rounded hover:bg-heritage-green/5 transition-colors"
                >
                  Plan Your Visit
                </a>
                <a 
                  href="tel:+61424054113" 
                  className="px-6 py-3 bg-warm-soil text-cream rounded hover:bg-warm-soil/90 transition-colors"
                >
                  Call: 0424 054 113
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-heritage-green text-cream py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">Visit Us</h3>
              <p className="text-cream/80 text-sm">
                9 Gumland Drive<br />
                Witta, QLD 4552<br />
                Sunshine Coast Hinterland
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Connect</h3>
              <p className="text-cream/80 text-sm">
                Community meetings every<br />
                Wednesday at sunset<br />
                All welcome
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Partners</h3>
              <p className="text-cream/80 text-sm">
                Soil to Supper<br />
                A Curious Tractor<br />
                Local community groups
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-cream/20 text-center">
            <p className="text-cream/60 text-sm">
              © 2025 The Harvest. Honoring Green Harvest's organic legacy since 1993.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}