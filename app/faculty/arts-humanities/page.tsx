import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import DeanMessage from '@/components/sections/DeanMessage';
import Link from 'next/link';
import { GraduationCap, BookOpen, Target, Scale, ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Faculty of Arts & Humanities',
  description:
    'The Faculty of Arts & Humanities at Sonargaon University — law, Bangla language & literature, and journalism & media studies, built on the Outcome-Based Education model.',
  path: '/faculty/arts-humanities',
});

const GLANCE = [
  {
    Icon: GraduationCap,
    value: '3 + 2',
    label: 'Programs',
    desc: 'Three undergraduate honours degrees and two postgraduate law degrees.',
  },
  {
    Icon: BookOpen,
    value: '3',
    label: 'Disciplines',
    desc: 'Law, Bangla Language & Literature, and Journalism & Media Studies.',
  },
  {
    Icon: Target,
    value: 'OBE',
    label: 'Outcome-Based Education',
    desc: 'Strong theoretical grounding paired with practical, real-world skills.',
  },
  {
    Icon: Scale,
    value: 'LLB → LLM',
    label: 'Complete Legal Pathway',
    desc: 'From undergraduate honours through one- and two-year master’s degrees.',
  },
];

const PROGRAM_GROUPS = [
  {
    group: 'Undergraduate',
    items: ["LLB (Hon's)", "B.A. (Hon's) in Bangla", "BSS (Hon's) in Journalism & Media Studies (JMS)"],
  },
  {
    group: 'Postgraduate',
    items: ['LLM (1 year)', 'LLM (2 years) — LLMP'],
  },
];

const DISCIPLINES = [
  {
    title: 'Law (LLB & LLM)',
    desc: 'A complete legal pathway — from undergraduate honours to one- and two-year master’s — preparing students for advocacy, the judiciary, corporate law and legal research.',
  },
  {
    title: 'Bangla Language & Literature',
    desc: 'A deep exploration of literature, linguistics and cultural heritage, ideal for careers in education, research, writing and publishing.',
  },
  {
    title: 'Journalism & Media Studies',
    desc: 'Hands-on training in reporting, media production and communication for the modern newsroom and digital media landscape.',
  },
];

