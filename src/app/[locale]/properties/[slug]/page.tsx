import { PropertyDetailExperience } from '@/components/property-detail-experience';
import { getProperty, properties } from '@/lib/data';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export function generateStaticParams() { return properties.flatMap((property) => [{ locale: 'en', slug: property.slug }, { locale: 'hi', slug: property.slug }]); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata { const property = getProperty(params.slug); return property ? { title: `${property.title} in ${property.locality} | EstateHub`, description: `${property.beds || ''} bed ${property.category} for ${property.purpose} in ${property.locality}. ${property.priceLabel}.`, openGraph: { images: [property.image] } } : {}; }
export default function PropertyPage({ params }: { params: { locale: string; slug: string } }) { const property = getProperty(params.slug); if (!property) notFound(); return <PropertyDetailExperience property={property} locale={params.locale}/>; }
