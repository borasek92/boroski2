import Link from 'next/link';

export default function AboutPage() {
  // Doświadczenie zawodowe
  const experience = [
    {
      period: "2019 - obecnie",
      title: "Kierownik projektów IT",
      company: "Firma Konsultingowa XYZ",
      description: "Odpowiedzialność za kompleksowe wdrożenia systemów ERP, zarządzanie budżetem projektu, planowanie i koordynacja prac zespołów projektowych, komunikacja z klientem."
    },
    {
      period: "2015 - 2019",
      title: "Starszy konsultant wdrożeniowy",
      company: "ERP Solutions Sp. z o.o.",
      description: "Prowadzenie wdrożeń systemów Navireo i Subiekt nexo, szkolenia użytkowników, projektowanie rozwiązań dostosowanych do potrzeb klienta, integracja z zewnętrznymi systemami."
    },
    {
      period: "2012 - 2015",
      title: "Konsultant ds. systemów ERP",
      company: "IT Services S.A.",
      description: "Wsparcie techniczne i implementacja systemów ERP, analiza procesów biznesowych, tworzenie dokumentacji technicznej, prowadzenie szkoleń dla użytkowników końcowych."
    },
  ];
  
  // Umiejętności
  const skills = [
    {
      category: "Systemy ERP",
      items: ["Navireo", "Subiekt GT/nexo", "Optima", "Microsoft Dynamics"]
    },
    {
      category: "Technologie",
      items: ["SQL", "API", "Python", "VBA", "Power Automate", "PowerBI"]
    },
    {
      category: "E-commerce",
      items: ["Shoper", "PrestaShop", "WooCommerce", "Baselinker", "Allegro API"]
    },
    {
      category: "Zarządzanie projektami",
      items: ["PRINCE2", "Agile/Scrum", "Microsoft Project", "Trello", "Jira"]
    },
  ];
  
  // Certyfikaty
  const certificates = [
    "PRINCE2 Foundation",
    "Navireo Certified Specialist",
    "InsERT Certified Partner",
    "Microsoft Power Platform Fundamentals",
    "Google Analytics Certified"
  ];

  return (
    <div className="pt-20">
      {/* Hero section */}
      <div className="bg-dark-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3">
              <div className="w-64 h-64 rounded-full bg-gradient-to-r from-primary-500/20 to-primary-600/20 p-1">
                <div className="w-full h-full rounded-full bg-dark-600 flex items-center justify-center">
                  <svg className="w-24 h-24 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Bartłomiej Boroski
              </h1>
              <p className="text-xl text-primary-400 mb-6">
                Kierownik Projektów IT | Ekspert wdrożeń ERP
              </p>
              <p className="text-gray-300 max-w-2xl">
                Posiadam 13 lat doświadczenia we wdrożeniach systemów ERP, integracji z zewnętrznymi narzędziami
                i automatyzacji procesów biznesowych. Specjalizuję się w systemach Navireo oraz Subiekt GT/nexo,
                a także w wykorzystaniu sztucznej inteligencji w biznesie.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* O mnie */}
          <section>
            <h2 className="section-title">O mnie</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Jestem doświadczonym kierownikiem projektów IT z silnym naciskiem na wdrożenia systemów ERP
                oraz integrację różnych narzędzi biznesowych. Przez ostatnie 13 lat miałem przyjemność współpracować
                z firmami różnej wielkości, od małych przedsiębiorstw po duże organizacje, pomagając im wykorzystać
                potencjał technologii do optymalizacji procesów biznesowych.
              </p>
              <p>
                Specjalizuję się w systemach Navireo oraz Subiekt GT/nexo, które poznałem od podszewki. Moją pasją
                jest łączenie tych systemów z innymi narzędziami, takimi jak sklepy internetowe, platforma Baselinker czy
                systemy B2B, aby stworzyć zintegrowane środowisko, w którym dane przepływają automatycznie i bez zakłóceń.
              </p>
              <p>
                W ostatnich latach skupiłem się również na wykorzystaniu sztucznej inteligencji w biznesie, pomagając
                firmom wdrażać rozwiązania AI do analizy danych, automatyzacji zadań i usprawniania procesów decyzyjnych.
                Wierzę, że odpowiednio wdrożona technologia może znacząco przyczynić się do rozwoju firmy i jej przewagi konkurencyjnej.
              </p>
              <p>
                W mojej pracy stawiam na transparentność, komunikację i zrozumienie potrzeb klienta. Każdy projekt
                traktuję indywidualnie, dostosowując rozwiązania do specyfiki danej firmy i jej celów biznesowych.
              </p>
            </div>
          </section>
          
          {/* Doświadczenie */}
          <section>
            <h2 className="section-title">Doświadczenie zawodowe</h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="card hover:bg-dark-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                      <p className="text-primary-400">{job.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300">
                        {job.period}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{job.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Umiejętności */}
          <section>
            <h2 className="section-title">Umiejętności</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="card hover:bg-dark-700">
                  <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-dark-600 rounded-full text-sm text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Certyfikaty */}
          <section>
            <h2 className="section-title">Certyfikaty</h2>
            <div className="card">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mt-1 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-gray-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-bold text-white mb-6">
              Gotowy na współpracę?
            </h2>
            <p className="max-w-2xl mx-auto text-gray-300 mb-8">
              Jeśli szukasz eksperta, który pomoże Ci wdrożyć system ERP, zintegrować różne narzędzia
              lub zautomatyzować procesy biznesowe, jestem do Twojej dyspozycji. Skontaktuj się ze mną,
              aby omówić Twój projekt.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                <span>Skontaktuj się</span>
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/services" className="btn-outline">
                <span>Zobacz moje usługi</span>
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}