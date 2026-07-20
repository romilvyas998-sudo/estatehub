import { InsightsExperience } from '@/components/insights-experience';
export default function Insights({params}:{params:{locale:string}}) { return <InsightsExperience locale={params.locale}/>; }
