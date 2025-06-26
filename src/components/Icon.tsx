import clsx from 'clsx'

interface IconProps {
  name: keyof typeof icons
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

// Simple, hand-drawn style SVG icons
const icons = {
  // Nature & Garden
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6 2 2 6 2 12c0 4 2 7 5 8.5 1.5.8 3.2 1.5 5 1.5s3.5-.7 5-1.5c3-1.5 5-4.5 5-8.5 0-6-4-10-10-10z" />
      <path d="M12 8v13M7 13s1-1 2.5-1 2.5 1 2.5 1M12 13s1-1 2.5-1S17 13 17 13" />
    </svg>
  ),
  
  sprout: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22V9M12 9s0-4 4-4 4 4 4 4-1 4-4 4h-4zM12 9s0-4-4-4-4 4-4 4 1 4 4 4h4z" />
    </svg>
  ),
  
  // Community
  hands: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7l2-7z" />
    </svg>
  ),
  
  people: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="7" r="2" />
      <path d="M5 18v-5a2 2 0 012-2h4a2 2 0 012 2v5" />
      <circle cx="17" cy="7" r="2" />
      <path d="M19 18v-5a2 2 0 00-2-2h-2" />
    </svg>
  ),
  
  // Agriculture
  wheat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2v20M9 4l3-2 3 2M9 7l3-2 3 2M9 10l3-2 3 2M9 13l3-2 3 2M9 16l3-2 3 2M9 19l3-2 3 2" />
    </svg>
  ),
  
  sun: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  
  // Buildings & Places
  home: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 10l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V10z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  
  // Tools & Activities
  tool: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 014 17V5a2 2 0 012-2h14a2 2 0 012 2v12H6.5" />
    </svg>
  ),
  
  // Directional
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  
  // Abstract/Decorative
  circle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  
  plus: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export default function Icon({ name, className, size = 'md' }: IconProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  }

  return (
    <span className={clsx(sizeClasses[size], 'inline-block', className)}>
      {icons[name]}
    </span>
  )
}