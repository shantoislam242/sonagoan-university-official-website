import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import {
  UserCheck, FileText, Mic, Briefcase, CalendarDays, Network,
  GraduationCap, Building2, Users, ArrowRight, Quote,
} from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Career Development',
  description:
    'The Career Development / Career Counseling Center at Sonargaon University offers mentorship, CV building, interview prep, internships, an annual job fair, and a 21,000+ alumni network to launch student careers.',
  path: '/career-development',
});

const OFFERINGS = [
  {
    icon: UserCheck,
    title: 'Career Mentorship & Counseling',
    text: 'One-on-one guidance with mentors who help students identify their strengths, choose the right career path, and set realistic goals aligned with industry demand.',
  },
  {
    icon: FileText,
    title: 'CV & Résumé Building',
    text: 'Practical support in preparing professional CVs and cover letters that stand out to recruiters.',
  },
  {
    icon: Mic,
    title: 'Interview Preparation',
    text: 'Mock interviews, communication coaching, and confidence-building sessions so students walk into interviews ready.',
  },
  {
    icon: Briefcase,
    title: 'Internships & Industry Exposure',
    text: 'SU connects students with internship opportunities across departments, including leading national companies such as Walton and PRAN-RFL, giving them real-world experience before graduation.',
  },
  {
    icon: CalendarDays,
    title: 'Annual Job Fair',
    text: 'An on-campus job fair each year brings employers and graduating students together under one roof for direct hiring, networking, and career discovery.',
  },
  {
    icon: Network,
    title: 'Industry & Alumni Network',
    text: 'Links with domestic and international businesses, plus a growing alumni community of 21,000+ graduates, open doors to referrals, mentorship, and job leads.',
  },
];

const STATS = [
  { icon: GraduationCap, value: '21,000+', label: 'Alumni Network' },
  { icon: CalendarDays, value: 'Annual', label: 'On-campus Job Fair' },
  { icon: Building2, value: 'Walton · PRAN-RFL', label: 'Industry Partners' },
  { icon: Users, value: '1st Year → Beyond', label: 'Support Journey' },
];

const GALLERY = [
  '/assets/images/career/g1.webp',
  '/assets/images/career/g2.webp',
  '/assets/images/career/g3.webp',
  '/assets/images/career/g4.webp',
  '/assets/images/career/g5.webp',
  '/assets/images/career/g6.webp',
  '/assets/images/career/g7.webp',
  '/assets/images/career/g8.webp',
];

