import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import DeanMessage from '@/components/sections/DeanMessage';
import Link from 'next/link';
import { GraduationCap, Target, Layers, TrendingUp, ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Faculty of Business',
  description:
    'The Faculty of Business at Sonargaon University a BBA and eight specialised MBA tracks built on the Outcome-Based Education model, aligned with Bangladesh’s largest growth industries.',
  path: '/faculty/business',
});

const GLANCE = [
  {
    Icon: GraduationCap,
    value: '1 + 8',
    label: 'Programs',
    desc: 'One undergraduate degree (BBA) and eight postgraduate specializations.',
  },
  {
    Icon: Target,
    value: 'OBE',
    label: 'Outcome-Based Education',
    desc: 'Core management theory blended with the practical skills employers demand.',
  },
  {
    Icon: Layers,
    value: '5',
    label: 'MBA Specializations',
    desc: 'Management, Supply Chain, Bank Management, Textile & Fashion Marketing, and Apparel Merchandising.',
  },
  {
    Icon: TrendingUp,
    value: 'Industry',
    label: 'Aligned to Top Sectors',
    desc: 'Tracks tied directly to Bangladesh’s largest export and growth industries.',
  },
];

const PROGRAM_GROUPS = [
  {
    group: 'Undergraduate',
    items: ['Bachelor of Business Administration (BBA)'],
  },
  {
    group: 'Postgraduate',
    items: [
      'Master of Business Administration (MBA)',
      'Executive MBA (EMBA)',
      'Regular MBA (RMBA)',
      'MBA in Supply Chain Management (MSCM)',
      'Master in Bank Management (MBM)',
      'MBA in Textile & Fashion Marketing (MTFM)',
      'MBA in Apparel Merchandising 2 year (MAM)',
      'MBA in Apparel Merchandising 1 year (MAMS)',
    ],
  },
];

const PATHWAYS = [
  { title: 'MBA (1 Year)', desc: 'For graduates ready to fast-track into management.' },
  { title: 'Executive MBA (EMBA)', desc: 'For working professionals balancing study with a career.' },
  { title: 'Regular MBA (2 Years)', desc: 'A comprehensive foundation for fresh graduates.' },
  { title: 'Specialized MBAs', desc: 'Supply Chain, Bank Management, Textile & Fashion Marketing and Apparel Merchandising built for Bangladesh’s biggest industries.' },
];

