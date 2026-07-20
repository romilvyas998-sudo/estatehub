'use client';

import { ListingForm } from '@/components/dashboards';
import { useRouter } from 'next/navigation';

export function ListPropertyExperience({ locale }: { locale: string }) {
  const router = useRouter();
  return <ListingForm close={() => router.push(`/${locale}/broker`)} />;
}
