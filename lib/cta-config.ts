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
  // Source seed: heroImageVerticalPercent: 32 → 'center 32%'. Used
  // verbatim so the image focal point matches the source rendering.
  heroImagePosition: 'center 32%',

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