const eyebrow = { display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 } as const;
const h2 = { fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', lineHeight: 1.2, margin: 0 } as const;

export default function BusinessFacultyPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Faculty of Business"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Faculty', href: '/faculty' },
          { label: 'Business' },
        ]}
      />

      {/* ===== Overview ===== */}
      <section style={{ background: '#ffffff', padding: '100px 0 70px' }}>
        <Container className="!max-w-[1600px]">
          <div className="bz-intro">
            <div>
              <span style={eyebrow}>Faculty of Business</span>
              <h2 style={{ ...h2, fontSize: 'clamp(28px, 3.6vw, 42px)', marginBottom: 22 }}>
                Shaping the leaders, managers and entrepreneurs of tomorrow
              </h2>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, marginBottom: 18 }}>
                With one undergraduate program and eight postgraduate specializations from general
                management to supply chain, banking and apparel merchandising the faculty offers one of
                the most comprehensive business pathways among private universities in Bangladesh.
              </p>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, margin: 0 }}>
                Grounded in the Outcome-Based Education (OBE) model, it blends core management theory with the
                practical, industry-focused skills today&rsquo;s employers demand preparing graduates to lead
                in a fast-changing local and global economy.
              </p>
            </div>

            <div className="bz-ov-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/program/program__2.jpg" alt="Faculty of Business" />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Dean's Message ===== */}
      <DeanMessage
        photo="/assets/images/faculty/dean-business.jpg"
        name="Prof. Md. Al-Amin Molla"
        role="Dean, Faculty of Business"
        lead="Welcome to the Faculty of Business at Sonargaon University."
        paragraphs={[
          'Business is the engine of progress and behind every thriving enterprise are people with vision, discipline, and the courage to lead. Our faculty exists to develop exactly those people. From our Bachelor of Business Administration to a rich portfolio of postgraduate programs including the MBA, Executive MBA, and specialized degrees in Supply Chain Management, Bank Management, and Apparel Merchandising we offer pathways for learners at every stage of their professional journey.',
          'What sets our programs apart is their balance of strong management theory with the practical, industry-focused skills today’s economy demands. Our specializations are closely aligned with Bangladesh’s largest growth sectors, ensuring that what you learn in the classroom translates directly into value in the workplace.',
          'We believe education should open doors and that success is something we build together, as a community of learners and leaders. Whether you are beginning your studies or returning to advance your career, you will find here the knowledge, mentorship, and support to achieve your ambitions.',
        ]}
        closing="I warmly welcome you to our faculty and look forward to being part of your journey."
      />

      {/* ===== At a glance ===== */}
      <section style={{ background: '#F6F7FC', padding: '70px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 46px' }}>
            <span style={eyebrow}>At a Glance</span>
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)' }}>What Sets the Faculty Apart</h2>
          </div>
          <div className="bz-glance">
            {GLANCE.map(({ Icon, value, label, desc }) => (
              <div key={label} className="bz-glance__card">
                <div className="bz-glance__top">
                  <span className="bz-glance__icon"><Icon size={22} color="#CC1579" strokeWidth={2} /></span>
                  <div className="bz-glance__value">{value}</div>
                </div>
                <div className="bz-glance__label">{label}</div>
                <div className="bz-glance__desc">{desc}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Programs (names only; each links to its own page later) ===== */}
      <section style={{ background: '#ffffff', padding: '90px 0 40px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ maxWidth: 760, margin: '0 auto 44px', textAlign: 'center' }}>
            <span style={eyebrow}>Programs</span>
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)' }}>Undergraduate &amp; Postgraduate</h2>
          </div>
          {PROGRAM_GROUPS.map(({ group, items }) => (
            <div key={group} style={{ marginBottom: 36 }}>
              <h3 className="bz-pg-label">{group}</h3>
              <div className="bz-pg-grid">
                {items.map((name) => (
                  <Link key={name} href="#" className="bz-pg-row">
                    <span>{name}</span>
                    <ArrowUpRight size={18} className="bz-pg-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* ===== Flexible pathways + CTA ===== */}
      <section style={{ background: '#ffffff', padding: '50px 0 90px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ maxWidth: 760, margin: '0 auto 40px', textAlign: 'center' }}>
            <span style={eyebrow}>Flexible Pathways</span>
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)', marginBottom: 14 }}>
              A Track for Every Stage of Your Career
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 16.5, lineHeight: 1.8, margin: 0 }}>
              Whether you&rsquo;re a fresh graduate or an experienced professional, there&rsquo;s a postgraduate route
              built around your goals.
            </p>
          </div>

          <div className="bz-path">
            {PATHWAYS.map(({ title, desc }, i) => (
              <div key={title} className="bz-path__card">
                <span className="bz-path__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="bz-path__title">{title}</h3>
                <p className="bz-path__desc">{desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <Link href="/academic" className="rts-theme-btn btn-arrow">
              Credits &amp; duration
              <span><i className="fa-regular fa-arrow-right"></i></span>
            </Link>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .bz-intro { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 992px) { .bz-intro { grid-template-columns: 1.7fr 1fr; gap: 56px; } }
        .bz-ov-media img {
          width: 100%; height: 380px; object-fit: cover; border-radius: 18px; display: block;
          box-shadow: 0 22px 54px rgba(43,49,117,0.16);
        }

        .bz-glance { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 600px) { .bz-glance { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .bz-glance { grid-template-columns: repeat(4, 1fr); } }
        .bz-glance__card { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 26px 24px; box-shadow: 0 8px 22px rgba(43,49,117,0.04); }
        .bz-glance__top { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
        .bz-glance__icon { flex-shrink: 0; display: inline-flex; width: 46px; height: 46px; border-radius: 12px; background: rgba(204,21,121,0.10); align-items: center; justify-content: center; }
        .bz-glance__value { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 26px; line-height: 1; }
        .bz-glance__label { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; margin-bottom: 8px; }
        .bz-glance__desc { color: #5B5B78; font-size: 13.5px; line-height: 1.6; }

        .bz-pg-label { color: #CC1579; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 16px; }
        .bz-pg-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 768px) { .bz-pg-grid { grid-template-columns: 1fr 1fr; } }
        .bz-pg-row {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          background: #fff; border: 1px solid #ECECF3; border-radius: 12px;
          padding: 18px 22px; text-decoration: none; color: #2B3175; font-weight: 500; font-size: 16px;
          transition: all .2s ease;
        }
        .bz-pg-row:hover { border-color: #CC1579; background: #FBF7FA; transform: translateY(-2px); }
        .bz-pg-arrow { color: #CC1579; flex-shrink: 0; transition: transform .2s ease; }
        .bz-pg-row:hover .bz-pg-arrow { transform: translate(3px, -3px); }

        .bz-path { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 600px) { .bz-path { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .bz-path { grid-template-columns: repeat(4, 1fr); } }
        .bz-path__card { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 28px 24px; box-shadow: 0 8px 22px rgba(43,49,117,0.04); }
        .bz-path__num { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 14px; color: #CC1579; letter-spacing: 0.08em; }
        .bz-path__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 18px; margin: 8px 0 10px; }
        .bz-path__desc { color: #5B5B78; font-size: 14.5px; line-height: 1.7; margin: 0; }
      `}</style>
    </>
  );
}
