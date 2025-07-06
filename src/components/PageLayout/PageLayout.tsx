import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
type Props = { title: string; children: React.ReactNode };

export default function PageLayout({ title, children }: Props) {
  return (
    <div className='container'>
      <Breadcrumbs title={title}></Breadcrumbs>
      <div>
        <h2>{title}</h2>
      </div>
      <div>{children}</div>
    </div>
  );
}
