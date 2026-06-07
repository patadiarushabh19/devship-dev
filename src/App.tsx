/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import PricingPage from './pages/PricingPage';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';
import { PrivacyPolicy, TermsOfService } from './pages/LegalPages';
import { PageId } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<PageId>('home');

  // URL Hash Sync for complete site indexing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validTabs: PageId[] = ['home', 'services', 'pricing', 'about', 'blog', 'contact', 'faq', 'privacy', 'terms'];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Initial check
    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tab: PageId) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'home' ? '' : `#${tab}`;
  };

  return (
    <div id="devship-root" className="bg-[#0A0A0F] text-[#F8F8FF] font-sans min-h-screen selection:bg-[#4F6EF7]/20 selection:text-white antialiased flex flex-col justify-between">
      <div>
        {/* Navigation panel */}
        <Navbar currentTab={currentTab} setCurrentTab={handleTabChange} />

        {/* Dynamic transition layout based on active tab state */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 outline-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              {currentTab === 'home' && <Home setCurrentTab={handleTabChange} />}
              {currentTab === 'services' && <Services setCurrentTab={handleTabChange} />}
              {currentTab === 'pricing' && <PricingPage setCurrentTab={handleTabChange} />}
              {currentTab === 'about' && <About setCurrentTab={handleTabChange} />}
              {currentTab === 'blog' && <Blog setCurrentTab={handleTabChange} />}
              {currentTab === 'contact' && <Contact />}
              {currentTab === 'faq' && <FAQPage setCurrentTab={handleTabChange} />}
              {currentTab === 'privacy' && <PrivacyPolicy />}
              {currentTab === 'terms' && <TermsOfService />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Global standard structured footer */}
      <Footer setCurrentTab={handleTabChange} />
    </div>
  );
}
