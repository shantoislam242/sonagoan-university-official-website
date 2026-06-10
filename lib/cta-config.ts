// Static content for the JourneyCTA section. Edit values here to
// change the headline, body, CTA buttons, or hero image — every page
// picks up the change automatically.

export interface CtaButton {
  label: string;
  href: string;
  external?: boolean;
}

export const cta = {
  // Hero background. Picked from the existing template asset set —
  // swap with a custom image any time. `objectPosition` controls the
  // visible focal point (e.g. 'center 30%' to bias upward).
  heroImageUrl: '/assets/images/campus/campus__life__bg__1.jpg',
  heroImagePosition: 'center',

  heading: 'Shape Your Future with Excellence',
  body:
    'Join a vibrant academic community where innovation, leadership, ' +
    'and lifelong learning shape your path to success.',

  primary:   { label: 'Apply Now',                href: '/admission' } as CtaButton,
  secondary: { label: 'Request for Information',  href: '/contact'   } as CtaButton,
};
