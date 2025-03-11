import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 right-0 w-72 h-72 bg-primary-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-600/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-dark-400/10 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              <span className="block">Rozwiń swój biznes</span>
              <span className="block">dzięki inteligentnym</span>
              <span className="gradient-text">rozwiązaniom IT</span>
            </h1>
            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Pomagam firmom usprawnić procesy biznesowe, 
              integrować systemy i wykorzystywać potencjał sztucznej inteligencji. 
              Specjalizuję się we wdrożeniach systemów ERP, automatyzacji i tworzeniu 
              dedykowanych rozwiązań IT.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/services" className="btn-primary">
                <span>Poznaj moje usługi</span>
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/contact" className="btn-outline">
                <span>Skontaktuj się</span>
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            
            {/* Tech stack */}
            <div className="mt-12">
              <p className="text-sm text-gray-400 mb-3">Technologie i narzędzia, z którymi pracuję:</p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">Navireo</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">Subiekt GT</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">Subiekt nexo</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">SQL</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">Power BI</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">Baselinker</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">AI</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">Automatyzacja</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">eCommerce</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">Systemy B2B</span>
                <span className="px-3 py-1 bg-dark-700/70 rounded-full text-xs text-gray-300 border border-dark-500">EDI</span>
              </div>
            </div>
          </div>
          
          {/* Hero image or 3D element */}
          <div className="relative flex justify-center">
            <div className="w-full h-full max-w-md relative">
              <div className="w-full aspect-square bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-2xl backdrop-blur-sm border border-primary-500/30 p-6 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-24 h-24 mx-auto text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 16V7.2C21 6.0799 21 5.51984 20.782 5.09202C20.5903 4.71569 20.2843 4.40973 19.908 4.21799C19.4802 4 18.9201 4 17.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V16M21 16C21 17.8856 21 18.8284 20.4142 19.4142C19.8284 20 18.8856 20 17 20H7C5.11438 20 4.17157 20 3.58579 19.4142C3 18.8284 3 17.8856 3 16M21 16V16C21 14.1144 21 13.1716 20.4142 12.5858C19.8284 12 18.8856 12 17 12L7 12C5.11438 12 4.17157 12 3.58579 12.5858C3 13.1716 3 14.1144 3 16V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <h3 className="mt-4 text-xl font-semibold text-white">Kierownik Projektów IT</h3>
                  <p className="mt-2 text-gray-300">13 lat doświadczenia we wdrożeniach i integracji systemów</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-lg backdrop-blur-sm border border-primary-500/30 p-4 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.5 2H8.5C7.11929 2 6 3.11929 6 4.5C6 5.88071 7.11929 7 8.5 7H15.5C16.8807 7 18 5.88071 18 4.5C18 3.11929 16.8807 2 15.5 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.5 22H15.5C16.8807 22 18 20.8807 18 19.5C18 18.1193 16.8807 17 15.5 17H8.5C7.11929 17 6 18.1193 6 19.5C6 20.8807 7.11929 22 8.5 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="mt-2 text-xs text-white">Automatyzacja procesów</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-500/10 rounded-lg backdrop-blur-sm border border-primary-500/30 p-4 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.13626 9.13628L4.92893 4.92896M4.92893 19.0711L9.16797 14.8321M14.8611 14.8638L19.0684 19.0711M19.0684 4.92896L14.8287 9.16862M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="mt-2 text-xs text-white">Integracja systemów</p>
                </div>
              </div>
              {/* Nowy element - Sztuczna inteligencja - TOP-LEFT */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/10 rounded-lg backdrop-blur-sm border border-primary-500/30 p-4 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 18.5V21M12 3V5.5M4.5 12H2M22 12H19.5M6.5 6.5L4.5 4.5M17.5 17.5L19.5 19.5M6.5 17.5L4.5 19.5M17.5 6.5L19.5 4.5M12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="mt-2 text-xs text-white">Sztuczna inteligencja</p>
                </div>
              </div>
              {/* Nowy element - Dedykowane rozwiązania - BOTTOM-RIGHT */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-500/10 rounded-lg backdrop-blur-sm border border-primary-500/30 p-4 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 mx-auto text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 17H15M11 21H13M8 4H16C16.9319 4 17.3978 4 17.7654 4.15224C18.2554 4.35523 18.6448 4.74458 18.8478 5.23463C19 5.60218 19 6.06812 19 7V14C19 14.9319 19 15.3978 18.8478 15.7654C18.6448 16.2554 18.2554 16.6448 17.7654 16.8478C17.3978 17 16.9319 17 16 17H8C7.06812 17 6.60218 17 6.23463 16.8478C5.74458 16.6448 5.35523 16.2554 5.15224 15.7654C5 15.3978 5 14.9319 5 14V7C5 6.06812 5 5.60218 5.15224 5.23463C5.35523 4.74458 5.74458 4.35523 6.23463 4.15224C6.60218 4 7.06812 4 8 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="mt-2 text-xs text-white">Dedykowane rozwiązania</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}