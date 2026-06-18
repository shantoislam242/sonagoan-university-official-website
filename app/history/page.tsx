import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Award } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'History',
  description:
    'The history of Sonargaon University (SU) established in 2012 under the SU Trust, and grown into one of Bangladesh’s preeminent private universities.',
  path: '/history',
});

const AWARDS = [
  'National Award 2018 a2i Innovation Competition',
  'Asia Young Designer Award 2019',
  'Best Supporting Architecture School of Bangladesh',
  'A3F Sustainable Design Award 2019',
  'Shah Cement DOT Student Design Award 2019',
  'ISIF 2025 Bangladesh round (SU NextGen Innovators)',
];

const MILESTONES = [
  { date: '18 Nov 2012', title: 'Academic journey begins', body: 'Formally approved by the UGC of Bangladesh (ID 97) and the Government of Bangladesh.' },
  { date: '13 Apr 2022', title: '1st Convocation',          body: 'The first generation of SU graduates completed their journey.' },
  { date: '2024',        title: 'A permanent home',         body: 'SU opened its permanent campus in Khilgaon, Dhaka.' },
  { date: '28 Dec 2025', title: '2nd Convocation',          body: 'Held at the ICCB, where 96 gold medals were awarded.' },
];

const eyebrow = { display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 } as const;
const h2 = { fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', lineHeight: 1.2, margin: 0 } as const;

export default function HistoryPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="History"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'About Us', href: '/about' }, { label: 'History' }]}
      />

      {/* ===== 1. The beginning image + text ===== */}
      <section style={{ background: '#ffffff', padding: '100px 0 72px' }}>
        <Container className="!max-w-[1600px]">
          <div className="hist-intro">
            <div className="hist-intro__img">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/about/history.jpg" alt="Sonargaon University" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 18, display: 'block', boxShadow: '0 24px 60px rgba(43,49,117,0.16)' }} />
            </div>
            <div>
              <span style={eyebrow}>Our Story</span>
              <h2 style={{ ...h2, fontSize: 'clamp(28px, 3.6vw, 42px)', marginBottom: 22 }}>
                The History of Sonargaon University
              </h2>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.9, margin: 0 }}>
                Sonargaon University was established in 2012 under the Sonargaon University (SU) Trust a registered, non-political, non-profit voluntary organization founded by eminent entrepreneurs from the academic arena who shared a vision of accessible, quality higher education. The University formally began its academic activities on 18 November 2012, approved by the University Grants Commission (UGC of Bangladesh, ID&nbsp;97) and the Government of Bangladesh.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 2. Recognition & awards ===== */}
      <section style={{ background: '#F6F7FC', padding: '84px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ maxWidth: 820, margin: '0 auto 48px', textAlign: 'center' }}>
            <span style={eyebrow}>Recognition</span>
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)', marginBottom: 18 }}>
              National &amp; International Distinction
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              From its earliest years, SU set out to combine affordable education with strong research and
              creative practice a commitment that soon earned recognition at home and abroad.
            </p>
          </div>
          <div className="hist-awards">
            {AWARDS.map((a) => (
              <div key={a} className="hist-award">
                <Award size={22} color="#CC1579" strokeWidth={2.2} style={{ flexShrink: 0 }} />
                <span style={{ color: '#2B3175', fontSize: 16, lineHeight: 1.55, fontWeight: 500 }}>{a}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 3. Key milestones ===== */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ maxWidth: 720, margin: '0 auto 54px', textAlign: 'center' }}>
            <span style={eyebrow}>Our Journey</span>
            <h2 style={{ ...h2, fontSize: 'clamp(26px, 3.2vw, 38px)' }}>Key Milestones</h2>
          </div>
          <div className="hist-milestones">
            {MILESTONES.map(({ date, title, body }) => (
              <div key={date} className="hist-ms">
                <span className="hist-ms__date">{date}</span>
                <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 20, margin: '6px 0 10px' }}>
                  {title}
                </h3>
                <p style={{ color: '#5B5B78', fontSize: 15.5, lineHeight: 1.7, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== 4. Impact ===== */}
      <section style={{ background: '#F6F7FC', padding: '84px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
            <div className="hist-impact-stats">
              <div>
                <div className="hist-stat__fig">6,000+</div>
                <div className="hist-stat__lbl">students educated since 2012</div>
              </div>
              <div className="hist-impact-divider" />
              <div>
                <div className="hist-stat__fig">21,000+</div>
                <div className="hist-stat__lbl">alumni network worldwide</div>
              </div>
            </div>
            <p style={{ color: '#5B5B78', fontSize: 'clamp(17px, 2.2vw, 22px)', lineHeight: 1.7, fontWeight: 500, margin: '36px auto 0', maxWidth: 820 }}>
              Since its commencement in 2012, Sonargaon University has turned ideas into impact 
              transforming lives across Bangladesh and beyond.
            </p>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .hist-intro { display: grid; grid-template-columns: 1fr; gap: 44px; align-items: center; }
        .hist-intro__img { min-height: 280px; }
        @media (min-width: 992px) {
          .hist-intro { grid-template-columns: 1fr 1fr; gap: 60px; }
        }

        .hist-awards { display: grid; grid-template-columns: 1fr; column-gap: 56px; max-width: 940px; margin: 0 auto; }
        @media (min-width: 768px) { .hist-awards { grid-template-columns: 1fr 1fr; } }
        .hist-award {
          display: flex; align-items: center; gap: 14px;
          padding: 18px 2px;
          border-bottom: 1px solid #E6E7F0;
        }

        .hist-milestones { display: grid; grid-template-columns: 1fr; gap: 26px; }
        @media (min-width: 640px) { .hist-milestones { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .hist-milestones { grid-template-columns: repeat(4, 1fr); } }
        .hist-ms {
          background: #ffffff; border: 1px solid #ECECF3; border-left: 3px solid #CC1579;
          border-radius: 12px; padding: 26px 24px;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .hist-ms:hover { transform: translateY(-4px); box-shadow: 0 16px 36px rgba(43,49,117,0.08); }
        .hist-ms__date {
          display: block; font-family: var(--font-poppins), Poppins, sans-serif;
          font-weight: 500; font-size: 14px; color: #CC1579; letter-spacing: 0.06em;
        }

        .hist-impact-stats {
          display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 28px 56px;
        }
        .hist-impact-divider { width: 1px; height: 64px; background: #DCDEEC; }
        @media (max-width: 575px) { .hist-impact-divider { display: none; } }
        .hist-stat__fig {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: clamp(38px, 5vw, 56px); line-height: 1;
        }
        .hist-stat__lbl { color: #5B5B78; font-size: 15.5px; margin-top: 10px; }
      `}</style>
    </>
  );
}
