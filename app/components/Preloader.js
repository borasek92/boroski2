'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Symulacja ładowania zasobów
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 sekundy ładowania
    
    return () => clearTimeout(timer);
  }, []);

  // Animacja znikania preloadera
  const fadeOut = {
    hidden: { opacity: 1 },
    visible: { 
      opacity: 0,
      transition: { 
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  if (!loading) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-900"
      initial="hidden"
      animate={loading ? "hidden" : "visible"}
      variants={fadeOut}
      onAnimationComplete={() => {
        if (!loading) {
          document.body.style.overflow = 'auto';
        } else {
          document.body.style.overflow = 'hidden';
        }
      }}
    >
      <div className="flex flex-col items-center">
        {/* Logo lub ikona */}
        <div className="relative w-24 h-24 mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full opacity-20 animate-pulse-slow"></div>
          {/* Twoje logo lub ikona */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">BB</span>
            {/* Alternatywnie możesz użyć swojego SVG logo */}
          </div>
        </div>
        
        {/* Pasek ładowania */}
        <div className="w-48 h-1 bg-dark-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 to-primary-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>
        
        {/* Tekst ładowania */}
        <p className="text-gray-400 mt-4">Ładowanie...</p>
      </div>
    </motion.div>
  );
}
