import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Wdrożenie Navireo ERP w firmie handlowej",
      description: "Kompleksowe wdrożenie systemu Navireo ERP dla firmy handlowej zatrudniającej 50 pracowników. Projekt obejmował integrację z istniejącym sklepem internetowym, szkolenia pracowników oraz migrację danych z poprzedniego systemu.",
      tech: ["Navireo ERP", "SQL", "API Integration", "eCommerce"],
      link: "/projects/1",
    },
    {
      title: "Automatyzacja procesów logistycznych",
      description: "Stworzenie systemu automatyzującego procesy logistyczne w firmie produkcyjnej, pozwalającego na śledzenie przesyłek, zarządzanie magazynem i optymalizację tras dostawy. Rozwiązanie zredukowało czas realizacji zamówień o 40%.",
      tech: ["Subiekt nexo", "Baselinker", "Python", "Power Automate"],
      link: "/projects/2",
    },
    {
      title: "Integracja systemu B2B z Subiekt GT",
      description: "Zaprojektowanie i wdrożenie integracji między platformą B2B klienta a systemem Subiekt GT, umożliwiającą automatyczną synchronizację zamówień, stanów magazynowych i cen. Integracja zwiększyła sprzedaż B2B o 35% w ciągu pierwszych 6 miesięcy.",
      tech: ["Subiekt GT", "API", "XML/JSON", "SQL"],
      link: "/projects/3",
    },
    {
      title: "Wdrożenie AI do analizy danych sprzedażowych",
      description: "Implementacja rozwiązania wykorzystującego sztuczną inteligencję do analizy danych sprzedażowych, identyfikacji trendów i automatycznego tworzenia prognoz. System pomógł klientowi zoptymalizować stany magazynowe i zwiększyć marże o 12%.",
      tech: ["Machine Learning", "Python", "PowerBI", "SQL"],
      link: "/projects/4",
    },
    {
      title: "Migracja z Subiekt GT do Navireo",
      description: "Przeprowadzenie kompleksowej migracji z Subiekt GT do systemu Navireo ERP dla firmy handlowo-usługowej. Projekt obejmował transfer danych historycznych, konfigurację nowego systemu i szkolenia dla 25 pracowników.",
      tech: ["Navireo ERP", "Subiekt GT", "SQL", "ETL"],
      link: "/projects/5",
    },
    {
      title: "Automatyzacja procesu fakturowania",
      description: "Stworzenie zautomatyzowanego systemu fakturowania dla firmy usługowej, integrującego dane z różnych źródeł i generującego faktury zgodnie z ustalonymi harmonogramami. Rozwiązanie skróciło czas poświęcany na fakturowanie o 80%.",
      tech: ["Subiekt nexo", "Microsoft Power Automate", "Excel", "API"],
      link: "/projects/6",
    },
  ];

  return (
    <div className="pt-20">
      {/* Header section */}
      <div className="bg-dark-700 py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Realizacje i projekty
            </h1>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              W ciągu 13 lat doświadczenia zrealizowałem liczne projekty wdrożeń systemów ERP, 
              integracji i automatyzacji procesów. Poznaj wybrane case studies.
            </p>
          </div>
        </div>
      </div>
      
      {/* Projects list */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-dark-800 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Chcesz podobnych rezultatów dla swojej firmy?
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Każdy projekt jest inny, ale wszystkie łączy jedno - przynoszą realne korzyści 
            biznesowe. Porozmawiajmy o tym, jak mogę pomóc rozwinąć Twoją firmę.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="btn-primary">
              <span>Skontaktuj się</span>
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="/services" className="btn-outline">
              <span>Zobacz moje usługi</span>
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}