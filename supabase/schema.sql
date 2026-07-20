create type public.user_role as enum ('buyer', 'broker', 'admin');
create type public.property_status as enum ('draft', 'pending', 'live', 'rejected');
create type public.property_purpose as enum ('sale', 'rent');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  role public.user_role not null default 'buyer',
  avatar_url text,
  created_at timestamptz not null default now()
);

create table public.cities (id bigint generated always as identity primary key, name text not null, state text, slug text unique not null);
create table public.areas (id bigint generated always as identity primary key, city_id bigint references public.cities(id), name text not null, slug text unique not null);

create table public.properties (
  id uuid primary key default gen_random_uuid(), broker_id uuid not null references public.profiles(id), area_id bigint references public.areas(id),
  title text not null, slug text unique not null, description text, purpose public.property_purpose not null, category text not null,
  price numeric not null, area_sqft integer, bedrooms smallint, bathrooms smallint, furnishing text, amenities text[] default '{}',
  address text, latitude numeric, longitude numeric, video_url text, availability_date date, featured boolean not null default false,
  verified boolean not null default false, status public.property_status not null default 'draft', views_count integer not null default 0,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);

create table public.property_images (id uuid primary key default gen_random_uuid(), property_id uuid not null references public.properties(id) on delete cascade, storage_path text not null, alt_text text, position smallint not null default 0);
create table public.inquiries (id uuid primary key default gen_random_uuid(), property_id uuid not null references public.properties(id) on delete cascade, sender_id uuid references public.profiles(id), name text not null, email text, phone text, message text, status text not null default 'new', created_at timestamptz not null default now());
create table public.saved_listings (user_id uuid references public.profiles(id) on delete cascade, property_id uuid references public.properties(id) on delete cascade, created_at timestamptz not null default now(), primary key (user_id, property_id));
create table public.saved_searches (id uuid primary key default gen_random_uuid(), user_id uuid not null references public.profiles(id) on delete cascade, label text not null, filters jsonb not null default '{}', alert_enabled boolean not null default true, created_at timestamptz not null default now());

alter table public.profiles enable row level security; alter table public.properties enable row level security; alter table public.property_images enable row level security; alter table public.inquiries enable row level security; alter table public.saved_listings enable row level security;
create policy "profiles visible to users" on public.profiles for select using (true);
create policy "users update own profile" on public.profiles for update using (auth.uid() = id);
create policy "live listings public" on public.properties for select using (status = 'live' or broker_id = auth.uid() or (select role from public.profiles where id = auth.uid()) = 'admin');
create policy "brokers create listings" on public.properties for insert with check (broker_id = auth.uid() and (select role from public.profiles where id = auth.uid()) in ('broker', 'admin'));
create policy "brokers manage own listings" on public.properties for update using (broker_id = auth.uid() or (select role from public.profiles where id = auth.uid()) = 'admin');
create policy "brokers delete own listings" on public.properties for delete using (broker_id = auth.uid() or (select role from public.profiles where id = auth.uid()) = 'admin');
create policy "images follow property visibility" on public.property_images for select using (exists (select 1 from public.properties p where p.id = property_id and (p.status = 'live' or p.broker_id = auth.uid())));
create policy "brokers manage own images" on public.property_images for all using (exists (select 1 from public.properties p where p.id = property_id and p.broker_id = auth.uid()));
create policy "send inquiries" on public.inquiries for insert with check (true);
create policy "brokers read listing inquiries" on public.inquiries for select using (exists (select 1 from public.properties p where p.id = property_id and p.broker_id = auth.uid()));
create policy "users manage saved listings" on public.saved_listings for all using (user_id = auth.uid()) with check (user_id = auth.uid());

insert into storage.buckets (id, name, public) values ('property-images', 'property-images', true) on conflict do nothing;
create policy "public image read" on storage.objects for select using (bucket_id = 'property-images');
create policy "broker image upload" on storage.objects for insert with check (bucket_id = 'property-images' and auth.role() = 'authenticated');
