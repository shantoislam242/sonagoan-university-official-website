import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, Target, FlaskConical, ArrowUpRight, Award } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Faculty of Science & Engineering',
  description:
    'The Faculty of Science & Engineering at Sonargaon University — nine undergraduate programs across engineering, technology, architecture and design, built on the Outcome-Based Education model.',
  path: '/faculty/science-engineering',
});

const GLANCE = [
  {
    Icon: GraduationCap,
    value: '9',
    label: 'Undergraduate Programs',
    desc: 'Spanning computing, electrical, civil, mechanical, textile and marine engineering, architecture and design.',
  },
  {
    Icon: ShieldCheck,
    value: 'BAETE',
    label: 'Accredited Engineering',
    desc: 'Engineering degrees accredited by the Board of Accreditation for Engineering & Technical Education.',
  },
  {
    Icon: Target,
    value: 'OBE',
    label: 'Outcome-Based Education',
    desc: 'Every course is built around clear, measurable learning outcomes and real-world skills.',
  },
  {
    Icon: FlaskConical,
    value: '15+',
    label: 'Labs & Studios',
    desc: 'Specialized engineering and design labs for hands-on, practice-first learning.',
  },
];

// Program pages are coming later — hrefs stay '#' for now.
const PROGRAM_GROUPS = [
  {
    group: 'For Science background (HSC Science / Diploma)',
    items: [
      'B.Sc. in Computer Science & Engineering (CSE)',
      'B.Sc. in Electrical & Electronics Engineering (EEE)',
      'B.Sc. in Mechanical Engineering (ME)',
      'B.Sc. in Civil Engineering',
      'B.Sc. in Textile Engineering',
      'B.Sc. in Naval Architecture & Marine Engineering (NAME)',
      'Bachelor of Architecture (BARC)',
    ],
  },
  {
    group: 'For any background (Science / Business / Humanities)',
    items: [
      'B.Sc. in Apparel Manufacture & Technology (AMT)',
      'B.Sc. in Fashion Design & Technology (FDT)',
    ],
  },
];

