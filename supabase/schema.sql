-- Enable realtime extension (optional, for live products)
-- create extension if not exists pg_net;
-- create extension if not exists supabase_vault;

-- Table: products
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  price text not null,
  currency text not null default 'ل.س',
  category text not null,
  condition text not null,
  location text not null,
  image_url text not null,
  badge text,
  description text,
  specs jsonb default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable RLS
alter table public.products enable row level security;

-- Public read access for products
create policy "Products are viewable by everyone"
  on public.products for select
  using ( true );

-- Table: favorites (user-specific)
create table if not exists public.favorites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  product_id uuid not null references public.products(id) on delete cascade,
  created_at timestamptz not null default now(),
  unique (user_id, product_id)
);

alter table public.favorites enable row level security;

create policy "Users manage own favorites"
  on public.favorites for all
  using ( auth.uid() = user_id );

-- Indexes
create index if not exists idx_products_category on public.products(category);
create index if not exists idx_products_created_at on public.products(created_at desc);
