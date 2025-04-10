import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

type TranslationKey = keyof typeof translations.ru;

export function useTranslations() {
  const { language } = useLanguage();
  const currentTranslations = translations[language];

  return (key: string) => {
    const keys = key.split('.');
    let value: any = currentTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key;
      }
    }
    
    return value || key;
  };
} 