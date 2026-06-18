import { buildMetadata } from '@/lib/metadata';

// Default homepage. Per request, `/` now renders the index-three layout
// (whose hero is the index-two swiper banner). The component is re-exported
// from app/index-three/page.tsx so there's a single source of truth;
// /index-three keeps working too. Only the metadata differs (canonical `/`).
export const metadata = buildMetadata({
  title: 'Home',
  description:
    'Sonargoan University official website programs, faculty, events, admission, and campus life.',
  path: '/',
});

export { default } from './index-three/page';
