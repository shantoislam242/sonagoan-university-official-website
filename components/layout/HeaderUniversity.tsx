import SUNavbar from './SUNavbar';

// Wrapper — preserves the import path used by pages and the 3 alt
// homepages. All 4 Header components now render the same unified
// SUNavbar. The wrapper is intentionally tiny; remove the 4 wrappers
// + update page imports as a future cleanup.
export default function HeaderUniversity() {
  return <SUNavbar />;
}
