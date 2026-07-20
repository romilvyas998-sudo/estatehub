import { BrokerDashboard } from '@/components/dashboards';
export default function Broker({ params }: { params:{locale:string} }) { return <BrokerDashboard locale={params.locale}/>; }
