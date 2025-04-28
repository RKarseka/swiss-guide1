import { useTranslations } from 'next-intl';
type Props = { title: string; children: React.ReactNode };

export default function PageLayout({ title, children }: Props) {
  return (
    <div className='container'>
      <div>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
