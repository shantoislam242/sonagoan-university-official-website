// Static content for SUFooter. Edit values here to change brand info,
// contact details, social URLs, or any of the 4 link columns — every
// page picks up the change automatically.

export interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
  disabled?: boolean;
}

export const footer = {
  logoSrc: '/assets/images/logo/su-logo-white.png',
  address: '147/I, Green Road, Panthapath, Tejgaon, Dhaka',
  phones: ['+8801775000888', '+880241010352'] as readonly string[],
  emails: ['info@su.edu.bd'] as readonly string[],
  copyrightText: '© 2026 Sonargaon University. All rights reserved.',

  // null URL hides the row instead of rendering an inert link.
  socials: {
    facebookUrl:  'https://facebook.com/sonargaonuni',
    instagramUrl: 'https://instagram.com/sonargaonuni',
    linkedinUrl:  'https://linkedin.com/school/sonargaonuni',
    youtubeUrl:   'https://youtube.com/@sonargaonuni',
    xUrl:         null as string | null,
    threadsUrl:   null as string | null,
    tiktokUrl:    null as string | null,
    whatsappUrl:  null as string | null,
  },

  usefulLinks: [
    { name: 'Tuition Fee',   href: '/tution-fee' },
    { name: 'Faculty Staff', href: '/faculty' },
    { name: 'Alumni',        href: '/alumni' },
    { name: 'Career',        href: '#' },
    { name: 'Event',         href: '/event' },
    { name: 'Our Blogs',     href: '/blog', disabled: true },
  ] as readonly FooterLink[],

  getInTouchLinks: [
    { name: 'Contact',           href: '/contact' },
    { name: 'Meet With Us',      href: '/contact' },
    { name: 'Privacy Statement', href: '#' },
    { name: 'Newsletters',       href: '#' },
    { name: 'Location Map',      href: '/contact' },
    { name: 'FAQ',               href: '#' },
  ] as readonly FooterLink[],

  quickLinks: [
    { name: 'SU News',        href: '/blog' },
    { name: 'Forum',          href: '#', disabled: true },
    { name: 'Students',       href: '#', disabled: true },
    { name: 'Parents',        href: '#', disabled: true },
    { name: 'Teachers',       href: '/faculty' },
    { name: 'Administration', href: '/about' },
  ] as readonly FooterLink[],

  campusLinks: [
    { name: 'Permanent Campus',  href: 'https://maps.google.com/?q=Sonargaon+University+Permanent+Campus', external: true },
    { name: 'Panthapath Campus', href: 'https://maps.google.com/?q=147/I+Green+Road+Panthapath+Dhaka',     external: true },
    { name: 'Mohakhali Campus',  href: 'https://maps.google.com/?q=Sonargaon+University+Mohakhali',        external: true },
  ] as readonly FooterLink[],

  legalLinks: [] as readonly FooterLink[],
};
