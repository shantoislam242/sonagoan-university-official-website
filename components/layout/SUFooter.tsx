'use client';

import { MapPin, Phone, Mail, ArrowUp, ArrowUpRight } from 'lucide-react';
import {
  FacebookBrandIcon, InstagramBrandIcon, LinkedinBrandIcon,
  YoutubeBrandIcon, XBrandIcon, ThreadsBrandIcon,
  TikTokBrandIcon, WhatsAppBrandIcon,
} from './BrandIcons';
import { footer, type FooterLink } from '@/lib/footer-config';

// Inline styles defend against template style.css cascade (proven
// pattern from SUNavbar work). Template rules:
//   footer { ... }, img { height: auto }, a { color: var(--rt-...) }
// would otherwise override navy bg, logo height, and link colour.

const NAVY = '#2B3175';
const MAGENTA = '#CC1579';

function LinkRow({ link, color }: { link: FooterLink; color: string }) {
  const live = !link.disabled && !!link.href;
  return (
    <a
      href={live ? link.href : '#'}
      {...(link.external && live && { target: '_blank', rel: 'noopener noreferrer' })}
      aria-disabled={link.disabled || undefined}
      style={{
        color,
        textDecoration: 'none',
        opacity: link.disabled ? 0.5 : 1,
        cursor: link.disabled ? 'not-allowed' : 'pointer',
        transition: 'color 200ms',
      }}
    >
      {link.name}
    </a>
  );
}

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <h4
      style={{
        fontWeight: 700,
        fontSize: 18,
        marginBottom: 20,
        paddingBottom: 8,
        borderBottom: `2px solid ${MAGENTA}`,
        display: 'inline-block',
        color: '#ffffff',
      }}
    >
      {children}
    </h4>
  );
}

const linkColor = 'rgba(255,255,255,0.7)';
const smallText = 'rgba(255,255,255,0.8)';

export default function SUFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialList = [
    { name: 'Facebook',  Icon: FacebookBrandIcon,  href: footer.socials.facebookUrl  },
    { name: 'Instagram', Icon: InstagramBrandIcon, href: footer.socials.instagramUrl },
    { name: 'LinkedIn',  Icon: LinkedinBrandIcon,  href: footer.socials.linkedinUrl  },
    { name: 'YouTube',   Icon: YoutubeBrandIcon,   href: footer.socials.youtubeUrl   },
    { name: 'X',         Icon: XBrandIcon,         href: footer.socials.xUrl         },
    { name: 'Threads',   Icon: ThreadsBrandIcon,   href: footer.socials.threadsUrl   },
    { name: 'TikTok',    Icon: TikTokBrandIcon,    href: footer.socials.tiktokUrl    },
    { name: 'WhatsApp',  Icon: WhatsAppBrandIcon,  href: footer.socials.whatsappUrl  },
  ];

  return (
    <footer
      style={{
        background: NAVY,
        color: '#ffffff',
        paddingTop: 64,
        paddingBottom: 32,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative magenta blur, top-right corner */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 256,
          height: 256,
          background: 'rgba(204,21,121,0.10)',
          borderRadius: '50%',
          filter: 'blur(64px)',
          transform: 'translate(50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: 1600,
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand + contact */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }} className="footer-brand">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={footer.logoSrc}
                alt="Sonargaon University"
                style={{ height: 48, width: 'auto', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ display: 'flex', gap: 12, fontSize: 14, color: smallText }}>
                <MapPin size={18} style={{ color: MAGENTA, flexShrink: 0, marginTop: 2 }} />
                <span>{footer.address}</span>
              </li>
              {footer.phones.map((p) => (
                <li key={p} style={{ display: 'flex', gap: 12, fontSize: 14, color: smallText }}>
                  <Phone size={18} style={{ color: MAGENTA, flexShrink: 0, marginTop: 2 }} />
                  <span>{p}</span>
                </li>
              ))}
              {footer.emails.map((e) => (
                <li key={e} style={{ display: 'flex', gap: 12, fontSize: 14, color: smallText }}>
                  <Mail size={18} style={{ color: MAGENTA, flexShrink: 0, marginTop: 2 }} />
                  <span>{e}</span>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 12, paddingTop: 4 }}>
              {socialList.map(({ name, Icon, href }) =>
                href ? (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      border: '1px solid rgba(255,255,255,0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'rgba(255,255,255,0.7)',
                      textDecoration: 'none',
                      transition: 'all 200ms',
                    }}
                  >
                    <Icon size={16} />
                  </a>
                ) : null,
              )}
            </div>
          </div>

          <div>
            <ColumnHeading>Useful Link</ColumnHeading>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, listStyle: 'none', padding: 0, margin: 0 }}>
              {footer.usefulLinks.map((link) => (
                <li key={link.name}><LinkRow link={link} color={linkColor} /></li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Get in Touch</ColumnHeading>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, listStyle: 'none', padding: 0, margin: 0 }}>
              {footer.getInTouchLinks.map((link) => (
                <li key={link.name}><LinkRow link={link} color={linkColor} /></li>
              ))}
            </ul>
          </div>

          <div>
            <ColumnHeading>Quick Link</ColumnHeading>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, listStyle: 'none', padding: 0, margin: 0 }}>
              {footer.quickLinks.map((link) => (
                <li key={link.name}><LinkRow link={link} color={linkColor} /></li>
              ))}
            </ul>
          </div>

          {footer.campusLinks.length > 0 && (
            <div>
              <ColumnHeading>Campuses</ColumnHeading>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 14, listStyle: 'none', padding: 0, margin: 0 }}>
                {footer.campusLinks.map((link) => {
                  const live = !link.disabled && !!link.href;
                  return (
                    <li key={link.name}>
                      <a
                        href={live ? link.href : '#'}
                        {...(link.external && live && { target: '_blank', rel: 'noopener noreferrer' })}
                        aria-disabled={link.disabled || undefined}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          color: linkColor,
                          textDecoration: 'none',
                          opacity: link.disabled ? 0.5 : 1,
                          cursor: link.disabled ? 'not-allowed' : 'pointer',
                          transition: 'color 200ms',
                        }}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>

        <div
          style={{
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.10)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', margin: 0 }}>
            {footer.copyrightText}
          </p>
          {footer.legalLinks.length > 0 && (
            <div style={{ display: 'flex', gap: 24, fontSize: 12 }}>
              {footer.legalLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.disabled || !link.href ? '#' : link.href}
                  {...(link.external && link.href && !link.disabled && { target: '_blank', rel: 'noopener noreferrer' })}
                  style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            style={{
              width: 40,
              height: 40,
              background: MAGENTA,
              borderRadius: '50%',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>

      {/* Responsive grid via media queries in a <style> block so we
          don't need a Tailwind class to defeat the template cascade. */}
      <style>{`
        .footer-grid { grid-template-columns: 1fr; }
        @media (min-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (min-width: 1024px) {
          .footer-grid { grid-template-columns: 2fr 1fr 1fr 1fr 1fr; }
          .footer-brand { grid-column: span 1; }
        }
      `}</style>
    </footer>
  );
}
