import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { applyUrl } from '@/lib/nav-config';
import {
  FileCheck2, Wallet, BadgePercent, ScrollText, Users, Info,
  IdCard, FileText, ImageIcon, ArrowUpRight, ArrowRight, Mail, Phone, CalendarRange,
} from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Admission',
  description:
    'Apply for admission to Sonargaon University. No admission test or viva, three sessions a year, simple requirements, and easy online or on-campus enrollment.',
  path: '/admission',
});

const REQUIREMENTS = [
  'No admission test or viva is required.',
  'Minimum GPA 2.50 (or second division) in both SSC and HSC for general programs.',
  'If GPA is 2.00 in one exam, the combined SSC + HSC GPA must be at least 6.00.',
  'Science & Engineering: GPA 3.00 in SSC and 2.50 in HSC / Diploma (Science stream only).',
  'Postgraduate: a relevant bachelor’s degree with a minimum GPA of 2.50 (or second division).',
  'O/A Level, GED, SAT and other equivalents are accepted on the approved scale.',
];

const DOCUMENTS = [
  { icon: IdCard, title: 'National ID or Birth Certificate', text: 'Photocopy of your NID or Birth Certificate.' },
  { icon: FileText, title: 'Academic Certificates', text: 'Photocopy of SSC and HSC / Diploma marksheets or certificates.' },
  { icon: ImageIcon, title: 'Passport-size Photograph', text: 'One recent passport-size photograph.' },
];

const SESSIONS = [
  { name: 'Spring', months: 'January – April' },
  { name: 'Summer', months: 'May – August' },
  { name: 'Fall', months: 'September – December' },
];

const QUICK_LINKS = [
  { icon: FileCheck2, name: 'Admission Requirements', href: '/admission-requirements' },
  { icon: Wallet, name: 'Tuition & Fees', href: '/tuition-fees' },
  { icon: BadgePercent, name: 'Waiver Policy', href: '/waiver-policy' },
  { icon: ScrollText, name: 'Registration Policies', href: '/registration-policies' },
  { icon: Users, name: 'Admission Officer List', href: '/admission-officer-list' },
  { icon: Info, name: 'Information Hub', href: '/information-hub' },
];

