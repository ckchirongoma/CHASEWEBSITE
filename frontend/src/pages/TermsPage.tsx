import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';

const TermsPage = () => {
  return (
    <Layout>
      <Hero
        title="Terms of Service"
        subtitle="Terms and conditions for using our services."
      />
      
      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using Chase Continental's services, you accept and agree to be bound by the 
                terms and provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Services Description</h2>
              <p className="text-gray-700 mb-4">
                Chase Continental provides AI automation consulting, implementation, and support services. Our 
                services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Process automation consulting and implementation</li>
                <li>AI system development and deployment</li>
                <li>Integration with existing business systems</li>
                <li>Ongoing support and maintenance</li>
                <li>Training and knowledge transfer</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Client Responsibilities</h2>
              <p className="text-gray-700 mb-4">Clients are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Providing accurate and complete information</li>
                <li>Timely feedback and approvals</li>
                <li>Access to necessary systems and resources</li>
                <li>Compliance with applicable laws and regulations</li>
                <li>Payment of agreed fees according to terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Chase Continental retains ownership of its proprietary methodologies, frameworks, and general 
                solutions. Client-specific implementations and customizations become the property of the client 
                upon full payment.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality of all client information and business processes. Detailed 
                confidentiality terms are outlined in individual service agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Chase Continental's liability is limited to the fees paid for the specific service in question. 
                We are not liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Performance Guarantees</h2>
              <p className="text-gray-700 mb-4">
                We stand behind our work with performance guarantees as outlined in individual service agreements. 
                If deliverables don't meet agreed specifications, we will work to remedy at no additional cost.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with written notice. Terms for termination, deliverables, 
                and payment are specified in individual service agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Contact Information</h2>
              <p className="text-gray-700">
                For questions about these terms, please contact us at{' '}
                <a href="mailto:legal@chasecontinental.com" className="text-[var(--brand-primary)] hover:underline">
                  legal@chasecontinental.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default TermsPage;