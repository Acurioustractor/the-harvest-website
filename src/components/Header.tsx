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
  // Hide header completely for landing page only
  return null
}