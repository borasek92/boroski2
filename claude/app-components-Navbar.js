'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-dark-800/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-primary-400">Bartłomiej</span>
              <span className="text-xl font-bold text-white ml-1">Boroski</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-white hover:text-primary-400 transition-colors">
                Strona główna
              </Link>
              <Link href="/services" className="text-white hover:text-primary-400 transition-colors">
                Usługi
              </Link>
              <Link href="/projects" className="text-white hover:text-primary-400 transition-colors">
                Realizacje
              </Link>
              <Link href="/about" className="text-white hover:text-primary-400 transition-colors">
                O mnie
              </Link>
              <Link href="/contact" className="btn-primary">
                Kontakt
              </Link>
            </div>
          </div>
          
          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-primary-400 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark-700/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 text-white hover:bg-dark-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Strona główna
            </Link>
            <Link 
              href="/services" 
              className="block px-3 py-2 text-white hover:bg-dark-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Usługi
            </Link>
            <Link 
              href="/projects" 
              className="block px-3 py-2 text-white hover:bg-dark-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Realizacje
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 text-white hover:bg-dark-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              O mnie
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 text-primary-400 hover:bg-dark-600 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}