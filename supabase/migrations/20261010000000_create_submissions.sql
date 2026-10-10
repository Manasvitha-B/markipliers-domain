create table if not exists public.submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(name) between 1 and 100),
  email text not null check (char_length(email) between 1 and 255),
  favorite_video text not null check (char_length(favorite_video) between 1 and 200),
  message text not null check (char_length(message) between 1 and 1000),
  created_at timestamptz not null default now()
);

alter table public.submissions enable row level security;

grant usage on schema public to anon, authenticated;
revoke all on table public.submissions from anon, authenticated;
grant insert (name, email, favorite_video, message)
  on table public.submissions to anon, authenticated;
grant select (id, name, favorite_video, message, created_at)
  on table public.submissions to anon, authenticated;

drop policy if exists "Anyone can submit community messages" on public.submissions;
create policy "Anyone can submit community messages"
  on public.submissions
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Anyone can read community messages" on public.submissions;
create policy "Anyone can read community messages"
  on public.submissions
  for select
  to anon, authenticated
  using (true);
