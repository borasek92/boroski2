'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zamykanie menu mobilnego po zmianie ścieżki
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const menuItems = [
    { name: 'Strona główna', href: '/' },
    { name: 'Usługi', href: '/services' },
    { name: 'Realizacje', href: '/projects' },
    { name: 'O mnie', href: '/about' },
    { name: 'Kontakt', href: '/contact', isButton: true }
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen 
            ? 'bg-dark-900/80 backdrop-blur-xl py-3 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="group flex items-center relative z-10">
              <div className="mr-2 relative">
                <motion.div
                  className="absolute inset-0 bg-primary-500 rounded-full opacity-70"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                  style={{ filter: 'blur(8px)' }}
                />
                <div className="w-10 h-10 bg-dark-800 border border-primary-500/50 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-primary-400 font-bold text-sm">BB</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-400">Bartłomiej</span>
                <span className="text-lg font-bold text-white -mt-1.5">Boroski</span>
              </div>
              
              {/* Underline animation on hover */}
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
            
            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-1">
              {menuItems.map((item, index) => 
                item.isButton ? (
                  <Link 
                    key={index}
                    href={item.href}
                    className="group relative ml-2 py-2 px-4 overflow-hidden rounded-lg"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <span className="relative z-10 text-white font-medium">
                      {item.name}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400"
                      initial={{ x: '-100%' }}
                      animate={{ 
                        x: hoveredItem === index ? 0 : '-100%'
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                ) : (
                  <div
                    key={index}
                    className="relative py-2 px-3"
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative z-10 transition-colors ${
                        pathname === item.href 
                          ? 'text-primary-400' 
                          : 'text-white hover:text-primary-300'
                      }`}
                    >
                      {item.name}
                    </Link>
                    
                    {pathname === item.href && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    
                    {hoveredItem === index && pathname !== item.href && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-400/50"
                        layoutId="hoverNavIndicator"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                )
              )}
            </nav>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden relative z-20 w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  animate={{
                    top: isMobileMenuOpen ? '50%' : '30%',
                    rotate: isMobileMenuOpen ? 45 : 0,
                    translateY: isMobileMenuOpen ? '-50%' : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute top-1/2 -translate-y-1/2 h-0.5 w-6 bg-white rounded-full"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    width: isMobileMenuOpen ? 0 : 24,
                  }}
                  transition={{ duration: 0.2 }}
                />
                <motion.span
                  className="absolute h-0.5 w-6 bg-white rounded-full"
                  animate={{
                    top: isMobileMenuOpen ? '50%' : '70%',
                    rotate: isMobileMenuOpen ? -45 : 0,
                    translateY: isMobileMenuOpen ? '-50%' : 0,
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.header>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && isMounted && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-dark-900/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Menu content */}
            <motion.nav
              className="relative h-screen py-24 px-8 flex flex-col items-center justify-center space-y-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="w-full"
                >
                  <Link
                    href={item.href}
                    className={`block text-center py-3 px-4 text-2xl font-medium ${
                      item.isButton
                        ? 'bg-gradient-to-r from-primary-600 to-primary-400 text-white rounded-lg shadow-glow'
                        : pathname === item.href
                          ? 'text-primary-400 border-b border-primary-500/30'
                          : 'text-white hover:text-primary-300'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              
              {/* Social icons */}
              <motion.div
                className="flex space-x-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: menuItems.length * 0.1 + 0.2 }}
              >
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    ),
                    href: 'https://linkedin.com'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    ),
                    href: 'https://github.com'
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    ),
                    href: 'https://twitter.com'
                  }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-primary-400 transition-colors"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Interaktywny element dekoracyjny */}
      {isMounted && (
        <div className="fixed top-0 left-0 right-0 h-0.5 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-600 via-primary-400 to-primary-600"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: isScrolled ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
    </>
  );
}