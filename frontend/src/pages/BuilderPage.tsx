import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';
import { Rocket, Bot, Eye, Cloud, Zap } from 'lucide-react';

const BuilderPage = () => {
  const features = [
    {
      title: "No Code Required",
      description: "Build complex applications without writing a single line of code.",
      icon: <Rocket size={32} />
    },
    {
      title: "Build Bots, Apps, and Agents",
      description: "Create any type of automation tool you need for your business.",
      icon: <Bot size={32} />
    },
    {
      title: "Live Preview",
      description: "See your changes in real-time as you build your solution.",
      icon: <Eye size={32} />
    },
    {
      title: "Auto-hosting Available",
      description: "Deploy instantly with our managed hosting solution.",
      icon: <Cloud size={32} />
    },
    {
      title: "Powered by LazyAI",
      description: "Leverage cutting-edge AI technology for smarter automation.",
      icon: <Zap size={32} />
    }
  ];

  return (
    <Layout>
      <Hero
        title="Try Our Embedded No-Code Builder"
        subtitle="Built on LazyAI's powerful infrastructure. Hosted by Chase Continental."
      />
      
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Feature List */}
            <div>
              <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-8">Feature Highlights</h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-brand-primary mr-4 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--brand-dark)] mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Builder Interface Placeholder */}
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">Builder Interface</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
                  <div className="flex space-x-2">
                    <div className="h-8 w-20 bg-[var(--brand-primary)] opacity-20 rounded"></div>
                    <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-gray-600 mb-4">Builder interface coming soon</p>
                <button className="px-6 py-3 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors">
                  Request Early Access
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-8">
            Ready to Start Building?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join the waitlist for our no-code AI builder and be among the first to create powerful automation tools.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
            />
            <button className="px-6 py-3 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default BuilderPage;