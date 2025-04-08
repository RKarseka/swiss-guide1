'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { en } from './locales/en';
import { ru } from './locales/ru';

type Language = 'en' | 'ru';

type LanguageContextType = {
  language: Language;
  translations: typeof ru;
  setLanguage: (lang: Language) => void;
};

const translations = {
  en,
  ru,
};

const getStoredLanguage = (): Language => {
  if (typeof window === 'undefined') return 'ru';
  return (localStorage.getItem('language') as Language) || 'ru';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(getStoredLanguage());

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }, []);

  useEffect(() => {
    const storedLang = getStoredLanguage();
    if (storedLang !== language) {
      setLanguage(storedLang);
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        translations: translations[language],
        setLanguage: handleSetLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 