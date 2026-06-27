import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, FlaskConical, ShieldCheck } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Research — Faculty of Business',
  description:
    'Research at the Faculty of Business, Sonargaon University — bridging management theory with the real-world industries that drive national growth.',
  path: '/research/business',
});

const AREAS = [
  { name: 'BBA Research', focus: 'General management, marketing, finance, HRM' },
  { name: 'Supply Chain Management', focus: 'Logistics, operations, procurement' },
  { name: 'Bank Management', focus: 'Banking, financial services, risk' },
  { name: 'Textile & Fashion Marketing', focus: 'RMG sector, brand & market strategy' },
  { name: 'Apparel Merchandising', focus: 'Garment trade, merchandising, export' },
];

const EXPLORE = [
  { name: 'SU Journal', desc: 'The university’s research publication', href: '/research', Icon: BookOpen },
  { name: 'CRTC', desc: 'Center for Research Training & Consultancy', href: '/research/crtc', Icon: FlaskConical },
  { name: 'IQAC', desc: 'Quality assurance & research standards', href: '/iqac-pria', Icon: ShieldCheck },
];

export default function BusinessResearchPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Research — Faculty of Business"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'Business' },
        ]}
      />

      {/* Overview */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <Container className="!max-w-[1320px]">
          <div style={{ textAlign: 'center', maxWidth: 1240, margin: '0 auto' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Faculty of Business
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.6vw, 40px)', lineHeight: 1.2, marginBottom: 12 }}>
              Theory meets industry
            </h2>
            <p style={{ color: '#CC1579', fontStyle: 'italic', fontWeight: 600, fontSize: 17, margin: '0 0 26px' }}>
              Research that connects management theory with real-world industry.
            </p>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              The Faculty of Business advances research that bridges academic theory and the practical
              realities of Bangladesh&rsquo;s economy. With a Bachelor of Business Administration and a strong
              portfolio of postgraduate specializations, from supply chain and banking to textile and apparel
              marketing, the faculty encourages inquiry into the sectors that drive national growth. Grounded
              in the Outcome-Based Education (OBE) model, research here prepares students and faculty to
              generate insights that matter to business and society.
            </p>
          </div>
        </Container>
      </section>

      {/* Research Areas */}
      <section style={{ background: '#F6F7FC', padding: '70px 0 80px' }}>
        <Container className="!max-w-[1240px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(22px, 3vw, 30px)', textAlign: 'center', marginBottom: 10 }}>
            Research Areas
          </h3>
          <p style={{ color: '#8A8AA3', fontSize: 15, textAlign: 'center', margin: '0 0 40px' }}>
            Select an area to explore its publications and research.
          </p>
          <div className="sr-grid">
            {AREAS.map((a) => (
              <Link key={a.name} href="#" className="sr-card">
                <div className="sr-card__top">
                  <h4 className="sr-card__name">{a.name}</h4>
                  <ArrowUpRight className="sr-card__arrow" size={20} />
                </div>
                <p className="sr-card__focus">{a.focus}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Industry Relevance */}
      <section style={{ background: '#ffffff', padding: '80px 0' }}>
        <Container className="!max-w-[1000px]">
          <div className="sr-callout">
            <h3 className="sr-callout__title">Industry Relevance</h3>
            <p className="sr-callout__text">
              SU&rsquo;s business research aligns closely with Bangladesh&rsquo;s largest growth industries,
              particularly the ready-made garment (RMG), textile, and supply chain sectors, ensuring that
              academic work translates into practical value for employers and the economy.
            </p>
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

        .sr-callout {
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 18px;
          padding: clamp(28px, 4vw, 44px); text-align: center; max-width: 860px; margin: 0 auto;
          box-shadow: 0 12px 32px rgba(43,49,117,0.05);
        }
        .sr-callout__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(20px, 2.6vw, 26px); margin: 0 0 14px; }
        .sr-callout__text { color: #5B5B78; font-size: 16.5px; line-height: 1.85; margin: 0; }

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
