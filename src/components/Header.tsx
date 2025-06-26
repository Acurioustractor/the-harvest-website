'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import clsx from 'clsx'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/#programs' },
  { name: 'Planning Vision', href: '/planning' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Visit Us', href: '/visit' },
  { name: 'News & Events', href: '/news-events' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b border-stone/10 sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-serif text-2xl text-heritage-green">The Harvest</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  'text-sm font-sans transition-colors duration-200',
                  pathname === item.href
                    ? 'text-heritage-green font-medium'
                    : 'text-stone/70 hover:text-heritage-green'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-stone/20">
              <a 
                href="tel:+61424054113" 
                className="text-sm font-sans text-heritage-green hover:text-warm-soil transition-colors"
              >
                Call us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-stone"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone/10">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-base font-sans transition-colors duration-200',
                    pathname === item.href
                      ? 'text-heritage-green font-medium'
                      : 'text-stone/70 hover:text-heritage-green'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="tel:+61424054113" 
                className="text-base font-sans text-heritage-green hover:text-warm-soil transition-colors pt-4 border-t border-stone/10"
              >
                Call us: 0424 054 113
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}