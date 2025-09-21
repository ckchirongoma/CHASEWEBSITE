import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';

const FAQPage = () => {
  const faqs = [
    {
      question: "What types of businesses do you work with?",
      answer: "We work with organizations of all sizes, from startups to enterprises, across various industries including manufacturing, technology, healthcare, retail, and professional services. Our solutions are tailored to your scale and specific needs."
    },
    {
      question: "How long does it typically take to implement an AI automation solution?",
      answer: "Timeline varies based on complexity. Simple process automations can be deployed in 2-4 weeks, while comprehensive AI systems may take 2-3 months. We provide detailed timelines during the discovery phase."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide comprehensive support including monitoring, maintenance, updates, and optimization. Our production-grade systems include observability and support infrastructure from day one."
    },
    {
      question: "What's the difference between your approach and other AI consulting firms?",
      answer: "We focus on production-ready systems that deliver measurable ROI, not prototypes or proof-of-concepts. Every solution we build is designed to run reliably in real business environments with proper monitoring and support."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures, including data encryption, access controls, and compliance with industry standards. All systems are built with security and privacy by design."
    },
    {
      question: "What's included in the discovery call?",
      answer: "A 30-minute consultation where we discuss your current processes, identify automation opportunities, provide a preliminary roadmap, and outline potential ROI. There's no cost or commitment required."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Yes, we specialize in building solutions that work with your existing tech stack. Our integrations are designed to enhance your current systems rather than replace them."
    },
    {
      question: "How do you measure the success of AI automation projects?",
      answer: "We establish clear KPIs upfront, including cost savings, time reduction, accuracy improvements, and other relevant metrics. All our solutions include built-in analytics to track performance and ROI."
    },
    {
      question: "Do you provide training for our team?",
      answer: "Yes, we include comprehensive training as part of every implementation. We ensure your team can effectively use, monitor, and maintain the automated systems."
    },
    {
      question: "What if the solution doesn't work as expected?",
      answer: "We stand behind our work with performance guarantees and ongoing optimization. If a solution doesn't meet agreed-upon KPIs, we work with you to refine and improve it until it does."
    }
  ];

  return (
    <Layout>
      <Hero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our AI automation services and approach."
      />

      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--brand-dark)] mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-8">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're happy to discuss your specific situation and answer any questions about AI automation for your business.
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

export default FAQPage;