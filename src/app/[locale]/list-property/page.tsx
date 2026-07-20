import { ListPropertyExperience } from '@/components/list-property-experience';

export default function ListPropertyPage({ params }: { params: { locale: string } }) {
  return <ListPropertyExperience locale={params.locale} />;
}
