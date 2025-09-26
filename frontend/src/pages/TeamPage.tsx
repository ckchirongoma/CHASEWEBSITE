import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';
import TeamMember from '@/components/ui/TeamMember';
import { Target, Handshake, Settings, BarChart } from 'lucide-react';

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Charles K. Chirongoma",
      role: "CEO, Implementation & Consulting",
      bio: "Economist and management consultant turned CEO. Leads digital transformation initiatives and specializes in identifying optimal AI applications, observability, process mapping, and business intelligence optimization that drives measurable outcomes.",
      image: "/static/images/team/charles.jpg",
      longBio: "Charles is an economist and management consultant who leads digital transformation, consulting and implementation at Chase Continental. He excels at applying AI in the right spaces and finding where AI actually works for businesses. His experience spans manufacturing industries (automotive, textiles, fashion, chemicals), property technology as a global implementation consultant for a US-based tech firm serving global clients, sustainability projects focused on data intelligence and ecosystem building that created jobs and optimized waste pipelines, and urban management supporting smart city initiatives and data-driven decision making. He specializes in digital transformation strategy, ETL pipelines, observability, process mapping, business intelligence optimization, and understanding how technology drives business transformation.",
      expertise: ["Digital Transformation Strategy", "AI Application Strategy", "Business Intelligence Optimization"]
    },
    {
      name: "Caleb Sakala",
      role: "CTO, Product & Engineering",
      bio: "Full-stack engineer and early AI mover who heads up product and engineering. Led multiple engineering teams, shipped multiple SaaS products, and built platforms competing against Lovable.",
      image: "/static/images/team/caleb.jpg",
      longBio: "Caleb heads up product and engineering at Chase Continental, providing the technical expertise to execute Charles's strategic AI applications. He's consistently been an early mover in the AI space, having built agent builder platforms (including Escalator), app/software platform builders competing against platforms like Lovable, and numerous AI solutions across multiple AI startups. He's led multiple engineering teams and shipped multiple SaaS products at various startups. He specializes in AI agent architectures, system integrations, and turning AI strategy into production-grade systems that actually work in real business environments.",
      expertise: ["AI/ML Engineering", "Agent Builder Platforms", "Production System Architecture"]
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