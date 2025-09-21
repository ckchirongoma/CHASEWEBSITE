import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Section from '@/components/layout/Section';

const BlogPage = () => {
  const posts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "How organizations are moving beyond prototypes to production-ready AI systems that deliver real value.",
      date: "2024-03-15",
      category: "AI Strategy",
      readTime: "5 min read"
    },
    {
      title: "Building Production-Grade AI Agents",
      excerpt: "Key considerations for deploying AI systems that work reliably in real business environments.",
      date: "2024-03-10",
      category: "Implementation",
      readTime: "7 min read"
    },
    {
      title: "Measuring ROI from AI Automation",
      excerpt: "How to calculate and track the real business impact of your AI automation initiatives.",
      date: "2024-03-05",
      category: "Business Value",
      readTime: "6 min read"
    },
    {
      title: "Common AI Implementation Mistakes",
      excerpt: "Lessons learned from dozens of AI projects and how to avoid the most costly pitfalls.",
      date: "2024-02-28",
      category: "Best Practices",
      readTime: "8 min read"
    }
  ];

  return (
    <Layout>
      <Hero
        title="AI Automation Insights"
        subtitle="Practical guidance on implementing AI automation that delivers real business value."
      />

      <Section className="py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="bg-[var(--brand-primary)] text-white px-3 py-1 rounded-full mr-4">
                    {post.category}
                  </span>
                  <time>{post.date}</time>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-lg mb-6">
                  {post.excerpt}
                </p>

                <button className="text-[var(--brand-primary)] font-semibold hover:text-[var(--brand-primary-dark)] transition-colors">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-6">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Get practical insights on AI automation delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-primary)]"
            />
            <button className="px-6 py-3 bg-[var(--brand-primary)] text-white font-semibold rounded-lg hover:bg-[var(--brand-primary-dark)] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPage;