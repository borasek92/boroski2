import ContactForm from '../components/ContactForm';
import ScheduleMeeting from '../components/ScheduleMeeting';

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Header section */}
      <div className="bg-dark-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Kontakt
            </h1>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg">
              Masz pytanie lub chcesz omówić potencjalną współpracę? Skontaktuj się ze mną!
              Jestem dostępny zarówno przez formularz kontaktowy, jak i bezpośrednio przez telefon lub email.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Formularz kontaktowy */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Wyślij wiadomość
            </h2>
            <ContactForm />
          </div>
          
          {/* Kalendarz spotkań */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">
              Umów bezpłatną konsultację
            </h2>
            <ScheduleMeeting />
          </div>
        </div>
        
        {/* Informacje kontaktowe */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Dane kontaktowe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <a href="mailto:kontakt@example.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                kontakt@example.com
              </a>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.549 20.915 20.3868C21.0255 20.1949 21.0408 19.9727 21.0713 19.5282C21.119 18.8708 21.119 18.1291 21 17.5C20.9145 17.0950 20.8096 16.8812 20.6175 16.6919C20.4483 16.5252 20.2303 16.4231 19.8232 16.3205L15.8232 15.3205C15.4051 15.2133 15.1646 15.163 14.908 15.227C14.6888 15.2812 14.4819 15.4184 14.3255 15.6347C14.1463 15.8806 14.0611 16.2509 13.8905 16.9916C12.9889 16.5443 12.1987 15.9286 11.5615 15.2L8.8 12.4C8.0714 11.7628 7.45566 10.9726 7.00837 10.071C7.7491 9.90043 8.11942 9.81518 8.36531 9.63598C8.58163 9.47959 8.71877 9.27271 8.77287 9.05353C8.8369 8.79687 8.78657 8.55645 8.67942 8.13825L7.67942 4.13825C7.57681 3.73116 7.47462 3.51326 7.30787 3.34409C7.11858 3.15202 6.90478 3.04713 6.49975 3.00001C5.87089 2.88113 5.12911 2.88113 4.50025 3.00001C4.05584 3.05243 3.83364 3.06764 3.64172 3.17818C3.47956 3.27461 3.33205 3.43012 3.23762 3.6141C3.12895 3.83221 3.11386 4.08736 3.08368 4.59765C3.02825 5.00539 3 5.24358 3 5.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Telefon</h3>
              <a href="tel:+48123456789" className="text-primary-400 hover:text-primary-300 transition-colors">
                +48 123 456 789
              </a>
            </div>
            
            <div className="card text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Godziny pracy</h3>
              <p className="text-gray-300">
                Poniedziałek - Piątek<br />
                8:00 - 16:00
              </p>
            </div>
          </div>
        </div>
        
        {/* Mapa lub sekcja FAQ */}
        <div className="mt-16">
          <div className="card bg-dark-800/70">
            <h2 className="text-2xl font-bold text-white mb-6">
              Często zadawane pytania
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-2">
                  Czy pracujesz tylko z firmami z Polski?
                </h3>
                <p className="text-gray-300">
                  Nie, współpracuję z firmami z całej Europy. Wdrożenia mogą być prowadzone zdalnie, 
                  choć w niektórych przypadkach spotkania osobiste są zalecane.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-2">
                  Jak wygląda proces współpracy?
                </h3>
                <p className="text-gray-300">
                  Proces rozpoczyna się od bezpłatnej konsultacji, podczas której omawiam potrzeby Twojej firmy. 
                  Następnie przygotowuję szczegółową ofertę z harmonogramem i wyceną. Po akceptacji przystępujemy 
                  do realizacji projektu.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-2">
                  Czy oferujesz wsparcie po wdrożeniu?
                </h3>
                <p className="text-gray-300">
                  Tak, oferuję różne pakiety wsparcia powdrożeniowego, które obejmują pomoc techniczną, 
                  szkolenia i dalszy rozwój systemu. Szczegóły ustalane są indywidualnie w zależności od potrzeb klienta.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-primary-400 mb-2">
                  Czy podejmujesz się mniejszych projektów lub pojedynczych zadań?
                </h3>
                <p className="text-gray-300">
                  Tak, podejmuję się również mniejszych projektów, takich jak integracja konkretnych systemów, 
                  automatyzacja wybranego procesu czy stworzenie dedykowanego raportu lub dashboardu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}