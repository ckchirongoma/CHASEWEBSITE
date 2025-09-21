import React from 'react'
import { Button } from '@/components/ui/button'
import { Briefcase, Zap, Target, BarChart, Rocket } from 'lucide-react'

interface HeroProps {
  title: React.ReactNode
  subtitle?: string
  description?: string
  primaryCta?: {
    text: string
    href: string
    external?: boolean
  }
  secondaryCta?: {
    text: string
    href: string
    external?: boolean
  }
  className?: string
  variant?: 'default' | 'dark' | 'gradient'
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  className = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'bg-white',
    dark: 'bg-[#0B1320] text-white',
    gradient: 'bg-gradient-to-br from-[#0B1320] via-[#0B1320] to-[#00B294]/20'
  }

  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <Briefcase size={32} className="text-brand-primary" />
      </div>
      <div className="absolute top-32 right-20 opacity-15 animate-float-delayed">
        <Zap size={24} className="text-brand-primary" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 animate-float">
        <Target size={24} className="text-brand-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float-delayed">
        <BarChart size={32} className="text-brand-primary" />
      </div>
      <div className="absolute top-40 right-40 opacity-15 animate-float">
        <Rocket size={24} className="text-brand-primary" />
      </div>
    </div>
  )

  return (
    <section className={`relative pt-20 lg:pt-24 pb-16 lg:pb-20 ${variants[variant]} ${className}`}>
      {variant === 'gradient' && <FloatingElements />}

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className={`text-4xl lg:text-6xl font-bold leading-tight mb-6 ${variant === 'dark' || variant === 'gradient'
              ? 'text-white'
              : 'text-gray-900'
            }`}>
            {title}
          </h1>

          {subtitle && (
            <div className="mb-6">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${variant === 'dark' || variant === 'gradient'
                  ? 'bg-[#00B294]/20 text-[#00B294]'
                  : 'bg-[#00B294]/10 text-[#00B294]'
                }`}>
                {subtitle}
              </span>
            </div>
          )}

          {description && (
            <p className={`text-lg lg:text-xl mb-8 max-w-3xl mx-auto ${variant === 'dark' || variant === 'gradient'
                ? 'text-gray-300'
                : 'text-gray-600'
              }`}>
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {primaryCta && (
                <Button
                  size="lg"
                  className="bg-[#00B294] hover:bg-[#00A085] text-white px-8 py-3"
                  asChild
                >
                  {primaryCta.external ? (
                    <a href={primaryCta.href} target="_blank" rel="noopener noreferrer">
                      {primaryCta.text}
                    </a>
                  ) : (
                    <a href={primaryCta.href}>
                      {primaryCta.text}
                    </a>
                  )}
                </Button>
              )}

              {secondaryCta && (
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-3"
                  asChild
                >
                  {secondaryCta.external ? (
                    <a href={secondaryCta.href} target="_blank" rel="noopener noreferrer">
                      {secondaryCta.text}
                    </a>
                  ) : (
                    <a href={secondaryCta.href}>
                      {secondaryCta.text}
                    </a>
                  )}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Hero