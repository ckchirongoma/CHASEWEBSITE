import React from 'react'
import Layout from '@/components/layout/Layout'
import Hero from '@/components/sections/Hero'
import Section from '@/components/layout/Section'
import Stats from '@/components/ui/Stats'
import TeamMember from '@/components/ui/TeamMember'
import FeatureCard from '@/components/ui/FeatureCard'

const AboutPage: React.FC = () => {
  const stats = [
    { number: '100+', label: 'Processes Automated' },
    { number: '3 years', label: 'Industry Experience' },
    { number: '98%', label: 'Uptime Achieved' }
  ]

  const values = [
    {
      title: 'Real-world impact > hype',
      description: 'We focus on measurable outcomes, not buzzwords. Every system we build delivers concrete value.'
    },
    {
      title: 'AI = Augmented intelligence',
      description: 'Human + agent collaboration, not replacement. We design systems that amplify human capability.'
    },
    {
      title: 'Production-grade systems',
      description: 'APIs, observability, support. We build systems that work reliably in real business environments.'
    },
    {
      title: 'Rapid, measurable outcomes',
      description: 'Reduced costs, faster decisions, freed capacity. Results you can see and measure.'
    }
  ]

  const teamMembers = [
    {
      name: 'Charles K. Chirongoma',
      role: 'CEO, Implementation & Consulting',
      bio: 'Economist and management consultant turned CEO. Leads digital transformation initiatives and specializes in identifying optimal AI applications, process mapping, and business intelligence optimization that drives measurable outcomes.',
      longBio: 'Charles is an economist and management consultant who leads digital transformation, consulting and implementation at Chase Continental. He excels at applying AI in the right spaces and finding where AI actually works for businesses. His experience spans manufacturing industries (automotive, textiles, fashion, chemicals), property technology as a global implementation consultant for a US-based tech firm serving global clients, sustainability projects focused on data intelligence and ecosystem building that created jobs and optimized waste pipelines, and urban management supporting smart city initiatives and data-driven decision making. He specializes in digital transformation strategy, ETL pipelines, observability, process mapping, business intelligence optimization, and understanding how technology drives business transformation.',
      image: '/static/images/team/charles.jpg'
    },
    {
      name: 'Caleb Sakala',
      role: 'CTO, Product & Engineering',
      bio: 'Full-stack engineer and early AI mover who heads up product and engineering. Led multiple engineering teams, shipped multiple SaaS products, and built platforms competing against Lovable.',
      longBio: 'Caleb heads up product and engineering at Chase Continental, providing the technical expertise to execute Charles\'s strategic AI applications. He\'s consistently been an early mover in the AI space, having built agent builder platforms (including Escalator), app/software platform builders competing against platforms like Lovable, and numerous AI solutions across multiple AI startups. He\'s led multiple engineering teams and shipped multiple SaaS products at various startups. He specializes in AI agent architectures, system integrations, and turning AI strategy into production-grade systems that actually work in real business environments.',
      image: '/static/images/team/caleb.jpg'
    }
  ]

  return (
    <Layout>
      <Hero
        title="Unlocking Hidden Capacity Through Digital Transformation"
        description="Chase Continental unlocks your organization's hidden potential through digital transformation and practical AI. We transform paper-based processes to cloud systems, then automate with hybrid teams that deliver measurable results."
        variant="dark"
      />

      <Section variant="default" size="lg">
        <Stats stats={stats} className="mb-16" />
      </Section>

      <Section variant="premium" size="lg">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in building AI systems that enhance human capabilities rather than replace them.
            Our approach is grounded in practical results and measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <FeatureCard
              key={index}
              title={value.title}
              description={value.description}
              variant="minimal"
            />
          ))}
        </div>
      </Section>

      <Section variant="default" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet the Leadership Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our team combines deep technical expertise with practical business experience to deliver
            automation solutions that work in the real world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.longBio}
              image={member.image}
            />
          ))}
        </div>
      </Section>
    </Layout>
  )
}

export default AboutPage