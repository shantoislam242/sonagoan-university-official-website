import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { CalendarRange, Layers, ClipboardCheck } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Our Programs',
  description:
    'Program structure at Sonargaon University — 3 faculties, 13 undergraduate and 10 postgraduate programs, with credits, duration, semester system and assessment details.',
  path: '/academic',
});

type Row = { program: string; credits: string; duration: string };
type Group = { label: string; rows: Row[] };
type Faculty = { name: string; groups: Group[]; note?: string };

const r = (program: string, credits: string, duration: string): Row => ({ program, credits, duration });

const FACULTIES: Faculty[] = [
  {
    name: 'Faculty of Science & Engineering',
    note: 'Diploma entrants: engineering programs run 140–147.5 credits (~3 years 8 months).',
    groups: [
      {
        label: 'Undergraduate · Science background',
        rows: [
          r('B.Sc. in Computer Science & Engineering (CSE)', '162', '4 yrs'),
          r('B.Sc. in Electrical & Electronics Engineering (EEE)', '161', '4 yrs'),
          r('B.Sc. in Mechanical Engineering (ME)', '160', '4 yrs'),
          r('B.Sc. in Civil Engineering', '161', '4 yrs'),
          r('B.Sc. in Textile Engineering', '161', '4 yrs'),
          r('B.Sc. in Naval Architecture & Marine Engineering (NAME)', '161', '4 yrs'),
          r('Bachelor of Architecture (BARC)', '196', '4 yrs'),
        ],
      },
      {
        label: 'Undergraduate · Any background',
        rows: [
          r('B.Sc. in Apparel Manufacture & Technology (AMT)', '160', '4 yrs'),
          r('B.Sc. in Fashion Design & Technology (FDT)', '160', '4 yrs'),
        ],
      },
    ],
  },
  {
    name: 'Faculty of Business',
    groups: [
      {
        label: 'Undergraduate',
        rows: [r('Bachelor of Business Administration (BBA)', '141', '4 yrs')],
      },
      {
        label: 'Postgraduate',
        rows: [
          r('Master of Business Administration (MBA)', '39', '1 yr'),
          r('Executive MBA (EMBA)', '54', '1.4 yrs'),
          r('Regular MBA (RMBA)', '69', '2 yrs'),
          r('MBA in Supply Chain Management (MSCM)', '69', '2 yrs'),
          r('Master in Bank Management (MBM)', '69', '2 yrs'),
          r('MBA in Textile & Fashion Marketing (MTFM)', '69', '2 yrs'),
          r('MBA in Apparel Merchandising — 2 yr (MAM)', '60', '2 yrs'),
          r('MBA in Apparel Merchandising — 1 yr (MAMS)', '36', '1 yr'),
        ],
      },
    ],
  },
  {
    name: 'Faculty of Arts & Humanities',
    groups: [
      {
        label: 'Undergraduate',
        rows: [
          r("LLB (Hon's)", '144', '4 yrs'),
          r("B.A. (Hon's) in Bangla", '142', '4 yrs'),
          r("BSS (Hon's) in Journalism & Media Studies (JMS)", '146', '4 yrs'),
        ],
      },
      {
        label: 'Postgraduate',
        rows: [
          r('LLM (1 year)', '36', '1 yr'),
          r('LLM (2 years) — LLMP', '62', '2 yrs'),
        ],
      },
    ],
  },
];

const INFO = [
  { Icon: CalendarRange, title: 'Academic Year', body: 'January – December.' },
  {
    Icon: Layers,
    title: 'Semester System',
    body: 'Tri-semester: CSE, EEE, ME, Civil, Textile, BBA, MBA, EMBA, RMBA, MSCM, MBM. Bi-semester: AMT, FDT, NAME, BARC, Bangla, LLB, JMS, MTFM, MAM, MAMS, LLM, LLMP.',
  },
  { Icon: ClipboardCheck, title: 'Assessment', body: 'Continuous 30% + Midterm 30% + Final 40%.' },
];

const eyebrow = { display: 'inline-block', color: '#CC1579', fontWeight: 700, fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: 14 } as const;

