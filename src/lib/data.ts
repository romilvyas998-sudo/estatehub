export type Property = {
  id: string; slug: string; title: string; locality: string; city: string; price: number; priceLabel: string;
  purpose: 'sale' | 'rent'; category: 'Apartment' | 'Villa' | 'Plot' | 'Commercial' | 'PG'; beds: number; baths: number;
  area: number; furnishing: 'Furnished' | 'Semi-furnished' | 'Unfurnished'; featured?: boolean; verified?: boolean;
  image: string; gallery: string[]; tags: string[]; amenities: string[]; postedBy: string; views: number; saves: number;
  description: string; availability: string; coordinates: [number, number];
};

export const properties: Property[] = [
  {
    id: 'prop-aurora', slug: 'aurora-residence-golf-course-road', title: 'Aurora Residence', locality: 'Golf Course Road', city: 'Gurugram', price: 28500000, priceLabel: '₹2.85 Cr', purpose: 'sale', category: 'Apartment', beds: 3, baths: 3, area: 1850, furnishing: 'Semi-furnished', featured: true, verified: true,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85', gallery: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85','https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85'], tags: ['Corner unit', 'Ready to move'], amenities: ['Clubhouse','Infinity pool','Concierge','EV charging','24/7 security'], postedBy: 'Arjun Mehra', views: 1284, saves: 86, description: 'A quiet, high-floor home framed by mature greens and the city skyline. Thoughtful proportions, generous light, and the calm of a private residence.', availability: 'Available now', coordinates: [28.4595, 77.0266]
  },
  {
    id: 'prop-casa', slug: 'casa-lumiere-dlf-phase-4', title: 'Casa Lumière', locality: 'DLF Phase 4', city: 'Gurugram', price: 140000, priceLabel: '₹1.40 L / mo', purpose: 'rent', category: 'Villa', beds: 4, baths: 4, area: 3200, furnishing: 'Furnished', featured: true, verified: true,
    image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=85', gallery: ['https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1800&q=85','https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85'], tags: ['Private garden', 'Pet friendly'], amenities: ['Private garden','Home theatre','Power backup','2 car parks','Smart lock'], postedBy: 'Naina Kapoor', views: 946, saves: 62, description: 'A fully furnished family villa with a leafy private garden, warm material palette and easy access to the city’s best schools and social clubs.', availability: 'From 01 Aug 2026', coordinates: [28.4666, 77.0885]
  },
  {
    id: 'prop-nest', slug: 'the-nest-sector-57', title: 'The Nest at Fifty Seven', locality: 'Sector 57', city: 'Gurugram', price: 16400000, priceLabel: '₹1.64 Cr', purpose: 'sale', category: 'Apartment', beds: 2, baths: 2, area: 1320, furnishing: 'Furnished', verified: true,
    image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1600&q=85', gallery: ['https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85','https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85'], tags: ['Sunlit', 'Low density'], amenities: ['Rooftop deck','Gym','Kids play area','Visitor parking'], postedBy: 'Rhea Bansal', views: 628, saves: 49, description: 'An intelligent two-bedroom home in a boutique, low-density community. Soft interiors and a sunlit balcony make everyday living feel effortless.', availability: 'Available now', coordinates: [28.422, 77.078]
  },
  {
    id: 'prop-olive', slug: 'olive-courtyard-sector-43', title: 'Olive Courtyard', locality: 'Sector 43', city: 'Gurugram', price: 94000, priceLabel: '₹94,000 / mo', purpose: 'rent', category: 'Apartment', beds: 3, baths: 3, area: 1780, furnishing: 'Semi-furnished', featured: true,
    image: 'https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1600&q=85', gallery: ['https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85'], tags: ['Near metro', 'Garden view'], amenities: ['Swimming pool','Gym','Park view','24/7 security'], postedBy: 'Vikram Sethi', views: 431, saves: 31, description: 'An airy, practical three-bedroom apartment moments from the metro, with a green outlook and a well-run community.', availability: 'Available now', coordinates: [28.452, 77.083]
  },
  {
    id: 'prop-vertex', slug: 'vertex-one-cyber-city', title: 'Vertex One', locality: 'Cyber City', city: 'Gurugram', price: 315000, priceLabel: '₹3.15 L / mo', purpose: 'rent', category: 'Commercial', beds: 0, baths: 2, area: 4100, furnishing: 'Furnished', verified: true,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85', gallery: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85'], tags: ['Plug & play', 'Grade A'], amenities: ['Meeting rooms','Reception','Cafeteria','High speed lifts'], postedBy: 'Urban Spaces', views: 322, saves: 19, description: 'A move-in-ready, design-led workplace that brings teams together in the heart of Cyber City.', availability: 'Available now', coordinates: [28.495, 77.088]
  },
  {
    id: 'prop-terrace', slug: 'terrace-house-sushant-lok', title: 'Terrace House', locality: 'Sushant Lok I', city: 'Gurugram', price: 42000000, priceLabel: '₹4.20 Cr', purpose: 'sale', category: 'Villa', beds: 5, baths: 5, area: 4800, furnishing: 'Furnished', verified: true,
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85', gallery: ['https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1600&q=85','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85'], tags: ['Terrace garden', 'Independent'], amenities: ['Terrace garden','Staff room','Solar panels','Private lift'], postedBy: 'Ananya Realty', views: 507, saves: 72, description: 'A grand, independent residence with generous entertaining spaces and a beautifully planted rooftop garden.', availability: 'Available now', coordinates: [28.459, 77.072]
  }
];

export const cityHighlights = [
  { name: 'Golf Course Road', count: '142 homes', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80' },
  { name: 'DLF Phase 4', count: '86 homes', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Sector 43', count: '74 homes', image: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=900&q=80' }
];

export function getProperty(slug: string) { return properties.find((property) => property.slug === slug); }
