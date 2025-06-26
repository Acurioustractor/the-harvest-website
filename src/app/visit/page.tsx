'use client'

import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'

export default function VisitPage() {
  return (
    <main className="min-h-screen bg-cream">
      <PageHero 
        title="Visit Us" 
        subtitle="Find us in the beautiful Sunshine Coast hinterland"
      />

      {/* Location Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-serif text-heritage-green mb-6">
                  Our Location
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-stone mb-1">Address</p>
                    <p className="text-stone/80">
                      9 Gumland Drive<br />
                      Witta, QLD 4552<br />
                      Sunshine Coast Hinterland
                    </p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-stone mb-1">Contact</p>
                    <p className="text-stone/80">
                      Phone: <a href="tel:+61424054113" className="text-heritage-green hover:underline">0424 054 113</a><br />
                      Best times to call: 9am - 5pm weekdays
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-stone mb-1">Site Hours</p>
                    <p className="text-stone/80">
                      Currently by appointment only<br />
                      Community volunteer days: Fridays<br />
                      Monthly open days: First Saturday
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-sage-gray/10 rounded-lg">
                  <p className="text-sm text-stone/70">
                    <strong>Note:</strong> We're currently in development phase. 
                    Please call ahead to arrange site visits or attend our scheduled 
                    community events.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-heritage-green mb-6">
                  Getting Here
                </h2>
                <div className="space-y-4 text-stone/80">
                  <div>
                    <p className="font-medium text-stone mb-2">From Maleny (10 minutes)</p>
                    <p>Head north on Maleny-Kenilworth Road, turn right onto Witta Road, 
                    then left onto Gumland Drive. We're on the right.</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-stone mb-2">From Nambour (20 minutes)</p>
                    <p>Take Nambour Connection Road west, continue onto Maleny-Kenilworth Road, 
                    turn left onto Witta Road, then left onto Gumland Drive.</p>
                  </div>
                  
                  <div>
                    <p className="font-medium text-stone mb-2">From Brisbane (90 minutes)</p>
                    <p>Take Bruce Highway north, exit at Landsborough, follow signs to Maleny, 
                    then continue to Witta via Maleny-Kenilworth Road.</p>
                  </div>

                  <div className="mt-6 p-4 bg-warm-soil/5 rounded-lg">
                    <p className="text-sm">
                      <strong>Parking:</strong> Free on-site parking available. 
                      Accessible parking spaces near main entrance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Accessibility Section */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
            Accessibility
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-stone/80 mb-6">
              The Harvest is committed to universal access. We're designing all facilities 
              to be welcoming and accessible to people of all abilities.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Physical Access
                </h3>
                <ul className="space-y-2 text-stone/70">
                  <li>• Level pathways throughout main areas</li>
                  <li>• Wheelchair accessible gardens with raised beds</li>
                  <li>• Accessible toilet facilities</li>
                  <li>• Rest areas with seating every 30 meters</li>
                  <li>• Covered areas for weather protection</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Additional Support
                </h3>
                <ul className="space-y-2 text-stone/70">
                  <li>• Adaptive gardening tools available</li>
                  <li>• Staff trained in disability support</li>
                  <li>• Quiet spaces for sensory breaks</li>
                  <li>• Large print materials on request</li>
                  <li>• Assistance animals welcome</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-stone/60 mt-6 text-center">
              Please contact us to discuss any specific access requirements. 
              We're happy to make arrangements to ensure your visit is comfortable.
            </p>
          </div>
        </div>
      </Section>

      {/* What to Expect Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Working Farm</h3>
              <p className="text-sm text-stone/70">
                Experience a real working farm with seasonal activities, 
                productive gardens, and authentic agricultural practices.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Warm Welcome</h3>
              <p className="text-sm text-stone/70">
                Our community volunteers are here to welcome you, share stories, 
                and help you connect with The Harvest's mission.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Self-Guided Tours</h3>
              <p className="text-sm text-stone/70">
                Explore at your own pace with interpretive signage explaining 
                our programs, heritage, and regenerative practices.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Group Visits Section */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
            Group Visits
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <p className="text-stone/80 mb-6">
              We welcome group visits from schools, healthcare providers, community 
              organizations, and tourism groups. Our programs can be tailored to 
              meet your specific needs and interests.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 text-left mt-8">
              <div>
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Educational Groups
                </h3>
                <p className="text-stone/70 text-sm">
                  Curriculum-aligned programs for schools, hands-on learning about 
                  sustainable agriculture, environmental science, and community development.
                </p>
              </div>
              
              <div>
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Healthcare Groups
                </h3>
                <p className="text-stone/70 text-sm">
                  Therapeutic horticulture experiences, professional development 
                  workshops, and program demonstrations for healthcare providers.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-stone/80 mb-4">
                To arrange a group visit, please call us at least two weeks in advance.
              </p>
              <a 
                href="tel:+61424054113" 
                className="inline-block px-6 py-3 bg-heritage-green text-cream rounded hover:bg-heritage-green/90 transition-colors"
              >
                Book a Group Visit: 0424 054 113
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Safety Notice */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-heritage-green mb-4">
            Visitor Safety
          </h2>
          <div className="bg-warm-soil/5 p-6 rounded-lg text-left">
            <p className="text-stone/80 mb-4">
              For your safety and comfort when visiting:
            </p>
            <ul className="space-y-2 text-stone/70 text-sm">
              <li>• Wear closed-toe shoes and sun protection</li>
              <li>• Stay on marked pathways</li>
              <li>• Supervise children at all times</li>
              <li>• Ask before touching plants or equipment</li>
              <li>• Let us know about any allergies or medical conditions</li>
              <li>• Follow staff instructions during activities</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section background="green">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6">
            Plan Your Visit
          </h2>
          <p className="text-cream/80 mb-8">
            Whether you're interested in volunteering, exploring partnership opportunities, 
            or simply want to learn more about The Harvest, we'd love to meet you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+61424054113" 
              className="px-6 py-3 bg-cream text-heritage-green rounded hover:bg-cream/90 transition-colors"
            >
              Call Us: 0424 054 113
            </a>
            <a 
              href="/news-events" 
              className="px-6 py-3 border border-cream text-cream rounded hover:bg-cream/10 transition-colors"
            >
              View Upcoming Events
            </a>
          </div>
        </div>
      </Section>
    </main>
  )
}