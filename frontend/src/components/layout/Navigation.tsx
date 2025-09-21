import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'

interface NavigationProps {
  className?: string
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const location = useLocation()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (path: string) => location.pathname === path

  return (
    <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 ${className}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/static/images/chase-continental-header-logo.png" 
              alt="Chase Continental" 
              className="h-8 lg:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#00B294] ${
                  isActive(item.href) ? 'text-[#00B294]' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="bg-[#00B294] hover:bg-[#00A085] text-white">
              <a 
                href="https://calendly.com/charles-chasecontinental/chase-continental-discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Book Discovery Call
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2">
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-gray-900 mb-1"></span>
              <span className="block w-5 h-0.5 bg-gray-900 mb-1"></span>
              <span className="block w-5 h-0.5 bg-gray-900"></span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation