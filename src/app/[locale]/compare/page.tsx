import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Bath, BedDouble, Check, MapPin, Maximize2, ShieldCheck } from 'lucide-react';
import { properties } from '@/lib/data';

const rows = [
  ['Price', (p: typeof properties[number]) => p.priceLabel],
  ['Location', (p: typeof properties[number]) => `${p.locality}, ${p.city}`],
  ['Property type', (p: typeof properties[number]) => p.category],
  ['Bedrooms', (p: typeof properties[number]) => p.beds || '—'],
  ['Bathrooms', (p: typeof properties[number]) => p.baths],
  ['Built-up area', (p: typeof properties[number]) => `${p.area.toLocaleString()} sq. ft.`],
  ['Furnishing', (p: typeof properties[number]) => p.furnishing],
  ['Availability', (p: typeof properties[number]) => p.availability]
];

export default function Compare({ params, searchParams }: { params: { locale: string }; searchParams: { ids?: string } }) {
  const ids = searchParams.ids?.split(',').slice(0,3) ?? properties.slice(0,2).map(p=>p.id); const selected = properties.filter(property=>ids.includes(property.id));
  return <main className="page-shell py-8 md:py-12"><Link href={`/${params.locale}/properties`} className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-gold dark:text-slate-300"><ArrowLeft size={16}/> Back to listings</Link><div className="mt-6"><p className="eyebrow">Side-by-side</p><h1 className="section-title">Compare what matters.</h1><p className="mt-3 text-sm text-slate-500 dark:text-slate-400">A quiet, clear view of your shortlisted homes.</p></div><div className="mt-9 overflow-x-auto rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/5"><table className="w-full min-w-[760px] text-left"><thead><tr className="align-bottom"><th className="w-44 p-5 text-xs font-bold uppercase tracking-[.13em] text-slate-400">Property</th>{selected.map(property=><th className="min-w-[230px] p-5" key={property.id}><div className="relative mb-4 aspect-[1.45/1] overflow-hidden rounded-2xl"><Image src={property.image} alt={property.title} fill className="object-cover"/></div><h2 className="font-serif text-2xl font-bold text-ink dark:text-white">{property.title}</h2><p className="mt-1 text-xs font-medium text-slate-500">{property.purpose==='sale'?'For sale':'For rent'} · {property.category}</p><Link href={`/${params.locale}/properties/${property.slug}`} className="mt-4 inline-flex rounded-lg bg-ink px-3 py-2 text-xs font-bold text-white dark:bg-gold dark:text-ink">View listing</Link></th>)}</tr></thead><tbody>{rows.map(([label,getValue])=><tr className="border-t border-slate-100 dark:border-white/10" key={label as string}><th className="p-5 text-sm font-bold text-slate-500 dark:text-slate-300">{label as string}</th>{selected.map(property=><td className="p-5 text-sm font-semibold text-ink dark:text-white" key={property.id}>{(getValue as (p: typeof properties[number])=>string|number)(property)}</td>)}</tr>)}<tr className="border-t border-slate-100 dark:border-white/10"><th className="p-5 text-sm font-bold text-slate-500 dark:text-slate-300">Key amenities</th>{selected.map(property=><td className="p-5" key={property.id}><div className="flex flex-wrap gap-2">{property.amenities.slice(0,4).map(item=><span key={item} className="flex items-center gap-1 rounded-lg bg-[#edf3ef] px-2 py-1 text-[11px] font-semibold text-moss dark:bg-white/10 dark:text-[#a7d5b8]"><Check size={11}/>{item}</span>)}</div></td>)}</tr></tbody></table></div></main>;
}
