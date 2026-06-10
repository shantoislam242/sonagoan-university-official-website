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
    | 'BookOpen'
    | 'GraduationCap'
    | 'Image'
    | 'Compass'
    | 'Archive'
    | 'Users'
    | 'Globe'
    | 'ClipboardList'
    | 'Building2'
    | 'Award'
    | 'CheckCircle';
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

// Quick-access grid — mirrors the source project's seeded quick_access_item
// list (real su.edu.bd URLs + lucide icon names). The middle-bar ERP /
// Convoc. Reg. / Verification buttons resolve their hrefs from here by name.
// SU-internal routes that don't exist yet use '#'; disabled items match
// the source (Virtual Tour / Archive).
export const quickAccessItems: readonly QuickAccessItem[] = [
  { name: 'Library',      href: 'http://lib.su.edu.bd',                                                      iconName: 'BookOpen',      isExternal: true },
  { name: 'Admission',    href: '/admission',                                                                iconName: 'GraduationCap' },
  { name: 'Photo',        href: '#',                                                                         iconName: 'Image' },
  { name: 'Virtual Tour', href: '#',                                                                         iconName: 'Compass',       isDisabled: true },
  { name: 'Archive',      href: '#',                                                                         iconName: 'Archive' },
  { name: 'Notice',       href: 'https://su.edu.bd/welcome/notice',                                          iconName: 'Users',         isExternal: true },
  { name: 'ERP',          href: 'http://sue.su.edu.bd:5081/sonargaon_erp/',                                  iconName: 'Globe',         isExternal: true },
  { name: 'IQAC',         href: 'https://su.edu.bd/iqac',                                                    iconName: 'ClipboardList', isExternal: true },
  { name: 'Career',       href: 'https://su.edu.bd/welcome/career',                                          iconName: 'Building2',     isExternal: true },
  { name: 'Convoc. Reg.', href: 'http://sue.su.edu.bd:5081/sonargaon_erp/student/convocation_registration', iconName: 'Award',         isExternal: true },
  { name: 'Verification', href: 'https://su.edu.bd/welcome/degree_verification',                             iconName: 'CheckCircle',   isExternal: true },
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
