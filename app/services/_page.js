import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: "erp",
      title: "Wdrożenia systemów ERP",
      description: "Kompleksowe wdrożenia systemów Navireo oraz Subiekt GT/nexo dostosowane do specyfiki Twojej firmy. Wprowadzam sprawdzone procesy i dobre praktyki, które usprawniają zarządzanie firmą i zwiększają kontrolę nad procesami biznesowymi.",
      icon: (
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 2H8.5C7.11929 2 6 3.11929 6 4.5C6 5.88071 7.11929 7 8.5 7H15.5C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 22H15.5C16.8807 22 18 20.8807 18 19.5C18 18.1193 16.8807 17 15.5 17H8.5C7.11929 17 6 18.1193 6 19.5C6 20.8807 7.11929 22 8.5 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      features: [
        "Integracja z platformami e-commerce",
        "Łączenie z Baselinker i innymi narzędziami zarządzania sprzedażą",
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
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    }
  ];

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
      title: "Propozycja rozwiązań",
      description: "Przedstawienie koncepcji i strategii rozwiązania Twoich wyzwań.",
      icon: (
        <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Wdrożenie",
      description: "Precyzyjna implementacja rozwiązań dopasowanych do Twojej firmy.",
      icon: (
        <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 15V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V15M12 3V15M12 3L8 7M12 3L16 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Szkolenie i wsparcie",
      description: "Kompleksowe przeszkolenie zespołu i ciągłe wsparcie techniczne.",
      icon: (
        <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14L20 6M14 6H20V12M14 12L20 6M12 22C7.02944 22 3 17.9706 3 13C3 8.02944 7.02944 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div className="pt-20">
      {/* Header section */}
      <div className="bg-dark-700 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Usługi dla biznesu
            </h1>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              Oferuję kompleksowe rozwiązania IT, które pomagają firmom zwiększyć efektywność, 
              zautomatyzować procesy i wykorzystać potencjał technologii w codziennej działalności.
            </p>
          </div>
        </div>
      </div>
      
      {/* Services list z przemiennym układem */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              id={service.id} 
              key={service.id} 
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center 
                ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              {/* Tekst */}
              <div className={`
                ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
                order-2
              `}>
                <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <h3 className="text-lg font-semibold text-primary-400 mb-3">Co oferuję:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="h-5 w-5 text-primary-500 mt-1 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link href="/contact" className="btn-primary text-sm">
                    <span>Porozmawiajmy o Twoim projekcie</span>
                    <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Ikona */}
              <div className={`
                ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
                order-1 flex justify-center
              `}>
                <div className="w-48 h-48 bg-primary-500/10 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-primary-500/20 rounded-full flex items-center justify-center">
                    <div className="text-primary-400">
                      {service.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Jak pracuję - sekcja mapy drogowej */}
      <div className="bg-dark-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Jak pracuję</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Mój proces to przemyślana strategia, która zapewnia skuteczność i satysfakcję klienta na każdym etapie współpracy.
            </p>
          </div>

          <div className="relative">
            {/* Linia postępu */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-primary-500/30"></div>
            </div>

            {/* Kroki */}
            <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
              {workSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center z-10 bg-dark-800 p-2"
                >
                  <div className="w-16 h-16 bg-dark-700 rounded-full mb-4 flex items-center justify-center border-2 border-primary-500/50">
                    {step.icon}
                  </div>
                  <h3 className="text-white font-semibold text-center mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-center text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-dark-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Nie znalazłeś tego, czego szukasz?
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Każdy biznes jest wyjątkowy i może potrzebować spersonalizowanych rozwiązań. 
            Jeśli nie znalazłeś odpowiedniej usługi lub masz specyficzne wymagania, 
            skontaktuj się ze mną, aby omówić Twój projekt.
          </p>
          <Link href="/contact" className="btn-primary">
            <span>Skontaktuj się</span>
            <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}