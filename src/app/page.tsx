'use client'

import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: 'Volunteering',
    message: ''
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowSuccess(true)
    setFormData({ name: '', email: '', interest: 'Volunteering', message: '' })
    // Scroll to success message
    setTimeout(() => {
      const successElement = document.getElementById('success-message')
      if (successElement) {
        successElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }, 100)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen" style={{ 
      fontFamily: "'Crimson Text', serif",
      lineHeight: '1.6',
      color: '#2D2D2D',
      backgroundColor: '#F7F4F0',
      backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(74, 93, 35, 0.03) 0%, transparent 50%)'
    }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&family=Crimson+Pro:wght@200;300;400;500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap');
        
        :root {
          --vintage-green: #3A4D1C;
          --warm-brown: #8B5A3C;
          --parchment: #F7F4F0;
          --sage-muted: #6B7C5A;
          --dusty-gold: #B8945A;
        }

        body {
          background-color: #F7F4F0;
        }

        .botanical-border {
          position: relative;
        }

        .botanical-border::before {
          content: '';
          position: absolute;
          top: -10px;
          left: -10px;
          right: -10px;
          bottom: -10px;
          border: 2px solid #8B5A3C;
          border-radius: 15px;
          opacity: 0.3;
          z-index: 0;
        }

        .botanical-border::after {
          content: '• ❦ •';
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #F7F4F0;
          padding: 0 15px;
          font-size: 14px;
          color: #8B5A3C;
          z-index: 1;
        }

        .vintage-card {
          background: linear-gradient(145deg, #FAF8F5 0%, #F5F1EB 100%);
          border: 1px solid #D4C4A8;
          border-radius: 12px;
          box-shadow: 
            0 4px 12px rgba(139, 90, 60, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
          position: relative;
        }

        .vintage-card::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          border: 1px solid #E8DCC6;
          border-radius: 8px;
          pointer-events: none;
        }

        .hand-drawn-line {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #8B5A3C 10%, #8B5A3C 90%, transparent 100%);
          border-radius: 1px;
          opacity: 0.4;
          margin: 20px auto;
        }

        .aged-paper {
          background: 
            radial-gradient(circle at 100% 50%, transparent 20%, rgba(139, 69, 19, 0.02) 21%, rgba(139, 69, 19, 0.02) 34%, transparent 35%, transparent),
            linear-gradient(0deg, rgba(139, 69, 19, 0.01) 50%, transparent 50%);
        }
      `}</style>

      {/* Main Container with Vintage Frame */}
      <div style={{ 
        maxWidth: '900px', 
        margin: '40px auto', 
        padding: '0 20px' 
      }}>
        <div className="vintage-card aged-paper" style={{ 
          padding: '60px 50px',
          position: 'relative'
        }}>
          {/* Decorative corners */}
          <div style={{
            position: 'absolute',
            top: '15px',
            left: '15px',
            width: '30px',
            height: '30px',
            border: '2px solid #8B5A3C',
            borderRight: 'none',
            borderBottom: 'none',
            opacity: 0.3
          }} />
          <div style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            width: '30px',
            height: '30px',
            border: '2px solid #8B5A3C',
            borderLeft: 'none',
            borderBottom: 'none',
            opacity: 0.3
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            width: '30px',
            height: '30px',
            border: '2px solid #8B5A3C',
            borderRight: 'none',
            borderTop: 'none',
            opacity: 0.3
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15px',
            right: '15px',
            width: '30px',
            height: '30px',
            border: '2px solid #8B5A3C',
            borderLeft: 'none',
            borderTop: 'none',
            opacity: 0.3
          }} />

          {/* Header Text */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{
              fontSize: '0.9rem',
              color: '#8B5A3C',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '20px',
              fontWeight: 400
            }}>
              We are transforming the beloved "Green Harvest" site into
            </p>
            <h1 style={{
              fontFamily: "'EB Garamond', serif",
              fontSize: '4rem',
              fontWeight: 500,
              color: '#3A4D1C',
              marginBottom: '15px',
              lineHeight: '1.1',
              textAlign: 'center'
            }}>
              The Harvest
            </h1>
            <p style={{
              fontFamily: "'Crimson Text', serif",
              fontStyle: 'italic',
              fontSize: '1.4rem',
              color: '#6B7C5A',
              marginBottom: '30px'
            }}>
              Where time slows, roots deepen<br />and community grows.
            </p>
          </div>

          <div className="hand-drawn-line" style={{ width: '200px' }} />

          {/* Main Description */}
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#4A4A4A',
              lineHeight: '1.7',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              Join us as this special place becomes a thriving community where everyone is welcome, 
              food is grown and enjoyed, and connections flourish between all of us.
            </p>
          </div>

          <div className="hand-drawn-line" style={{ width: '150px' }} />

          {/* Information Sections */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{
              backgroundColor: 'rgba(139, 90, 60, 0.05)',
              border: '1px solid #D4C4A8',
              borderRadius: '8px',
              padding: '30px',
              marginBottom: '25px'
            }}>
              <h3 style={{
                fontFamily: "'EB Garamond', serif",
                color: '#3A4D1C',
                fontSize: '1.4rem',
                marginBottom: '15px',
                textAlign: 'center',
                fontWeight: 500
              }}>
                Our Vision
              </h3>
              <p style={{ 
                color: '#4A4A4A', 
                lineHeight: '1.7',
                textAlign: 'center',
                fontSize: '1rem'
              }}>
                A regenerative community space that honors the past while growing toward the future. 
                We're building a place where therapeutic gardens heal, shared meals connect neighbors, 
                and sustainable practices inspire the next generation.
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(139, 90, 60, 0.05)',
              border: '1px solid #D4C4A8',
              borderRadius: '8px',
              padding: '30px',
              marginBottom: '25px'
            }}>
              <h3 style={{
                fontFamily: "'EB Garamond', serif",
                color: '#3A4D1C',
                fontSize: '1.4rem',
                marginBottom: '15px',
                textAlign: 'center',
                fontWeight: 500
              }}>
                What's Growing
              </h3>
              <p style={{ 
                color: '#4A4A4A', 
                lineHeight: '1.7',
                textAlign: 'center',
                fontSize: '1rem'
              }}>
                Therapeutic horticulture programs, farm-to-table dining experiences, community workshops, 
                youth education initiatives, and spaces for celebration and connection. All rooted in 
                regenerative agriculture and slow living principles.
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(139, 90, 60, 0.05)',
              border: '1px solid #D4C4A8',
              borderRadius: '8px',
              padding: '30px',
              marginBottom: '25px'
            }}>
              <h3 style={{
                fontFamily: "'EB Garamond', serif",
                color: '#3A4D1C',
                fontSize: '1.4rem',
                marginBottom: '15px',
                textAlign: 'center',
                fontWeight: 500
              }}>
                Timeline
              </h3>
              <p style={{ 
                color: '#4A4A4A', 
                lineHeight: '1.7',
                textAlign: 'center',
                fontSize: '1rem'
              }}>
                <strong>Now - March 2025:</strong> Community consultation and design<br />
                <strong>April 2025:</strong> Garden development begins<br />
                <strong>Late 2025:</strong> First programs launch<br />
                <strong>2026:</strong> Full community hub opening
              </p>
            </div>
          </div>

          <div className="hand-drawn-line" style={{ width: '120px' }} />

          {/* Call to Action */}
          <div style={{ 
            textAlign: 'center',
            marginBottom: '40px'
          }}>
            <p style={{
              fontSize: '1.1rem',
              color: '#4A4A4A',
              lineHeight: '1.7',
              marginBottom: '30px'
            }}>
              Find more information, ask a question<br />
              or get involved.
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '20px',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <div style={{
                backgroundColor: 'rgba(107, 124, 90, 0.08)',
                border: '1px solid #D4C4A8',
                borderRadius: '6px',
                padding: '20px 15px',
                textAlign: 'center'
              }}>
                <h4 style={{ 
                  color: '#3A4D1C', 
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 500
                }}>
                  Volunteer
                </h4>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#6B7C5A',
                  lineHeight: '1.4'
                }}>
                  Help shape the gardens
                </p>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(107, 124, 90, 0.08)',
                border: '1px solid #D4C4A8',
                borderRadius: '6px',
                padding: '20px 15px',
                textAlign: 'center'
              }}>
                <h4 style={{ 
                  color: '#3A4D1C', 
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 500
                }}>
                  Share Ideas
                </h4>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#6B7C5A',
                  lineHeight: '1.4'
                }}>
                  Your vision matters
                </p>
              </div>
              
              <div style={{
                backgroundColor: 'rgba(107, 124, 90, 0.08)',
                border: '1px solid #D4C4A8',
                borderRadius: '6px',
                padding: '20px 15px',
                textAlign: 'center'
              }}>
                <h4 style={{ 
                  color: '#3A4D1C', 
                  marginBottom: '8px',
                  fontSize: '1.1rem',
                  fontWeight: 500
                }}>
                  Partner
                </h4>
                <p style={{ 
                  fontSize: '0.9rem', 
                  color: '#6B7C5A',
                  lineHeight: '1.4'
                }}>
                  Collaborate with us
                </p>
              </div>
            </div>
          </div>

          <div className="hand-drawn-line" style={{ width: '180px' }} />

          {/* Contact Form */}
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{
              fontFamily: "'EB Garamond', serif",
              color: '#3A4D1C',
              fontSize: '1.6rem',
              textAlign: 'center',
              marginBottom: '25px',
              fontWeight: 500
            }}>
              Connect With Us
            </h2>
            {showSuccess && (
              <div id="success-message" style={{
                background: 'rgba(58, 77, 28, 0.1)',
                color: '#3A4D1C',
                padding: '15px',
                borderRadius: '6px',
                marginBottom: '20px',
                textAlign: 'center',
                border: '1px solid #D4C4A8'
              }}>
                Thank you for your message! We'll be in touch soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#3A4D1C',
                  fontWeight: 500,
                  marginBottom: '8px',
                  fontSize: '1rem'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #D4C4A8',
                    borderRadius: '6px',
                    fontFamily: "'Crimson Text', serif",
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    backgroundColor: '#FAF8F5'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#3A4D1C',
                  fontWeight: 500,
                  marginBottom: '8px',
                  fontSize: '1rem'
                }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #D4C4A8',
                    borderRadius: '6px',
                    fontFamily: "'Crimson Text', serif",
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    backgroundColor: '#FAF8F5'
                  }}
                />
              </div>
              
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  color: '#3A4D1C',
                  fontWeight: 500,
                  marginBottom: '8px',
                  fontSize: '1rem'
                }}>
                  I'm Interested In
                </label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #D4C4A8',
                    borderRadius: '6px',
                    fontFamily: "'Crimson Text', serif",
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    backgroundColor: '#FAF8F5'
                  }}
                >
                  <option>Volunteering</option>
                  <option>Workshops & Events</option>
                  <option>Partnership Opportunities</option>
                  <option>Updates & Newsletter</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div style={{ marginBottom: '25px' }}>
                <label style={{
                  display: 'block',
                  color: '#3A4D1C',
                  fontWeight: 500,
                  marginBottom: '8px',
                  fontSize: '1rem'
                }}>
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #D4C4A8',
                    borderRadius: '6px',
                    fontFamily: "'Crimson Text', serif",
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    resize: 'vertical',
                    backgroundColor: '#FAF8F5'
                  }}
                />
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <button
                  type="submit"
                  style={{
                    background: '#B8945A',
                    color: '#F7F4F0',
                    padding: '12px 30px',
                    border: '1px solid #8B5A3C',
                    borderRadius: '6px',
                    fontSize: '1rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontFamily: "'Crimson Text', serif"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = '#8B5A3C'
                    e.currentTarget.style.color = '#F7F4F0'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = '#B8945A'
                    e.currentTarget.style.color = '#F7F4F0'
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="hand-drawn-line" style={{ width: '100px' }} />

          {/* Bottom Text */}
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <p style={{
              fontSize: '1rem',
              color: '#6B7C5A',
              fontStyle: 'italic',
              marginBottom: '15px'
            }}>
              Join us in creating something beautiful together.
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#8B5A3C',
              marginBottom: '5px'
            }}>
              <strong>The Harvest Community Hub</strong>
            </p>
            <p style={{
              fontSize: '0.9rem',
              color: '#8B5A3C'
            }}>
              Former Green Harvest Site • Witta, Queensland
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}