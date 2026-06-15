import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { ArrowUpRight, Link2 } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Faculty',
  description: 'Browse the faculties of Sonargaon University — Science & Engineering, Business, and Arts & Humanities — and explore their programs.',
  path: '/faculty',
});

const SECTIONS = [
  { label: 'Faculties', href: '/faculty', current: true },
  { label: 'Deans', href: '/faculty/deans' },
  { label: 'Department Heads', href: '#' },
  { label: 'Faculty Members', href: '#', ext: true },
  { label: 'Advisory Council', href: '#', ext: true },
  { label: 'Visiting Faculty', href: '#', ext: true },
];

const QUICK_LINKS = [
  { label: 'Admission Requirements', href: '/admission' },
  { label: 'Transfer Credits', href: '/academic' },
  { label: 'Waiver & Scholarship', href: '/admission' },
];

const FACULTIES = [
  {
    name: 'Faculty of Science & Engineering',
    image: '/assets/images/program/program__1.jpg',
    href: '/faculty/science-engineering',
    blurb:
      'A degree from Science & Engineering will transform your life — preparing you for the fourth industrial revolution across computing, electronics, civil, mechanical, architecture, textiles and marine engineering.',
  },
  {
    name: 'Faculty of Business',
    image: '/assets/images/program/program__2.jpg',
    href: '/faculty/business',
    blurb:
      'Want to lead in the business world? The Faculty of Business builds independent thinkers ready to launch and lead — from the BBA to a wide range of specialised MBA tracks.',
  },
  {
    name: 'Faculty of Arts & Humanities',
    image: '/assets/images/program/program__3.jpg',
    href: '/faculty/arts-humanities',
    blurb:
      'Explore law, language and media — degrees that sharpen critical thinking, communication and a deep understanding of the society around us.',
  },
];

export default function FacultyPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Faculty"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Faculty' }]}
      />

      <section style={{ background: '#F6F7FC', padding: '70px 0 90px' }}>
        <Container className="!max-w-[1600px]">
          <div className="fac-wrap">
            {/* ===== Sidebar ===== */}
            <aside className="fac-side">
              <h3 className="fac-side__title">Browse by Section ({String(SECTIONS.length).padStart(2, '0')})</h3>
              <ul className="fac-sec-list">
                {SECTIONS.map((s) => (
                  <li key={s.label}>
                    {s.current ? (
                      <span className="fac-sec-btn is-active">{s.label}</span>
                    ) : (
                      <Link href={s.href} className="fac-sec-btn">
                        {s.label}
                        {s.ext && <ArrowUpRight size={14} style={{ marginLeft: 6, opacity: 0.7 }} />}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>

              <div className="fac-quick">
                <h4 className="fac-quick__title"><Link2 size={15} /> Quick Links</h4>
                <div className="fac-quick__chips">
                  {QUICK_LINKS.map((q) => (
                    <Link key={q.label} href={q.href} className="fac-chip">{q.label}</Link>
                  ))}
                </div>
              </div>
            </aside>

            {/* ===== Content ===== */}
            <div className="fac-main">
              <h2 className="fac-main__title">Browse by Faculties</h2>
              <p className="fac-main__sub">
                Select a faculty to explore its degree programs, admission requirements, and student-life highlights.
              </p>

              <div className="fac-grid">
                {FACULTIES.map((f) => (
                  <article key={f.name} className="fac-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.image} alt={f.name} className="fac-card__img" />
                    <div className="fac-card__body">
                      <h3 className="fac-card__name"><Link href={f.href}>{f.name}</Link></h3>
                      <p className="fac-card__blurb">{f.blurb}</p>
                      <Link href={f.href} className="fac-card__more">
                        Learn More <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .fac-wrap { display: grid; grid-template-columns: 1fr; gap: 36px; }
        @media (min-width: 992px) {
          .fac-wrap { grid-template-columns: 300px 1fr; gap: 48px; align-items: start; }
          .fac-side { position: sticky; top: 110px; align-self: start; }
        }

        /* sidebar */
        .fac-side__title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; margin: 0 0 18px; padding-bottom: 16px;
          border-bottom: 1px solid #E2E3ED;
        }
        .fac-sec-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; }
        .fac-sec-btn {
          display: flex; align-items: center; width: 100%; text-align: left;
          padding: 13px 16px; border-radius: 10px; border-left: 3px solid transparent;
          color: #3D3D55; font-size: 15.5px; font-weight: 500; text-decoration: none; transition: all .2s ease;
        }
        .fac-sec-btn:hover { background: #EFEFF6; color: #2B3175; }
        .fac-sec-btn.is-active {
          background: rgba(43,49,117,0.06); color: #2B3175; font-weight: 700; border-left-color: #CC1579;
        }
        .fac-quick { margin-top: 30px; padding-top: 24px; border-top: 1px solid #E2E3ED; }
        .fac-quick__title {
          display: flex; align-items: center; gap: 8px; color: #2B3175;
          font-size: 15px; font-weight: 700; margin: 0 0 16px;
        }
        .fac-quick__chips { display: flex; flex-wrap: wrap; gap: 10px; }
        .fac-chip {
          display: inline-block; padding: 8px 16px; border-radius: 999px;
          border: 1px solid #DADCEA; color: #2B3175; font-size: 13.5px; font-weight: 500;
          text-decoration: none; transition: all .2s ease; background: #fff;
        }
        .fac-chip:hover { background: #2B3175; color: #fff; border-color: #2B3175; }

        /* content */
        .fac-main__title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: clamp(28px, 3.6vw, 44px); line-height: 1.15; margin: 0 0 14px;
        }
        .fac-main__sub { color: #5B5B78; font-size: 16.5px; line-height: 1.8; margin: 0 0 36px; max-width: 760px; }

        .fac-grid { display: grid; grid-template-columns: 1fr; gap: 30px; }
        @media (min-width: 768px) { .fac-grid { grid-template-columns: 1fr 1fr; } }
        .fac-card {
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 18px; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); transition: transform .25s ease, box-shadow .25s ease;
          display: flex; flex-direction: column;
        }
        .fac-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .fac-card__img { width: 100%; height: 230px; object-fit: cover; display: block; }
        .fac-card__body { padding: 28px 28px 26px; display: flex; flex-direction: column; flex: 1; }
        .fac-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 22px; margin: 0 0 12px;
        }
        .fac-card__name a { color: inherit; text-decoration: none; transition: color .2s ease; }
        .fac-card__name a:hover { color: #CC1579; }
        .fac-card__blurb { color: #5B5B78; font-size: 15.5px; line-height: 1.75; margin: 0 0 20px; flex: 1; }
        .fac-card__more {
          display: inline-flex; align-items: center; gap: 7px; color: #CC1579;
          font-weight: 700; font-size: 15.5px; text-decoration: none;
          padding-top: 18px; border-top: 1px solid #F0F0F5;
        }
        .fac-card__more:hover { gap: 11px; }
      `}</style>
    </>
  );
}
