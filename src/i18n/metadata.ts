import { Metadata } from 'next';

export const getMetadata = (locale: string): Metadata => {
  const metadata: Record<string, Metadata> = {
    ru: {
      title: 'Swiss Guide - Путеводитель по Швейцарии',
      description: 'Туры и экскурсии по Швейцарии. Индивидуальные и групповые туры с русскоговорящим гидом.',
      keywords: 'Швейцария, туры, экскурсии, гид, русскоговорящий гид, Женева, Монтре, Лозанна',
      openGraph: {
        title: 'Swiss Guide - Путеводитель по Швейцарии',
        description: 'Туры и экскурсии по Швейцарии. Индивидуальные и групповые туры с русскоговорящим гидом.',
        locale: 'ru_RU',
        type: 'website',
      },
    },
    en: {
      title: 'Swiss Guide - Your Guide to Switzerland',
      description: 'Tours and excursions in Switzerland. Private and group tours with an English-speaking guide.',
      keywords: 'Switzerland, tours, excursions, guide, English-speaking guide, Geneva, Montreux, Lausanne',
      openGraph: {
        title: 'Swiss Guide - Your Guide to Switzerland',
        description: 'Tours and excursions in Switzerland. Private and group tours with an English-speaking guide.',
        locale: 'en_US',
        type: 'website',
      },
    },
  };

  return metadata[locale] || metadata.en;
};
