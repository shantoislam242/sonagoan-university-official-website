import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Deans of the Faculties',
  description:
    'Meet the deans leading the three faculties of Sonargaon University Science & Engineering, Business, and Arts & Humanities.',
  path: '/faculty/deans',
});

const DEANS = [
  {
    name: 'Brig. Gen. (Retd) Prof. Habibur Rahman Kamal',
    nominal: 'ndc, psc',
    faculty: 'Faculty of Science & Engineering',
    photo: '/assets/images/faculty/dean-kamal.png',
    href: '/faculty/science-engineering',
  },
  {
    name: 'Prof. Md. Al-Amin Molla',
    nominal: '',
    faculty: 'Faculty of Business',
    photo: '/assets/images/faculty/dean-business.jpg',
    href: '/faculty/business',
  },
  {
    name: 'Dr. A. S. M. Tariq Iqbal',
    nominal: '',
    faculty: 'Faculty of Arts & Humanities',
    photo: '/assets/images/faculty/dean-arts.jpg',
    href: '/faculty/arts-humanities',
  },
];

export default function DeansPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Deans of the Faculties"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Faculty', href: '/faculty' },
          { label: 'Deans' },
        ]}
      />

      <section style={{ background: '#F6F7FC', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 54px' }}>
            <span style={{ display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 }}>
              Faculty Leadership
            </span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(28px, 3.6vw, 42px)', lineHeight: 1.2, marginBottom: 16 }}>
              Meet Our Deans
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 17, lineHeight: 1.8, margin: 0 }}>
              The academic leaders guiding each of Sonargaon University&rsquo;s three faculties.
            </p>
          </div>

          <div className="deans-grid">
            {DEANS.map((d) => (
              <article key={d.name} className="dean-card">
                <div className="dean-card__photo-wrap">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={d.photo} alt={d.name} className="dean-card__photo" />
                </div>
                <div className="dean-card__body">
                  <h3 className="dean-card__name">
                    {d.name}
                    {d.nominal && <span className="dean-card__nominal">, {d.nominal}</span>}
                  </h3>
                  <p className="dean-card__role">Dean of the Faculty</p>
                  <span className="dean-card__faculty">{d.faculty}</span>
                  <Link href={d.href} className="dean-card__link">
                    View Faculty <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .deans-grid { display: grid; grid-template-columns: 1fr; gap: 24px; max-width: 1180px; margin: 0 auto; }
        @media (min-width: 700px) { .deans-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .deans-grid { grid-template-columns: repeat(3, 1fr); } }
        .dean-card {
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 18px; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .dean-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .dean-card__photo-wrap { border-bottom: 1px solid #ECECF3; background: #EEF0F6; }
        .dean-card__photo {
          width: 100%; height: 330px; object-fit: cover; object-position: top center; display: block;
        }
        .dean-card__body { padding: 26px 28px 28px; display: flex; flex-direction: column; flex: 1; }
        .dean-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 19px; line-height: 1.35; margin: 0 0 8px;
        }
        .dean-card__nominal { font-weight: 500; font-size: 14px; color: #8A8AA3; }
        .dean-card__role { color: #5B5B78; font-size: 14.5px; margin: 0 0 14px; }
        .dean-card__faculty {
          align-self: flex-start; display: inline-block; background: rgba(204,21,121,0.08);
          color: #CC1579; font-size: 11.5px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 6px 13px; border-radius: 999px; margin-bottom: 20px;
        }
        .dean-card__link {
          margin-top: auto; display: inline-flex; align-items: center; gap: 7px;
          color: #CC1579; font-weight: 700; font-size: 15px; text-decoration: none;
          padding-top: 16px; border-top: 1px solid #F0F0F5;
        }
        .dean-card__link:hover { gap: 11px; }
      `}</style>
    </>
  );
}
