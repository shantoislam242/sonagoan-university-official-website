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

// One column of a mega-menu (heading + its links).
export interface MegaColumn {
  title: string;
  items: MainNavItem[];
}

export interface MainNavGroup {
  name: string;
  href?: string;
  hasDropdown: boolean;
  title?: string;
  items: MainNavItem[];
  // When set, the desktop dropdown renders as a multi-column grid (mega
  // menu) instead of a single list. Mobile flattens all columns into one
  // list. `items` may stay empty when `mega` is used.
  mega?: MegaColumn[];
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
    items: [],
    // 5-column mega menu. hrefs are '#' until the matching SU pages exist;
    // the few that already have pages point to them.
    mega: [
      {
        title: 'Overview',
        items: [
          { name: 'About Us',        href: '/about' },
          { name: 'Vision & Mission', href: '/mission-vision' },
          { name: 'History',          href: '/history' },
          { name: 'Why Choose SU',    href: '/why-choose-su' },
        ],
      },
      {
        title: 'Leadership',
        items: [
          { name: 'Chairman',          href: '/chairman' },
          { name: 'General Secretary', href: '/general-secretary' },
          { name: 'Executive Member',  href: '/executive-member' },
          { name: 'Vice Chancellor',   href: '/vice-chancellor' },
          { name: 'Pro Vice Chancellor', href: '/pro-vice-chancellor' },
          { name: 'Former VC',         href: '/former-vc' },
        ],
      },
      {
        title: 'Governing Bodies',
        items: [
          { name: 'Treasurer Office',  href: '/treasurer-office' },
          { name: 'Board of Trustees', href: '/board-of-trustees' },
        ],
      },
      {
        title: 'Administration',
        items: [
          { name: 'Registrar',             href: '/registrar' },
          { name: 'Finance & Accounts',    href: '/finance-accounts' },
          { name: 'Human Resource Mgmt.',  href: '/human-resource' },
          { name: 'Planning & Development', href: '/planning-development' },
          { name: 'Purchase',              href: '/purchase' },
        ],
      },
    ],
  },
  {
    name: 'Academics',
    hasDropdown: true,
    items: [],
    // 3-column mega menu. hrefs map to existing SU pages where they exist,
    // '#' otherwise (placeholder until those pages are built).
    mega: [
      {
        title: 'Faculty Directory',
        items: [
          { name: 'Our Programs',          href: '/academic' },
          { name: 'Faculties',             href: '/faculty' },
          { name: 'Departments',           href: '/academic-area' },
          { name: 'Dean of the Faculties', href: '/faculty/deans' },
          { name: 'Head of the Departments', href: '/head-of-departments' },
          { name: 'All Faculty Members',   href: '/faculty-members' },
          { name: 'Advisor List',          href: '/advisor-list' },
        ],
      },
      {
        title: 'Programs',
        items: [
          { name: 'Faculty of Science & Engineering', href: '/faculty/science-engineering' },
          { name: 'Faculty of Business',              href: '/faculty/business' },
          { name: 'Faculty of Arts & Humanities',     href: '/faculty/arts-humanities' },
        ],
      },
      {
        title: 'Academic Offices',
        items: [
          { name: 'Academic Affairs',       href: '/academic-affairs' },
          { name: 'Exam Controller',        href: '/exam-controller' },
          { name: 'IQAC & PRIA',            href: '/iqac-pria' },
          { name: 'Information Technology', href: '/information-technology' },
          { name: 'Library & Information',  href: '/library-information' },
          { name: 'Certificate Verification', href: '#' },
        ],
      },
    ],
  },
  {
    name: 'Admission',
    hasDropdown: true,
    items: [],
    // 3-column mega menu. hrefs map to existing SU pages where they exist,
    // '#' otherwise; Apply Now uses the shared applyUrl.
    mega: [
      {
        title: 'Apply & Policy',
        items: [
          { name: 'Requirements',            href: '/admission' },
          { name: 'Registration Policies',   href: '#' },
          { name: 'Admission & Information', href: '/admission' },
        ],
      },
      {
        title: 'Fees & Aid',
        items: [
          { name: 'Tuition Fee',  href: '/tution-fee' },
          { name: 'Waiver Policy', href: '#' },
        ],
      },
      {
        title: 'Quick Access',
        items: [
          { name: 'Online Admission',       href: '/admission' },
          { name: 'Admission Officer List', href: '#' },
          { name: 'Apply Now',              href: applyUrl, isExternal: true },
        ],
      },
    ],
  },
  {
    name: 'Research',
    hasDropdown: true,
    items: [],
    // 3-column mega menu. Research pages map to /research; '#' otherwise.
    mega: [
      {
        title: 'Research by Faculty',
        items: [
          { name: 'Science & Engineering Research', href: '/research/science-engineering' },
          { name: 'Business Research (BBA)',        href: '/research/business' },
          { name: 'Arts & Humanities Research',     href: '/research/arts-humanities' },
        ],
      },
      {
        title: 'Output & Journal',
        items: [
          { name: 'SU Journal',     href: '/journal' },
          { name: 'Publications',   href: '#' },
        ],
      },
      {
        title: 'Centers & Quality',
        items: [
          { name: 'CRTC',            href: '/research/crtc' },
          { name: 'IQAC',            href: '/iqac-pria' },
        ],
      },
    ],
  },
  {
    name: 'Campus Life',
    hasDropdown: true,
    items: [],
    // 3-column mega menu. Existing SU pages mapped where available; '#' else.
    mega: [
      {
        title: 'Student Services',
        items: [
          { name: 'Student Welfare Division',  href: '/campus-life' },
          { name: 'International Affairs & PR', href: '#' },
          { name: 'Counselling',               href: '#' },
          { name: 'Career Development',        href: '#' },
        ],
      },
      {
        title: 'Facilities',
        items: [
          { name: 'Library',   href: 'http://lib.su.edu.bd', isExternal: true },
          { name: 'Lab',       href: '#' },
          { name: 'Transport', href: '#' },
          { name: 'Hostel',    href: '#' },
        ],
      },
      {
        title: 'Activities & Community',
        items: [
          { name: 'Sports',         href: '/athletics' },
          { name: 'Business Club',  href: '#' },
          { name: 'Blood Bank',     href: '#' },
          { name: 'Clubs & Events', href: '/event' },
        ],
      },
    ],
  },
  {
    name: 'Explore',
    hasDropdown: true,
    items: [],
    // 3-column "more / explore" mega. ('Login to ERP' intentionally omitted.)
    mega: [
      {
        title: 'Updates',
        items: [
          { name: 'Notice',         href: 'https://su.edu.bd/welcome/notice', isExternal: true },
          { name: 'News & Events',  href: '/event' },
          { name: 'Career',         href: 'https://su.edu.bd/welcome/career', isExternal: true },
          { name: 'Code of Conduct', href: '#' },
        ],
      },
      {
        title: 'Quick Links',
        items: [
          { name: 'Online Admission',   href: '/admission' },
          { name: 'Exam Room Tracking', href: '#' },
          { name: 'Alumni Registration', href: '/alumni' },
          { name: 'Degree Verification', href: 'https://su.edu.bd/welcome/degree_verification', isExternal: true },
        ],
      },
      {
        title: 'Get in Touch',
        items: [
          { name: 'Contact',          href: '/contact' },
          { name: 'Green Road Campus', href: 'https://maps.google.com/?q=147/I+Green+Road+Panthapath+Dhaka', isExternal: true },
          { name: 'Mohakhali Campus', href: 'https://maps.google.com/?q=Sonargaon+University+Mohakhali', isExternal: true },
          { name: 'Permanent Campus', href: 'https://maps.google.com/?q=Sonargaon+University+Permanent+Campus', isExternal: true },
        ],
      },
    ],
  },
];

export const socials = {
  facebookUrl: 'https://facebook.com/sonargaonuni',
  linkedinUrl: 'https://linkedin.com/school/sonargaonuni',
  youtubeUrl:  'https://youtube.com/@sonargaonuni',
};
