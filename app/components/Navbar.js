'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Zmiana wyglądu nawigacji przy przewijaniu
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Aktualizacja aktywnej sekcji na podstawie pozycji przewijania
      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 80; // Dodajemy offset dla wysokości nawigacji
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetBottom = offsetTop + element.offsetHeight;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Funkcja do przewijania do sekcji
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Uwzględnienie wysokości navbara
        behavior: 'smooth'
      });
      setIsMenuOpen(false); // Zamknij menu mobilne po kliknięciu
    }
  };

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
              <button
                onClick={() => scrollToSection('hero')}
                className={`text-white transition-colors ${
                  activeSection === 'hero' ? 'text-primary-400' : 'hover:text-primary-400'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-white transition-colors ${
                  activeSection === 'about' ? 'text-primary-400' : 'hover:text-primary-400'
                }`}
              >
                O mnie
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className={`text-white transition-colors ${
                  activeSection === 'services' ? 'text-primary-400' : 'hover:text-primary-400'
                }`}
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className={`text-white transition-colors ${
                  activeSection === 'projects' ? 'text-primary-400' : 'hover:text-primary-400'
                }`}
              >
                Realizacje
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`btn-primary`}
              >
                Kontakt
              </button>
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
            <button 
              className={`block w-full text-left px-3 py-2 ${
                activeSection === 'hero' ? 'text-primary-400 bg-dark-600' : 'text-white hover:bg-dark-600'
              } rounded-md`}
              onClick={() => scrollToSection('hero')}
            >
              Home
            </button>
            <button 
              className={`block w-full text-left px-3 py-2 ${
                activeSection === 'about' ? 'text-primary-400 bg-dark-600' : 'text-white hover:bg-dark-600'
              } rounded-md`}
              onClick={() => scrollToSection('about')}
            >
              O mnie
            </button>
            <button 
              className={`block w-full text-left px-3 py-2 ${
                activeSection === 'services' ? 'text-primary-400 bg-dark-600' : 'text-white hover:bg-dark-600'
              } rounded-md`}
              onClick={() => scrollToSection('services')}
            >
              Usługi
            </button>
            <button 
              className={`block w-full text-left px-3 py-2 ${
                activeSection === 'projects' ? 'text-primary-400 bg-dark-600' : 'text-white hover:bg-dark-600'
              } rounded-md`}
              onClick={() => scrollToSection('projects')}
            >
              Realizacje
            </button>
            <button 
              className={`block w-full text-left px-3 py-2 ${
                activeSection === 'contact' ? 'text-primary-400 bg-dark-600' : 'text-white hover:bg-dark-600'
              } rounded-md`}
              onClick={() => scrollToSection('contact')}
            >
              Kontakt
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