export default function AdmissionPage() {
  return (
    <>
      <HeaderUniversity />
      <div className="ad-banner">
        <PageBanner
          title="Admission"
          bgImage="/assets/images/admission/hero.webp?v=3"
          breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Admission' }]}
        />
      </div>

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '70px 0 16px' }}>
        <Container>
          <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
            <span className="ad-chip">Admission 2026</span>
            <h2 className="ad-title">Start your journey at Sonargaon University</h2>
            <p className="ad-lead">
              Sonargaon University (SU) welcomes students into a wide range of undergraduate and postgraduate
              programs across Engineering, Business, and Arts &amp; Humanities. There is no admission test or
              viva &ndash; eligible applicants can apply online through the SU ERP or admit directly at the campus.
            </p>
          </div>
          <div className="ad-hero-thumb">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/images/admission/admission-fair.webp" alt="Sonargaon University admission fair" />
          </div>
        </Container>
      </section>

      {/* Layout: main + sidebar */}
      <section style={{ background: '#ffffff', padding: '30px 0 84px' }}>
        <Container>
          <div className="ad-layout">
            {/* Main content */}
            <div className="ad-main">
              <article className="ad-block">
                <h3 className="ad-block__title">General Requirements</h3>
                <ul className="ad-bullets">
                  {REQUIREMENTS.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
                <Link href="/admission-requirements" className="ad-inline-link">
                  See full program-wise requirements <ArrowRight size={16} />
                </Link>
              </article>

              <article className="ad-block">
                <h3 className="ad-block__title">Required Documents</h3>
                <div className="ad-docs">
                  {DOCUMENTS.map((d) => {
                    const Icon = d.icon;
                    return (
                      <div key={d.title} className="ad-doc">
                        <span className="ad-doc__icon"><Icon size={20} /></span>
                        <div>
                          <h4 className="ad-doc__title">{d.title}</h4>
                          <p className="ad-doc__text">{d.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>

              <article className="ad-block">
                <h3 className="ad-block__title">Admission Sessions</h3>
                <p className="ad-block__lead">
                  SU runs three sessions each year. Applying early is recommended, as waivers and seats in
                  popular programs are limited.
                </p>
                <div className="ad-sessions">
                  {SESSIONS.map((s) => (
                    <div key={s.name} className="ad-session">
                      <CalendarRange size={24} />
                      <h4 className="ad-session__name">{s.name}</h4>
                      <p className="ad-session__months">{s.months}</p>
                    </div>
                  ))}
                </div>
                <p className="ad-block__note">
                  Tuition, per-credit fees, and merit / need-based waivers vary by program and shift. Review the{' '}
                  <Link href="/tuition-fees">Tuition &amp; Fees</Link> and{' '}
                  <Link href="/waiver-policy">Waiver Policy</Link> before you apply.
                </p>
              </article>
            </div>

            {/* Sidebar */}
            <aside className="ad-side">
              <div className="ad-card">
                <span className="ad-card__title">Admission Quick Links</span>
                <nav className="ad-ql">
                  {QUICK_LINKS.map((l) => {
                    const Icon = l.icon;
                    return (
                      <Link key={l.name} href={l.href} className="ad-ql__link">
                        <Icon size={16} />
                        <span>{l.name}</span>
                        <ArrowUpRight size={14} className="ad-ql__arrow" />
                      </Link>
                    );
                  })}
                </nav>
              </div>

              <div className="ad-card">
                <span className="ad-card__title">Admission Contact</span>
                <p className="ad-contact__org">Admission Office, Sonargaon University</p>
                <a href="mailto:suadm.data27@gmail.com" className="ad-contact__row">
                  <Mail size={15} /> <span>suadm.data27@gmail.com</span>
                </a>
                <a href="tel:+8801999914395" className="ad-contact__row">
                  <Phone size={15} /> <span>+880 1999-914395</span>
                </a>
              </div>

              <div className="ad-apply">
                <span className="ad-apply__eyebrow">Ready to get started?</span>
                <h4 className="ad-apply__title">Apply Online via SU ERP</h4>
                <p className="ad-apply__text">Or admit directly at any SU campus. Three sessions a year.</p>
                <a href={applyUrl} target="_blank" rel="noopener noreferrer" className="ad-apply__btn">
                  Apply Now <ArrowRight size={16} />
                </a>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        /* shift the hero cover photo focal point down (show more of the top) */
        .ad-banner .rts-breadcrumb.breadcumb-bg { background-position: center 40% !important; }
        .ad-chip { display: inline-block; background: rgba(204,21,121,0.10); color: #CC1579; font-weight: 700; font-size: 12px; letter-spacing: 0.08em; padding: 6px 16px; border-radius: 999px; margin-bottom: 16px; }
        .ad-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(28px, 3.6vw, 42px); line-height: 1.15; margin: 0 0 16px; }
        .ad-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }

        .ad-hero-thumb { max-width: 900px; margin: 44px auto 0; }
        .ad-hero-thumb img { width: 100%; border-radius: 18px; display: block; object-fit: cover; aspect-ratio: 16 / 6; box-shadow: 0 22px 50px rgba(43,49,117,0.16); }
        @media (max-width: 720px) { .ad-hero-thumb img { aspect-ratio: 16 / 9; } }

        .ad-layout { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: start; }
        @media (min-width: 940px) { .ad-layout { grid-template-columns: 1fr 340px; gap: 54px; } }

        /* Main */
        .ad-main { min-width: 0; }
        .ad-block { padding-bottom: 40px; margin-bottom: 40px; border-bottom: 1px solid #ECECF3; }
        .ad-block:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
        .ad-block__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(22px, 2.8vw, 28px); margin: 0 0 20px; }
        .ad-block__lead { color: #5B5B78; font-size: 16px; line-height: 1.8; margin: 0 0 22px; }
        .ad-block__note { color: #5B5B78; font-size: 15px; line-height: 1.8; margin: 22px 0 0; }
        .ad-block__note a { color: #CC1579; font-weight: 600; text-decoration: none; }
        .ad-block__note a:hover { text-decoration: underline; }

        .ad-bullets { margin: 0 0 24px; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .ad-bullets li { position: relative; padding-left: 28px; color: #4C4C68; font-size: 16px; line-height: 1.78; }
        .ad-bullets li::before { content: ''; position: absolute; left: 4px; top: 9px; width: 9px; height: 9px; border-radius: 50%; background: linear-gradient(135deg, #2B3175, #CC1579); }
        .ad-inline-link { display: inline-flex; align-items: center; gap: 8px; color: #CC1579; font-weight: 700; font-size: 15px; text-decoration: none; transition: gap .2s ease; }
        .ad-inline-link:hover { gap: 12px; color: #CC1579; }

        .ad-docs { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 620px) { .ad-docs { grid-template-columns: repeat(3, 1fr); } }
        .ad-doc { background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 14px; padding: 22px 20px; }
        .ad-doc__icon { display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 12px; color: #fff; background: linear-gradient(135deg, #2B3175, #CC1579); margin-bottom: 14px; }
        .ad-doc__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 15.5px; line-height: 1.4; margin: 0 0 6px; }
        .ad-doc__text { color: #5B5B78; font-size: 13.5px; line-height: 1.65; margin: 0; }

        .ad-sessions { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 620px) { .ad-sessions { grid-template-columns: repeat(3, 1fr); } }
        .ad-session { text-align: center; background: #fff; border: 1px solid #ECECF3; border-radius: 14px; padding: 26px 18px; box-shadow: 0 10px 26px rgba(43,49,117,0.05); transition: transform .25s ease, box-shadow .25s ease; }
        .ad-session:hover { transform: translateY(-4px); box-shadow: 0 22px 44px rgba(43,49,117,0.12); }
        .ad-session svg { color: #CC1579; margin-bottom: 10px; }
        .ad-session__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 19px; margin: 0 0 5px; }
        .ad-session__months { color: #5B5B78; font-size: 14px; margin: 0; }

        /* Sidebar */
        .ad-side { display: flex; flex-direction: column; gap: 22px; }
        @media (min-width: 940px) { .ad-side { position: sticky; top: 96px; } }
        .ad-card { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 24px 22px; box-shadow: 0 12px 30px rgba(43,49,117,0.06); }
        .ad-card__title { display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 13px; letter-spacing: 0.1em; text-transform: uppercase; padding-bottom: 14px; border-bottom: 1px solid #EFEFF6; margin-bottom: 8px; }

        .ad-ql { display: flex; flex-direction: column; gap: 2px; }
        .ad-ql__link { display: flex; align-items: center; gap: 11px; padding: 11px 12px; border-radius: 10px; color: #4C4C68; font-weight: 600; font-size: 14px; text-decoration: none; transition: background .18s ease, color .18s ease; }
        .ad-ql__link svg:first-child { color: #A6A6BC; flex-shrink: 0; transition: color .18s ease; }
        .ad-ql__arrow { margin-left: auto; color: #CC1579 !important; }
        .ad-ql__link:hover { background: #F6F7FC; color: #2B3175; }
        .ad-ql__link:hover svg:first-child { color: #CC1579; }

        .ad-contact__org { color: #5B5B78; font-size: 14.5px; line-height: 1.6; margin: 0 0 16px; }
        .ad-contact__row { display: flex; align-items: center; gap: 10px; color: #4C4C68; font-size: 14px; text-decoration: none; padding: 8px 0; word-break: break-all; transition: color .2s ease; }
        .ad-contact__row svg { color: #CC1579; flex-shrink: 0; }
        .ad-contact__row:hover { color: #CC1579; }

        .ad-apply { background: linear-gradient(150deg, #2B3175 0%, #3a2c74 55%, #CC1579 165%); border-radius: 16px; padding: 28px 24px; box-shadow: 0 18px 40px rgba(43,49,117,0.18); }
        .ad-apply__eyebrow { display: block; color: rgba(255,255,255,0.82); font-size: 13px; font-weight: 600; margin-bottom: 6px; }
        .ad-apply__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #fff; font-size: 20px; line-height: 1.3; margin: 0 0 10px; }
        .ad-apply__text { color: rgba(255,255,255,0.85); font-size: 14px; line-height: 1.7; margin: 0 0 20px; }
        .ad-apply__btn { display: inline-flex; align-items: center; gap: 8px; background: #fff; color: #2B3175 !important; font-weight: 700; font-size: 14.5px; padding: 12px 24px; border-radius: 999px; text-decoration: none; transition: transform .2s ease, background .2s ease, color .2s ease; }
        .ad-apply__btn svg { color: #2B3175; transition: color .2s ease; }
        .ad-apply__btn:hover { transform: translateY(-2px); background: #2B3175; color: #fff !important; }
        .ad-apply__btn:hover svg { color: #fff; }
      `}</style>
    </>
  );
}
