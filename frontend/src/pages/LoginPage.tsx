import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';

const LoginPage = () => {
  return (
    <Layout>
      <Hero
        title="Start a Project"
        subtitle="Ready to transform your operations? Let's begin with a conversation about your automation needs."
      />
      
      <Section className="py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-6 text-center">
              Project Inquiry Form
            </h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company/Organization *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
                >
                  <option value="">Select your role</option>
                  <option value="ceo">CEO/Founder</option>
                  <option value="cto">CTO/Technical Leader</option>
                  <option value="operations">Operations Manager</option>
                  <option value="it">IT Manager</option>
                  <option value="consultant">Consultant</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
                >
                  <option value="">What kind of automation are you interested in?</option>
                  <option value="process">Process Automation</option>
                  <option value="data">Data Processing & Analysis</option>
                  <option value="customer">Customer Communication</option>
                  <option value="document">Document Processing</option>
                  <option value="integration">System Integration</option>
                  <option value="custom">Custom AI Solution</option>
                </select>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  placeholder="Tell us about your current processes and what you'd like to automate..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent resize-vertical"
                ></textarea>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)] focus:border-transparent"
                >
                  <option value="">When would you like to start?</option>
                  <option value="asap">ASAP</option>
                  <option value="1month">Within 1 month</option>
                  <option value="3months">Within 3 months</option>
                  <option value="6months">Within 6 months</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors"
              >
                Submit Project Inquiry
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Prefer to talk directly?
              </p>
              <a 
                href="https://calendly.com/charles-chasecontinental/chase-continental-discovery-call" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--brand-primary)] font-semibold hover:text-[var(--brand-primary-dark)] transition-colors"
              >
                Book a discovery call →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default LoginPage;