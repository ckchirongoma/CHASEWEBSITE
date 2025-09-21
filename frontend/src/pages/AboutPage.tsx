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
      role: 'CEO, Implementation',
      bio: 'Management consultant turned implementation lead. I specialise in mapping operations, designing practical AI+automation solutions and leading their delivery into production.',
      longBio: 'Charles is an economist and management consultant with experience across manufacturing, sustainability (Heineken), property tech (MRI) and public urban management (CCID). He leads implementation and client success — turning research and data into operational systems that scale.',
      image: '/static/images/team/charles.jpg'
    },
    {
      name: 'Caleb Sakala',
      role: 'CTO, Product & Engineering',
      bio: 'Full-stack engineer with 5+ years building production AI systems and integrations.',
      longBio: 'Caleb specializes in AI agent architectures and system integrations that actually work in production. He\'s built automation systems for startups and enterprise clients, focusing on reliability, API integrations, and fast prototyping. Before Chase Continental, he led engineering teams and shipped multiple SaaS products.',
      image: '/static/images/team/caleb.jpg'
    }
  ]

  return (
    <Layout>
      <Hero
        title="Practical AI for Real Business Transformation"
        description="Chase Continental helps organisations transform through practical AI. We don't sell hype — we map processes, prototype quickly, and ship production systems that run reliably."
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