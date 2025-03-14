'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ukryj stronę podczas ładowania
    document.body.classList.add('loading');
    
    // Symulacja progresu ładowania
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 15) + 10; // Większy skok
        
        if (newProgress >= 100) {
          clearInterval(interval);
          // Poczekaj chwilę przed zakończeniem ładowania
          setTimeout(() => {
            setLoading(false);
            // Odkryj stronę po zakończeniu ładowania
            document.body.classList.remove('loading');
          }, 250); // Krótsze opóźnienie
          return 100;
        }
        return newProgress;
      });
    }, 150); // Szybszy interwał

    return () => {
      clearInterval(interval);
      document.body.classList.remove('loading');
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={`preloader ${!loading ? 'preloader-hidden' : ''}`}>
      <div className="loading-container">
        {/* Logo */}
        <div className="loading-logo">
          <div className="loading-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-4xl font-bold text-white">BB</span>
            </motion.div>
          </div>
        </div>
        
        {/* Pasek postępu */}
        <div className="loading-progress">
          <motion.div 
            className="loading-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Tekst ładowania */}
        <div className="flex items-center mt-4">
          <span className="loading-text mr-2">Ładowanie strony</span>
          <svg className="svg-spinner w-4 h-4 text-primary-400" viewBox="0 0 50 50">
            <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeDasharray="31.4 31.4">
            </circle>
          </svg>
        </div>
        
        {/* Procent ładowania */}
        <div className="mt-2">
          <span className="text-sm text-primary-400">{progress}%</span>
        </div>
      </div>
    </div>
  );
}
