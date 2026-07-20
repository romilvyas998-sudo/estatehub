import { ListingsExperience } from '@/components/listings-experience';

export default function Properties({ params }: { params: { locale: string } }) { return <ListingsExperience locale={params.locale}/>; }
