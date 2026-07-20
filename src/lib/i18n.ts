export const locales = ['en', 'hi'] as const;
export type Locale = (typeof locales)[number];

const copy = {
  en: {
    find: 'Find a place that feels like home.',
    explore: 'Explore homes',
    sell: 'List your property',
    featured: 'Curated for you',
    featuredTitle: 'Homes with a point of view.',
    browse: 'Browse all properties',
    search: 'Search location, landmark or project',
    rent: 'Rent', sale: 'Buy', login: 'Sign in', dashboard: 'Dashboard'
  },
  hi: {
    find: 'ऐसी जगह खोजें जो घर जैसी लगे।',
    explore: 'घर देखें',
    sell: 'अपनी प्रॉपर्टी सूचीबद्ध करें',
    featured: 'आपके लिए चुना गया',
    featuredTitle: 'खास नज़र वाले घर।',
    browse: 'सभी प्रॉपर्टी देखें',
    search: 'स्थान, लैंडमार्क या प्रोजेक्ट खोजें',
    rent: 'किराया', sale: 'खरीदें', login: 'साइन इन', dashboard: 'डैशबोर्ड'
  }
} as const;

export function t(locale: string) { return copy[locale as Locale] ?? copy.en; }
