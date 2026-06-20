import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Check, BookOpen, MonitorSmartphone, Globe } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Office of Library & Information',
  description:
    'The Central Library is the academic heart of Sonargaon University, with over 10,000 books, an e-library system, and the online portal lib.su.edu.bd.',
  path: '/library-information',
});

const RESPONSIBILITIES = [
  'Managing the print collection of 10,000+ books',
  'E-library & digital resource access',
  'Book issue, return & membership services',
  'Reference, research & journal support',
  'Reading room & study space management',
  'Cataloguing, indexing & resource organization',
  'Supporting the e-learning platform',
  'Inter-library & academic resource coordination',
];

const P = '/assets/images/library-office';

const TEAM = [
  { name: 'Razia Sultana', role: 'Assistant Librarian', photo: `${P}/razia-sultana.png` },
  { name: 'Md. Moniruzzaman', role: 'Library Officer', photo: `${P}/moniruzzaman.png` },
  { name: 'Md. Arzoo Miah', role: 'Library Officer', photo: `${P}/arzoo-miah.png` },
];

export default function LibraryInformationPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Office of Library & Information"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Academics', href: '/academic' },
          { label: 'Library & Information' },
        ]}
      />

      {/* About + quick info */}
      <section style={{ background: '#ffffff', padding: '80px 0 70px' }}>
        <Container className="!max-w-[1200px]">
          <div className="lib-about">
            <div className="lib-about__text">
              <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
                Academic Office
              </span>
              <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.25, marginBottom: 18 }}>
                About this Office
              </h2>
              <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
                The Central Library is the academic heart of Sonargaon University, a quiet, resourceful space
                supporting study, teaching, and research. With a collection of over 10,000 books alongside an
                e-library system and e-learning platform, the library gives students and faculty access to both
                print and digital knowledge resources. Members can also explore the online library portal at{' '}
                <a href="http://lib.su.edu.bd" target="_blank" rel="noopener noreferrer" style={{ color: '#CC1579', fontWeight: 600 }}>lib.su.edu.bd</a>,
                making learning materials available anytime, on and off campus.
              </p>
            </div>

            <aside className="lib-info">
              <h3 className="lib-info__title">Library at a Glance</h3>
              <div className="lib-info__item">
                <span className="lib-info__icon"><BookOpen size={18} /></span>
                <span>
                  <span className="lib-info__label">Collection</span>
                  <span className="lib-info__value">10,000+ books</span>
                </span>
              </div>
              <div className="lib-info__item">
                <span className="lib-info__icon"><MonitorSmartphone size={18} /></span>
                <span>
                  <span className="lib-info__label">Digital</span>
                  <span className="lib-info__value">E-library & e-learning platform</span>
                </span>
              </div>
              <div className="lib-info__item">
                <span className="lib-info__icon"><Globe size={18} /></span>
                <span>
                  <span className="lib-info__label">Portal</span>
                  <a href="http://lib.su.edu.bd" target="_blank" rel="noopener noreferrer" className="lib-info__value lib-info__link">lib.su.edu.bd</a>
                </span>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Responsibilities */}
      <section style={{ background: '#ffffff', padding: '10px 0 80px' }}>
        <Container className="!max-w-[1200px]">
          <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 22, marginBottom: 26, textAlign: 'center' }}>
            Responsibilities
          </h3>
          <div className="lib-resp">
            {RESPONSIBILITIES.map((r) => (
              <div key={r} className="lib-resp__item">
                <span className="lib-resp__icon">
                  <Check size={15} strokeWidth={3} />
                </span>
                <span>{r}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', textAlign: 'center', marginBottom: 48 }}>
            Our Team
          </h2>

          <div className="lib-grid">
            {TEAM.map((m) => (
              <article key={m.name} className="lib-card">
                <div className="lib-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt="" aria-hidden className="lib-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo} alt={m.name} className="lib-card__photo" />
                </div>
                <div className="lib-card__body">
                  <h3 className="lib-card__name">{m.name}</h3>
                  <p className="lib-card__role">{m.role}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .lib-about { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: start; }
        @media (min-width: 900px) { .lib-about { grid-template-columns: 1.7fr 1fr; gap: 48px; } }

        .lib-info {
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 16px; padding: 26px 26px 22px;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06);
        }
        .lib-info__title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: 17px; margin: 0 0 18px; padding-bottom: 14px; border-bottom: 1px solid #ECECF3;
        }
        .lib-info__item { display: flex; align-items: flex-start; gap: 14px; padding: 12px 0; }
        .lib-info__item + .lib-info__item { border-top: 1px solid #F0F0F5; }
        .lib-info__icon {
          flex-shrink: 0; width: 38px; height: 38px; border-radius: 10px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(43,49,117,0.08); color: #2B3175;
        }
        .lib-info__label {
          display: block; color: #8A8AA3; font-size: 11.5px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 3px;
        }
        .lib-info__value { display: block; color: #2B3175; font-size: 15px; font-weight: 600; line-height: 1.4; }
        .lib-info__link { color: #CC1579; text-decoration: none; }
        .lib-info__link:hover { text-decoration: underline; }

        .lib-resp { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .lib-resp { grid-template-columns: 1fr 1fr; } }
        .lib-resp__item {
          display: flex; align-items: center; gap: 14px;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
          color: #2B3175; font-size: 15.5px; font-weight: 500;
        }
        .lib-resp__icon {
          flex-shrink: 0; width: 28px; height: 28px; border-radius: 8px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(204,21,121,0.10); color: #CC1579;
        }

        .lib-grid {
          display: grid; grid-template-columns: 1fr; gap: 24px;
          margin: 0 auto; justify-content: center; max-width: 1000px;
        }
        @media (min-width: 600px) { .lib-grid { grid-template-columns: repeat(2, minmax(0, 300px)); } }
        @media (min-width: 900px) { .lib-grid { grid-template-columns: repeat(3, minmax(0, 300px)); } }

        .lib-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .lib-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .lib-card__photo-wrap {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .lib-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .lib-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .lib-card__body { padding: 22px 24px 24px; text-align: center; }
        .lib-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; line-height: 1.3; margin: 0 0 5px;
        }
        .lib-card__role { color: #5B5B78; font-size: 14px; line-height: 1.4; margin: 0; }
      `}</style>
    </>
  );
}
