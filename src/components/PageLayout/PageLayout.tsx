import { useTranslations } from 'next-intl';
type Props = { translation: string; children: React.ReactNode };

export default function PageLayout({ translation, children }: Props) {
  const t = useTranslations(translation);

  return (
    <div className='container'>
      <div>
        <h2>{t('title')}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
