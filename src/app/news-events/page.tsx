'use client'

import PageHero from '@/components/PageHero'
import Section from '@/components/Section'
import Image from '@/components/Image'
import Video from '@/components/Video'
import ImageGallery, { GalleryImage } from '@/components/ImageGallery'
import { motion } from 'framer-motion'

const upcomingEvents = [
  {
    id: 1,
    date: 'First Friday of each month',
    time: '3:00 PM',
    title: 'Community Coffee',
    description: 'Informal gathering at Witta General Store for project updates and community discussion.',
    type: 'community'
  },
  {
    id: 2,
    date: 'Every Friday',
    time: '8:00 AM - 12:00 PM',
    title: 'Volunteer Garden Day',
    description: 'Join us for garden maintenance, planting, and harvesting. All skill levels welcome.',
    type: 'volunteer'
  },
  {
    id: 3,
    date: 'First Saturday of each month',
    time: '10:00 AM - 2:00 PM',
    title: 'Open Farm Day',
    description: 'Visit The Harvest, explore the gardens, and learn about our programs.',
    type: 'public'
  },
  {
    id: 4,
    date: 'Quarterly - Next: March 2025',
    time: '2:00 PM - 5:00 PM',
    title: 'Heritage Garden Tour',
    description: 'Guided tour exploring Green Harvest legacy and German agricultural traditions.',
    type: 'heritage'
  }
]

interface NewsItem {
  id: number
  date: string
  title: string
  content: string
  media?: {
    type: 'image' | 'video' | 'gallery'
    src?: string
    videoType?: 'youtube' | 'vimeo' | 'local' | 'descript' | 'embed'
    embedCode?: string
    images?: GalleryImage[]
    alt?: string
    caption?: string
  }
}

const news: NewsItem[] = [
  {
    id: 1,
    date: 'January 2025',
    title: 'Development Application Progress',
    content: 'We\'re working with Sunshine Coast Council on our development application for the community hub and therapeutic gardens. Community consultation sessions planned for February.',
    media: {
      type: 'image',
      src: 'news/development-plans.jpg',
      alt: 'Architectural plans for The Harvest community hub',
      caption: 'Proposed layout for the therapeutic gardens and community spaces'
    }
  },
  {
    id: 2,
    date: 'December 2024',
    title: 'Partnership with Soil to Supper',
    content: 'We\'re thrilled to announce our formal partnership with Cath Manuel from Soil to Supper, bringing 25+ years of therapeutic horticulture expertise to The Harvest.',
    media: {
      type: 'video',
      src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Replace with actual video
      videoType: 'youtube',
      caption: 'Cath Manuel explains the vision for therapeutic programs at The Harvest'
    }
  },
  {
    id: 3,
    date: 'November 2024',
    title: 'Community Support Growing',
    content: 'Over 50 community members attended our recent planning workshop, sharing ideas and volunteering to help shape The Harvest\'s future.',
    media: {
      type: 'gallery',
      images: [
        { src: 'news/workshop-1.jpg', alt: 'Community members discussing plans' },
        { src: 'news/workshop-2.jpg', alt: 'Volunteers signing up to help' },
        { src: 'news/workshop-3.jpg', alt: 'Group photo of workshop attendees' }
      ]
    }
  }
]

