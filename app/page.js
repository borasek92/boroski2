'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import ContactForm from './components/ContactForm';
import SectionTitle from './components/SectionTitle';
import { motion } from 'framer-motion';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');
  const [activeService, setActiveService] = useState(null);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const router = useRouter();
  const pathname = usePathname();
  
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
      const sections = ['hero', 'about', 'services', 'process', 'projects', 'contact'];
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

    // Obsługa hash w URL (np. #services)
    if (pathname.includes('#')) {
      const hash = pathname.split('#')[1];
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);
  
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
    ]
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
    ]
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
    ]
  },
  {
    id: "ai",
    title: "AI w biznesie",
    description: "Wykorzystuję potencjał sztucznej inteligencji do rozwiązywania rzeczywistych problemów biznesowych. Implementuję rozwiązania AI, które pomagają w analizie danych, prognozowaniu trendów, obsłudze klienta i podejmowaniu lepszych decyzji biznesowych.",
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
  ];

  // Przykładowe projekty
  const projects = [
    {
      title: "Wdrożenie Navireo ERP w firmie handlowej",
      description: "Kompleksowe wdrożenie systemu Navireo ERP dla firmy handlowej zatrudniającej 50 pracowników. Projekt obejmował integrację z istniejącym sklepem internetowym, szkolenia pracowników oraz migrację danych z poprzedniego systemu.",
      tech: ["Navireo ERP", "SQL", "API Integration", "eCommerce"],
      color: "#7C3AED"
    },
    {
      title: "Automatyzacja procesów logistycznych",
      description: "Stworzenie systemu automatyzującego procesy logistyczne w firmie produkcyjnej, pozwalającego na śledzenie przesyłek, zarządzanie magazynem i optymalizację tras dostawy. Rozwiązanie zredukowało czas realizacji zamówień o 40%.",
      tech: ["Subiekt nexo", "Baselinker", "Python", "Power Automate"],
      color: "#2563EB"
    },
    {
      title: "Integracja systemu B2B z Subiekt GT",
      description: "Zaprojektowanie i wdrożenie integracji między platformą B2B klienta a systemem Subiekt GT, umożliwiającą automatyczną synchronizację zamówień, stanów magazynowych i cen. Integracja zwiększyła sprzedaż B2B o 35% w ciągu pierwszych 6 miesięcy.",
      tech: ["Subiekt GT", "API", "XML/JSON", "SQL"],
      color: "#10B981"
    },
    {
      title: "Wdrożenie AI do analizy danych sprzedażowych",
      description: "Implementacja rozwiązania wykorzystującego sztuczną inteligencję do analizy danych sprzedażowych, identyfikacji trendów i automatycznego tworzenia prognoz. System pomógł klientowi zoptymalizować stany magazynowe i zwiększyć marże o 12%.",
      tech: ["Machine Learning", "Python", "PowerBI", "SQL"],
      color: "#F97316"
    },
    {
      title: "Migracja z Subiekt GT do Navireo",
      description: "Przeprowadzenie kompleksowej migracji z Subiekt GT do systemu Navireo ERP dla firmy handlowo-usługowej. Projekt obejmował transfer danych historycznych, konfigurację nowego systemu i szkolenia dla 25 pracowników.",
      tech: ["Navireo ERP", "Subiekt GT", "SQL", "ETL"],
      color: "#6366F1"
    },
    {
      title: "Automatyzacja procesu fakturowania",
      description: "Stworzenie zautomatyzowanego systemu fakturowania dla firmy usługowej, integrującego dane z różnych źródeł i generującego faktury zgodnie z ustalonymi harmonogramami. Rozwiązanie skróciło czas poświęcany na fakturowanie o 80%.",
      tech: ["Subiekt nexo", "Microsoft Power Automate", "Excel", "API"],
      color: "#EC4899"
    }
  ];
  
  // Techstack
  const technologies = [
    "Navireo", "Subiekt GT", "Subiekt nexo", "SQL", "PowerBI", 
    "Baselinker", "AI", "Automatyzacja", "Python", "API", "JSON", 
    "XML", "eCommerce", "B2B", "EDI"
  ];

  // Etapy procesu pracy
  const workSteps = [
    {
      title: "Bezpłatna konsultacja",
      description: "Poznajemy Twoją firmę, jej specyfikę i wyzwania biznesowe.",
      icon: (
        <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Analiza potrzeb",
      description: "Szczegółowe rozpoznanie procesów i możliwości optymalizacji.",
      icon: (
        <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Etapy i harmonogram",
      description: "Przedstawienie koncepcji i strategii rozwiązania Twoich wyzwań.",
      icon: (
        <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Implementacja",
      description: "Precyzyjna implementacja rozwiązań dopasowanych do Twojej firmy.",
      icon: (
        <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15M12 3V15M12 3L8 7M12 3L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Szkolenia i rozwój",
      description: "Kompleksowe przeszkolenie zespołu i wsparcie techniczne.",
      icon: (
        <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L20 6M14 6H20V12M14 12L20 6M12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  // Funkcja płynnego przewijania do sekcji
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Uwzględnienie wysokości navbara
        behavior: 'smooth'
      });
    }
  };

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
                  Usprawniam procesy biznesowe, integruje systemy i wykorzystuje potencjał sztucznej inteligencji w codziennej pracy.
                  <span className="font-semibold text-white"> Jestem wdrożeniowcem systemów ERP z wieloletnim doświadczeniem.</span>
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                  <button 
                    onClick={() => scrollToSection('services')} 
                    className="group relative py-3 px-6 overflow-hidden rounded-lg bg-primary-500 text-white font-medium transition-all"
                  >
                    <span className="relative z-10">Poznaj moje usługi</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="group relative py-3 px-6 overflow-hidden rounded-lg bg-transparent text-white font-medium transition-all border border-primary-500/50"
                  >
                    <span className="relative z-10">Bezpłatna konsultacja</span>
                    <span className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </button>
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
                      
                      <h3 className="mt-4 text-xl font-bold text-white">
                        Transformacja Cyfrowa
                      </h3>
                      
                      <p className="mt-2 text-primary-400 max-w-md">
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
      
      {/* About Section */}
<section id="about" className="py-20 bg-dark-900 relative">
  <div className="absolute inset-0">
    {/* Grid pattern */}
    <div className="absolute inset-0" style={{
      backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
      backgroundSize: '30px 30px'
    }}></div>
  </div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="text-center mb-12">
      <span className="inline-block py-1 px-3 text-xs font-medium bg-primary-500/10 text-primary-400 rounded-full mb-4">
        O mnie
      </span>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        Dlaczego warto ze mną <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">współpracować</span>
      </h2>
      <p className="max-w-3xl mx-auto text-gray-300">
        W swojej karierze jako kierownik IT zrealizowałem z sukcesem dziesiątki projektów wdrożeń systemów ERP,
        integracji i automatyzacji procesów dla firm różnej wielkości.
      </p>
    </div>
    
    <div className="mt-16 bg-dark-800/50 backdrop-blur-sm rounded-2xl overflow-hidden p-8 border border-dark-600">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">Efektywne rozwiązania biznesowe</h3>
          <p className="text-gray-300 mb-4">
            Specjalizuję się w dostarczaniu kompleksowych rozwiązań IT, które realnie wspierają 
            rozwój Twojego biznesu. Każdy projekt traktuję indywidualnie, dostosowując podejście 
            do specyfiki organizacji i konkretnych potrzeb.
          </p>
          <p className="text-gray-300 mb-6">
            Łączę wiedzę techniczną z doświadczeniem biznesowym, co pozwala mi 
            zaprojektować i wdrożyć rozwiązania, które bezpośrednio przekładają się 
            na usprawnienie procesów i zwiększenie efektywności operacyjnej.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
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

    {/* Process Timeline - with reduced spacing */}
    <div className="mt-16">
      <div className="text-center mb-8">
      <h2 className="text-2xl md:text-1xl font-bold mb-4 text-white">
        Proces <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">realizacji zlecenia</span>
      </h2>
      </div>
      <br />
      <div className="bg-dark-800/40 backdrop-blur-sm rounded-2xl p-6 border border-dark-600">
        <div className="relative">
          {/* Linia postępu */}
          <div className="hidden md:block absolute left-0 right-0 h-1 top-16 bg-dark-600">
            <div className="absolute left-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" style={{ width: '100%' }}></div>
          </div>
          
          {/* Mapa drogowa */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {workSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center md:pt-8"
              >
                {/* Numer kroku */}
                <div className="relative mb-3">
                  <div className="w-16 h-16 rounded-full bg-dark-700 border-2 border-primary-500 flex items-center justify-center z-10">
                    {step.icon}
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-1">{step.title}</h4>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
{/* Services Section */}
<section id="services" className="py-20 bg-dark-800/80 backdrop-blur-sm relative">
  {/* Background elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-500/10 to-transparent blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-primary-700/10 to-transparent blur-3xl"></div>
  </div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionTitle
        subtitle="Usługi"
        title="Jak mogę pomóc <span>Twojej firmie</span>"
      />
    </motion.div>
    
    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div 
            className="service-card group overflow-hidden cursor-pointer"
            onClick={() => setActiveService(service.id)}
          >
            {/* Subtle radial gradient background */}
            <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-primary-400 mb-4 transform transition-transform duration-300 group-hover:scale-110 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 text-center">
                {service.title}
              </h3>
              
              {/* Hover reveal description */}
              <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-3 transition-all duration-300 overflow-hidden text-gray-300 text-sm text-center">
                <p>{service.description.substring(0, 80)}...</p>
              </div>
            </div>
            
            {/* Bottom gradient line on hover */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-500 to-purple-400 group-hover:w-full transition-all duration-500"></div>
          </div>
        </motion.div>
      ))}
    </div>
    
    {/* Modal ze szczegółami usługi */}
    {activeService && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20 }}
          className="glass-card max-w-2xl w-full p-8 relative shadow-xl"
        >
          {/* Zamknięcie panelu */}
          <button 
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            onClick={() => setActiveService(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Treść szczegółów */}
          <div className="flex items-start mb-6">
            <div className="mr-6 text-primary-400 p-4 bg-primary-500/10 rounded-lg">
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
            <ul className="space-y-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.find(s => s.id === activeService)?.features.map((feature, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-center text-gray-300 bg-dark-800/40 p-3 rounded-lg"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* CTA button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setActiveService(null);
                scrollToSection('contact');
              }}
              className="gradient-btn"
            >
              Porozmawiajmy o Twoim projekcie
              <svg className="ml-2 h-5 w-5 inline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </div>
</section>
      
      
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Realizacje"
            title="Wybrane <span>projekty</span>"
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            subtitle="Kontakt"
            title="Porozmawiajmy o <span>Twoim projekcie</span>"
          />
          
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-dark-700 rounded-xl p-8 shadow-lg backdrop-blur-sm border border-dark-600">
                <h3 className="text-2xl font-bold text-white mb-6">Dane kontaktowe</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-500/10 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-white">Email</h4>
                      <a href="mailto:kontakt@example.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                        kontakt@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500/10 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-white">Telefon</h4>
                      <a href="tel:+48123456789" className="text-primary-400 hover:text-primary-300 transition-colors">
                        +48 123 456 789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-500/10 p-3 rounded-lg mr-4">
                      <svg className="h-6 w-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold text-white">Godziny pracy</h4>
                      <p className="text-gray-300">
                        Poniedziałek - Piątek<br />
                        8:00 - 16:00
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8 pt-6 border-t border-dark-600">
                  <h4 className="text-md font-semibold text-white mb-4">Znajdź mnie również</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-dark-600 hover:bg-dark-500 p-3 rounded-full text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-dark-600 hover:bg-dark-500 p-3 rounded-full text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-dark-600 hover:bg-dark-500 p-3 rounded-full text-white transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-dark-700 rounded-xl p-8 shadow-lg backdrop-blur-sm border border-dark-600">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
