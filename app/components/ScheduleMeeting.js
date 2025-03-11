'use client';

import { useState } from 'react';

export default function ScheduleMeeting() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companySize: '',
    topic: '',
    date: '',
    time: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // W rzeczywistej implementacji tutaj byłby kod do rezerwacji spotkania
    // oraz integracja z kalendarzem
    setStep(3); // Przejdź do potwierdzenia
  };
  
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
  
  return (
    <div className="card bg-dark-800/70 border border-dark-600 backdrop-blur-lg">
      <h2 className="text-xl font-semibold text-white mb-6">
        Umów bezpłatną konsultację (30 min)
      </h2>
      
      {/* Progress bar */}
      <div className="w-full bg-dark-600 h-1 mb-8 rounded-full overflow-hidden">
        <div 
          className="bg-primary-500 h-full rounded-full"
          style={{ width: `${step === 3 ? 100 : (step === 2 ? 66 : 33)}%` }}
        ></div>
      </div>
      
      {/* Step 1: Basic Info */}
      {step === 1 && (
        <div>
          <p className="text-gray-300 mb-6">
            Wypełnij poniższe dane, abym mógł lepiej przygotować się do naszej rozmowy.
          </p>
          <div className="space-y-4">
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
                className="input-field"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email kontaktowy *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input-field"
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
                className="input-field"
              />
            </div>
            
            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-gray-300 mb-1">
                Wielkość firmy
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                className="input-field"
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
                className="input-field"
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
            
            <div className="pt-4">
              <button
                type="button"
                onClick={nextStep}
                disabled={!formData.name || !formData.email || !formData.topic}
                className="btn-primary w-full"
              >
                Wybierz termin
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Step 2: Choose Date and Time */}
      {step === 2 && (
        <form onSubmit={handleSubmit}>
          <p className="text-gray-300 mb-6">
            Wybierz dogodny dla Ciebie termin konsultacji.
          </p>
          
          <div className="space-y-6">
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
                className="input-field"
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
                className="input-field"
                disabled={!formData.date}
              >
                <option value="">Wybierz godzinę</option>
                {availableTimes.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>
            </div>
            
            <div className="flex gap-4 pt-6">
              <button
                type="button"
                onClick={prevStep}
                className="btn-outline flex-1"
              >
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Wstecz
              </button>
              
              <button
                type="submit"
                disabled={!formData.date || !formData.time}
                className="btn-primary flex-1"
              >
                Zarezerwuj
                <svg className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </form>
      )}
      
      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-primary-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2">Spotkanie zarezerwowane!</h3>
          <p className="text-gray-300 mb-6">
            Potwierdzenie zostało wysłane na adres {formData.email}.
            Spotkanie odbędzie się {formData.date} o godzinie {formData.time}.
          </p>
          
          <div className="p-4 bg-dark-700 rounded-lg text-sm text-gray-300 mb-6">
            <p><strong>Temat:</strong> {
              formData.topic === 'erp' ? 'Wdrożenie systemu ERP' :
              formData.topic === 'integration' ? 'Integracja systemów' :
              formData.topic === 'automation' ? 'Automatyzacja procesów' :
              formData.topic === 'ai' ? 'Wykorzystanie AI w biznesie' :
              formData.topic === 'custom' ? 'Rozwiązanie dedykowane' : 'Inny temat'
            }</p>
            <p className="mt-1"><strong>Osoba:</strong> {formData.name}</p>
            <p className="mt-1"><strong>Kontakt:</strong> {formData.email}</p>
          </div>
          
          <button
            type="button"
            onClick={() => {
              setStep(1);
              setFormData({
                name: '',
                email: '',
                phone: '',
                companySize: '',
                topic: '',
                date: '',
                time: '',
              });
            }}
            className="btn-outline"
          >
            Powrót do strony głównej
          </button>
        </div>
      )}
    </div>
  );
}