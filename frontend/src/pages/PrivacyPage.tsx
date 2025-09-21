import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';

const PrivacyPage = () => {
  return (
    <Layout>
      <Hero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information."
      />
      
      <Section className="py-20">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-sm text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you contact us, request a consultation, 
                or use our services. This may include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Contact information (name, email, phone number)</li>
                <li>Company and role information</li>
                <li>Project requirements and business processes</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide and improve our services</li>
                <li>Respond to your requests and communications</li>
                <li>Send you relevant updates and information</li>
                <li>Analyze and improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your 
                information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>With your explicit consent</li>
                <li>To comply with legal requirements</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in our operations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized 
                access, alteration, disclosure, or destruction. This includes encryption, access controls, and 
                regular security assessments.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:privacy@chasecontinental.com" className="text-[var(--brand-primary)] hover:underline">
                  privacy@chasecontinental.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default PrivacyPage;