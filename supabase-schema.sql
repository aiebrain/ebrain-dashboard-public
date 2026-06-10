-- Ebrain Dashboard Supabase schema
-- Supabase SQL Editor에서 실행하세요.
-- 공개 정적 배포본에서 anon key로 읽기/쓰기 가능한 데모용 스키마입니다.
-- 더 강한 보안이 필요하면 Supabase Auth를 붙이고 policy를 사용자별로 제한하세요.

create table if not exists public.dashboard_states (
  id text primary key,
  data jsonb not null default '{}'::jsonb,
  item_count integer not null default 0,
  save_reason text,
  updated_at timestamptz not null default now()
);

create table if not exists public.dashboard_snapshots (
  id uuid primary key default gen_random_uuid(),
  dashboard_id text not null references public.dashboard_states(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  item_count integer not null default 0,
  snapshot_reason text,
  created_at timestamptz not null default now()
);

create or replace function public.set_dashboard_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_dashboard_states_updated_at on public.dashboard_states;
create trigger trg_dashboard_states_updated_at
before update on public.dashboard_states
for each row
execute function public.set_dashboard_updated_at();

alter table public.dashboard_states enable row level security;
alter table public.dashboard_snapshots enable row level security;

-- 데모/공개 배포용 정책: anon 사용자가 읽고 쓸 수 있습니다.
-- 공개 URL을 아는 방문자가 같은 key(public-demo 등)에 쓰기 가능하므로,
-- 실제 운영에서는 Supabase Auth 기반 policy로 바꾸는 것을 권장합니다.
drop policy if exists "public read dashboard states" on public.dashboard_states;
create policy "public read dashboard states"
on public.dashboard_states for select
to anon
using (true);

drop policy if exists "public insert dashboard states" on public.dashboard_states;
create policy "public insert dashboard states"
on public.dashboard_states for insert
to anon
with check (true);

drop policy if exists "public update dashboard states" on public.dashboard_states;
create policy "public update dashboard states"
on public.dashboard_states for update
to anon
using (true)
with check (true);

drop policy if exists "public read dashboard snapshots" on public.dashboard_snapshots;
create policy "public read dashboard snapshots"
on public.dashboard_snapshots for select
to anon
using (true);

drop policy if exists "public insert dashboard snapshots" on public.dashboard_snapshots;
create policy "public insert dashboard snapshots"
on public.dashboard_snapshots for insert
to anon
with check (true);

-- 선택: 최초 빈 행을 만들어두고 싶으면 아래 주석을 해제하세요.
-- insert into public.dashboard_states (id, data, item_count, save_reason)
-- values ('public-demo', '{}'::jsonb, 0, 'initial')
-- on conflict (id) do nothing;
