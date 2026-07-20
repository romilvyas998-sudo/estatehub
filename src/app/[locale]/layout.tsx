import { Footer, SiteHeader } from '@/components/site-chrome';
import { locales } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return locales.map((locale) => ({ locale })); }

export default function LocaleLayout({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  if (!locales.includes(params.locale as (typeof locales)[number])) notFound();
  return <><SiteHeader locale={params.locale} />{children}<Footer locale={params.locale} /></>;
}
