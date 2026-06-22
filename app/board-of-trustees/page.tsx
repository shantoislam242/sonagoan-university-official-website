import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';

export const metadata = buildMetadata({
  title: 'Board of Trustees',
  description:
    'The Sonargaon University Trust — a registered, non-political, non-profit voluntary organization — and the members of its Board of Trustees.',
  path: '/board-of-trustees',
});

const P = '/assets/images/leadership';

type Trustee = { name: string; role: string; tag: string; photo: string; href?: string };

const TRUSTEES: Trustee[] = [
  { name: 'Engr. Abdul Aziz', role: 'Chairman, Board of Trustees, SU', tag: 'Chairman', photo: `${P}/abdul-aziz.jpeg`, href: '/chairman' },
  { name: 'Engr. Md. Abdul Alim', role: 'General Secretary, Board of Trustees, SU', tag: 'Founder', photo: `${P}/abdul-alim.jpeg`, href: '/general-secretary' },
  { name: 'Advocate Umme Salma', role: 'Executive Member, Board of Trustees, SU', tag: 'Executive Member', photo: `${P}/umme-salma.jpeg`, href: '/executive-member' },
];

export default function BoardOfTrusteesPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Board of Trustees"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Board of Trustees' },
        ]}
      />

      {/* About the Trust */}
      <section style={{ background: '#ffffff', padding: '80px 0 60px' }}>
        <Container className="!max-w-[900px]">
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Sonargaon University Trust
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.4vw, 38px)', lineHeight: 1.25, marginBottom: 18 }}>
              The Board of Trustees
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.85, margin: 0 }}>
              Sonargaon University is sponsored by the Sonargaon University Trust &mdash; a registered,
              non-political, non-profit voluntary organization. Its members are eminent entrepreneurs from the
              academic arena who came together to establish a university that brings quality education within
              the reach of every deserving student.
            </p>
          </div>
        </Container>
      </section>

      {/* Trustees */}
      <section style={{ background: '#F6F7FC', padding: '70px 0 90px' }}>
        <Container className="!max-w-[1100px]">
          <div className="bot-grid">
            {TRUSTEES.map((t) => (
              <Link key={t.name} href={t.href ?? '#'} className="bot-card">
                <div className="bot-card__media">
                  <span className="bot-card__tag">{t.tag}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.photo} alt="" aria-hidden className="bot-card__bg" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.photo} alt={t.name} className="bot-card__photo" />
                </div>
                <div className="bot-card__body">
                  <h3 className="bot-card__name">{t.name}</h3>
                  <p className="bot-card__role">{t.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .bot-grid {
          display: grid; grid-template-columns: 1fr; gap: 26px;
          max-width: 1040px; margin: 0 auto;
        }
        @media (min-width: 700px) { .bot-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 980px) { .bot-grid { grid-template-columns: repeat(3, 1fr); } }

        .bot-card {
          background: #ffffff; border: 1px solid #ECECF3; overflow: hidden; text-decoration: none;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .bot-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .bot-card__media {
          position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .bot-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .bot-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .bot-card__tag {
          position: absolute; top: 14px; left: 14px; z-index: 2;
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff;
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
          padding: 6px 13px; border-radius: 999px; box-shadow: 0 4px 12px rgba(0,0,0,0.14);
        }
        .bot-card__body { padding: 22px 24px 24px; text-align: center; display: flex; flex-direction: column; flex: 1; }
        .bot-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 19px; line-height: 1.3; margin: 0 0 6px;
        }
        .bot-card__role { color: #5B5B78; font-size: 14.5px; margin: 0 0 16px; }
        .bot-card__link {
          margin-top: auto; display: inline-flex; align-items: center; justify-content: center; gap: 6px;
          color: #CC1579; font-weight: 600; font-size: 14px; text-decoration: none;
          padding-top: 14px; border-top: 1px solid #F0F0F5;
        }
        .bot-card__link:hover { gap: 10px; }
        .bot-card__link svg { color: #CC1579; }
      `}</style>
    </>
  );
}
