// Static nav data — replaces the Prisma-backed types from the source
// Mechanical-Engineering project. Edit values here; the SUNavbar reads
// from these exports directly.

export interface TopLink {
  name: string;
  href: string;
  isExternal?: boolean;
  isDisabled?: boolean;
}

export interface QuickAccessItem {
  name: string;
  href: string;
  iconName:
    | 'User'
    | 'GraduationCap'
    | 'CheckCircle'
    | 'Building'
    | 'BookOpen'
    | 'Calendar'
    | 'Mail'
    | 'Phone';
  isExternal?: boolean;
  isDisabled?: boolean;
}

export interface MainNavItem {
  name: string;
  href: string;
  isExternal?: boolean;
  isDisabled?: boolean;
}

export interface MainNavGroup {
  name: string;
  href?: string;
  hasDropdown: boolean;
  title?: string;
  items: MainNavItem[];
}

export const applyUrl = 'https://example.com/apply'; // TODO: real apply URL

export const topLinks: readonly TopLink[] = [
  { name: 'Virtual Tour', href: '#' },
  { name: 'IQAC',         href: '#' },
  { name: 'Career',       href: '#' },
  { name: 'Archive',      href: '#' },
  { name: 'Contact',      href: '/contact' },
];

export const quickAccessItems: readonly QuickAccessItem[] = [
  { name: 'ERP',          href: 'https://erp.example.com',         iconName: 'User',          isExternal: true },
  { name: 'Convoc. Reg.', href: 'https://convocation.example.com', iconName: 'GraduationCap', isExternal: true },
  { name: 'Verification', href: 'https://verify.example.com',      iconName: 'CheckCircle',   isExternal: true },
  { name: 'Library',      href: '#', iconName: 'BookOpen' },
  { name: 'Notice',       href: '#', iconName: 'Calendar' },
  { name: 'Mail',         href: '#', iconName: 'Mail' },
];

export const mainNav: readonly MainNavGroup[] = [
  {
    name: 'About',
    hasDropdown: true,
    items: [
      { name: 'Overview',         href: '/about' },
      { name: 'Mission & Vision', href: '/about' },
      { name: 'Athletics',        href: '/athletics' },
      { name: 'Research',         href: '/research' },
      { name: 'Alumni',           href: '/alumni' },
    ],
  },
  {
    name: 'Faculty Member',
    href: '/faculty',
    hasDropdown: false,
    items: [],
  },
  {
    name: 'Admission',
    hasDropdown: true,
    items: [
      { name: 'Admission',   href: '/admission' },
      { name: 'Scholarship', href: '/scholarship' },
      { name: 'Tuition Fee', href: '/tution-fee' },
    ],
  },
  {
    name: 'Student Society',
    hasDropdown: true,
    items: [
      { name: 'Campus Life', href: '/campus-life' },
      { name: 'Athletics',   href: '/athletics' },
      { name: 'Event',       href: '/event' },
      { name: 'Blog',        href: '/blog' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
    hasDropdown: false,
    items: [],
  },
];

export const socials = {
  facebookUrl: 'https://facebook.com/sonargaonuni',
  linkedinUrl: 'https://linkedin.com/school/sonargaonuni',
  youtubeUrl:  'https://youtube.com/@sonargaonuni',
};
