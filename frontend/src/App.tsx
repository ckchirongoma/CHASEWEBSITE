import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import UseCasesPage from '@/pages/UseCasesPage'
import CaseStudiesPage from '@/pages/CaseStudiesPage'
import BlogPage from '@/pages/BlogPage'
import ContactPage from '@/pages/ContactPage'
import TeamPage from '@/pages/TeamPage'
import BuilderPage from '@/pages/BuilderPage'
import LoginPage from '@/pages/LoginPage'
import FAQPage from '@/pages/FAQPage'
import PrivacyPage from '@/pages/PrivacyPage'
import TermsPage from '@/pages/TermsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/use-cases" element={<UseCasesPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/builder" element={<BuilderPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1><p className="text-gray-600">Page not found</p></div></div>} />
      </Routes>
    </Router>
  )
}

export default App
