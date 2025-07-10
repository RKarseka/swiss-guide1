import SectionComponent from '@/components/SectionComponent/SectionComponent';

export function OtherTours() {
  return (
    <SectionComponent
      header={'Our tours in Switzerland'}
      button={{ label: ' all tours', link: '/tours' }}
    ></SectionComponent>
  );
}
