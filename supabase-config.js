// Ebrain Dashboard Supabase 설정 파일
// 1) Supabase 프로젝트 생성
// 2) supabase-schema.sql 실행
// 3) Project Settings > API에서 Project URL과 anon public key를 아래에 입력
//
// anon public key는 브라우저에 노출되는 공개 키입니다.
// service_role key는 절대 여기에 넣지 마세요.

window.EBRAIN_SUPABASE = {
  enabled: false,
  url: 'https://YOUR_PROJECT_REF.supabase.co',
  anonKey: 'YOUR_SUPABASE_ANON_KEY',
  table: 'dashboard_states',
  snapshotTable: 'dashboard_snapshots',
  key: 'public-demo'
};
