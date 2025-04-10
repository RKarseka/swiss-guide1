import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

export function useTranslations() {
  const { language } = useLanguage();
  return translations[language];
} 