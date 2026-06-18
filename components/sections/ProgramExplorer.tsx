'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Link2 } from 'lucide-react';

type Program = { name: string; tag: string; credits: string; duration: string };
type Faculty = { name: string; blurb: string; facultyHref: string; ug: Program[]; pg: Program[]; note?: string };

const p = (name: string, tag: string, credits: string, duration: string): Program => ({ name, tag, credits, duration });

const FACULTIES: Faculty[] = [
  {
    name: 'Faculty of Science & Engineering',
    blurb:
      'Engineering and technology degrees that prepare you for the fourth industrial revolution from computing and electronics to architecture, textiles and marine engineering.',
    facultyHref: '/faculty',
    ug: [
      p('B.Sc. in Computer Science & Engineering', 'CSE', '162', '4 yrs'),
      p('B.Sc. in Electrical & Electronics Engineering', 'EEE', '161', '4 yrs'),
      p('B.Sc. in Mechanical Engineering', 'ME', '160', '4 yrs'),
      p('B.Sc. in Civil Engineering', 'CE', '161', '4 yrs'),
      p('B.Sc. in Textile Engineering', 'TE', '161', '4 yrs'),
      p('B.Sc. in Naval Architecture & Marine Engineering', 'NAME', '161', '4 yrs'),
      p('Bachelor of Architecture', 'BARC', '196', '4 yrs'),
      p('B.Sc. in Apparel Manufacture & Technology', 'AMT', '160', '4 yrs'),
      p('B.Sc. in Fashion Design & Technology', 'FDT', '160', '4 yrs'),
    ],
    pg: [],
    note: 'Diploma entrants: engineering programs run 140–147.5 credits (~3 years 8 months).',
  },
  {
    name: 'Faculty of Business',
    blurb:
      'Business and management degrees from the BBA to a wide range of specialised MBA tracks for fresh graduates and working professionals.',
    facultyHref: '/faculty',
    ug: [p('Bachelor of Business Administration', 'BBA', '141', '4 yrs')],
    pg: [
      p('Master of Business Administration', 'MBA', '39', '1 yr'),
      p('Executive MBA', 'EMBA', '54', '1.4 yrs'),
      p('Regular MBA', 'RMBA', '69', '2 yrs'),
      p('MBA in Supply Chain Management', 'MSCM', '69', '2 yrs'),
      p('Master in Bank Management', 'MBM', '69', '2 yrs'),
      p('MBA in Textile & Fashion Marketing', 'MTFM', '69', '2 yrs'),
      p('MBA in Apparel Merchandising (2 yr)', 'MAM', '60', '2 yrs'),
      p('MBA in Apparel Merchandising (1 yr)', 'MAMS', '36', '1 yr'),
    ],
  },
  {
    name: 'Faculty of Arts & Humanities',
    blurb:
      'Law, language and media degrees that build critical thinking, communication and a deep understanding of society.',
    facultyHref: '/faculty',
    ug: [
      p("LLB (Hon's)", 'LLB', '144', '4 yrs'),
      p("B.A. (Hon's) in Bangla", 'BA', '142', '4 yrs'),
      p("BSS (Hon's) in Journalism & Media Studies", 'JMS', '146', '4 yrs'),
    ],
    pg: [
      p('LLM (1 year)', 'LLM', '36', '1 yr'),
      p('LLM (2 years)', 'LLMP', '62', '2 yrs'),
    ],
  },
];

const QUICK_LINKS = [
  { label: 'Tuition Fees', href: '/tution-fee' },
  { label: 'Waiver & Scholarship', href: '/admission' },
  { label: 'Admission', href: '/admission' },
  { label: 'Contact', href: '/contact' },
];

