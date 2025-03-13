'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import CountUp from 'react-countup';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [activeService, setActiveService] = useState(null);
  
  // Inicjalizacja po stronie klienta
  useEffect(() => {
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
    
    // Funkcja do wykrywania aktywnej sekcji przy przewijaniu
    const handleScroll = () => {
      const sections = ['hero', 'expertise', 'services', 'projects'];
      const scrollPosition = window.scrollY + 100;
      
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
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Główne metryki
  const stats = [
    { value: 84, label: 'wdrożeń ERP', suffix: '+', prefix: '' },
    { value: 56, label: 'zautomatyzowanych procesów', suffix: '+', prefix: '' },
    { value: 13, label: 'lat w branży IT', suffix: '', prefix: '' },
    { value: 97, label: 'wskaźnik satysfakcji', suffix: '%', prefix: '' },
  ];
  
  // Główne kategorie usług
  const services = [
    {
      id: "erp",
      title: "Wdrożenia systemów ERP",
      description: "Kompleksowe wdrożenia systemów Navireo oraz Subiekt GT/nexo dostosowane do specyfiki Twojej firmy. Wprowadzam sprawdzone procesy i dobre praktyki, które usprawniają zarządzanie firmą i zwiększają kontrolę nad procesami biznesowymi.",
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 14H14V21M10 14H3V21M10 3H3V10M21 3H14V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Analiza potrzeb i procesów biznesowych",
        "Projektowanie i konfiguracja systemu",
        "Migracja danych z innych systemów",
        "Szkolenia dla pracowników",
        "Wsparcie powdrożeniowe i rozwój systemu"
      ],
      color: "#7C3AED"
    },
    {
      id: "integration",
      title: "Integracja systemów",
      description: "Tworzę mosty między różnymi systemami i aplikacjami, umożliwiając płynny przepływ informacji. Integruję system ERP ze sklepami internetowymi, platformą Baselinker, systemami B2B, narzędziami analitycznymi i wieloma innymi rozwiązaniami.",
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 2H8.5C7.11929 2 6 3.11929 6 4.5C6 5.88071 7.11929 7 8.5 7H15.5C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 22H15.5C16.8807 22 18 20.8807 18 19.5C18 18.1193 16.8807 17 15.5 17H8.5C7.11929 17 6 18.1193 6 19.5C6 20.8807 7.11929 22 8.5 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Integracja z platformami e-commerce",
        "Łączenie z Baselinker i innymi narzędziami",
        "Synchronizacja danych między systemami",
        "Automatyczny import/eksport danych",
        "API i wymiana danych w czasie rzeczywistym"
      ],
      color: "#2563EB"
    },
    {
      id: "automation",
      title: "Automatyzacja procesów",
      description: "Identyfikuję i automatyzuję powtarzalne zadania, co pozwala zaoszczędzić czas, zminimalizować błędy i zwiększyć wydajność. Tworzę rozwiązania dopasowane do specyfiki Twojej firmy, które eliminują ręczne wprowadzanie danych i usprawniają przepływ pracy.",
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Automatyzacja pracy z dokumentami",
        "Automatyczne generowanie raportów",
        "Automatyczna aktualizacja stanów magazynowych",
        "Automatyzacja procesów fakturowania",
        "Monitorowanie i alerty dla kluczowych wskaźników"
      ],
      color: "#10B981"
    },
    {
      id: "ai",
      title: "AI w biznesie",
      description: "Implementacja rozwiązań wykorzystujących sztuczną inteligencję do optymalizacji procesów biznesowych i wspomagania podejmowania decyzji.",
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Analiza danych z wykorzystaniem AI",
        "Prognozowanie sprzedaży i trendów",
        "Automatyczna kategoryzacja produktów",
        "Chatboty i wirtualni asystenci",
        "Personalizacja treści i ofert"
      ],
      color: "#F97316"
    },
    {
      id: "development",
      title: "Rozwiązania dedykowane",
      description: "Tworzę dedykowane rozwiązania IT, które odpowiadają na konkretne potrzeby Twojej firmy. Od prostych narzędzi wspomagających codzienną pracę, przez dedykowane aplikacje webowe, po złożone systemy analizy danych - dostarczam rozwiązania szyte na miarę.",
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 7L7 17M7 7L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Aplikacje webowe na zamówienie",
        "Skrypty i narzędzia automatyzujące pracę",
        "Dashboardy i narzędzia analityczne",
        "Dedykowane moduły rozszerzające systemy ERP",
        "Rozwiązania mobilne dla firm"
      ],
      color: "#6366F1"
    },
    {
      id: "consulting",
      title: "Doradztwo i szkolenia",
      description: "Dzielę się wiedzą i doświadczeniem, pomagając firmom podejmować lepsze decyzje technologiczne. Prowadzę audyty istniejących systemów, doradzam w zakresie optymalizacji procesów oraz szkolę zespoły z obsługi systemów i narzędzi IT.",
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9C15 10.1046 14.1046 11 13 11H11C9.89543 11 9 11.8954 9 13C9 14.1046 9.89543 15 11 15H13C14.1046 15 15 14.1046 15 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 15V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      features: [
        "Audyty i analizy systemów IT",
        "Konsultacje w zakresie doboru rozwiązań",
        "Szkolenia z obsługi systemów ERP",
        "Warsztaty z zakresu automatyzacji procesów",
        "Doradztwo w zakresie transformacji cyfrowej"
      ],
      color: "#D946EF"
    },
    {
      id: "sql",
      title: "Rozwiązania SQL",
      description: "Kompleksowe usługi z zakresu projektowania, optymalizacji i zarządzania bazami danych SQL. Pomagam firmom efektywnie przechowywać, przetwarzać i analizować dane, tworząc wydajne i niezawodne rozwiązania bazodanowe.",
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 7L10 11V17L4 13V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 17L20 13V7L14 11V17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 7L10 3L14 7L10 11L4 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 7L20 3L14 11L10 7L14 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Projektowanie struktur baz danych",
        "Optymalizacja wydajności zapytań",
        "Migracja i konwersja baz danych",
        "Analiza i raportowanie",
        "Zabezpieczenie i kopie zapasowe"
      ],
      color: "#0EA5E9"
    },
    {
      id: "project-management",
      title: "Zarządzanie projektami IT",
      description: "Profesjonalne wsparcie w planowaniu, realizacji i kontroli projektów informatycznych. Stosuję sprawdzone metodyki zarządzania projektami, które zapewniają terminowość, efektywność i wysoką jakość realizowanych inicjatyw.",
      icon: (
        <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H21V21H3V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 15H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Planowanie i harmonogramowanie projektów",
        "Zarządzanie ryzykiem",
        "Metodyki Agile i Scrum",
        "Monitorowanie postępu prac",
        "Raportowanie i komunikacja"
      ],
      color: "#EC4899"
    }
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
    "XML", "eCommerce", "B2B", "EDI"
  ];
  
  return (
    <>
     
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Statyczne tło */}
        <div className="absolute inset-0 bg-dark-900">
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          {/* Statyczne elementy tła */}
          <div className="absolute top-20 right-0 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-dark-400/10 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Lewa strona */}
            <div>
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold">
                  <span className="block">Rozwiązania IT</span>
                  <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                    dla Twojej firmy
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-md">
                  Usprawniam procesy bizesowe, integruje systemy i wykorzystuje potencjał sztucznej inteligencji w codziennej pracy.
                  <span className="font-semibold text-white"> Jestem wdrożeniowcem systemów ERP z wieloletnim doświadczeniem.</span>
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/services" className="group relative py-3 px-6 overflow-hidden rounded-lg bg-primary-500 text-white font-medium transition-all">
                    <span className="relative z-10">Poznaj moje usługi</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Link>
                  
                  <Link href="/contact" className="group relative py-3 px-6 overflow-hidden rounded-lg bg-transparent text-white font-medium transition-all border border-primary-500/50">
                    <span className="relative z-10">Bezpłatna konsultacja</span>
                    <span className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Link>
                </div>
              </div>
              
              {/* Tech Stack */}
              <div className="mt-12">
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs rounded-full bg-dark-700/70 text-gray-300 border border-dark-500 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Prawa strona - statyczny interfejs */}
            <div className="relative z-10">
              <div className="relative">
                {/* Statyczny element */}
                <div className="w-full h-[500px] relative bg-dark-800/40 backdrop-blur-lg rounded-3xl overflow-hidden border border-primary-500/20 p-6">
                  {/* Statyczny interfejs */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-dark-800/40 to-transparent">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-32 h-32 rounded-full bg-primary-500/10 mb-6 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-primary-500/20 flex items-center justify-center">
                          <svg className="w-12 h-12 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M21 16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H7C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16M21 16V16C21 14.1144 21 13.1716 20.4142 12.5858C19.8284 12 18.8856 12 17 12L7 12C5.11438 12 4.17157 12 3.58579 12.5858C3 13.1716 3 14.1144 3 16V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white">
                        Transformacja Cyfrowa
                      </h3>
                      
                      <p className="mt-4 text-primary-400 max-w-md">
                        Automatyzacja ⟶ Integracja ⟶ Optymalizacja
                      </p>
                      
                      <div className="mt-12 grid grid-cols-3 gap-6 w-full max-w-md">
                        {[
                          { value: "100+", label: "Wdrożeń" },
                          { value: "12", label: "Lat doświadczenia" },
                          { value: "97%", label: "Satysfakcji" },
                        ].map((stat, index) => (
                          <div
                            key={index}
                            className="text-center"
                          >
                            <div className="text-2xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-sm text-gray-400">{stat.label}</div>
                          </div>
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
                    <div className="text-xs text-gray-400">rozwoj_biznesu.exe</div>
                  </div>
                  
                  {/* Statyczne węzły */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="w-full h-[60px] relative">
                      {[0, 1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="absolute w-4 h-4 rounded-full bg-primary-500/20 border border-primary-500/50"
                          style={{
                            left: `${i * 25 + 2}%`,
                            right: `${100 - ((i + 1) * 25 - 2)}%`,
                            top: '50%',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Circular progress */}
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
                      <circle 
                        cx="50" 
                        cy="50" 
                        r="45" 
                        fill="none" 
                        stroke="#0072ff" 
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="283"
                        strokeDashoffset="28"
                      />
                      <text x="50" y="50" textAnchor="middle" dominantBaseline="middle" fill="white" fontSize="16px" fontWeight="bold">90%</text>
                    </svg>
                  </div>
                </div>
                
                {/* Statyczne elementy */}
                <div className="absolute -top-10 -right-10 w-40 h-40">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500/30 rounded-full" />
                  <div className="absolute top-1/4 right-0 w-3 h-3 bg-purple-500/30 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500/30 rounded-full" />
                  <div className="absolute top-1/4 left-0 w-3 h-3 bg-purple-500/30 rounded-full" />
                </div>
                
                <div className="absolute -bottom-10 -left-10 w-40 h-40">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500/30 rounded-full" />
                  <div className="absolute top-1/4 right-0 w-3 h-3 bg-green-500/30 rounded-full" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500/30 rounded-full" />
                  <div className="absolute top-1/4 left-0 w-3 h-3 bg-green-500/30 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section id="expertise" className="relative py-32">
        <div className="absolute inset-0 bg-dark-900">
          {/* Statyczne tło */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
              Co robię
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Dlaczego warto ze mną <span className="text-primary-400">współpracować</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              W swojej karierze jako kierownik IT zrealizowałem z sukcesem dziesiątki projektów wdrożeń systemów ERP,
              integracji i automatyzacji procesów dla firm różnej wielkości.
            </p>
          </div>
          
          {/* Statyczny obrazek (zastępuje ruchomą grafikę) */}
          <div className="mt-16 bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden p-6 border border-dark-600">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Efektywne rozwiązania biznesowe</h3>
                <p className="text-gray-300 mb-4">
                  Specjalizuję się w dostarczaniu kompleksowych rozwiązań IT, które realnie wspierają 
                  rozwój Twojego biznesu. Każdy projekt traktuję indywidualnie, dostosowując podejście 
                  do specyfiki organizacji i konkretnych potrzeb.
                </p>
                <p className="text-gray-300">
                  Łączę wiedzę techniczną z doświadczeniem biznesowym, co pozwala mi 
                  zaprojektować i wdrożyć rozwiązania, które bezpośrednio przekładają się 
                  na usprawnienie procesów i zwiększenie efektywności operacyjnej.
                </p>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="bg-dark-700/50 rounded-lg p-4">
                    <div className="text-primary-400 font-semibold mb-2">+40%</div>
                    <div className="text-sm text-gray-300">Średni wzrost efektywności operacyjnej</div>
                  </div>
                  <div className="bg-dark-700/50 rounded-lg p-4">
                    <div className="text-primary-400 font-semibold mb-2">-70%</div>
                    <div className="text-sm text-gray-300">Redukcja czasu na zadania powtarzalne</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-dark-700/50 rounded-xl p-6">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-xl font-semibold text-white mb-6">Korzyści współpracy</h4>
                  <ul className="space-y-4">
                    {[
                      "Dedykowane rozwiązania dla Twojej branży",
                      "Kompleksowe podejście: od analizy po wdrożenie",
                      "Optymalizacja procesów biznesowych",
                      "Redukcja kosztów operacyjnych",
                      "Wsparcie techniczne na każdym etapie"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="h-5 w-5 text-primary-500 mt-1 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
{/* Mapa drogowa procesu pracy */}
<div className="bg-dark-800/30 rounded-3xl p-8 backdrop-blur-sm border border-dark-600">
            <h3 className="text-3xl font-bold mb-12 text-center">
              Jak <span className="text-primary-400">pracuję</span>
            </h3>
            
            <div className="relative">
              {/* Linia postępu */}
              <div className="hidden md:block absolute left-0 right-0 h-1 top-16 bg-dark-600">
                <div className="absolute left-0 h-full bg-primary-500" style={{ width: '100%' }}></div>
              </div>
              
              {/* Mapa drogowa */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {[
                  {
                    title: "Bezpłatna konsultacja",
                    description: "Wstępne rozpoznanie procesów biznesowych i określenie celów projektu",
                    icon: (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 15.5L21 21M7 10.5H11M7 14.5H11M7 18.5H11M13 3.5V9.5H19M5 7.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V7.79289C19 7.5266 18.8946 7.27107 18.7071 7.08355L14.9164 3.29289C14.7289 3.10536 14.4734 3 14.2071 3H6C5.44772 3 5 3.44772 5 4V7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#7C3AED"
                  },
                  {
                    title: "Analiza potrzeb",
                    description: "Szczegółowe opracowanie strategii i dobór odpowiednich narzędzi",
                    icon: (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 21L10 14M21 3L14 10M14 10L17 13L13 17L10 14M14 10L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#2563EB"
                  },
                  {
                    title: "Implementacja",
                    description: "Wdrożenie rozwiązań z naciskiem na jakość i terminowość.",
                    icon: (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#10B981"
                  },
                  {
                    title: "Szkolenia",
                    description: "Kompleksowe przeszkolenie zespołu klienta z obsługi wdrożonych rozwiązań.",
                    icon: (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 14L20 6M14 6H20V12M14 12L20 6M12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#F97316"
                  },
                  {
                    title: "Wsparcie i rozwój",
                    description: "Monitorowanie i dalszy rozwój Twojej firmy",
                    icon: (
                      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7285 10.9288C20.4413 13.5978 19.7507 16.5635 17.6569 18.6573C14.5327 21.7815 9.46734 21.7815 6.34315 18.6573C3.21895 15.5331 3.21895 10.4677 6.34315 7.34354C9.46734 4.21935 14.5327 4.21935 17.6569 7.34354L21 10.6866M21 4.00012V10.6866H14.3137" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ),
                    color: "#F97316"
                  },
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center text-center md:pt-8"
                  >
                    {/* Numer kroku */}
                    <div className="relative mb-4">
                      <div 
                        className="w-16 h-16 rounded-full bg-dark-700 border-2 border-primary-500 flex items-center justify-center z-10"
                        style={{ color: step.color }}
                      >
                        {step.icon}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="relative py-32">
        <div className="absolute inset-0 bg-dark-800">
          {/* Statyczny wzór tła */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
              Usługi
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Jak mogę pomóc Twojej <span className="text-primary-400">firmie</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Specjalizuję się w dostarczaniu kompleksowych rozwiązań IT, które wspierają 
              rozwój biznesu i usprawniają codzienne operacje.
            </p>
          </div>
          
          {/* Siatka usług - podobna do zakładki usługi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {services.map((service) => (
              <div 
                key={service.id}
                className="bg-dark-800 rounded-xl p-6 cursor-pointer 
                  hover:bg-dark-700 transition-all duration-300 
                  flex flex-col items-center text-center"
                onClick={() => setActiveService(service.id)}
              >
                <div 
                  className="text-primary-400 mb-4"
                  style={{ color: service.color }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Modal ze szczegółami usługi */}
          {activeService && (
            <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
              <div className="bg-dark-800 rounded-xl max-w-2xl w-full p-8 relative">
                {/* Zamknięcie panelu */}
                <button 
                  className="absolute top-4 right-4 text-gray-400 hover:text-white"
                  onClick={() => setActiveService(null)}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Treść szczegółów */}
                <div className="flex items-start mb-6">
                  <div 
                    className="mr-4"
                    style={{ color: services.find(s => s.id === activeService)?.color }}
                  >
                    {services.find(s => s.id === activeService)?.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {services.find(s => s.id === activeService)?.title}
                    </h2>
                    <p className="text-gray-300">
                      {services.find(s => s.id === activeService)?.description}
                    </p>
                  </div>
                </div>

                {/* Lista cech */}
                <div>
                  <h3 className="text-lg font-semibold text-primary-400 mb-3">Kluczowe możliwości:</h3>
                  <ul className="space-y-2">
                    {services.find(s => s.id === activeService)?.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <svg className="w-5 h-5 text-primary-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <Link 
              href="/services" 
              className="relative inline-flex items-center justify-center py-3 px-8 bg-gradient-to-r from-primary-600 to-primary-400 text-white rounded-lg overflow-hidden font-medium hover:shadow-lg transition-shadow"
            >
              <span className="relative z-10">Zobacz wszystkie usługi</span>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="relative py-32">
        <div className="absolute inset-0 bg-dark-900">
          {/* Grid dots */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
              Realizacje
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wybrane <span className="text-primary-400">projekty</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300">
              Przez 13 lat mojej kariery miałem przyjemność pracować z wieloma firmami, 
              wdrażając rozwiązania, które realnie wpłynęły na ich wzrost i efektywność.
            </p>
          </div>
          
          {/* Projekty */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group hover:-translate-y-1 transition-all duration-200"
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
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link 
              href="/projects"
              className="relative inline-flex items-center py-3 px-6 overflow-hidden rounded-lg border border-primary-500 text-primary-400 group hover:bg-primary-500/10 transition-colors"
            >
              <span className="relative z-10">Zobacz więcej realizacji</span>
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
          {/* Statyczny gradient */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-dark-800/90 to-dark-900"
          ></div>
          
          {/* Statyczne tło punktów */}
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            className="bg-dark-900/30 backdrop-blur-xl rounded-3xl border border-white/10 p-16 overflow-hidden relative"
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
                  className="relative inline-flex items-center justify-center py-3 px-8 bg-white text-primary-600 rounded-lg overflow-hidden font-medium hover:bg-white/90 transition-colors"
                >
                  <span className="relative z-10">Skontaktuj się</span>
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
          </div>
        </div>
      </section>
    </>
  );
}
