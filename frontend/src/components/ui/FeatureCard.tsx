import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

interface FeatureCardProps {
  icon?: React.ReactNode
  iconSrc?: string
  title: string
  description: string
  className?: string
  variant?: 'default' | 'premium' | 'minimal'
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconSrc,
  title,
  description,
  className = '',
  variant = 'default'
}) => {
  const variants = {
    default: 'hover:shadow-lg transition-shadow duration-300',
    premium: 'bg-gradient-to-br from-white to-gray-50 hover:shadow-xl transition-all duration-300 hover:scale-105',
    minimal: 'border-none shadow-none hover:bg-gray-50 transition-colors duration-300'
  }

  return (
    <Card className={`${variants[variant]} ${className}`}>
      <CardHeader className="pb-4">
        {(icon || iconSrc) && (
          <div className="mb-4">
            {iconSrc ? (
              <img src={iconSrc} alt={`${title} icon`} className="w-12 h-12" />
            ) : (
              <div className="w-12 h-12 text-brand-primary flex items-center justify-center">{icon}</div>
            )}
          </div>
        )}
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default FeatureCard