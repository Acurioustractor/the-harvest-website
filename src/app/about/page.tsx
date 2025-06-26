'use client'

import PageHero from '@/components/PageHero'
import HeroImage from '@/components/HeroImage'
import Section from '@/components/Section'
import Image from '@/components/Image'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero Image Example - Replace 'hero/about-aerial.jpg' with actual image */}
      <HeroImage
        src="hero/about-aerial.jpg"
        alt="Aerial view of The Harvest site showing gardens and buildings"
        title="Our Story"
        subtitle="Honoring 31 years of organic legacy while growing community for the future"
        height="medium"
      />

      {/* Heritage Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-6">
              From Green Harvest to The Harvest
            </h2>
            <div className="space-y-4 text-stone/80">
              <p>
                For 31 years, Green Harvest Organic Gardening Supplies nurtured Queensland's 
                organic gardening community from this very site. Their pioneering work in 
                sustainable agriculture, rare seed preservation, and community education laid 
                the foundation for what The Harvest is becoming today.
              </p>
              <p>
                The Harvest transforms this beloved site into a regenerative agriculture 
                community hub, preserving Green Harvest's organic legacy while expanding 
                the vision to include therapeutic horticulture, social enterprise, and 
                authentic community building.
              </p>
              <p>
                Our roots go even deeper – to 1887, when German settlers established 
                agricultural traditions in Witta that continue to influence our approach 
                to land stewardship and community connection.
              </p>
            </div>
          </motion.div>

          {/* Example inline image - Replace with actual heritage photo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12"
          >
            <Image
              src="community/green-harvest-legacy.jpg"
              alt="Green Harvest founders in the original garden"
              width={800}
              height={600}
              className="w-full rounded-lg"
              caption="Green Harvest's organic gardens have nurtured the community for over three decades"
              credit="Green Harvest Archives"
            />
          </motion.div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-stone/80 mb-8">
            Creating thriving rural economies where people, place, and planet prosper 
            together through community-owned enterprise that serves marginalized communities 
            while preserving agricultural heritage.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Therapeutic Impact</h3>
              <p className="text-sm text-stone/70">
                Evidence-based horticultural therapy programs supporting mental health, 
                disability, and aged care communities
              </p>
            </div>
            <div>
              <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Community Ownership</h3>
              <p className="text-sm text-stone/70">
                Democratically governed by and for the Witta community, ensuring local 
                benefit and authentic participation
              </p>
            </div>
            <div>
              <div className="w-16 h-16 border-2 border-sage-gray/20 rounded-full mx-auto mb-4" />
              <h3 className="font-serif text-lg mb-2">Regenerative Agriculture</h3>
              <p className="text-sm text-stone/70">
                Demonstrating that sustainable farming can be economically viable while 
                healing soil and community
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Partners Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
            Our Partners
          </h2>
          
          <div className="space-y-12">
            {/* Cath Manuel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-serif text-heritage-green mb-3">
                Cath Manuel - Soil to Supper
              </h3>
              <p className="text-stone/80 mb-4">
                With over 25 years of experience in therapeutic horticulture, Cath brings 
                professional expertise and heartfelt commitment to our programs. Her 
                person-centered approach ensures everyone, regardless of ability, can 
                experience the joy and healing of gardening.
              </p>
              <p className="text-sm text-stone/60 italic">
                "Everyone of all ages and abilities needs connection with nature and the 
                joy of gardening."
              </p>
            </motion.div>

            {/* A Curious Tractor */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-serif text-heritage-green mb-3">
                A Curious Tractor
              </h3>
              <p className="text-stone/80 mb-4">
                Innovation catalyst bringing creative energy and proven methodologies to 
                rural community development. Their "raucous" approach encourages bold 
                thinking while maintaining authentic connection to place and people.
              </p>
              <p className="text-sm text-stone/60 italic">
                "Using Black Cockatoo Valley farm as a sandbox for social innovation."
              </p>
            </motion.div>

            {/* Community Partners */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-serif text-heritage-green mb-3">
                Healthcare & Education Partners
              </h3>
              <p className="text-stone/80">
                We're building relationships with Sunshine Coast healthcare providers, 
                local schools, TAFE Queensland, and the University of the Sunshine Coast 
                to create pathways for healing, learning, and meaningful work.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section background="green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-8">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-left">
              <h3 className="font-serif text-lg mb-3">Slow Living</h3>
              <p className="text-cream/80 text-sm">
                We choose seasonal rhythms over digital schedules, face-to-face 
                connection over online engagement, and depth over speed in all we do.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-serif text-lg mb-3">Authentic Participation</h3>
              <p className="text-cream/80 text-sm">
                True community ownership means everyone has a voice, decisions happen 
                transparently, and benefits flow to those who need them most.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-serif text-lg mb-3">Heritage Respect</h3>
              <p className="text-cream/80 text-sm">
                We honor Green Harvest's organic legacy, German agricultural traditions, 
                and Indigenous connection to this land.
              </p>
            </div>
            <div className="text-left">
              <h3 className="font-serif text-lg mb-3">Evidence-Based Practice</h3>
              <p className="text-cream/80 text-sm">
                Our therapeutic programs meet professional standards while maintaining 
                warmth and accessibility for all participants.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-heritage-green mb-4">
            Join Us in Growing Something Beautiful
          </h2>
          <p className="text-stone/80 mb-8">
            The Harvest is being built by and for our community. Whether you're a 
            long-time Witta resident, former Green Harvest customer, or someone who 
            shares our vision, there's a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/get-involved" 
              className="px-6 py-3 bg-heritage-green text-cream rounded hover:bg-heritage-green/90 transition-colors"
            >
              Get Involved
            </a>
            <a 
              href="tel:+61424054113" 
              className="px-6 py-3 border border-heritage-green text-heritage-green rounded hover:bg-heritage-green/5 transition-colors"
            >
              Call Us: 0424 054 113
            </a>
          </div>
        </div>
      </Section>
    </main>
  )
}