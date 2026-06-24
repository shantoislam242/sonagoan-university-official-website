import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowUpRight, Award, BookOpen, FlaskConical, ShieldCheck } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Research — Faculty of Science & Engineering',
  description:
    'Research at the Faculty of Science & Engineering, Sonargaon University — across nine departments, 15+ labs, and award-winning projects.',
  path: '/research/science-engineering',
});

const DEPARTMENTS = [
  { name: 'Computer Science & Engineering (CSE)', focus: 'Software, AI/ML, data systems, networking' },
  { name: 'Electrical & Electronics Engineering (EEE)', focus: 'Power systems, electronics, renewable energy' },
  { name: 'Mechanical Engineering (ME)', focus: 'Thermal, manufacturing, materials, design' },
  { name: 'Civil Engineering', focus: 'Structures, materials, environmental, geotechnical' },
  { name: 'Textile Engineering', focus: 'Fabric technology, dyeing, sustainable textiles' },
  { name: 'Naval Architecture & Marine Engineering (NAME)', focus: 'Ship design, marine structures, hydrodynamics' },
  { name: 'Architecture (BARC)', focus: 'Sustainable design, urban studies, built environment' },
  { name: 'Apparel Manufacture & Technology (AMT)', focus: 'Garment production, quality, industrial engineering' },
  { name: 'Fashion Design & Technology (FDT)', focus: 'Design innovation, sustainable fashion' },
];

const RECOGNITION = [
  'Asia Young Designer Award 2019',
  'Best Supporting Architecture School of Bangladesh',
  'A3F Sustainable Design Award 2019',
  'Shah Cement DOT Student Design Award 2019',
  'ISIF 2025: SU NextGen Innovators (Bangladesh round)',
];

const EXPLORE = [
  { name: 'SU Journal', desc: 'The university’s research publication', href: '/research', Icon: BookOpen },
  { name: 'CRTC', desc: 'Center for Research Training & Consultancy', href: '#', Icon: FlaskConical },
  { name: 'IQAC', desc: 'Quality assurance & research standards', href: '#', Icon: ShieldCheck },
];

export default function ScienceEngineeringResearchPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Research — Faculty of Science & Engineering"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Science & Engineering' },
        ]}
      />

      {/* Overview */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <Container className="!max-w-[1320px]">
          <div style={{ textAlign: 'center', maxWidth: 1240, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Faculty of Science &amp; Engineering
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.6vw, 40px)', lineHeight: 1.2, marginBottom: 12 }}>
              Turning ideas into impact
            </h2>
            <p style={{ color: '#CC1579', fontStyle: 'italic', fontWeight: 600, fontSize: 17, margin: '0 0 26px' }}>
              Through engineering, technology, and design.
            </p>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: '0 0 18px' }}>
              The Faculty of Science &amp; Engineering is at the heart of Sonargaon University&rsquo;s research
              culture. Across nine departments, spanning computing, electrical and mechanical systems, civil
              and marine engineering, textiles, architecture, and design, our faculty and students pursue
              research that addresses real-world challenges. This commitment is reflected in SU&rsquo;s
              national standing: the university ranks among the top private universities in Bangladesh for
              research-fund expenditure, as published in the UGC Annual Report.
            </p>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              Grounded in the Outcome-Based Education (OBE) model and supported by 15+ specialized
              laboratories, research here moves beyond the classroom into projects, publications, and
              innovations that have earned national and international recognition.
            </p>
          </div>
        </Container>
      </section>

      {/* Research by Department */}
      <section style={{ background: '#F6F7FC', padding: '70px 0 80px' }}>
        <Container className="!max-w-[1240px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(22px, 3vw, 30px)', textAlign: 'center', marginBottom: 10 }}>
            Research by Department
          </h3>
          <p style={{ color: '#8A8AA3', fontSize: 15, textAlign: 'center', margin: '0 0 40px' }}>
            Select a department to explore its publications and research.
          </p>
          <div className="sr-grid">
            {DEPARTMENTS.map((d) => (
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

      {/* Recognition */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <Container className="!max-w-[1000px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(22px, 3vw, 30px)', textAlign: 'center', marginBottom: 12 }}>
            Recognition
          </h3>
          <p style={{ color: '#5B5B78', fontSize: 16, textAlign: 'center', margin: '0 auto 38px', maxWidth: 640 }}>
            Research and creative work from this faculty has earned distinction on national and international
            stages, including:
          </p>
          <div className="sr-reco">
            {RECOGNITION.map((r) => (
              <div key={r} className="sr-reco__item">
                <span className="sr-reco__icon"><Award size={18} /></span>
                <span>{r}</span>
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

        .sr-reco { display: grid; grid-template-columns: 1fr; gap: 14px; max-width: 760px; margin: 0 auto; }
        @media (min-width: 700px) { .sr-reco { grid-template-columns: 1fr 1fr; } }
        .sr-reco__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 16px 20px;
          color: #2B3175; font-size: 15px; font-weight: 500;
        }
        .sr-reco__icon {
          flex-shrink: 0; width: 34px; height: 34px; border-radius: 9px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

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
        .sr-explore__card:hover {
          transform: translateY(-6px); border-color: transparent;
          box-shadow: 0 26px 50px rgba(43,49,117,0.16);
        }
        .sr-explore__card:hover::before { transform: scaleX(1); }
        .sr-explore__icon {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 44px; border-radius: 12px; margin-bottom: 12px;
          background: rgba(43,49,117,0.08); color: #2B3175; transition: all .3s ease;
        }
        .sr-explore__icon svg { width: 21px; height: 21px; }
        .sr-explore__card:hover .sr-explore__icon {
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff;
          transform: rotate(-6deg) scale(1.05);
        }
        .sr-explore__arrow {
          position: absolute; top: 18px; right: 18px; color: #C2C4D6; transition: transform .25s ease, color .25s ease;
        }
        .sr-explore__card:hover .sr-explore__arrow { color: #CC1579; transform: translate(4px, -4px); }
        .sr-explore__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 17px; margin: 0; }
        .sr-explore__desc { color: #5B5B78; font-size: 13.5px; line-height: 1.55; margin: 6px 0 0; }
      `}</style>
    </>
  );
}
