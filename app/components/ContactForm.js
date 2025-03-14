'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formType, setFormType] = useState('contact'); // 'contact' lub 'consultation'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    // Dodatkowe pola dla konsultacji
    companySize: '',
    topic: '',
    date: '',
    time: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  // Dostępne daty (w rzeczywistej implementacji byłyby pobierane z API)
  const availableDates = [
    '2025-04-01',
    '2025-04-02',
    '2025-04-03',
    '2025-04-06',
    '2025-04-07',
  ];
  
  // Dostępne godziny (w rzeczywistej implementacji byłyby pobierane dynamicznie)
  const availableTimes = [
    '09:00',
    '10:00',
    '11:00',
    '14:00',
    '15:00',
    '16:00',
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Tutaj byłaby implementacja faktycznego wysyłania formularza
    // np. za pomocą API fetch lub biblioteki axios
    
    // Symulacja wysłania formularza
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Zresetuj formularz po 3 sekundach
      setTimeout(() => {
        setSubmitStatus(null);
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          companySize: '',
          topic: '',
          date: '',
          time: ''
        });
      }, 3000);
    }, 1500);
  };
  
  return (
    <div>
      {/* Przełącznik typów formularza */}
      <div className="flex mb-6 bg-dark-800 rounded-lg p-1 w-full">
        <button
          type="button"
          className={`flex-1 py-2 rounded-md font-medium text-sm transition-all ${
            formType === 'contact'
              ? 'bg-primary-500 text-white shadow-md'
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => setFormType('contact')}
        >
          Wyślij wiadomość
        </button>
        <button
          type="button"
          className={`flex-1 py-2 rounded-md font-medium text-sm transition-all ${
            formType === 'consultation'
              ? 'bg-primary-500 text-white shadow-md'
              : 'text-gray-300 hover:text-white'
          }`}
          onClick={() => setFormType('consultation')}
        >
          Umów bezpłatną konsultację
        </button>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Status submission message */}
        {submitStatus === 'success' && (
          <div className="p-4 bg-primary-500/20 border border-primary-500/50 rounded-lg text-white">
            <p className="font-medium">Dziękuję za {formType === 'contact' ? 'wiadomość' : 'rezerwację konsultacji'}!</p>
            <p className="text-sm text-gray-300 mt-1">
              {formType === 'contact' 
                ? 'Odpowiem na Twoje zapytanie tak szybko, jak to możliwe.' 
                : `Konsultacja została zarezerwowana na ${formData.date} o godzinie ${formData.time}.`}
            </p>
          </div>
        )}
        
        {/* Podstawowe pola wspólne dla obu typów formularzy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Imię i nazwisko *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Twoje imię i nazwisko"
              className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500 w-full"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="twoj@email.pl"
              className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500 w-full"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
              Firma
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Nazwa firmy"
              className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500 w-full"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
              Telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+48 123 456 789"
              className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500 w-full"
            />
          </div>
        </div>
        
        {/* Pola specyficzne dla formularza kontaktowego */}
        {formType === 'contact' && (
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
              Wiadomość *
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="W czym mogę Ci pomóc? Opisz swój projekt lub pytanie..."
              className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500 w-full resize-none"
            ></textarea>
          </div>
        )}
        
        {/* Pola specyficzne dla formularza konsultacji */}
        {formType === 'consultation' && (
          <>
            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-1">
                Wielkość firmy
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white w-full"
              >
                <option value="">Wybierz opcję</option>
                <option value="1-10">1-10 pracowników</option>
                <option value="11-50">11-50 pracowników</option>
                <option value="51-200">51-200 pracowników</option>
                <option value="201+">201+ pracowników</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-1">
                Temat konsultacji *
              </label>
              <select
                id="topic"
                name="topic"
                required
                value={formData.topic}
                onChange={handleChange}
                className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white w-full"
              >
                <option value="">Wybierz temat</option>
                <option value="erp">Wdrożenie systemu ERP</option>
                <option value="integration">Integracja systemów</option>
                <option value="automation">Automatyzacja procesów</option>
                <option value="ai">Wykorzystanie AI w biznesie</option>
                <option value="custom">Rozwiązanie dedykowane</option>
                <option value="other">Inny temat</option>
              </select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                  Data *
                </label>
                <select
                  id="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white w-full"
                >
                  <option value="">Wybierz datę</option>
                  {availableDates.map(date => (
                    <option key={date} value={date}>{date}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
                  Godzina *
                </label>
                <select
                  id="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="bg-dark-700 border-dark-500 rounded-md focus:ring-primary-500 focus:border-primary-500 text-white w-full"
                  disabled={!formData.date}
                >
                  <option value="">Wybierz godzinę</option>
                  {availableTimes.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>
            </div>
          </>
        )}
        
        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-md font-medium transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-dark-800"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Wysyłanie...</span>
              </div>
            ) : (
              <span>
                {formType === 'contact' ? 'Wyślij wiadomość' : 'Zarezerwuj konsultację'}
              </span>
            )}
          </button>
        </div>
        
        <p className="text-xs text-gray-400 mt-4">
          * Pola wymagane
        </p>
      </form>
    </div>
  );
}