const eyebrow = { display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 } as const;
const h2 = { fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', lineHeight: 1.2, margin: 0 } as const;

export default function ArtsHumanitiesFacultyPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Faculty of Arts & Humanities"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Faculty', href: '/faculty' },
          { label: 'Arts & Humanities' },
        ]}
      />

      {/* ===== Overview ===== */}
      <section style={{ background: '#ffffff', padding: '100px 0 70px' }}>
        <Container className="!max-w-[1600px]">
          <div className="ah-intro">
            <div>
              <span style={eyebrow}>Faculty of Arts &amp; Humanities</span>
              <h2 style={{ ...h2, fontSize: 'clamp(28px, 3.6vw, 42px)', marginBottom: 22 }}>
                Nurturing critical thinkers, communicators and legal minds
              </h2>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, marginBottom: 18 }}>
                Spanning law, language and media studies, the faculty offers programs that explore society,
                culture, justice and human expression &mdash; preparing graduates for careers in the legal
                profession, journalism, education, research and beyond.
              </p>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, margin: 0 }}>
                Built around the Outcome-Based Education (OBE) model, it pairs strong theoretical grounding with
                practical skills &mdash; from courtroom advocacy to newsroom reporting &mdash; equipping students to
                engage thoughtfully with the world and contribute to a just, informed society.
              </p>
            </div>

            <div className="ah-ov-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/program/program__3.jpg" alt="Faculty of Arts & Humanities" />
            </div>
          </div>
        </Container>
      </section>

      {/* ===== Dean's Message ===== */}
      <DeanMessage
        photo="/assets/images/faculty/dean-arts.jpg"
        name="Dr. A. S. M. Tariq Iqbal"
        role="Dean, Faculty of Arts & Humanities"
        lead="Welcome to the Faculty of Arts & Humanities at Sonargaon University."
        paragraphs={[
          'In a world driven by technology, the human voice matters more than ever — the ability to think critically, to communicate clearly, to question, to interpret, and to seek justice. Our faculty is devoted to nurturing exactly these qualities. Through our programs in Law, Bangla Language & Literature, and Journalism & Media Studies, we explore the ideas, institutions, and expressions that shape society.',
          'Our students learn not only to understand the world, but to engage with it — future lawyers who advocate for justice, journalists who inform and hold power to account, and scholars who preserve and enrich our cultural heritage. Grounded in the Outcome-Based Education model, our teaching blends rigorous theory with practical experience, from courtroom advocacy to newsroom reporting.',
          'We believe the humanities are not a luxury but a necessity — the foundation of a just, informed, and compassionate society. It is our shared mission, and one we pursue together.',
        ]}
        closing="I invite you to join us on this journey of discovery, and to lend your voice to building a world of good."
      />

      {/* ===== At a glance ===== */}
      <section style={{ background: '#F6F7FC', padding: '70px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 46px' }}>
            <span style={eyebrow}>At a Glance</span>
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)' }}>What Sets the Faculty Apart</h2>
          </div>
          <div className="ah-glance">
            {GLANCE.map(({ Icon, value, label, desc }) => (
              <div key={label} className="ah-glance__card">
                <div className="ah-glance__top">
                  <span className="ah-glance__icon"><Icon size={22} color="#CC1579" strokeWidth={2} /></span>
                  <div className="ah-glance__value">{value}</div>
                </div>
                <div className="ah-glance__label">{label}</div>
                <div className="ah-glance__desc">{desc}</div>
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
              <h3 className="ah-pg-label">{group}</h3>
              <div className="ah-pg-grid">
                {items.map((name) => (
                  <Link key={name} href="#" className="ah-pg-row">
                    <span>{name}</span>
                    <ArrowUpRight size={18} className="ah-pg-arrow" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* ===== Disciplines in focus + CTA ===== */}
      <section style={{ background: '#ffffff', padding: '50px 0 90px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ maxWidth: 760, margin: '0 auto 40px', textAlign: 'center' }}>
            <span style={eyebrow}>Disciplines in Focus</span>
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)' }}>Three Paths, One Faculty</h2>
          </div>

          <div className="ah-disc">
            {DISCIPLINES.map(({ title, desc }, i) => (
              <div key={title} className="ah-disc__card">
                <span className="ah-disc__num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="ah-disc__title">{title}</h3>
                <p className="ah-disc__desc">{desc}</p>
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
        .ah-intro { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: center; }
        @media (min-width: 992px) { .ah-intro { grid-template-columns: 1.7fr 1fr; gap: 56px; } }
        .ah-ov-media img {
          width: 100%; height: 380px; object-fit: cover; border-radius: 18px; display: block;
          box-shadow: 0 22px 54px rgba(43,49,117,0.16);
        }

        .ah-glance { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 600px) { .ah-glance { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .ah-glance { grid-template-columns: repeat(4, 1fr); } }
        .ah-glance__card { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 26px 24px; box-shadow: 0 8px 22px rgba(43,49,117,0.04); }
        .ah-glance__top { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
        .ah-glance__icon { flex-shrink: 0; display: inline-flex; width: 46px; height: 46px; border-radius: 12px; background: rgba(204,21,121,0.10); align-items: center; justify-content: center; }
        .ah-glance__value { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 24px; line-height: 1; }
        .ah-glance__label { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; margin-bottom: 8px; }
        .ah-glance__desc { color: #5B5B78; font-size: 13.5px; line-height: 1.6; }

        .ah-pg-label { color: #CC1579; font-size: 13px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; margin: 0 0 16px; }
        .ah-pg-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 768px) { .ah-pg-grid { grid-template-columns: 1fr 1fr; } }
        .ah-pg-row {
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          background: #fff; border: 1px solid #ECECF3; border-radius: 12px;
          padding: 18px 22px; text-decoration: none; color: #2B3175; font-weight: 500; font-size: 16px;
          transition: all .2s ease;
        }
        .ah-pg-row:hover { border-color: #CC1579; background: #FBF7FA; transform: translateY(-2px); }
        .ah-pg-arrow { color: #CC1579; flex-shrink: 0; transition: transform .2s ease; }
        .ah-pg-row:hover .ah-pg-arrow { transform: translate(3px, -3px); }

        .ah-disc { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 768px) { .ah-disc { grid-template-columns: repeat(3, 1fr); } }
        .ah-disc__card { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 30px 26px; box-shadow: 0 8px 22px rgba(43,49,117,0.04); }
        .ah-disc__num { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 14px; color: #CC1579; letter-spacing: 0.08em; }
        .ah-disc__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 19px; margin: 8px 0 12px; }
        .ah-disc__desc { color: #5B5B78; font-size: 14.5px; line-height: 1.75; margin: 0; }
      `}</style>
    </>
  );
}
