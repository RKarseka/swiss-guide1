import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.scss';
import TourActions from '@/components/TourActions/TourActions';

type Props = {
  params: { params: { id: string; locale: string } };
};

export default async function TourPage({ params }: Props) {
  return <div></div>;
}
