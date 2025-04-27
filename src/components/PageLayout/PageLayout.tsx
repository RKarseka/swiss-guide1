import { useTranslations } from 'next-intl';
type Props = { translation: string };

export default function PageLayout({ translation }: Props) {
  const t = useTranslations(translation);

  return (
    <div className='container'>
      <div>
        <h2>{t('title')}</h2>
      </div>
    </div>
  );
}