export default function ProgramExplorer() {
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState<'ug' | 'pg'>('ug');

  const faculty = FACULTIES[active];
  const rows = tab === 'ug' ? faculty.ug : faculty.pg;

  const selectFaculty = (i: number) => {
    setActive(i);
    setTab(FACULTIES[i].ug.length ? 'ug' : 'pg');
  };

  return (
    <div className="pex">
      {/* ===== Sidebar ===== */}
      <aside className="pex-side">
        <h3 className="pex-side__title">Browse by Faculty ({FACULTIES.length})</h3>
        <ul className="pex-fac-list">
          {FACULTIES.map((f, i) => (
            <li key={f.name}>
              <button
                type="button"
                onClick={() => selectFaculty(i)}
                className={`pex-fac-btn${i === active ? ' is-active' : ''}`}
              >
                {f.name.replace('Faculty of ', '')}
              </button>
            </li>
          ))}
        </ul>

        <div className="pex-quick">
          <h4 className="pex-quick__title"><Link2 size={15} /> Quick Links</h4>
          <div className="pex-quick__chips">
            {QUICK_LINKS.map((q) => (
              <Link key={q.label} href={q.href} className="pex-chip">{q.label}</Link>
            ))}
          </div>
        </div>
      </aside>

      {/* ===== Content ===== */}
      <div className="pex-main">
        <h2 className="pex-main__name">{faculty.name}</h2>
        <p className="pex-main__blurb">{faculty.blurb}</p>
        <Link href={faculty.facultyHref} className="pex-visit">
          <ArrowUpRight size={18} /> Visit Faculty Page
        </Link>

        {/* tabs */}
        <div className="pex-tabs">
          <button
            type="button"
            onClick={() => setTab('ug')}
            className={`pex-tab${tab === 'ug' ? ' is-active' : ''}`}
            disabled={!faculty.ug.length}
          >
            Undergraduate Program ({String(faculty.ug.length).padStart(2, '0')})
          </button>
          <button
            type="button"
            onClick={() => setTab('pg')}
            className={`pex-tab${tab === 'pg' ? ' is-active' : ''}`}
            disabled={!faculty.pg.length}
          >
            Post Graduate Program ({String(faculty.pg.length).padStart(2, '0')})
          </button>
        </div>

        {/* table */}
        {rows.length ? (
          <div className="pex-table-wrap">
            <table className="pex-table">
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>Full Program Name</th>
                  <th style={{ textAlign: 'center', width: 120 }}>Short Tag</th>
                  <th style={{ textAlign: 'center', width: 100 }}>Credits</th>
                  <th style={{ textAlign: 'center', width: 110 }}>Duration</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.name}>
                    <td>{row.name}</td>
                    <td style={{ textAlign: 'center' }}><span className="pex-tag">{row.tag}</span></td>
                    <td style={{ textAlign: 'center' }}>{row.credits}</td>
                    <td style={{ textAlign: 'center' }}>{row.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="pex-empty">No programs listed under this category yet.</p>
        )}

        {faculty.note && <p className="pex-note">{faculty.note}</p>}
      </div>

      <style>{`
        .pex { display: grid; grid-template-columns: 1fr; gap: 36px; }
        /* let grid items shrink below content width so the table can scroll
           inside its wrapper instead of overflowing the page on mobile */
        .pex-side, .pex-main { min-width: 0; }
        @media (min-width: 992px) {
          .pex { grid-template-columns: 300px 1fr; gap: 48px; align-items: start; }
          .pex-side { position: sticky; top: 110px; align-self: start; }
        }

        /* sidebar */
        .pex-side__title {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 18px; margin: 0 0 18px; padding-bottom: 16px;
          border-bottom: 1px solid #ECECF3;
        }
        .pex-fac-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 2px; }
        .pex-fac-btn {
          width: 100%; text-align: left; background: transparent; border: 0; cursor: pointer;
          padding: 14px 16px; border-radius: 10px; border-left: 3px solid transparent;
          color: #3D3D55; font-size: 15.5px; font-weight: 500; transition: all .2s ease;
        }
        .pex-fac-btn:hover { background: #F6F4FA; color: #2B3175; }
        .pex-fac-btn.is-active {
          background: rgba(43,49,117,0.06); color: #2B3175; font-weight: 700;
          border-left-color: #CC1579;
        }
        .pex-quick { margin-top: 30px; padding-top: 24px; border-top: 1px solid #ECECF3; }
        .pex-quick__title {
          display: flex; align-items: center; gap: 8px; color: #2B3175;
          font-size: 15px; font-weight: 700; margin: 0 0 16px;
        }
        .pex-quick__chips { display: flex; flex-wrap: wrap; gap: 10px; }
        .pex-chip {
          display: inline-block; padding: 8px 16px; border-radius: 999px;
          border: 1px solid #DADCEA; color: #2B3175; font-size: 13.5px; font-weight: 500;
          text-decoration: none; transition: all .2s ease;
        }
        .pex-chip:hover { background: #2B3175; color: #fff; border-color: #2B3175; }

        /* content */
        .pex-main__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: clamp(26px, 3.4vw, 40px); line-height: 1.15; margin: 0 0 16px;
        }
        .pex-main__blurb { color: #5B5B78; font-size: 16.5px; line-height: 1.8; margin: 0 0 18px; max-width: 760px; }
        .pex-visit {
          display: inline-flex; align-items: center; gap: 8px; color: #CC1579;
          font-weight: 700; font-size: 16px; text-decoration: none; margin-bottom: 28px;
        }
        .pex-visit:hover { text-decoration: underline; }

        .pex-tabs { display: flex; flex-wrap: wrap; gap: 14px; margin: 8px 0 28px; }
        .pex-tab {
          width: auto; padding: 12px 26px; border-radius: 999px; cursor: pointer; font-size: 15px; font-weight: 600;
          border: 1px solid #DADCEA; background: #fff; color: #2B3175; transition: all .2s ease;
        }
        .pex-tab:hover:not(:disabled) { border-color: #2B3175; }
        .pex-tab.is-active {
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff; border-color: transparent;
          box-shadow: 0 8px 18px rgba(43,49,117,0.2);
        }
        .pex-tab:disabled { opacity: .45; cursor: not-allowed; }

        .pex-table-wrap { overflow-x: auto; }
        .pex-table { width: 100%; border-collapse: collapse; min-width: 560px; }
        .pex-table th {
          color: #8A8AA3; font-size: 13px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
          padding: 0 18px 16px; border-bottom: 1px solid #ECECF3;
        }
        .pex-table td { color: #2B3175; font-size: 16px; padding: 18px; border-bottom: 1px solid #F0F0F5; }
        .pex-table td:first-child { font-weight: 500; }
        .pex-table tbody tr:hover { background: #FBF7FA; }
        .pex-tag {
          display: inline-block; font-family: var(--font-poppins), Poppins, sans-serif;
          font-weight: 700; font-size: 13px; color: #CC1579; letter-spacing: 0.04em;
          background: rgba(204,21,121,0.08); padding: 4px 12px; border-radius: 999px;
        }
        .pex-empty { color: #8A8AA3; font-size: 15.5px; padding: 24px 0; }
        @media (max-width: 575px) {
          .pex-table { min-width: 460px; }
          .pex-table th, .pex-table td { padding-left: 12px; padding-right: 12px; }
          .pex-main__name { font-size: 26px; }
          .pex-tab { padding: 10px 18px; font-size: 14px; }
        }
        .pex-note {
          margin: 22px 0 0; font-size: 14.5px; color: #8A6D7B; font-style: italic;
          background: rgba(204,21,121,0.05); border-left: 3px solid #CC1579;
          padding: 12px 18px; border-radius: 0 10px 10px 0;
        }
      `}</style>
    </div>
  );
}
