import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  variant?: 'default' | 'gray' | 'dark' | 'premium'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  containerClassName = '',
  variant = 'default',
  size = 'lg'
}) => {
  const variants = {
    default: 'bg-white',
    gray: 'bg-gray-50',
    dark: 'bg-[#0B1320] text-white',
    premium: 'bg-gradient-to-br from-gray-50 to-white border-t border-gray-100'
  }

  const sizes = {
    sm: 'py-8 lg:py-12',
    md: 'py-12 lg:py-16',
    lg: 'py-16 lg:py-20',
    xl: 'py-20 lg:py-28'
  }

  return (
    <section className={`${variants[variant]} ${sizes[size]} ${className}`}>
      <div className={`container mx-auto px-6 lg:px-8 ${containerClassName}`}>
        {children}
      </div>
    </section>
  )
}

export default Section