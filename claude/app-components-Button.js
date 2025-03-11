'use client';

import Link from 'next/link';

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  disabled = false,
  isLoading = false,
  onClick,
  type = 'button',
  fullWidth = false,
  ...props
}) {
  // Warianty przycisków
  const variants = {
    primary: 'bg-primary-500 hover:bg-primary-600 text-white border-transparent hover:shadow-lg',
    secondary: 'bg-dark-600 hover:bg-dark-500 text-white border border-primary-500 hover:border-primary-400',
    outline: 'bg-transparent hover:bg-primary-500/10 text-primary-400 border border-primary-500',
  };

  // Wspólne klasy dla wszystkich wariantów
  const baseClasses = 'px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center';
  
  // Klasy dla stanu disabled
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  
  // Klasy dla pełnej szerokości
  const widthClasses = fullWidth ? 'w-full' : '';
  
  // Wybrane klasy wariantu
  const variantClasses = variants[variant] || variants.primary;
  
  // Wszystkie klasy połączone
  const buttonClasses = `${baseClasses} ${variantClasses} ${disabledClasses} ${widthClasses} ${className}`;
  
  // Ikona ładowania
  const LoadingIcon = () => (
    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  );

  // Jeśli mamy atrybut href, renderujemy Link
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {isLoading && <LoadingIcon />}
        {children}
      </Link>
    );
  }

  // W przeciwnym razie renderujemy przycisk
  return (
    <button
      type={type}
      className={buttonClasses}
      disabled={disabled || isLoading}
      onClick={onClick}
      {...props}
    >
      {isLoading && <LoadingIcon />}
      {children}
    </button>
  );
}