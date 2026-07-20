import { HomeExperience } from '@/components/home-experience';

export default function Home({ params }: { params: { locale: string } }) { return <HomeExperience locale={params.locale}/>; }
