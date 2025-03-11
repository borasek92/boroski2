import Hero from './components/Hero';
import Link from 'next/link';
import ServiceCard from './components/ServiceCard';
import ProjectCard from './components/ProjectCard';

export default function Home() {
  // Przykładowe dane usług
  const services = [
    {
      title: "Wdrożenia systemów ERP",
      description: "Kompleksowe wdrożenia i migracje do systemów Navireo oraz Subiekt GT/nexo, dostosowane do indywidualnych potrzeb Twojej firmy.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 14H14V21M10 14H3V21M10 3H3V10M21 3H14V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "/services#erp"
    },
    {
      title: "Integracja systemów",
      description: "Łączenie systemów ERP ze sklepami internetowymi, platformą Baselinker, systemami B2B i innymi zewnętrznymi narzędziami.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 2H8.5C7.11929 2 6 3.11929 6 4.5C6 5.88071 7.11929 7 8.5 7H15.5C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8.5 22H15.5C16.8807 22 18 20.8807 18 19.5C18 18.1193 16.8807 17 15.5 17H8.5C7.11929 17 6 18.1193 6 19.5C6 20.8807 7.11929 22 8.5 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "/services#integration"
    },
    {
      title: "Automatyzacja procesów",
      description: "Projektowanie i wdrażanie rozwiązań automatyzujących powtarzalne zadania, co pozwala oszczędzić czas i zminimalizować błędy.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "/services#automation"
    },
    {
      title: "AI w biznesie",
      description: "Implementacja rozwiązań wykorzystujących sztuczną inteligencję do optymalizacji procesów biznesowych i wspomagania podejmowania decyzji.",
      icon: (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      link: "/services#ai"
    },
  ];
  
  // Przykładowe projekty
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
      reverse: true,
    },
  ];
  
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Usługi</h2>
            <h3 className="section-title">Jak mogę pomóc Twojej firmie?</h3>
            <p className="max-w-3xl mx-auto text-gray-300">
              Specjalizuję się w dostarczaniu kompleksowych rozwiązań IT, które wspierają 
              rozwój biznesu i usprawniają codzienne operacje.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="btn-outline">
              <span>Zobacz wszystkie usługi</span>
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="py-20 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-subtitle">Realizacje</h2>
            <h3 className="section-title">Wybrane projekty</h3>
            <p className="max-w-3xl mx-auto text-gray-300">
              Przez 13 lat mojej kariery miałem przyjemność pracować z wieloma firmami, 
              wdrażając rozwiązania, które realnie wpłynęły na ich wzrost i efektywność.
            </p>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                link={project.link}
                reverse={project.reverse}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-outline">
              <span>Zobacz więcej realizacji</span>
              <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-800 backdrop-blur-sm">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Gotowy na transformację cyfrową Twojej firmy?
                  </h2>
                  <p className="text-white/90 text-lg mb-8">
                    Umów się na bezpłatną 30-minutową konsultację, podczas której omówimy potrzeby Twojej 
                    firmy i zaproponuję rozwiązania, które pomogą Ci osiągnąć Twoje cele biznesowe.
                  </p>
                  <Link href="/contact" className="btn-secondary bg-white text-primary-600 hover:bg-gray-100">
                    <span>Skontaktuj się ze mną</span>
                    <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                
                <div className="hidden lg:block">
                  <svg className="h-64 w-64 mx-auto text-white/20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17H15M9 17C7.89543 17 7 16.1046 7 15V9C7 7.89543 7.89543 7 9 7H15C16.1046 7 17 7.89543 17 9V15C17 16.1046 16.1046 17 15 17M9 17L5 21M15 17L19 21M12 12H12.01M19 2V4M21 4L19 6M22 7H20M5 2V4M3 4L5 6M2 7H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}