export default function CareerDevelopmentPage() {
  return (
    <>
      <HeaderUniversity />
      <div className="cd-banner">
        <PageBanner
          title="Career Development"
          bgImage="/assets/images/career/hero.webp"
          breadcrumb={[
            { label: 'Home', href: '/' },
            { label: 'Campus Life', href: '/campus-life' },
            { label: 'Career Development' },
          ]}
        />
      </div>

      {/* Intro + tagline */}
      <section style={{ background: '#ffffff', padding: '80px 0 40px' }}>
        <Container>
          <div className="cd-intro">
            <div className="cd-intro__text">
              <span className="cd-eyebrow">Student Welfare Division</span>
              <h2 className="cd-title">Career Development at SU</h2>
              <p className="cd-lead">
                At Sonargaon University, education doesn&rsquo;t end in the classroom &ndash; it&rsquo;s a bridge
                to a career. Through the Career Development / Career Counseling Center under the Student Welfare
                Division (SWD), SU supports students from their first year to graduation and beyond, helping them
                turn academic knowledge into professional success.
              </p>
              <div className="cd-tagline">
                <Quote size={22} />
                <p>
                  From campus to career &ndash; mentorship, internships, and industry connections that launch
                  your future.
                </p>
              </div>
            </div>
            <div className="cd-intro__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/career/g1.webp" alt="Career development session at Sonargaon University" />
            </div>
          </div>
        </Container>
      </section>

      {/* Stats strip */}
      <section style={{ background: '#ffffff', padding: '20px 0 70px' }}>
        <Container>
          <div className="cd-stats">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="cd-stat">
                  <span className="cd-stat__icon"><Icon size={22} /></span>
                  <div>
                    <div className="cd-stat__value">{s.value}</div>
                    <div className="cd-stat__label">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 88px' }}>
        <Container>
          <div className="cd-sechead">
            <span className="cd-eyebrow">What We Offer</span>
            <h3 className="cd-h3">Support at every step of your journey</h3>
            <p className="cd-sublead">
              A complete pipeline of guidance, skills, and connections &ndash; built to make you employable, not
              just qualified.
            </p>
          </div>
          <div className="cd-offer-grid">
            {OFFERINGS.map((o) => {
              const Icon = o.icon;
              return (
                <article key={o.title} className="cd-offer">
                  <span className="cd-offer__icon"><Icon size={24} /></span>
                  <h4 className="cd-offer__title">{o.title}</h4>
                  <p className="cd-offer__text">{o.text}</p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Our Approach (image + text split) */}
      <section style={{ background: '#ffffff', padding: '84px 0' }}>
        <Container>
          <div className="cd-approach">
            <div className="cd-approach__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/career/g3.webp" alt="Students at an SU career development program" />
            </div>
            <div className="cd-approach__text">
              <span className="cd-eyebrow">Our Approach</span>
              <h3 className="cd-h3 cd-h3--left">Genuine, long-term career readiness</h3>
              <p className="cd-body">
                SU focuses on genuine, long-term career readiness &ndash; mentorship, skills, and connections
                &ndash; rather than empty promises. We invest in the fundamentals that actually move a student
                from the classroom into a profession.
              </p>
              <div className="cd-note">
                <strong>Please note:</strong> SU provides career support, internships, and job-fair access; it
                does not guarantee job placement.
              </div>
              <Link href="/student-welfare-division" className="cd-btn">
                Student Welfare Division <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery */}
      <section style={{ background: '#F6F7FC', padding: '82px 0 92px' }}>
        <Container>
          <div className="cd-sechead">
            <span className="cd-eyebrow">Gallery</span>
            <h3 className="cd-h3">Moments from our career events</h3>
          </div>
          <div className="cd-gallery">
            {GALLERY.map((src, i) => (
              <figure key={src} className="cd-gitem">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Career development event ${i + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="cd-cta">
        <Container>
          <div className="cd-cta__inner">
            <span className="cd-eyebrow">Get Started</span>
            <h3 className="cd-cta__title">Ready to build your future?</h3>
            <p className="cd-cta__text">
              Connect with the Career Development Center through the Student Welfare Division and take the first
              step from campus to career.
            </p>
            <div className="cd-cta__actions">
              <Link href="/student-welfare-division" className="cd-btn">
                Contact SWD <ArrowRight size={17} />
              </Link>
              <Link href="/admission" className="cd-btn cd-btn--outline">
                Explore Admission
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        /* shift the hero cover photo focal point downward (show more of the top) */
        .cd-banner .rts-breadcrumb.breadcumb-bg { background-position: center 25% !important; }
        .cd-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 13px; letter-spacing: 0.18em; text-transform: uppercase; margin-bottom: 14px; }
        .cd-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(30px, 4vw, 46px); line-height: 1.15; margin: 0 0 20px; }
        .cd-lead { color: #4C4C68; font-size: 17px; line-height: 1.85; margin: 0 0 26px; }

        /* Intro split */
        .cd-intro { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 900px) { .cd-intro { grid-template-columns: 1.05fr 0.95fr; gap: 56px; } }
        .cd-tagline { display: flex; gap: 14px; align-items: flex-start; background: linear-gradient(135deg, #F1F0FB 0%, #FCEFF6 100%); border: 1px solid #E7E3F5; border-left: 4px solid #CC1579; padding: 22px 24px; border-radius: 14px; box-shadow: 0 12px 30px rgba(43,49,117,0.07); }
        .cd-tagline svg { color: #CC1579; flex-shrink: 0; margin-top: 2px; }
        .cd-tagline p { margin: 0; font-size: 16.5px; font-weight: 600; line-height: 1.6; font-style: italic; color: #2B3175 !important; }
        .cd-intro__media { position: relative; }
        .cd-intro__media img { width: 100%; border-radius: 18px; display: block; box-shadow: 0 22px 50px rgba(43,49,117,0.16); aspect-ratio: 4 / 3; object-fit: cover; }

        /* Stats */
        .cd-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (min-width: 860px) { .cd-stats { grid-template-columns: repeat(4, 1fr); } }
        .cd-stat { display: flex; align-items: center; gap: 14px; background: #F6F7FC; border: 1px solid #ECECF3; border-radius: 14px; padding: 20px 22px; }
        .cd-stat__icon { display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 12px; background: #fff; color: #CC1579; flex-shrink: 0; box-shadow: 0 6px 16px rgba(43,49,117,0.07); }
        .cd-stat__value { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 19px; line-height: 1.2; }
        .cd-stat__label { color: #6A6A82; font-size: 13px; margin-top: 3px; }

        /* Section headers */
        .cd-sechead { text-align: center; max-width: 720px; margin: 0 auto 50px; }
        .cd-h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(26px, 3.4vw, 38px); line-height: 1.2; margin: 0 0 14px; }
        .cd-h3--left { text-align: left; }
        .cd-sublead { color: #5B5B78; font-size: 16.5px; line-height: 1.8; margin: 0; }

        /* Offerings */
        .cd-offer-grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 620px) { .cd-offer-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1000px) { .cd-offer-grid { grid-template-columns: repeat(3, 1fr); } }
        .cd-offer { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 30px 28px; box-shadow: 0 12px 34px rgba(43,49,117,0.05); transition: transform .25s ease, box-shadow .25s ease; }
        .cd-offer:hover { transform: translateY(-6px); box-shadow: 0 26px 54px rgba(43,49,117,0.13); }
        .cd-offer__icon { display: inline-flex; align-items: center; justify-content: center; width: 56px; height: 56px; border-radius: 14px; background: linear-gradient(150deg, #2B3175 0%, #3a2c74 55%, #CC1579 160%); color: #fff; margin-bottom: 20px; }
        .cd-offer__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 18.5px; line-height: 1.35; margin: 0 0 12px; }
        .cd-offer__text { color: #5B5B78; font-size: 15px; line-height: 1.8; margin: 0; }

        /* Approach split */
        .cd-approach { display: grid; grid-template-columns: 1fr; gap: 44px; align-items: center; }
        @media (min-width: 940px) { .cd-approach { grid-template-columns: 1fr 1fr; gap: 60px; } }
        .cd-approach__media { position: relative; }
        .cd-approach__media img { width: 100%; border-radius: 18px; display: block; object-fit: cover; box-shadow: 0 22px 50px rgba(43,49,117,0.16); aspect-ratio: 4 / 3; }
        .cd-body { color: #4C4C68; font-size: 16.5px; line-height: 1.85; margin: 0 0 22px; }
        .cd-note { background: #FFF3F9; border-left: 4px solid #CC1579; color: #7A3358; border-radius: 0 10px 10px 0; padding: 15px 20px; font-size: 14.5px; line-height: 1.7; margin-bottom: 26px; }
        .cd-note strong { color: #CC1579; }

        /* Buttons */
        .cd-btn { display: inline-flex; align-items: center; gap: 9px; background: #2B3175; color: #fff; font-weight: 600; font-size: 15px; padding: 13px 26px; border-radius: 999px; text-decoration: none; transition: background .25s ease, transform .2s ease; }
        .cd-btn:hover { background: #CC1579; color: #fff; transform: translateY(-2px); }
        /* Gallery */
        .cd-gallery { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        @media (min-width: 700px) { .cd-gallery { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1050px) { .cd-gallery { grid-template-columns: repeat(4, 1fr); } }
        .cd-gitem { margin: 0; border-radius: 14px; overflow: hidden; box-shadow: 0 12px 30px rgba(43,49,117,0.08); aspect-ratio: 4 / 3; }
        .cd-gitem img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
        .cd-gitem:hover img { transform: scale(1.07); }

        /* CTA (light full-width band, so it separates cleanly from the dark footer) */
        .cd-cta { background: linear-gradient(135deg, #F4F3FB 0%, #FBF0F6 100%); padding: 86px 0 94px; }
        .cd-cta__inner { text-align: center; max-width: 720px; margin: 0 auto; }
        .cd-cta__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(26px, 3.4vw, 38px); margin: 0 0 14px; }
        .cd-cta__text { color: #5B5B78; font-size: 16.5px; line-height: 1.8; margin: 0 0 28px; }
        .cd-cta__actions { display: flex; flex-wrap: wrap; gap: 14px; justify-content: center; }
        .cd-btn--outline { background: transparent; border: 1.5px solid #2B3175; color: #2B3175; }
        .cd-btn--outline:hover { background: #2B3175; border-color: #2B3175; color: #fff; }
      `}</style>
    </>
  );
}
