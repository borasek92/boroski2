'use client';

import './styles/globals.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Dodaj opóźnienie, aby symulować ładowanie strony
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Preloader będzie aktywny przez 3 sekundy
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <html lang="pl" className="scroll-smooth">
      <head>
        <title>Bartłomiej Boroski | Kierownik Projektów IT</title>
        <meta name="description" content="Ekspert wdrożeń systemów ERP z 13-letnim doświadczeniem. Specjalista integracji, automatyzacji procesów i wykorzystania AI w biznesie." />
        <meta name="keywords" content="kierownik projektów IT, wdrożenia ERP, Navireo, Subiekt GT, automatyzacja procesów, integracja systemów, sztuczna inteligencja w biznesie" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Preloader />
        
        <div className={isLoading ? 'content-loading' : 'content-loaded'}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
