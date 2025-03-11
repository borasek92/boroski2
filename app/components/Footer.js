'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useAnimation } from 'framer-motion';

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    setIsMounted(true);
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const navigationLinks = [
    { label: 'Strona główna', href: '/' },
    { label: 'Usługi', href: '/services' },
    { label: 'Realizacje', href: '/projects' },
    { label: 'O mnie', href: '/about' },
    { label: 'Kontakt', href: '/contact' }
  ];
  
  const contactInfo = [
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: 'kontakt@example.com',
      href: 'mailto:kontakt@example.com'
    },
    {
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.549 20.915 20.3868C21.0255 20.1949 21.0408 19.9727 21.0713 19.5282C21.119 18.8708 21.119 18.1291 21 17.5C20.9145 17.0950 20.8096 16.8812 20.6175 16.6919C20.4483 16.5252 20.2303 16.4231 19.8232 16.3205L15.8232 15.3205C15.4051 15.2133 15.1646 15.163 14.908 15.227C14.6888 15.2812 14.4819 15.4184 14.3255 15.6347C14.1463 15.8806 14.0611 16.2509 13.8905 16.9916C12.9889 16.5443 12.1987 15.9286 11.5615 15.2L8.8 12.4C8.0714 11.7628 7.45566 10.9726 7.00837 10.071C7.7491 9.90043 8.11942 9.81518 8.36531 9.63598C8.58163 9.47959 8.71877 9.27271 8.77287 9.05353C8.8369 8.79687 8.78657 8.55645 8.67942 8.13825L7.67942 4.13825C7.57681 3.73116 7.47462 3.51326 7.30787 3.34409C7.11858 3.15202 6.90478 3.04713 6.49975 3.00001C5.87089 2.88113 5.12911 2.88113 4.50025 3.00001C4.05584 3.05243 3.83364 3.06764 3.64172 3.17818C3.47956 3.27461 3.33205 3.43012 3.23762 3.6141C3.12895 3.83221 3.11386 4.08736 3.08368 4.59765C3.02825 5.00539 3 5.24358 3 5.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: '+48 123 456 789',
      href: 'tel:+48123456789'
    }
  ];
  
  const socialLinks = [
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
      href: 'https://twitter.com',
      label: 'Twitter'
    }
  ];
  
  return (
    <footer 
      ref={footerRef} 
      className="relative bg-dark-900 border-t border-dark-700 pt-20 overflow-hidden"
    >
      {/* Background elements */}
      {isMounted && (
        <>
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 -left-20 w-60 h-60 bg-primary-800/5 rounded-full filter blur-3xl"></div>
          
          {/* Animated grid dots */}
          <div className="absolute inset-0 opacity-5">
            <div style={{
              backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.8) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }} className="absolute inset-0"></div>
          </div>
          
          {/* Animated light streaks */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 w-px h-full bg-primary-400"
              style={{ 
                left: `${(i + 1) * 25}%`, 
                opacity: 0.1
              }}
              animate={{
                scaleY: [1, 1.2, 1],
                opacity: [0.05, 0.15, 0.05]
              }}
              transition={{
                duration: 5,
                delay: i * 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </>
      )}
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          {/* Column 1: Logo and Description */}
          <motion.div variants={item} className="md:col-span-5">
            <Link href="/" className="flex items-center mb-6 group">
              <div className="mr-2 relative">
                <div className="w-10 h-10 bg-dark-800 border border-primary-500/50 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-primary-400 font-bold text-sm">BB</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-lg font-bold text-primary-400">Bartłomiej</span>
                <span className="text-lg font-bold text-white -mt-1.5">Boroski</span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 max-w-md">
              Kierownik Projektów IT z 13-letnim doświadczeniem w&nbsp;wdrożeniach systemów ERP. 
              Specjalista w&nbsp;integracji, automatyzacji procesów i&nbsp;wykorzystaniu sztucznej inteligencji w biznesie.
            </p>
            
            {/* Newsletter */}
            <div className="relative mt-8">
              <h3 className="text-lg font-semibold text-white mb-4">Subskrybuj newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Twój email"
                  className="bg-dark-800 border border-dark-600 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary-500 w-full text-white"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 5L20 12L13 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Otrzymuj najnowsze artykuły i aktualizacje bezpośrednio na swoją skrzynkę.
              </p>
            </div>
          </motion.div>
          
          {/* Column 2: Navigation */}
          <motion.div variants={item} className="md:col-span-3">
            <h3 className="text-lg font-semibold text-white mb-6">Nawigacja</h3>
            <ul className="space-y-4">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 3: Services */}
          <motion.div variants={item} className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Usługi</h3>
            <ul className="space-y-4">
              {[
                { label: 'Wdrożenia ERP', href: '/services#erp' },
                { label: 'Integracja systemów', href: '/services#integration' },
                { label: 'Automatyzacja', href: '/services#automation' },
                { label: 'AI w biznesie', href: '/services#ai' },
                { label: 'Konsultacje', href: '/services#consulting' }
              ].map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-px bg-primary-400 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Column 4: Contact */}
          <motion.div variants={item} className="md:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-6">Kontakt</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href}
                    className="flex items-center text-gray-300 hover:text-primary-400 transition-colors group"
                  >
                    <span className="mr-3 text-primary-400 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    {item.text}
                  </a>
                </li>
              ))}
              
              <li className="pt-4">
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary-400 transition-colors"
                      aria-label={social.label}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        
        {/* Bottom bar */}
        <motion.div 
          variants={item}
          className="mt-12 py-6 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Bartłomiej Boroski. Wszelkie prawa zastrzeżone.
          </p>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
              Warunki korzystania
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom animated border */}
      {isMounted && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-800/0 via-primary-600/30 to-primary-800/0"
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
      )}
    </footer>
  );
}