# EstateHub

EstateHub is a modern local real-estate listing platform built with Next.js 14, Tailwind CSS, Framer Motion, and a Supabase-ready backend layer.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000/en` for English or `http://localhost:3000/hi` for Hindi.

## Main pages

- `/en` — home and property discovery
- `/en/properties` — searchable, filterable grid and map view
- `/en/properties/[slug]` — property detail, gallery, amenities and EMI estimator
- `/en/list-property` — landlord/broker multi-step property listing form
- `/en/login` — buyer and landlord account sign-in/sign-up flow
- `/en/dashboard` — consumer saved homes, searches and inquiries
- `/en/broker` — broker inventory, leads and analytics
- `/en/admin` — listing approval workspace
- `/en/insights` — local real-estate content

## Supabase setup

1. Create a Supabase project.
2. Copy `.env.example` to `.env.local` and add the project URL and anonymous key.
3. Run `supabase/schema.sql` in the Supabase SQL editor.
4. Enable email/OTP or Google authentication in Supabase Auth.

The schema includes profiles, properties, images, inquiries, saved listings/searches, RLS policies, and the `property-images` storage bucket.

## Deployment

Push this repository to GitHub and import it into Vercel. Add the same Supabase environment variables in the Vercel project settings before deployment.
