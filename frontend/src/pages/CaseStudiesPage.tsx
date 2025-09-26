import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';
import { Building, Leaf, Building2, Settings, Smartphone, Hospital } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "CCID Digital Transformation",
      description: "Complete digital transformation from paper-based processes to cloud automation with hybrid teams of 2 people + 7 AI agents running full operations that inform smart city decisions.",
      icon: <Building size={32} />,
      metrics: ["Paper → Cloud → Automated", "2 people + 7 agents", "Smart city insights"],
      industry: "Government & Urban Planning"
    },
    {
      title: "Heineken Sustainability Tracking",
      description: "Real-time environmental impact monitoring across global manufacturing operations.",
      icon: <Leaf size={32} />,
      metrics: ["Real-time dashboards", "Automated compliance", "Value chain optimized"],
      industry: "Manufacturing & Consumer Goods"
    },
    {
      title: "MRI Property Tech Integration",
      description: "Streamlined property management workflows with intelligent automation systems.",
      icon: <Building2 size={32} />,
      metrics: ["Reduced manual work", "Faster processing", "Better accuracy"],
      industry: "Property Technology"
    },
    {
      title: "DevOps Pipeline Automation",
      description: "Intelligent CI/CD pipelines with automated testing and deployment systems.",
      icon: <Settings size={32} />,
      metrics: ["Zero-downtime deploys", "Automated testing", "Faster releases"],
      industry: "Software & Technology"
    },
    {
      title: "Retail Notification System",
      description: "Smart customer engagement platform with personalized messaging and timing.",
      icon: <Smartphone size={32} />,
      metrics: ["Higher engagement", "Personalized experience", "Automated campaigns"],
      industry: "Retail & E-commerce"
    },
    {
      title: "Healthcare Document Processing",
      description: "Automated medical document classification and processing system.",
      icon: <Hospital size={32} />,
      metrics: ["95% accuracy", "Instant processing", "Compliance assured"],
      industry: "Healthcare"
    }
  ];

  return (
    <Layout>
      <Hero
        title="Proven Results in Production"
        subtitle="Real case studies from organizations that have transformed their operations with AI automation."
      />

      <Section className="py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-[var(--brand-primary)] transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl mb-4">{study.icon}</div>
              <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-3">{study.title}</h3>
              <p className="text-gray-600 mb-4">{study.description}</p>

              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-[var(--brand-primary)]">Industry</span>
                  <p className="text-sm text-gray-600">{study.industry}</p>
                </div>

                <div>
                  <span className="text-sm font-semibold text-[var(--brand-primary)]">Key Results</span>
                  <ul className="text-sm text-gray-600 mt-1">
                    {study.metrics.map((metric, i) => (
                      <li key={i} className="flex items-center mt-1">
                        <span className="w-1.5 h-1.5 bg-[var(--brand-primary)] rounded-full mr-2"></span>
                        {metric}
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join organizations that have transformed their operations with practical AI automation.
          </p>
          <a
            href="https://calendly.com/charles-chasecontinental/chase-continental-discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors"
          >
            Start Your Transformation
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default CaseStudiesPage;