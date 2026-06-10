// Static content for the JourneyCTA section. Values mirror the source
// Mechanical-Engineering project's seeded UniversityIdentity + Journey
// CTA singleton row (source: scripts/seed.ts) so the SU site renders
// exactly the same image, copy, and CTAs.

export interface CtaButton {
  label: string;
  href: string;
  external?: boolean;
}

export const cta = {
  // Source asset (copied from C:/Databrandix HQ/Mechanical-Engineering
  // /public/assets/journey-cta.webp). `heroImagePosition` mirrors the
  // source `heroImageVerticalPercent: 32`.
  heroImageUrl: '/assets/journey-cta.webp',
  // Pushes the image content upward in the viewport (higher % shows
  // more of the bottom of the original image, so the upper fence/
  // building section moves off-screen and the people fill the frame).
  heroImagePosition: 'center 65%',

  heading: 'Shape Your Future with Excellence',
  body:
    'Join a vibrant academic community where innovation, leadership, ' +
    'and lifelong learning shape your path to success.',

  primary: {
    label: 'Apply Now',
    href: 'http://sue.su.edu.bd:5081/sonargaon_erp/siteadmin/admission_info',
    external: true,
  } as CtaButton,
  secondary: {
    label: 'Request for Information',
    href: '/contact',
  } as CtaButton,
};
