import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';
import TeamMember from '@/components/ui/TeamMember';
import FeatureCard from '@/components/ui/FeatureCard';
import { Target, Handshake, Settings, BarChart } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Charles K. Chirongoma",
      role: "CEO, Implementation",
      bio: "Management consultant turned implementation lead. Specializes in mapping operations, designing practical AI+automation solutions and leading their delivery into production.",
      image: "/static/images/team/charles.jpg",
      longBio: "Charles is an economist and management consultant with experience across manufacturing, sustainability (Heineken), property tech (MRI) and public urban management (CCID). He leads implementation and client success — turning research and data into operational systems that scale.",
      expertise: ["Operations Mapping", "AI Strategy", "Implementation Leadership"]
    },
    {
      name: "Caleb Sakala",
      role: "CTO, Product & Engineering",
      bio: "Full-stack engineer with 5+ years building production AI systems and integrations.",
      image: "/static/images/team/caleb.jpg",
      longBio: "Caleb specializes in AI agent architectures and system integrations that actually work in production. He's built automation systems for startups and enterprise clients, focusing on reliability, API integrations, and fast prototyping. Before Chase Continental, he led engineering teams and shipped multiple SaaS products.",
      expertise: ["AI/ML Engineering", "System Architecture", "Production Deployment"]
    }
  ];

  const values = [
    {
      title: "Real-world impact > hype",
      description: "We focus on measurable outcomes, not buzzwords. Every system we build delivers concrete value.",
      icon: <Target size={32} />
    },
    {
      title: "AI = Augmented intelligence",
      description: "Human + agent collaboration, not replacement. We design systems that amplify human capability.",
      icon: <Handshake size={32} />
    },
    {
      title: "Production-grade systems",
      description: "APIs, observability, support. We build systems that work reliably in real business environments.",
      icon: <Settings size={32} />
    },
    {
      title: "Rapid, measurable outcomes",
      description: "Reduced costs, faster decisions, freed capacity. Results you can see and measure.",
      icon: <BarChart size={32} />
    }
  ];

  return (
    <Layout>
      <Hero
        title="Meet the Leadership Team"
        subtitle="Experienced professionals who turn AI research into production systems that transform business operations."
      />

      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
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
        </div>
      </Section>

      <Section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-8">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help transform your operations with practical AI automation.
          </p>
          <a
            href="https://calendly.com/charles-chasecontinental/chase-continental-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors"
          >
            Book Discovery Call
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default TeamPage;