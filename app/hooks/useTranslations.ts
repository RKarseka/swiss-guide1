import { useParams } from 'next/navigation';
import { en } from '../i18n/locales/en';
import { ru } from '../i18n/locales/ru';

const translations = {
  en,
  ru,
};

export const useTranslations = () => {
  const params = useParams();
  const locale = (params?.lang as string) || 'en';
  return translations[locale as keyof typeof translations];
}; 