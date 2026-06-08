/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowRight, Shield } from 'lucide-react';
import { PageId } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentTab: PageId;
  setCurrentTab: (tab: PageId) => void;
}

export default function Navbar({ currentTab, setCurrentTab }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToTab = (tab: PageId) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const menuItems: { id: PageId; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Assessment' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' }
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? 'bg-[#0A0A0F]/80 backdrop-blur-md border-b border-[#1E1E2E]' 
          : 'bg-[#0A0A0F] border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand: Left */}
          <div 
            onClick={() => navigateToTab('home')}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#4F6EF7] flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
              <Terminal className="w-4 h-4" />
            </div>
            <span className="font-sans font-semibold text-lg tracking-tight text-[#F8F8FF] group-hover:text-white font-bold">
              Atlas<span className="text-[#4F6EF7]">.</span>
            </span>
          </div>

          {/* Navigation Items: Center */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map(item => (
              <button
                id={`nav-${item.id}`}
                key={item.id}
                onClick={() => navigateToTab(item.id)}
                className={`text-xs font-mono font-medium tracking-wide uppercase transition-colors relative py-1.5 ${
                  currentTab === item.id 
                    ? 'text-[#F8F8FF]' 
                    : 'text-[#8888A0] hover:text-[#F8F8FF]'
                }`}
              >
                {item.label}
                {currentTab === item.id && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4F6EF7] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              id="nav-faq"
              onClick={() => navigateToTab('faq')}
              className={`text-xs font-mono font-medium tracking-wide uppercase transition-colors py-1.5 ${
                currentTab === 'faq' ? 'text-[#F8F8FF]' : 'text-[#8888A0] hover:text-[#F8F8FF]'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* Primary Action Button: Right */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="btn-nav-cta"
              onClick={() => {
                const s = document.getElementById('scheduler-section');
                if (s) {
                  s.scrollIntoView({ behavior: 'smooth' });
                } else {
                  navigateToTab('contact');
                }
              }}
              className="bg-[#4F6EF7] hover:bg-[#4d69eb] text-white text-xs font-medium px-5 py-2.5 rounded-lg transition-all flex items-center space-x-1.5 cursor-pointer shadow-lg shadow-indigo-600/10"
            >
              <span>Book Discovery Assessment</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Hamburger Mobile Menu: Right */}
          <div className="flex md:hidden">
            <button
              id="btn-mobile-menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#8888A0] hover:text-white transition-colors"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0F] border-t border-[#1E1E2E] px-4 py-4 space-y-3"
          >
            {menuItems.map(item => (
              <button
                id={`mobile-nav-${item.id}`}
                key={item.id}
                onClick={() => navigateToTab(item.id)}
                className={`block w-full text-left py-2 px-3 text-xs font-mono rounded transition-colors uppercase ${
                  currentTab === item.id 
                    ? 'bg-[#1E1E2E] text-[#F8F8FF]' 
                    : 'text-[#8888A0] hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              id="mobile-nav-faq"
              onClick={() => navigateToTab('faq')}
              className={`block w-full text-left py-2 px-3 text-xs font-mono rounded transition-colors uppercase ${
                currentTab === 'faq' ? 'bg-[#1E1E2E] text-[#F8F8FF]' : 'text-[#8888A0] hover:text-white'
              }`}
            >
              FAQ
            </button>

            <div className="pt-3 border-t border-[#1E1E2E]">
              <button
                id="btn-mobile-nav-cta"
                onClick={() => {
                  const s = document.getElementById('scheduler-section');
                  if (s) {
                    s.scrollIntoView({ behavior: 'smooth' });
                    setIsMobileMenuOpen(false);
                  } else {
                    navigateToTab('contact');
                  }
                }}
                className="w-full bg-[#4F6EF7] hover:bg-[#4d69eb] text-center text-white text-xs font-semibold py-3 rounded-lg flex items-center justify-center space-x-2"
              >
                <span>Book Discovery Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
