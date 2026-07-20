import { AuthExperience } from '@/components/auth-experience';
export default function Login({ params }: { params: { locale: string } }) { return <AuthExperience locale={params.locale}/>; }