export default function AcademicPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Our Programs"
        breadcrumb={[{ label: 'Home', href: '/' }, { label: 'Our Programs' }]}
      />

      {/* ===== Intro ===== */}
      <section style={{ background: '#ffffff', padding: '100px 0 50px' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <span style={eyebrow}>Academic Programs</span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(30px, 4vw, 44px)', lineHeight: 1.18, marginBottom: 18 }}>
              Program Structure
            </h2>
            <p style={{ color: '#5B5B78', fontSize: 18, lineHeight: 1.8, margin: 0 }}>
              Three faculties · 13 undergraduate · 10 postgraduate programs &mdash; explore the full range of
              degrees offered at Sonargaon University, with credits and duration for each.
            </p>
          </div>
        </Container>
      </section>

      {/* ===== Faculties ===== */}
      <section style={{ background: '#F6F7FC', padding: '60px 0 90px' }}>
        <Container className="!max-w-[1600px]">
          <div className="acad-faculties">
            {FACULTIES.map((fac) => (
              <div key={fac.name} className="acad-fac">
                <h3 className="acad-fac__name">{fac.name}</h3>
                {fac.groups.map((g) => (
                  <div key={g.label} className="acad-group">
                    <h4 className="acad-group__label">{g.label}</h4>
                    <div className="acad-table-wrap">
                      <table className="acad-table">
                        <thead>
                          <tr>
                            <th style={{ textAlign: 'left' }}>Program</th>
                            <th style={{ textAlign: 'center', width: 120 }}>Credits</th>
                            <th style={{ textAlign: 'center', width: 130 }}>Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {g.rows.map((row) => (
                            <tr key={row.program}>
                              <td>{row.program}</td>
                              <td style={{ textAlign: 'center' }}>{row.credits}</td>
                              <td style={{ textAlign: 'center' }}>{row.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
                {fac.note && <p className="acad-note">{fac.note}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== Academic info ===== */}
      <section style={{ background: '#ffffff', padding: '90px 0' }}>
        <Container className="!max-w-[1600px]">
          <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 50px' }}>
            <span style={eyebrow}>Good to Know</span>
            <h2 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 'clamp(26px, 3.2vw, 38px)', lineHeight: 1.2, margin: 0 }}>
              Academic Information
            </h2>
          </div>
          <div className="acad-info">
            {INFO.map(({ Icon, title, body }) => (
              <div key={title} className="acad-info__card">
                <span className="acad-info__icon">
                  <Icon size={26} color="#CC1579" strokeWidth={2} />
                </span>
                <h3 style={{ fontFamily: 'var(--font-poppins), Poppins, sans-serif', fontWeight: 700, color: '#2B3175', fontSize: 20, margin: '0 0 10px' }}>
                  {title}
                </h3>
                <p style={{ color: '#5B5B78', fontSize: 15.5, lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .acad-faculties { display: flex; flex-direction: column; gap: 48px; }
        .acad-fac {
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 20px;
          padding: 40px 38px; box-shadow: 0 12px 34px rgba(43,49,117,0.05);
        }
        .acad-fac__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: clamp(22px, 2.4vw, 28px); margin: 0 0 8px;
          padding-bottom: 18px; border-bottom: 2px solid #F0EAF2;
        }
        .acad-group { margin-top: 26px; }
        .acad-group__label {
          color: #CC1579; font-size: 13px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; margin: 0 0 14px;
        }
        .acad-table-wrap { overflow-x: auto; }
        .acad-table { width: 100%; border-collapse: collapse; min-width: 520px; }
        .acad-table th {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase;
          background: #F6F4FA; padding: 13px 18px; border-bottom: 1px solid #ECECF3;
        }
        .acad-table td {
          color: #3D3D55; font-size: 15.5px; padding: 14px 18px; border-bottom: 1px solid #F0F0F5;
        }
        .acad-table tbody tr:hover { background: #FBF7FA; }
        .acad-table td:first-child { font-weight: 500; color: #2B3175; }
        .acad-note {
          margin: 22px 0 0; font-size: 14.5px; color: #8A6D7B; font-style: italic;
          background: rgba(204,21,121,0.05); border-left: 3px solid #CC1579;
          padding: 12px 18px; border-radius: 0 10px 10px 0;
        }
        .acad-info { display: grid; grid-template-columns: 1fr; gap: 26px; }
        @media (min-width: 768px) { .acad-info { grid-template-columns: repeat(3, 1fr); } }
        .acad-info__card {
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 18px;
          padding: 32px 30px; box-shadow: 0 10px 30px rgba(43,49,117,0.05);
        }
        .acad-info__icon {
          display: inline-flex; width: 54px; height: 54px; border-radius: 14px;
          background: rgba(204,21,121,0.10); align-items: center; justify-content: center; margin-bottom: 18px;
        }
      `}</style>
    </>
  );
}
