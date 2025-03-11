'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useMotionValueEvent, useInView, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mouseEnterElements, setMouseEnterElements] = useState({});
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  // Refs dla sekcji
  const heroRef = useRef(null);
  const expertiseRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  
  // Inicjalizacja po stronie klienta
  useEffect(() => {
    setIsMounted(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Scroll progress
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  
  // Obserwowanie kursora
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Po załadowaniu animacji
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Wykrywanie aktywnej sekcji
  useMotionValueEvent(scrollY, "change", (latest) => {
    const sections = [
      { ref: heroRef, id: 'hero' },
      { ref: expertiseRef, id: 'expertise' },
      { ref: servicesRef, id: 'services' },
      { ref: projectsRef, id: 'projects' }
    ];
    
    for (const section of sections) {
      if (!section.ref.current) continue;
      
      const rect = section.ref.current.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        setActiveSection(section.id);
        break;
      }
    }
  });
  
  // Główne kategorie usług
  const services = [
    {
      id: "erp",
      title: "Wdrożenia systemów ERP",
      description: "Kompleksowe wdrożenia i migracje do systemów Navireo oraz Subiekt GT/nexo, dostosowane do indywidualnych potrzeb Twojej firmy.",
      icon: (
        <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 14H14V21M10 14H3V21M10 3H3V10M21 3H14V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#7C3AED"
    },
    {
      id: "integration",
      title: "Integracja systemów",
      description: "Łączenie systemów ERP ze sklepami internetowymi, platformą Baselinker, systemami B2B i innymi zewnętrznymi narzędziami.",
      icon: (
        <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 2H8.5C7.11929 2 6 3.11929 6 4.5C6 5.88071 7.11929 7 8.5 7H15.5C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 22H15.5C16.8807 22 18 20.8807 18 19.5C18 18.1193 16.8807 17 15.5 17H8.5C7.11929 17 6 18.1193 6 19.5C6 20.8807 7.11929 22 8.5 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#2563EB"
    },
    {
      id: "automation",
      title: "Automatyzacja procesów",
      description: "Projektowanie i wdrażanie rozwiązań automatyzujących powtarzalne zadania, co pozwala oszczędzić czas i zminimalizować błędy.",
      icon: (
        <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#10B981"
    },
    {
      id: "ai",
      title: "AI w biznesie",
      description: "Implementacja rozwiązań wykorzystujących sztuczną inteligencję do optymalizacji procesów biznesowych i wspomagania podejmowania decyzji.",
      icon: (
        <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "#F97316"
    },
  ];
  
  // Główne metryki
  const stats = [
    { value: 84, label: 'wdrożeń ERP', suffix: '+', prefix: '' },
    { value: 56, label: 'zautomatyzowanych procesów', suffix: '+', prefix: '' },
    { value: 13, label: 'lat w branży IT', suffix: '', prefix: '' },
    { value: 97, label: 'wskaźnik satysfakcji', suffix: '%', prefix: '' },
  ];
  
  // Przykładowe projekty
  const projects = [
    {
      title: "Wdrożenie Navireo ERP w firmie handlowej",
      description: "Kompleksowe wdrożenie systemu Navireo ERP dla firmy handlowej zatrudniającej 50 pracowników.",
      tech: ["Navireo ERP", "SQL", "API Integration", "eCommerce"],
      link: "/projects/1",
      color: "#7C3AED"
    },
    {
      title: "Automatyzacja procesów logistycznych",
      description: "Stworzenie systemu automatyzującego procesy logistyczne, pozwalającego na śledzenie przesyłek i zarządzanie magazynem.",
      tech: ["Subiekt nexo", "Baselinker", "Python", "Power Automate"],
      link: "/projects/2",
      color: "#2563EB"
    },
    {
      title: "Integracja systemu B2B z Subiekt GT",
      description: "Zaprojektowanie i wdrożenie integracji między platformą B2B klienta a systemem Subiekt GT.",
      tech: ["Subiekt GT", "API", "XML/JSON", "SQL"],
      link: "/projects/3",
      color: "#10B981"
    },
    {
      title: "Wdrożenie AI do analizy danych",
      description: "Implementacja rozwiązania wykorzystującego sztuczną inteligencję do analizy danych sprzedażowych.",
      tech: ["Machine Learning", "Python", "PowerBI", "SQL"],
      link: "/projects/4",
      color: "#F97316"
    },
  ];
  
  // Techstack
  const technologies = [
    "Navireo", "Subiekt GT", "Subiekt nexo", "SQL", "PowerBI", 
    "Baselinker", "AI", "Automatyzacja", "Python", "API", "JSON", 
    "XML", "eCommerce", "B2B", "EDI", "ETL", "Power Automate"
  ];

  // Funkcja pomocnicza do obliczania odległości
  const calculateDistance = (elem, mouseX, mouseY) => {
    if (!elem) return 1000;
    const rect = elem.getBoundingClientRect();
    const elemX = rect.left + rect.width / 2;
    const elemY = rect.top + rect.height / 2;
    return Math.sqrt(Math.pow(mouseX - elemX, 2) + Math.pow(mouseY - elemY, 2));
  };
  
  return (
    <>
      {/* Kursor */}
      <div 
        className="fixed w-8 h-8 rounded-full border border-primary-500 pointer-events-none z-50 transition-transform duration-100"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
          mixBlendMode: 'difference'
        }}
      />
      <div 
        className="fixed w-2 h-2 rounded-full bg-primary-500 pointer-events-none z-50 transition-transform duration-75"
        style={{
          transform: `translate(${cursorPosition.x - 4}px, ${cursorPosition.y - 4}px)`,
        }}
      />
      
      {/* Loader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 bg-dark-900 z-50 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="w-32 h-32 relative">
                <motion.div 
                  className="absolute inset-0 border-t-2 border-primary-500 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-primary-500 font-bold text-xl">BB</span>
                </div>
              </div>
              <motion.div 
                className="absolute bottom-0 left-0 h-1 bg-primary-500"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Fixed Header - pojawia się przy przewijaniu */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-lg bg-dark-900/70 py-4"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-primary-400">Bartłomiej</span>
            <span className="text-xl font-bold text-white ml-1">Boroski</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'hero', label: 'Strona główna' },
              { id: 'expertise', label: 'Ekspertyza' },
              { id: 'services', label: 'Usługi' },
              { id: 'projects', label: 'Projekty' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-1 ${
                  activeSection === item.id ? 'text-primary-400' : 'text-white hover:text-primary-300'
                } transition-colors`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id).scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </a>
            ))}
          </nav>
          
          <Link href="/contact" className="py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md transition-colors">
            Kontakt
          </Link>
        </div>
      </motion.header>
      
      {/* Hero Section z 3D efektem i animacjami */}
      <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Dynamiczne tło */}
        <div className="absolute inset-0 bg-dark-900">
          {/* Grid tworzący efekt głębi */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(0,114,255,0.1) 0%, transparent 8%)`,
            backgroundSize: '60px 60px',
            opacity: 0.6
          }}></div>
          
          {/* Animowane kule */}
          <div className="absolute inset-0 overflow-hidden">
            {isMounted && [...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-20"
                initial={{
                  x: Math.random() * windowSize.width,
                  y: Math.random() * windowSize.height,
                  scale: Math.random() * 0.5 + 0.2,
                }}
                animate={{
                  x: [
                    Math.random() * windowSize.width,
                    Math.random() * windowSize.width,
                    Math.random() * windowSize.width,
                  ],
                  y: [
                    Math.random() * windowSize.height,
                    Math.random() * windowSize.height,
                    Math.random() * windowSize.height,
                  ],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                style={{
                  width: `${Math.random() * 100 + 50}px`,
                  height: `${Math.random() * 100 + 50}px`,
                  background: `rgba(${Math.random() * 100}, ${Math.random() * 100}, 255, 0.2)`,
                  filter: 'blur(20px)',
                }}
              />
            ))}
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lewa strona */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
                  Kierownik Projektów IT | 13 lat doświadczenia
                </span>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="block">Rozwiązania IT</span>
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    dla Twojego biznesu
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-md">
                  Specjalizuję się we wdrożeniach systemów ERP, integracji rozwiązań i&nbsp;automatyzacji procesów. 
                  <span className="font-semibold text-white"> Transformuję firmy cyfrowo.</span>
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/services" className="group relative py-3 px-6 overflow-hidden rounded-lg bg-primary-500 text-white font-medium transition-all">
                    <span className="relative z-10">Poznaj moje usługi</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </Link>
                  
                  <Link href="/contact" className="group relative py-3 px-6 overflow-hidden rounded-lg bg-transparent text-white font-medium transition-all border border-primary-500/50">
                    <span className="relative z-10">Kontakt</span>
                    <span className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Link>
                </div>
              </motion.div>
              
              {/* Tech Stack */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 + index * 0.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-dark-700/70 text-gray-300 border border-dark-500 backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
            
            {/* Prawa strona - 3D interfejs */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Główny element 3D */}
                <motion.div
                  className="w-full h-[500px] relative bg-dark-800/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-primary-500/20 p-6"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isMounted 
                      ? `perspective(1000px) rotateY(${(cursorPosition.x - windowSize.width / 2) / 50}deg) rotateX(${-(cursorPosition.y - windowSize.height / 2) / 50}deg)`
                      : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
                  }}
                >
                  {/* Hologram-like interface */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-dark-800/40 to-transparent">
                    <div className="flex flex-col items-center text-center">
                      <motion.div
                        className="w-32 h-32 rounded-full bg-primary-500/10 mb-6 flex items-center justify-center"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <motion.div
                          className="w-24 h-24 rounded-full bg-primary-500/20 flex items-center justify-center"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <svg className="w-12 h-12 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M21 16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H7C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16M21 16V16C21 14.1144 21 13.1716 20.4142 12.5858C19.8284 12 18.8856 12 17 12L7 12C5.11438 12 4.17157 12 3.58579 12.5858C3 13.1716 3 14.1144 3 16V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </motion.div>
                      </motion.div>
                      
                      <motion.h3
                        className="text-2xl font-bold text-white"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        Transformacja Cyfrowa
                      </motion.h3>
                      
                      <motion.p
                        className="mt-4 text-primary-400 max-w-md"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                      >
                        Automatyzacja ⟶ Integracja ⟶ Optymalizacja
                      </motion.p>
                      
                      <div className="mt-12 grid grid-cols-3 gap-6 w-full max-w-md">
                        {[
                          { value: "84+", label: "Wdrożeń" },
                          { value: "13", label: "Lat doświadczenia" },
                          { value: "97%", label: "Satysfakcji" },
                        ].map((stat, index) => (
                          <motion.div
                            key={index}
                            className="text-center"
                            whileHover={{ y: -5 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.2 }}
                          >
                            <motion.div 
                              className="text-2xl font-bold text-white"
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
                            >
                              {stat.value}
                            </motion.div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* UI Elements */}
                  <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400">system_overview.exe</div>
                  </div>
                  
                  {/* Interconnected nodes */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-full h-[60px] relative">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <motion.div
                          key={i}
                          className="absolute w-4 h-4 rounded-full bg-primary-500/20 border border-primary-500/50"
                          style={{
                            left: `${i * 25}%`,
                            top: '50%',
                            transform: 'translateY(-50%)',
                          }}
                          animate={{ 
                            scale: [1, 1.2, 1],
                            boxShadow: [
                              '0 0 0 0 rgba(0, 114, 255, 0)',
                              '0 0 0 10px rgba(0, 114, 255, 0.1)',
                              '0 0 0 0 rgba(0, 114, 255, 0)'
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatType: 'loop',
                            delay: i * 0.3
                          }}
                        />
                      ))}
                      
                      {/* Connecting lines */}
                      {[0, 1, 2, 3].map((i) => (
                        <div 
                          key={i}
                          className="absolute h-[1px] bg-primary-500/30"
                          style={{
                            left: `${i * 25 + 2}%`,
                            right: `${100 - ((i + 1) * 25 - 2)}%`,
                            top: '50%',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Animated circular progress */}
                  <div className="absolute top-8 right-8">
                    <svg className="w-16 h-16" viewBox="0 0 100 100">
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#1f2937" 
                        strokeWidth="8"
                      />
                      <motion.circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#0072ff" 
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        animate={{
                          strokeDashoffset: [283, 0]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "loop",
                          ease: "linear"
                        }}
                      />
                      <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="16px" fontWeight="bold">80%</text>
                    </svg>
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500/30 rounded-full" />
                    <div className="absolute top-1/4 right-0 w-3 h-3 bg-purple-500/30 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500/30 rounded-full" />
                    <div className="absolute top-1/4 left-0 w-3 h-3 bg-purple-500/30 rounded-full" />
                  </motion.div>
                </div>
                
                <div className="absolute -bottom-10 -left-10 w-40 h-40">
                  <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    animate={{
                      rotate: -360
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500/30 rounded-full" />
                    <div className="absolute top-1/4 right-0 w-3 h-3 bg-green-500/30 rounded-full" />
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500/30 rounded-full" />
                    <div className="absolute top-1/4 left-0 w-3 h-3 bg-green-500/30 rounded-full" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-1 bg-white rounded-full mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
          <div className="text-xs text-white mt-2 text-center">Scroll</div>
        </motion.div>
      </section>
      
      {/* Expertise Section z efektem paralaksy */}
      <section id="expertise" ref={expertiseRef} className="relative py-32">
        <div className="absolute inset-0 bg-dark-900">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Moje metryki
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Dlaczego warto ze mną <span className="text-primary-400">współpracować</span>
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Przez 13 lat doświadczenia w IT zrealizowałem z sukcesem dziesiątki projektów wdrożeń systemów ERP,
              integracji i automatyzacji procesów dla firm różnej wielkości.
            </motion.p>
          </div>
          
          {/* Stats w nowoczesnych boxach */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="relative bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden p-6 border border-dark-600"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 114, 255, 0.1)' }}
              >
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-50"
                  style={{ transform: `rotate(${index * 90}deg)` }}
                />
                
                <div className="relative z-10">
                  <div className="flex items-baseline">
                    <span className="text-primary-400 text-lg font-medium">{stat.prefix}</span>
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      enableScrollSpy={true}
                      scrollSpyOnce={true}
                      className="text-4xl md:text-5xl font-bold text-white"
                    />
                    <span className="text-primary-400 text-lg font-medium ml-1">{stat.suffix}</span>
                  </div>
                  <div className="mt-2 text-gray-300">{stat.label}</div>
                  
                  {/* Decorative elements */}
                  <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-primary-500/5 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-primary-500/10 flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-primary-500/20"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Features / Process */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h3
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Jak <span className="text-primary-400">pracuję</span>
              </motion.h3>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Analiza i planowanie",
                    description: "Szczegółowe rozpoznanie procesów biznesowych i określenie celów projektu.",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 15.5L21 21M7 10.5H11M7 14.5H11M7 18.5H11M13 3.5V9.5H19M5 7.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V7.79289C19 7.5266 18.8946 7.27107 18.7071 7.08355L14.9164 3.29289C14.7289 3.10536 14.4734 3 14.2071 3H6C5.44772 3 5 3.44772 5 4V7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#7C3AED"
                  },
                  {
                    title: "Strategia wdrożenia",
                    description: "Opracowanie dopasowanej strategii implementacji rozwiązań IT.",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21L10 14M21 3L14 10M14 10L17 13L13 17L10 14M14 10L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#2563EB"
                  },
                  {
                    title: "Implementacja",
                    description: "Wdrożenie rozwiązań z naciskiem na jakość i terminowość.",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#10B981"
                  },
                  {
                    title: "Ciągłe usprawnienia",
                    description: "Monitorowanie i dalsze optymalizowanie wdrożonych rozwiązań.",
                    icon: (
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7285 10.9288C20.4413 13.5978 19.7507 16.5635 17.6569 18.6573C14.5327 21.7815 9.46734 21.7815 6.34315 18.6573C3.21895 15.5331 3.21895 10.4677 6.34315 7.34354C9.46734 4.21935 14.5327 4.21935 17.6569 7.34354L21 10.6866M21 4.00012V10.6866H14.3137" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#F97316"
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  >
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}10`, color: item.color, borderColor: `${item.color}30` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-gray-300 mt-1">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* 3D Mockup */}
            <motion.div
              className="relative h-[400px]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="absolute inset-0 bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-dark-600 overflow-hidden"
                style={isMounted ? {
                  transformStyle: "preserve-3d",
                  transform: `perspective(1000px) rotateY(${(cursorPosition.x - windowSize.width / 2) / 70}deg) rotateX(${-(cursorPosition.y - windowSize.height / 2) / 70}deg)`,
                } : {}}
              >
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-white font-medium">Projekt ERP</div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  {/* Dashboard mockup */}
                  <div className="flex-grow grid grid-cols-3 gap-4">
                    <div className="col-span-2 bg-dark-700/50 rounded-xl p-4">
                      <div className="h-4 w-1/3 bg-dark-600 rounded mb-4"></div>
                      <div className="flex space-x-4">
                        <div className="flex-1 h-24 rounded bg-dark-600/70 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                            <div className="w-8 h-8">
                              <svg className="w-full h-full text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.5858 13.4142L7.75735 10.5858C7.36683 10.1952 7.36683 9.5621 7.75735 9.17157C8.14788 8.78105 8.78104 8.78105 9.17157 9.17157L10.5858 10.5858L14.8284 6.34313C15.219 5.95261 15.8521 5.95261 16.2426 6.34313C16.6332 6.73366 16.6332 7.36682 16.2426 7.75735L10.5858 13.4142ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 h-24 rounded bg-dark-600/70 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                            <div className="w-8 h-8">
                              <svg className="w-full h-full text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 8V16M12 11V16M8 14V16M6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="h-32 bg-dark-600/70 rounded mt-4 p-3">
                        <div className="h-4 w-1/4 bg-dark-500 rounded mb-2"></div>
                        <div className="h-2 w-full bg-dark-500 rounded mt-4"></div>
                        <div className="h-2 w-4/5 bg-dark-500 rounded mt-2"></div>
                        <div className="h-2 w-3/5 bg-dark-500 rounded mt-2"></div>
                        <div className="h-2 w-full bg-dark-500 rounded mt-2"></div>
                      </div>
                    </div>
                    
                    <div className="col-span-1 flex flex-col space-y-4">
                      <div className="flex-1 rounded-xl bg-dark-700/50 p-4">
                        <div className="h-4 w-2/3 bg-dark-600 rounded mb-4"></div>
                        <div className="h-4 w-1/2 bg-dark-600 rounded mb-2"></div>
                        <div className="h-4 w-1/3 bg-dark-600 rounded mb-2"></div>
                        <div className="h-4 w-2/3 bg-dark-600 rounded"></div>
                      </div>
                      
                      <div className="flex-1 rounded-xl bg-dark-700/50 p-4">
                        <div className="h-4 w-1/2 bg-dark-600 rounded mb-4"></div>
                        <div className="h-16 w-full bg-dark-600/70 rounded flex items-center justify-center">
                          <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2426 9.82837C14.6332 9.43785 15.2663 9.43785 15.6569 9.82837C16.0474 10.2189 16.0474 10.852 15.6569 11.2426L14.2426 9.82837ZM10.9497 15.9498L10.2426 16.6569C10.6332 17.0474 11.2663 17.0474 11.6569 16.6569L10.9497 15.9498ZM8.34309 13.3431C7.95257 12.9526 7.31941 12.9526 6.92888 13.3431C6.53836 13.7337 6.53836 14.3668 6.92888 14.7574L8.34309 13.3431ZM15.6569 11.2426L11.6569 15.2426L10.2426 13.8284L14.2426 9.82837L15.6569 11.2426ZM11.6569 15.2426L11.6569 15.2426L10.2426 13.8284C10.2426 13.8284 10.2426 13.8284 10.2426 13.8284L11.6569 15.2426ZM11.6569 16.6569L17.0711 11.2426L15.6569 9.82843L10.2426 15.2427L11.6569 16.6569ZM6.92888 14.7574L10.2426 18.0711L11.6569 16.6569L8.34309 13.3431L6.92888 14.7574ZM21.5 12C21.5 17.2467 17.2467 21.5 12 21.5V18.5C15.5898 18.5 18.5 15.5899 18.5 12H21.5ZM12 21.5C6.75329 21.5 2.5 17.2467 2.5 12H5.5C5.5 15.5899 8.41015 18.5 12 18.5V21.5ZM2.5 12C2.5 6.75329 6.75329 2.5 12 2.5V5.5C8.41015 5.5 5.5 8.41015 5.5 12H2.5ZM12 2.5C17.2467 2.5 21.5 6.75329 21.5 12H18.5C18.5 8.41015 15.5898 5.5 12 5.5V2.5Z" fill="currentColor"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reflections and effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/30 to-transparent pointer-events-none"></div>
                                  <div className="absolute inset-0 bg-gradient-to-l from-primary-500/5 to-transparent pointer-events-none"></div>
                
                {/* Animated dots */}
                {isMounted && [...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
                    initial={{
                      x: Math.random() * 400,
                      y: Math.random() * 400,
                    }}
                    animate={{
                      x: Math.random() * 400,
                      y: Math.random() * 400,
                    }}
                    transition={{
                      duration: Math.random() * 10 + 10,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services with 3D Cards */}
      <section id="services" ref={servicesRef} className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-dark-800">
          {/* Background patterns */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Usługi
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Jak mogę pomóc Twojej <span className="text-primary-400">firmie</span>
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Specjalizuję się w dostarczaniu kompleksowych rozwiązań IT, które wspierają 
              rozwój biznesu i usprawniają codzienne operacje.
            </motion.p>
          </div>
          
          {/* 3D Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => {
              // Referencja do elementu karty
              const cardRef = useRef(null);
              
              // Obliczanie rotacji na podstawie pozycji myszy
              const calcRotation = () => {
                if (!cardRef.current || !isMounted) return { x: 0, y: 0 };
                
                const distance = calculateDistance(cardRef.current, cursorPosition.x, cursorPosition.y);
                
                if (distance > 400) return { x: 0, y: 0 };
                
                const rect = cardRef.current.getBoundingClientRect();
                const x = (cursorPosition.y - (rect.top + rect.height / 2)) / 20;
                const y = -(cursorPosition.x - (rect.left + rect.width / 2)) / 20;
                
                return { x, y };
              };
              
              const { x, y } = calcRotation();

              return (
                <motion.div
                  key={index}
                  ref={cardRef}
                  className="h-full"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    transformStyle: "preserve-3d",
                    transform: mouseEnterElements[`card-${index}`] 
                      ? `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg)`
                      : "perspective(1000px) rotateX(0) rotateY(0)",
                    transition: "transform 0.2s ease-out"
                  }}
                  onMouseEnter={() => setMouseEnterElements(prev => ({ ...prev, [`card-${index}`]: true }))}
                  onMouseLeave={() => setMouseEnterElements(prev => ({ ...prev, [`card-${index}`]: false }))}
                >
                  <div className="h-full bg-dark-900/50 backdrop-blur-sm rounded-2xl border border-dark-700 p-6 relative overflow-hidden">
                    {/* Background glow */}
                    <div 
                      className="absolute inset-0 bg-gradient-to-br opacity-20"
                      style={{ 
                        background: `radial-gradient(circle at 50% 0%, ${service.color}50 0%, transparent 70%)` 
                      }}
                    ></div>
                    
                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col">
                      <div 
                        className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                        style={{ 
                          background: `${service.color}20`, 
                          color: service.color,
                          border: `1px solid ${service.color}40`
                        }}
                      >
                        {service.icon}
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-300 text-sm mb-6">{service.description}</p>
                      
                      <div className="mt-auto">
                        <Link 
                          href={`/services#${service.id}`}
                          className="group inline-flex items-center"
                        >
                          <span 
                            className="text-sm font-medium mr-2"
                            style={{ color: service.color }}
                          >
                            Dowiedz się więcej
                          </span>
                          <span 
                            className="transform group-hover:translate-x-1 transition-transform"
                            style={{ color: service.color }}
                          >
                            →
                          </span>
                        </Link>
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 opacity-30"
                        style={{ 
                          background: `radial-gradient(circle, ${service.color}40 0%, transparent 70%)` 
                        }}
                      ></div>
                      
                      <div className="absolute bottom-0 left-0 -ml-6 -mb-6 w-24 h-24 opacity-20"
                        style={{ 
                          background: `radial-gradient(circle, ${service.color}30 0%, transparent 70%)` 
                        }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center">
            <Link 
              href="/services" 
              className="relative inline-flex items-center justify-center py-3 px-8 bg-gradient-to-r from-primary-600 to-primary-400 text-white rounded-lg overflow-hidden font-medium transition-transform hover:scale-105"
            >
              <span className="relative z-10">Zobacz wszystkie usługi</span>
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: "-100%" }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                style={{ opacity: 0.2 }}
              />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="relative py-32">
        <div className="absolute inset-0 bg-dark-900">
          {/* Grid dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.span
              className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Realizacje
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Wybrane <span className="text-primary-400">projekty</span>
            </motion.h2>
            <motion.p
              className="max-w-2xl mx-auto text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Przez 13 lat mojej kariery miałem przyjemność pracować z wieloma firmami, 
              wdrażając rozwiązania, które realnie wpłynęły na ich wzrost i efektywność.
            </motion.p>
          </div>
          
          {/* Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div 
                  className="h-full bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-dark-700 group-hover:border-primary-500/20 transition-colors relative"
                >
                  {/* Gradient overlay */}
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{ 
                      background: `linear-gradient(to bottom right, ${project.color}30, transparent)` 
                    }}
                  ></div>
                  
                  <div className="p-6 relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="inline-block px-3 py-1 text-xs rounded-full bg-dark-700/70 border border-dark-600 text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href={project.link}
                      className="inline-flex items-center font-medium"
                      style={{ color: project.color }}
                    >
                      <span className="mr-2">Szczegóły wdrożenia</span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/projects"
              className="relative inline-flex items-center py-3 px-6 overflow-hidden rounded-lg border border-primary-500 text-primary-400 group"
            >
              <span className="relative z-10">Zobacz więcej realizacji</span>
              <span className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <svg className="ml-2 h-5 w-5 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          {/* Animated gradient background */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-dark-800/90 to-dark-900"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradientAnimation 15s ease infinite',
            }}
          ></div>
          
          {/* Particle grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
          
          {/* Animated light streaks */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 w-px h-full bg-primary-400"
              style={{ 
                left: `${(i + 1) * 25}%`, 
                opacity: 0.2 
              }}
              animate={{
                scaleY: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 5,
                delay: i * 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="bg-dark-900/30 backdrop-blur-xl rounded-3xl border border-white/10 p-16 overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Glowing sphere */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary-500/10 filter blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Gotowy na transformację cyfrową Twojej firmy?
              </h2>
              <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
                Umów się na bezpłatną 30-minutową konsultację, podczas której omówimy potrzeby Twojej 
                firmy i zaproponuję rozwiązania, które pomogą Ci osiągnąć Twoje cele biznesowe.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link 
                  href="/contact"
                  className="relative inline-flex items-center justify-center py-3 px-8 bg-white text-primary-600 rounded-lg overflow-hidden font-medium transition-transform hover:scale-105"
                >
                  <span className="relative z-10">Skontaktuj się</span>
                  <motion.div
                    className="absolute inset-0 bg-primary-400"
                    initial={{ x: "-100%" }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                    style={{ opacity: 0.2 }}
                  />
                </Link>
                
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="relative inline-flex items-center justify-center py-3 px-8 bg-transparent text-white border border-white/20 rounded-lg overflow-hidden font-medium hover:bg-white/5 transition-colors"
                >
                  <span className="relative z-10">Wróć do góry</span>
                  <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Add custom styles */}
      <style jsx global>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </>
  );
}