const eyebrow = { display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 } as const;
const h2 = { fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', lineHeight: 1.2, margin: 0 } as const;

export default function ScienceEngineeringFacultyPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Faculty of Science & Engineering"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Faculty', href: '/faculty' },
          { label: 'Science & Engineering' },
        ]}
      />

      {/* ===== Overview ===== */}
      <section style={{ background: '#ffffff', padding: '100px 0 70px' }}>
        <Container className="!max-w-[1600px]">
          <div className="se-intro">
            <div>
              <span style={eyebrow}>Faculty of Science &amp; Engineering</span>
              <h2 style={{ ...h2, fontSize: 'clamp(28px, 3.6vw, 42px)', marginBottom: 22 }}>
                Building the engineers, technologists and innovators of tomorrow
              </h2>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, marginBottom: 18 }}>
                Our largest and most diverse faculty brings together nine undergraduate programs across
                engineering, technology, architecture and design. With practice-first teaching and 15+
                specialized labs, students graduate ready for the demands of industry and research.
              </p>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, margin: 0 }}>
                From computing and electrical systems to civil construction, textiles, marine engineering and
                architecture, the faculty reflects SU&rsquo;s founding promise &mdash; quality, hands-on technical
                education within reach of every aspiring student.
              </p>
            </div>

            {/* Dean card */}
            <aside className="se-dean">
              <span className="se-dean__heading">Meet Our Dean</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/faculty/dean-kamal.png"
                alt="Dean — Brig. Gen. (Retd) Prof. Habibur Rahman Kamal"
                className="se-dean__photo"
              />
              <h3 className="se-dean__name">Brig. Gen. (Retd) Prof. Habibur Rahman Kamal</h3>
              <p className="se-dean__post">Dean, Science &amp; Engineering &middot; ndc, psc</p>
            </aside>
          </div>
        </Container>
      </section>

      {/* ===== At a glance ===== */}
      <section style={{ background: '#F6F7FC', padding: '70px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 46px' }}>
            <span style={eyebrow}>At a Glance</span>
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)' }}>What Sets the Faculty Apart</h2>
          </div>
          <div className="se-glance">
            {GLANCE.map(({ Icon, value, label, desc }) => (
              <div key={label} className="se-glance__card">
                <div className="se-glance__top">
                  <span className="se-glance__icon"><Icon size={22} color="#CC1579" strokeWidth={2} /></span>
                  <div className="se-glance__value">{value}</div>
                </div>
                <div className="se-glance__label">{label}</div>
                <div className="se-glance__desc">{desc}</div>
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
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)' }}>Undergraduate Programs</h2>
          </div>

          {PROGRAM_GROUPS.map(({ group, items }) => (
            <div key={group} style={{ marginBottom: 36 }}>
              <h3 className="se-pg-label">{group}</h3>
              <div className="se-pg-grid">
                {items.map((name) => (
                  <Link key={name} href="#" className="se-pg-row">
                    <span>{name}</span>
                    <ArrowUpRight size={18} className="se-pg-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* ===== How you'll learn + CTA ===== */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div className="se-learn">
            <div>
              <span style={eyebrow}>How You&rsquo;ll Learn</span>
              <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)', marginBottom: 18 }}>
                Hands-on, outcome-based, industry-ready
              </h2>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, margin: 0 }}>
                Learning is project-driven and built around the Outcome-Based Education model, with 15+ labs and
                studios for real practice. Engineering tracks run on a faster tri-semester calendar so you can
                graduate sooner, while design and applied programs follow a bi-semester rhythm. Full credit,
                duration and semester details for every program live on our programs page.
              </p>
            </div>
            <Link href="/academic" className="rts-theme-btn btn-arrow se-cta">
              Credits &amp; duration
              <span><i className="fa-regular fa-arrow-right"></i></span>
            </Link>
          </div>

          {/* Recognition — brief, links to milestones instead of repeating the awards list */}
          <div className="se-reco">
            <span className="se-reco__icon"><Award size={24} color="#ffffff" strokeWidth={2} /></span>
            <p className="se-reco__text">
              Our students and programs have earned national and international distinction in design and
              architecture.
            </p>
            <Link href="/history" className="se-reco__link">
              See our milestones <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .se-intro { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 992px) { .se-intro { grid-template-columns: 1.7fr 1fr; gap: 56px; } }
        .se-dean {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 18px;
          padding: 28px 26px; box-shadow: 0 12px 30px rgba(43,49,117,0.07);
          max-width: 340px; margin: 0 auto;
        }
        .se-dean__heading {
          color: #CC1579; font-size: 12px; font-weight: 700; letter-spacing: 0.16em;
          text-transform: uppercase; margin-bottom: 20px;
        }
        .se-dean__photo {
          width: 100%; max-width: 190px; height: 220px; border-radius: 14px;
          object-fit: cover; object-position: top center; margin-bottom: 18px;
        }
        .se-dean__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 18px; line-height: 1.35; margin: 0 0 6px; }
        .se-dean__post { font-size: 13px; color: #8A8AA3; margin: 0; }

        .se-glance { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 600px) { .se-glance { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .se-glance { grid-template-columns: repeat(4, 1fr); } }
        .se-glance__card {
          background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 26px 24px;
          box-shadow: 0 8px 22px rgba(43,49,117,0.04);
        }
        .se-glance__top { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
        .se-glance__icon {
          flex-shrink: 0; display: inline-flex; width: 46px; height: 46px; border-radius: 12px;
          background: rgba(204,21,121,0.10); align-items: center; justify-content: center;
        }
        .se-glance__value { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 26px; line-height: 1; }
        .se-glance__label { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; margin-bottom: 8px; }
        .se-glance__desc { color: #5B5B78; font-size: 13.5px; line-height: 1.6; }

        .se-pg-label {
          color: #CC1579; font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; margin: 0 0 16px;
        }
        .se-pg-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 768px) { .se-pg-grid { grid-template-columns: 1fr 1fr; } }
        .se-pg-row {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          background: #fff; border: 1px solid #ECECF3; border-radius: 12px;
          padding: 18px 22px; text-decoration: none; color: #2B3175; font-weight: 500; font-size: 16px;
          transition: all .2s ease;
        }
        .se-pg-row:hover { border-color: #CC1579; background: #FBF7FA; transform: translateY(-2px); }
        .se-pg-arrow { color: #CC1579; flex-shrink: 0; transition: transform .2s ease; }
        .se-pg-row:hover .se-pg-arrow { transform: translate(3px, -3px); }

        .se-learn { display: grid; grid-template-columns: 1fr; gap: 30px; align-items: center; margin-bottom: 56px; }
        @media (min-width: 992px) { .se-learn { grid-template-columns: 1.7fr 1fr; gap: 50px; } }
        .se-cta { justify-self: start; }
        @media (min-width: 992px) { .se-cta { justify-self: end; } }

        .se-reco {
          display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
          background: #F6F7FC; border: 1px solid #ECECF3; border-radius: 18px; padding: 26px 30px;
        }
        .se-reco__icon {
          flex-shrink: 0; width: 52px; height: 52px; border-radius: 14px;
          background: linear-gradient(135deg, #2B3175, #CC1579);
          display: inline-flex; align-items: center; justify-content: center;
        }
        .se-reco__text { flex: 1; min-width: 240px; color: #2B3175; font-size: 16.5px; line-height: 1.6; margin: 0; font-weight: 500; }
        .se-reco__link {
          display: inline-flex; align-items: center; gap: 7px; color: #CC1579; font-weight: 700;
          font-size: 15.5px; text-decoration: none; white-space: nowrap;
        }
        .se-reco__link:hover { text-decoration: underline; }
      `}</style>
    </>
  );
}
