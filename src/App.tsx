import React, { useState, useEffect } from 'react';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { Portfolio } from './components/Portfolio';
import { CostCalculator } from './components/CostCalculator';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { QuoteModal } from './components/QuoteModal';
import { Footer } from './components/Footer';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenQuoteModal = (initialService?: string) => {
    if (initialService) {
      setSelectedServiceForQuote(initialService);
    } else {
      setSelectedServiceForQuote('');
    }
    setIsQuoteModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Dynamic SEO Meta Tags via React Helmet */}
      <SEO />

      {/* Header Navigation */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />


      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 2. Services Section */}
        <Services onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 3. Why Choose Us Section */}
        <WhyChooseUs />

        {/* 4. Process Timeline */}
        <ProcessTimeline />

        {/* 5. Client Portfolio / Case Studies */}
        <Portfolio />

        {/* 6. Cost Calculator / Estimator */}
        <CostCalculator onOpenQuoteModal={handleOpenQuoteModal} />

        {/* 7. Client Testimonials */}
        <Testimonials />

        {/* 8. Frequently Asked Questions */}
        <FAQ />

        {/* 9. Contact / Consultation Form Section */}
        <ContactSection initialService={selectedServiceForQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Quick Contact Float */}
        <button
          onClick={() => handleOpenQuoteModal()}
          className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white p-3.5 sm:px-4 sm:py-3 rounded-full sm:rounded-2xl shadow-xl shadow-blue-600/30 flex items-center gap-2 hover:scale-105 transition-all cursor-pointer group"
          aria-label="Start Your Project"
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="hidden sm:inline font-bold text-xs">Start Project</span>
        </button>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-slate-900/90 hover:bg-slate-900 text-white p-3 rounded-full shadow-lg border border-slate-700/50 hover:scale-110 transition-all cursor-pointer"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Interactive Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={selectedServiceForQuote}
      />
    </div>
  );
}
