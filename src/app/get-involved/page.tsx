'use client'

import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import { motion } from 'framer-motion'

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-cream">
      <PageHero 
        title="Get Involved" 
        subtitle="Join us in creating something beautiful together"
      />

      {/* Volunteer Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
              Volunteer Opportunities
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Garden Maintenance
                </h3>
                <p className="text-stone/80 mb-4">
                  Help maintain our therapeutic gardens and food production areas. 
                  Perfect for those who love working with soil and plants.
                </p>
                <ul className="text-sm text-stone/70 space-y-1">
                  <li>• Weekly volunteer days (Fridays)</li>
                  <li>• Seasonal planting and harvesting</li>
                  <li>• No experience necessary</li>
                  <li>• Training provided</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Program Support
                </h3>
                <p className="text-stone/80 mb-4">
                  Assist with therapeutic horticulture sessions and educational programs, 
                  supporting participants and facilitators.
                </p>
                <ul className="text-sm text-stone/70 space-y-1">
                  <li>• Support therapeutic sessions</li>
                  <li>• Help with school visits</li>
                  <li>• Requires Blue Card for youth work</li>
                  <li>• 20-hour training provided</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Community Events
                </h3>
                <p className="text-stone/80 mb-4">
                  Help organize and run community celebrations, workshops, and 
                  seasonal events throughout the year.
                </p>
                <ul className="text-sm text-stone/70 space-y-1">
                  <li>• Event setup and coordination</li>
                  <li>• Kitchen and catering support</li>
                  <li>• Heritage celebration planning</li>
                  <li>• Flexible commitment</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Administration
                </h3>
                <p className="text-stone/80 mb-4">
                  Support the smooth running of The Harvest through office tasks, 
                  communication, and organizational support.
                </p>
                <ul className="text-sm text-stone/70 space-y-1">
                  <li>• Newsletter production</li>
                  <li>• Reception and phone support</li>
                  <li>• Data entry and filing</li>
                  <li>• Work from home options</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-stone/80 mb-6">
                All volunteers receive training, ongoing support, and become part of 
                our caring community. We value your time and contributions.
              </p>
              <a 
                href="tel:+61424054113" 
                className="inline-block px-6 py-3 bg-heritage-green text-cream rounded hover:bg-heritage-green/90 transition-colors"
              >
                Call to Volunteer: 0424 054 113
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Membership Section */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
            Become a Member
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <p className="text-stone/80 mb-6 text-center">
              Membership in The Harvest means you're part of our community-owned 
              organization with a voice in decision-making and priority access to 
              programs and events.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Member Benefits
                </h3>
                <ul className="space-y-2 text-stone/70">
                  <li>• Voting rights at Annual General Meetings</li>
                  <li>• Priority booking for workshops and events</li>
                  <li>• Member pricing on CSA boxes and products</li>
                  <li>• Monthly member gatherings</li>
                  <li>• Volunteer recognition events</li>
                  <li>• Input on program development</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-serif text-lg text-heritage-green mb-3">
                  Membership Types
                </h3>
                <div className="space-y-3 text-stone/70">
                  <div>
                    <p className="font-medium">Ordinary Membership</p>
                    <p className="text-sm">Full voting rights - $25/year</p>
                  </div>
                  <div>
                    <p className="font-medium">Concession Membership</p>
                    <p className="text-sm">Full voting rights - $10/year</p>
                  </div>
                  <div>
                    <p className="font-medium">Youth Membership (16-18)</p>
                    <p className="text-sm">Mentorship included - Free</p>
                  </div>
                  <div>
                    <p className="font-medium">Life Membership</p>
                    <p className="text-sm">By nomination for service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-stone/80 mb-6">
              Join at our monthly community meetings or call us to arrange a time 
              to sign up and learn more about membership.
            </p>
          </div>
        </div>
      </Section>

      {/* Partnership Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
            Partner With Us
          </h2>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-serif text-lg text-heritage-green mb-3">
                Healthcare Providers
              </h3>
              <p className="text-stone/80">
                Partner with us to offer therapeutic horticulture programs for your 
                clients. We provide professional services meeting healthcare standards 
                while creating meaningful outcomes in an authentic farm setting.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-serif text-lg text-heritage-green mb-3">
                Educational Institutions
              </h3>
              <p className="text-stone/80">
                Bring your students for hands-on learning about sustainable agriculture, 
                environmental science, and community development. We offer curriculum-aligned 
                programs and teacher professional development.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="font-serif text-lg text-heritage-green mb-3">
                Local Businesses
              </h3>
              <p className="text-stone/80">
                Support The Harvest through sponsorship, in-kind donations, or collaborative 
                programs. We offer team building experiences, CSA boxes for staff, and 
                community recognition opportunities.
              </p>
            </motion.div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-stone/80 mb-6">
              We believe in partnerships that create mutual benefit and lasting positive 
              impact for our community.
            </p>
            <a 
              href="/visit" 
              className="inline-block px-6 py-3 border border-heritage-green text-heritage-green rounded hover:bg-heritage-green/5 transition-colors"
            >
              Visit Us to Discuss Partnership
            </a>
          </div>
        </div>
      </Section>

      {/* Donation Section */}
      <Section background="green">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6">
            Support Our Growth
          </h2>
          <p className="text-cream/80 mb-8">
            While we're working toward financial sustainability through our programs 
            and social enterprise activities, donations help us serve those who need 
            our programs most.
          </p>
          <div className="bg-cream/10 p-6 rounded-lg">
            <p className="text-cream/90 mb-4">
              Your donation supports:
            </p>
            <ul className="text-cream/80 text-sm space-y-2 mb-6">
              <li>• Subsidized therapeutic programs for those in need</li>
              <li>• Garden infrastructure and accessibility improvements</li>
              <li>• Heritage preservation and community celebrations</li>
              <li>• Training for volunteers and community members</li>
            </ul>
            <p className="text-cream/70 text-sm">
              Contact us to discuss how you can support The Harvest's mission.
            </p>
          </div>
        </div>
      </Section>

      {/* Community Meetings */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-heritage-green mb-4">
            Join Our Community Meetings
          </h2>
          <p className="text-stone/80 mb-6">
            The best way to get involved is to attend our regular community gatherings 
            where we share meals, discuss plans, and build relationships.
          </p>
          <div className="bg-sage-gray/10 p-6 rounded-lg">
            <p className="font-serif text-lg text-heritage-green mb-2">
              First Friday Community Coffee
            </p>
            <p className="text-stone/70 mb-4">
              Every first Friday of the month, 3:00 PM<br />
              Witta General Store
            </p>
            <p className="text-sm text-stone/60">
              Informal gathering with project updates and community discussion
            </p>
          </div>
        </div>
      </Section>
    </main>
  )
}