export default function NewsEventsPage() {
  return (
    <main className="min-h-screen bg-cream">
      <PageHero 
        title="News & Events" 
        subtitle="Stay connected with what's happening at The Harvest"
      />

      {/* Upcoming Events Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
              Upcoming Events
            </h2>
            
            <div className="grid gap-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                    <h3 className="font-serif text-lg text-heritage-green">
                      {event.title}
                    </h3>
                    <span className={`
                      inline-block px-3 py-1 text-xs rounded-full mt-2 sm:mt-0
                      ${event.type === 'community' ? 'bg-sage-gray/20 text-stone' : ''}
                      ${event.type === 'volunteer' ? 'bg-heritage-green/10 text-heritage-green' : ''}
                      ${event.type === 'public' ? 'bg-harvest-gold/20 text-warm-soil' : ''}
                      ${event.type === 'heritage' ? 'bg-warm-soil/10 text-warm-soil' : ''}
                    `}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>
                  <div className="text-sm text-stone/60 mb-2">
                    <span>{event.date}</span>
                    {event.time && <span> • {event.time}</span>}
                  </div>
                  <p className="text-stone/80">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-sage-gray/10 rounded-lg text-center">
              <p className="text-stone/80 mb-4">
                All events are free and open to the community. For group bookings or 
                special arrangements, please call us.
              </p>
              <a 
                href="tel:+61424054113" 
                className="text-heritage-green hover:underline"
              >
                Call for more information: 0424 054 113
              </a>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Seasonal Calendar */}
      <Section background="cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
            Seasonal Activities
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-heritage-green mb-3">
                Summer (Dec - Feb)
              </h3>
              <ul className="space-y-2 text-stone/70 text-sm">
                <li>• Early morning garden sessions</li>
                <li>• Tomato and summer vegetable harvest</li>
                <li>• Preserve making workshops</li>
                <li>• Twilight community dinners</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-heritage-green mb-3">
                Autumn (Mar - May)
              </h3>
              <ul className="space-y-2 text-stone/70 text-sm">
                <li>• Harvest festival celebration</li>
                <li>• Seed saving workshops</li>
                <li>• Winter garden preparation</li>
                <li>• Heritage apple grafting</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-heritage-green mb-3">
                Winter (Jun - Aug)
              </h3>
              <ul className="space-y-2 text-stone/70 text-sm">
                <li>• Garden planning sessions</li>
                <li>• Indoor workshops and skills sharing</li>
                <li>• Soil preparation programs</li>
                <li>• German heritage craft workshops</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-heritage-green mb-3">
                Spring (Sep - Nov)
              </h3>
              <ul className="space-y-2 text-stone/70 text-sm">
                <li>• Spring planting festival</li>
                <li>• Therapeutic garden open days</li>
                <li>• School group visits</li>
                <li>• Native plant propagation</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* News Updates Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-serif text-heritage-green mb-8 text-center">
            Recent News
          </h2>
          
          <div className="space-y-12">
            {news.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-stone/10 pb-12 last:border-0"
              >
                <p className="text-sm text-stone/60 mb-2">{item.date}</p>
                <h3 className="font-serif text-xl text-heritage-green mb-3">
                  {item.title}
                </h3>
                <p className="text-stone/80 mb-6">
                  {item.content}
                </p>
                
                {/* Media content */}
                {item.media && (
                  <div className="mt-6">
                    {item.media.type === 'image' && item.media.src && (
                      <Image
                        src={item.media.src}
                        alt={item.media.alt || item.title}
                        width={800}
                        height={600}
                        className="w-full max-w-2xl mx-auto"
                        caption={item.media.caption}
                      />
                    )}
                    
                    {item.media.type === 'video' && (item.media.src || item.media.embedCode) && (
                      <Video
                        src={item.media.src || ''}
                        title={item.title}
                        type={item.media.videoType || 'local'}
                        embedCode={item.media.embedCode}
                        className="w-full max-w-3xl mx-auto"
                        caption={item.media.caption}
                      />
                    )}
                    
                    {item.media.type === 'gallery' && item.media.images && (
                      <ImageGallery
                        images={item.media.images}
                        columns={3}
                        className="max-w-4xl mx-auto"
                      />
                    )}
                  </div>
                )}
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-stone/60 text-sm">
              News updates are shared monthly. Join our mailing list or attend 
              community meetings for the latest information.
            </p>
          </div>
        </div>
      </Section>

      {/* Heritage Celebrations */}
      <Section background="green">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6">
            Annual Heritage Celebrations
          </h2>
          <p className="text-cream/80 mb-8 max-w-2xl mx-auto">
            Throughout the year, we honor both Green Harvest's organic legacy and 
            Witta's German agricultural heritage through special celebrations.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="bg-cream/10 p-6 rounded-lg">
              <h3 className="font-serif text-lg mb-3">Green Harvest Reunion</h3>
              <p className="text-cream/80 text-sm mb-3">
                Annual gathering for former customers and supporters to share memories 
                and see the site's evolution.
              </p>
              <p className="text-cream/60 text-xs">Next reunion: October 2025</p>
            </div>

            <div className="bg-cream/10 p-6 rounded-lg">
              <h3 className="font-serif text-lg mb-3">German Heritage Festival</h3>
              <p className="text-cream/80 text-sm mb-3">
                Celebrating Witta's 1887 German settlement with traditional food, 
                music, and agricultural demonstrations.
              </p>
              <p className="text-cream/60 text-xs">Annual event in September</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Stay Connected */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-serif text-heritage-green mb-4">
            Stay Connected
          </h2>
          <p className="text-stone/80 mb-8">
            The best way to stay informed is through face-to-face connection at our 
            community events. For those unable to attend in person, we offer limited 
            digital updates.
          </p>
          
          <div className="space-y-4">
            <div className="p-4 bg-sage-gray/10 rounded-lg">
              <p className="font-medium text-stone mb-1">Monthly Newsletter</p>
              <p className="text-sm text-stone/70">
                Printed newsletter available at community venues or mailed on request
              </p>
            </div>
            
            <div className="p-4 bg-sage-gray/10 rounded-lg">
              <p className="font-medium text-stone mb-1">Community Notice Boards</p>
              <p className="text-sm text-stone/70">
                Check boards at Witta General Store and community hall for updates
              </p>
            </div>
            
            <div className="p-4 bg-sage-gray/10 rounded-lg">
              <p className="font-medium text-stone mb-1">Phone Updates</p>
              <p className="text-sm text-stone/70">
                Call us anytime for the latest news and event information
              </p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}