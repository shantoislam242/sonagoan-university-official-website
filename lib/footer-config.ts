// Static content for SUFooter. All values mirror the source
// Mechanical-Engineering project's seeded UniversityIdentity + footer
// link tables (source: scripts/seed.ts) so the SU site renders
// the same brand info, social URLs, copyright, and 4 link columns.

export interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}

export const footer = {
  // Source asset (copied from C:/Databrandix HQ/Mechanical-Engineering
  // /public/assets/footer-logo.webp).
  logoSrc: '/assets/footer-logo.webp',
  address: '147/I, Green Road, Panthapath, Tejgaon, Dhaka',
  phones: ['+8801775000888', '+880241010352'] as readonly string[],
  emails: ['info@su.edu.bd'] as readonly string[],
  copyrightText: 'Copyright © 2026 All Rights Reserved by Sonargaon University',

  // 8 socials — real URLs from source UniversityIdentity seed.
  // null URL hides the row. Source has whatsappUrl: null so we keep
  // that one hidden (7 icons render on desktop, not 8).
  socials: {
    facebookUrl:  'https://www.facebook.com/SonargaonUniversity',
    instagramUrl: 'https://www.instagram.com/sonargaonuniversitybd/',
    linkedinUrl:  'https://www.linkedin.com/school/14451954/',
    youtubeUrl:   'https://www.youtube.com/@SonargaonUniversityEdu',
    xUrl:         'https://x.com/SonargaonUni',
    threadsUrl:   'https://www.threads.com/@sonargaonuniversitybd',
    tiktokUrl:    'https://www.tiktok.com/@sonargaonuniversityedu',
    whatsappUrl:  'https://wa.me/8801775000888',
  },

  usefulLinks: [
    { name: 'Tuition Fee',   href: '/tution-fee' },
    { name: 'Faculty Staff', href: '/faculty' },
    { name: 'Alumni',        href: '/alumni' },
    { name: 'Career',        href: 'https://su.edu.bd/welcome/career', external: true },
    { name: 'Event',         href: '/event' },
    { name: 'Our Blogs',     href: '#', disabled: true },
  ] as readonly FooterLink[],

  getInTouchLinks: [
    { name: 'Contact',         href: '/contact' },
    { name: 'Meet With Us',    href: '/contact' },
    { name: 'Privacy Policy',  href: '#' },
    { name: 'Newsletters',     href: '#', disabled: true },
    { name: 'Location Map',    href: '/contact' },
    { name: 'FAQ',             href: '#' },
  ] as readonly FooterLink[],

  quickLinks: [
    { name: 'SU News',        href: '/blog' },
    { name: 'Forum',          href: '#', disabled: true },
    { name: 'Students',       href: '#', disabled: true },
    { name: 'Parents',        href: '#', disabled: true },
    { name: 'Teachers',       href: 'https://su.edu.bd/faculty_members/all_faculty_details',     external: true },
    { name: 'Administration', href: 'https://su.edu.bd/About_us/new_administration/4',           external: true },
  ] as readonly FooterLink[],

  campusLinks: [
    { name: 'Permanent Campus',  href: 'https://maps.google.com/?q=Sonargaon+University+Permanent+Campus', external: true },
    { name: 'Panthapath Campus', href: 'https://maps.google.com/?q=147/I+Green+Road+Panthapath+Dhaka',     external: true },
    { name: 'Mohakhali Campus',  href: 'https://maps.google.com/?q=Sonargaon+University+Mohakhali',        external: true },
  ] as readonly FooterLink[],

  legalLinks: [] as readonly FooterLink[],
};
