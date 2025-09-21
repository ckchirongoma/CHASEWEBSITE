import React from 'react'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Team', href: '/team' },
      { label: 'Contact', href: '/contact' }
    ],
    resources: [
      { label: 'Use Cases', href: '/use-cases' },
      { label: 'Builder', href: '/builder' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Blog', href: '/blog' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Login', href: '/login' }
    ]
  }

  return (
    <footer className="bg-[#0B1320] text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <img
              src="/static/images/chase-continental-header-logo.png"
              alt="Chase Continental"
              className="h-8 mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Production-grade AI agents that transform your operations and get your work done.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Chase Continental. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Add social links if needed */}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer