import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';
import { Mail, Globe, Clock } from 'lucide-react';

const ContactPage = () => {
  return (
    <Layout>
      <Hero
        title="Book Discovery Call"
        subtitle="30-minute automation audit and consultation. Let's explore how AI can transform your operations."
      />

      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-6">
                What You'll Get
              </h2>
              <div className="space-y-4">
                {[
                  "Process mapping and automation opportunities",
                  "AI implementation roadmap",
                  "Cost-benefit analysis",
                  "Timeline and resource requirements",
                  "Next steps and recommendations"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-[var(--brand-primary)] rounded-full mr-3"></span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-4">Contact Details</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Mail size={20} className="mr-3 text-brand-primary" />
                    <span>charles@chasecontinental.com</span>
                  </div>
                  <div className="flex items-center">
                    <Globe size={20} className="mr-3 text-brand-primary" />
                    <span>Available globally via video call</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={20} className="mr-3 text-brand-primary" />
                    <span>Flexible scheduling across time zones</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a 30-minute discovery call to explore automation opportunities for your organization.
              </p>

              <a
                href="https://calendly.com/charles-chasecontinental/chase-continental-discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center px-8 py-4 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors mb-4"
              >
                Book Discovery Call
              </a>

              <p className="text-sm text-gray-500 text-center">
                No commitment required. Just a conversation about possibilities.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              {
                q: "What happens during the discovery call?",
                a: "We'll discuss your current processes, identify automation opportunities, and outline potential solutions. No technical jargon - just practical insights."
              },
              {
                q: "Is there any cost for the consultation?",
                a: "The discovery call is completely free. We only proceed with paid work if we identify clear value opportunities."
              },
              {
                q: "How long does implementation take?",
                a: "Timeline varies by complexity. Simple automations can be deployed in weeks, while comprehensive systems may take 2-3 months."
              },
              {
                q: "Do you work with small businesses?",
                a: "Yes. We work with organizations of all sizes, from startups to enterprises. Solutions are tailored to your scale and budget."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold text-[var(--brand-dark)] mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ContactPage;