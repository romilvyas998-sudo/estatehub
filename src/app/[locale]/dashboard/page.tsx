import { ConsumerDashboard } from '@/components/dashboards';
export default function Dashboard({ params }: { params:{locale:string} }) { return <ConsumerDashboard locale={params.locale}/>; }
