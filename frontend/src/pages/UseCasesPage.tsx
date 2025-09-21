import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';
import Stats from '@/components/ui/Stats';
import { BarChart, Leaf, Settings, MessageCircle, FileText, CheckCircle } from 'lucide-react';

const UseCasesPage = () => {
  const stats = [
    { number: "8", label: "Industries Served" },
    { number: "24/7", label: "System Monitoring" },
    { number: "40+", label: "Use Cases Delivered" },
  ];

  const useCases = [
    {
      title: "Research & Data Processing",
      description: "Automated research workflows for urban management organizations, processing complex datasets and generating actionable insights.",
      icon: <BarChart size={32} />,
      industries: ["Government", "Research", "Urban Planning"],
      outcomes: ["80% faster research", "Improved data quality", "24/7 processing"]
    },
    {
      title: "Sustainability Tracking",
      description: "Real-time monitoring and reporting systems for environmental impact across global operations.",
      icon: <Leaf size={32} />,
      industries: ["Manufacturing", "Consumer Goods", "Energy"],
      outcomes: ["Real-time visibility", "Automated compliance", "Cost reduction"]
    },
    {
      title: "DevOps & Infrastructure",
      description: "Intelligent automation for deployment pipelines, monitoring, and infrastructure management.",
      icon: <Settings size={32} />,
      industries: ["Technology", "Software", "Financial Services"],
      outcomes: ["Zero-downtime deploys", "Proactive monitoring", "Resource optimization"]
    },
    {
      title: "Customer Communication",
      description: "Smart notification systems that engage customers at the right moment with personalized messaging.",
      icon: <MessageCircle size={32} />,
      industries: ["Retail", "E-commerce", "Healthcare"],
      outcomes: ["Higher engagement", "Personalized experience", "Automated support"]
    },
    {
      title: "Document Processing",
      description: "Automated extraction, classification, and processing of business documents and forms.",
      icon: <FileText size={32} />,
      industries: ["Legal", "Finance", "Healthcare"],
      outcomes: ["95% accuracy", "Instant processing", "Reduced manual work"]
    },
    {
      title: "Quality Assurance",
      description: "Intelligent testing and quality control systems that ensure consistent product standards.",
      icon: <CheckCircle size={32} />,
      industries: ["Manufacturing", "Software", "Pharmaceuticals"],
      outcomes: ["Consistent quality", "Early detection", "Automated testing"]
    }
  ];

  return (
    <Layout>
      <Hero
        title="Real Business Transformations"
        subtitle="See how we've helped organizations automate critical workflows and achieve measurable outcomes."
      />

      <Stats stats={stats} />

      <Section className="py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-4">
            Proven Use Cases Across Industries
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border-2 hover:border-[var(--brand-primary)] transition-all duration-300 h-full"
            >
              <div className="mb-4">
                <div className="w-12 h-12 text-brand-primary flex items-center justify-center mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{useCase.description}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-semibold text-[var(--brand-primary)] mb-2">Industries</h4>
                  <div className="flex flex-wrap gap-1">
                    {useCase.industries.map((industry, i) => (
                      <span key={i} className="px-2 py-1 bg-gray-100 text-xs rounded-full text-gray-700">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[var(--brand-primary)] mb-2">Key Outcomes</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {useCase.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full mr-2"></span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-8">
            Ready to Explore Your Use Case?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Every organization has unique challenges. Let's discuss how AI automation can solve your specific problems.
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

export default UseCasesPage;