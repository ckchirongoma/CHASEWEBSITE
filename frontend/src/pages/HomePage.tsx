import React from 'react'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Section from '@/components/layout/Section'
import FeatureCard from '@/components/ui/FeatureCard'
import { Button } from '@/components/ui/button'
import { Bot, Zap, Target, BarChart, Settings, Rocket } from 'lucide-react'

const HomePage: React.FC = () => {
  const features = [
    {
      icon: <Bot size={32} />,
      title: 'AI-Powered Automation',
      description: 'Smart agents that handle complex workflows, process documents, and make intelligent decisions to streamline your operations.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Production-Ready Systems',
      description: 'Not prototypes. Battle-tested systems with monitoring, error handling, and enterprise-grade reliability that work in real business environments.'
    },
    {
      icon: <Target size={32} />,
      title: 'Process Mapping',
      description: 'We analyze your existing workflows, identify automation opportunities, and design systems that integrate seamlessly with your current operations.'
    },
    {
      icon: <BarChart size={32} />,
      title: 'Measurable Results',
      description: 'Track performance, cost savings, and efficiency gains with built-in analytics and reporting dashboards.'
    },
    {
      icon: <Settings size={32} />,
      title: 'Lightweight Integration',
      description: 'Deploy quickly with minimal disruption. Our agents work with your existing tools and systems without requiring major infrastructure changes.'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Rapid Deployment',
      description: 'From concept to production in weeks, not months. We prototype quickly, iterate based on feedback, and deliver working solutions fast.'
    }
  ]

  return (
    <Layout>
      <Hero
        title={
          <>
            <span className="gradient-text">Chase Continental</span> delivers production-grade AI agents that{' '}
            <span className="gradient-text">transform your operations</span> and get your work done.
          </>
        }
        subtitle="Intelligent technology handles the work, freeing humans for high-value innovation"
        description="Smart automation transforms business operations through AI systems people actually want to use. We map processes, deploy lightweight agents, and deliver measurable results in production."
        primaryCta={{
          text: 'Book Discovery Call',
          href: 'https://calendly.com/charles-chasecontinental/chase-continental-discovery-call',
          external: true
        }}
        secondaryCta={{
          text: 'View Case Studies',
          href: '/case-studies'
        }}
        variant="gradient"
      />

      <Section variant="default" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Why Choose Chase Continental?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We don't just build AI tools—we create complete automation systems that transform how your business operates.
            From initial process mapping to production deployment, we deliver results you can measure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              variant="premium"
            />
          ))}
        </div>
      </Section>

      <Section variant="gray" size="lg">
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how AI automation can streamline your processes and deliver measurable results for your business.
          </p>
          <Button
            size="lg"
            className="bg-[#00B294] hover:bg-[#00A085] text-white px-8 py-3"
            asChild
          >
            <a
              href="https://calendly.com/charles-chasecontinental/chase-continental-discovery-call"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule Your Discovery Call
            </a>
          </Button>
        </div>
      </Section>
    </Layout>
  )
}

export default HomePage