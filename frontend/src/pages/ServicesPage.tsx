import React from 'react'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Section from '@/components/layout/Section'
import FeatureCard from '@/components/ui/FeatureCard'
import { Search, Bot, Settings, BarChart, Rocket, TrendingUp } from 'lucide-react'

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Search size={32} />,
      title: 'Process Analysis & Mapping',
      description: 'We analyze your current workflows, identify bottlenecks, and map out opportunities for intelligent automation.'
    },
    {
      icon: <Bot size={32} />,
      title: 'AI Agent Development',
      description: 'Custom AI agents tailored to your specific business needs, from document processing to customer service automation.'
    },
    {
      icon: <Settings size={32} />,
      title: 'System Integration',
      description: 'Seamless integration with your existing tools and platforms, ensuring minimal disruption to current operations.'
    },
    {
      icon: <BarChart size={32} />,
      title: 'Performance Monitoring',
      description: 'Comprehensive monitoring and analytics to track performance, identify issues, and optimize results continuously.'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Deployment & Support',
      description: 'End-to-end deployment with ongoing support and maintenance to ensure your systems run smoothly in production.'
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Scaling & Optimization',
      description: 'As your business grows, we help scale your automation systems and optimize them for maximum efficiency.'
    }
  ]

  return (
    <Layout>
      <Hero
        title="Comprehensive AI Automation Services"
        description="From initial consultation to full deployment and ongoing support, we provide end-to-end AI automation solutions that transform your business operations."
        primaryCta={{
          text: 'Get Started Today',
          href: 'https://calendly.com/charles-chasecontinental/chase-continental-discovery-call',
          external: true
        }}
      />

      <Section variant="default" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">What We Offer</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive service portfolio covers every aspect of AI automation, from initial strategy 
            to production deployment and ongoing optimization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FeatureCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variant="premium"
            />
          ))}
        </div>
      </Section>

      <Section variant="gray" size="lg">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your automation needs and create a custom solution that delivers real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://calendly.com/charles-chasecontinental/chase-continental-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#00B294] hover:bg-[#00A085] transition-colors duration-200"
            >
              Schedule Discovery Call
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default ServicesPage