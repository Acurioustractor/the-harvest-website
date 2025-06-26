import clsx from 'clsx'

interface SectionProps {
  children: React.ReactNode
  className?: string
  background?: 'white' | 'cream' | 'green'
}

export default function Section({ children, className, background = 'white' }: SectionProps) {
  return (
    <section 
      className={clsx(
        'py-16 sm:py-24',
        background === 'white' && 'bg-white',
        background === 'cream' && 'bg-cream/30',
        background === 'green' && 'bg-heritage-green text-cream',
        className
      )}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  )
}