import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, FlaskConical, ShieldCheck } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Research — Faculty of Arts & Humanities',
  description:
    'Research at the Faculty of Arts & Humanities, Sonargaon University — across Law, Bangla Language & Literature, and Journalism & Media Studies.',
  path: '/research/arts-humanities',
});

const DISCIPLINES = [
  { name: 'Law (LLB & LLM)', focus: 'Constitutional, corporate, human rights, legal research' },
  { name: 'Bangla Language & Literature', focus: 'Literature, linguistics, cultural heritage' },
  { name: 'Journalism & Media Studies (JMS)', focus: 'Media studies, communication, digital journalism' },
];

const FOCUS = [
  { lead: 'Law', text: 'Legal scholarship spanning undergraduate to two-year master’s research, contributing to justice, policy, and corporate practice.' },
  { lead: 'Bangla', text: 'Preserving and enriching Bangla literature, language, and cultural studies.' },
  { lead: 'Journalism & Media', text: 'Research into communication, media practice, and the evolving digital landscape.' },
];

const EXPLORE = [
  { name: 'SU Journal', desc: 'The university’s research publication', href: '/research', Icon: BookOpen },
  { name: 'CRTC', desc: 'Center for Research Training & Consultancy', href: '/research/crtc', Icon: FlaskConical },
  { name: 'IQAC', desc: 'Quality assurance & research standards', href: '/iqac-pria', Icon: ShieldCheck },
];

export default function ArtsHumanitiesResearchPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Research — Faculty of Arts & Humanities"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Arts & Humanities' },
        ]}
      />

      {/* Overview */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <Container className="!max-w-[1320px]">
          <div style={{ textAlign: 'center', maxWidth: 1240, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Faculty of Arts &amp; Humanities
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.6vw, 40px)', lineHeight: 1.2, marginBottom: 12 }}>
              Law, language, and media
            </h2>
            <p style={{ color: '#CC1579', fontStyle: 'italic', fontWeight: 600, fontSize: 17, margin: '0 0 26px' }}>
              Exploring law, language, and media for a just and informed society.
            </p>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              The Faculty of Arts &amp; Humanities pursues research that examines society, culture, justice,
              and human expression. Across its disciplines, Law, Bangla Language &amp; Literature, and
              Journalism &amp; Media Studies, faculty and students explore questions that shape communities and
              public life. Grounded in the Outcome-Based Education (OBE) model, research here combines rigorous
              scholarship with real-world engagement, from legal analysis to media practice.
            </p>
          </div>
        </Container>
      </section>

      {/* Research by Discipline */}
      <section style={{ background: '#F6F7FC', padding: '70px 0 80px' }}>
        <Container className="!max-w-[1240px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(22px, 3vw, 30px)', textAlign: 'center', marginBottom: 10 }}>
            Research by Discipline
          </h3>
          <p style={{ color: '#8A8AA3', fontSize: 15, textAlign: 'center', margin: '0 0 40px' }}>
            Select a discipline to explore its publications and research.
          </p>
          <div className="sr-grid">
            {DISCIPLINES.map((d) => (
              <Link key={d.name} href="#" className="sr-card">
                <div className="sr-card__top">
                  <h4 className="sr-card__name">{d.name}</h4>
                  <ArrowUpRight className="sr-card__arrow" size={20} />
                </div>
                <p className="sr-card__focus">{d.focus}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Disciplines in Focus */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <Container className="!max-w-[1000px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(22px, 3vw, 30px)', textAlign: 'center', marginBottom: 38 }}>
            Disciplines in Focus
          </h3>
          <div className="sr-focus">
            {FOCUS.map((f) => (
              <div key={f.lead} className="sr-focus__item">
                <span className="sr-focus__dot" aria-hidden />
                <p className="sr-focus__text"><b>{f.lead}</b> &mdash; {f.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Explore More */}
      <section style={{ background: '#F6F7FC', padding: '70px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(22px, 3vw, 30px)', textAlign: 'center', marginBottom: 38 }}>
            Explore More
          </h3>
          <div className="sr-explore">
            {EXPLORE.map((e) => {
              const ext = e.href.startsWith('http');
              const linkProps = ext ? { target: '_blank', rel: 'noopener noreferrer' } : {};
              const Icon = e.Icon;
              return (
                <Link key={e.name} href={e.href} {...linkProps} className="sr-explore__card">
                  <ArrowUpRight className="sr-explore__arrow" size={16} />
                  <span className="sr-explore__icon"><Icon size={21} /></span>
                  <h4 className="sr-explore__name">{e.name}</h4>
                  <p className="sr-explore__desc">{e.desc}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .sr-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 640px) { .sr-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .sr-grid { grid-template-columns: 1fr 1fr 1fr; } }
        .sr-card {
          display: block; text-decoration: none; background: #fff; border: 1px solid #ECECF3;
          border-radius: 16px; padding: 24px 24px 22px; box-shadow: 0 10px 28px rgba(43,49,117,0.05);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .sr-card:hover { transform: translateY(-4px); box-shadow: 0 22px 44px rgba(43,49,117,0.12); border-color: #d7d8e6; }
        .sr-card__top { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; }
        .sr-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: 16.5px; line-height: 1.35; margin: 0;
        }
        .sr-card__arrow { color: #CC1579; flex-shrink: 0; transition: transform .2s ease; }
        .sr-card:hover .sr-card__arrow { transform: translate(3px, -3px); }
        .sr-card__focus { color: #5B5B78; font-size: 14px; line-height: 1.6; margin: 12px 0 0; }

        .sr-focus { display: flex; flex-direction: column; gap: 14px; max-width: 820px; margin: 0 auto; }
        .sr-focus__item {
          display: flex; align-items: flex-start; gap: 16px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 14px; padding: 20px 24px;
        }
        .sr-focus__dot { flex-shrink: 0; width: 12px; height: 12px; border-radius: 50%; margin-top: 7px; background: linear-gradient(135deg, #2B3175, #CC1579); }
        .sr-focus__text { color: #5B5B78; font-size: 16px; line-height: 1.75; margin: 0; }
        .sr-focus__text b { color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; }

        .sr-explore { display: grid; grid-template-columns: 1fr; gap: 16px; max-width: 880px; margin: 0 auto; }
        @media (min-width: 720px) { .sr-explore { grid-template-columns: repeat(3, 1fr); } }
        .sr-explore__card {
          position: relative; display: block; text-decoration: none; background: #fff;
          border: 1px solid #ECECF3; border-radius: 14px; padding: 22px 20px; overflow: hidden;
          box-shadow: 0 10px 26px rgba(43,49,117,0.05);
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }
        .sr-explore__card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: linear-gradient(90deg, #2B3175, #CC1579);
          transform: scaleX(0); transform-origin: left; transition: transform .3s ease;
        }
        .sr-explore__card:hover { transform: translateY(-6px); border-color: transparent; box-shadow: 0 26px 50px rgba(43,49,117,0.16); }
        .sr-explore__card:hover::before { transform: scaleX(1); }
        .sr-explore__icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 12px; margin-bottom: 12px;
          background: rgba(43,49,117,0.08); color: #2B3175; transition: all .3s ease;
        }
        .sr-explore__icon svg { width: 21px; height: 21px; }
        .sr-explore__card:hover .sr-explore__icon { background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff; transform: rotate(-6deg) scale(1.05); }
        .sr-explore__arrow { position: absolute; top: 18px; right: 18px; color: #C2C4D6; transition: transform .25s ease, color .25s ease; }
        .sr-explore__card:hover .sr-explore__arrow { color: #CC1579; transform: translate(4px, -4px); }
        .sr-explore__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 17px; margin: 0; }
        .sr-explore__desc { color: #5B5B78; font-size: 13.5px; line-height: 1.55; margin: 6px 0 0; }
      `}</style>
    </>
  );
}
