'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Level = 'ug' | 'grad';
type Dept = { name: string; faculty: string; href: string; levels: Level[]; img: string };

const SE = 'Science & Engineering';
const BZ = 'Business';
const AH = 'Arts & Humanities';
const SE_HREF = '/faculty/science-engineering';
const BZ_HREF = '/faculty/business';
const AH_HREF = '/faculty/arts-humanities';

const img = (n: number) => `/assets/images/course/${String(n).padStart(2, '0')}.jpg`;

const DEPARTMENTS: Dept[] = [
  { name: 'Computer Science & Engineering', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(1) },
  { name: 'Electrical & Electronic Engineering', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(2) },
  { name: 'Mechanical Engineering', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(3) },
  { name: 'Civil Engineering', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(4) },
  { name: 'Textile Engineering', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(5) },
  { name: 'Naval Architecture & Marine Engineering', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(6) },
  { name: 'Architecture', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(7) },
  { name: 'Apparel Manufacture & Technology', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(8) },
  { name: 'Fashion Design & Technology', faculty: SE, href: SE_HREF, levels: ['ug'], img: img(9) },
  { name: 'Business Administration', faculty: BZ, href: BZ_HREF, levels: ['ug', 'grad'], img: img(10) },
  { name: 'Law', faculty: AH, href: AH_HREF, levels: ['ug', 'grad'], img: img(11) },
  { name: 'Bangla Language & Literature', faculty: AH, href: AH_HREF, levels: ['ug'], img: img(12) },
  { name: 'Journalism & Media Studies', faculty: AH, href: AH_HREF, levels: ['ug'], img: img(13) },
];

const FACULTIES = ['All', SE, BZ, AH];
const PROGRAMS: { label: string; value: 'all' | Level }[] = [
  { label: 'All', value: 'all' },
  { label: 'Undergraduate', value: 'ug' },
  { label: 'Graduate', value: 'grad' },
];

export default function DepartmentExplorer() {
  const [faculty, setFaculty] = useState('All');
  const [program, setProgram] = useState<'all' | Level>('all');

  const list = DEPARTMENTS.filter(
    (d) => (faculty === 'All' || d.faculty === faculty) && (program === 'all' || d.levels.includes(program)),
  );

  return (
    <div className="dep">
      {/* filters */}
      <div className="dep-filters">
        <div className="dep-fgroup">
          <span className="dep-fgroup__label">Browse by Faculty</span>
          <div className="dep-pills">
            {FACULTIES.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFaculty(f)}
                className={`dep-pill${faculty === f ? ' is-active' : ''}`}
              >
                {f === SE ? 'Science & Engineering' : f}
              </button>
            ))}
          </div>
        </div>

        <span className="dep-fdivider" aria-hidden />

        <div className="dep-fgroup">
          <span className="dep-fgroup__label">Browse by Program</span>
          <div className="dep-pills">
            {PROGRAMS.map((p) => (
              <button
                key={p.value}
                type="button"
                onClick={() => setProgram(p.value)}
                className={`dep-pill${program === p.value ? ' is-active' : ''}`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="dep-count">{list.length} department{list.length === 1 ? '' : 's'}</p>

      {/* cards */}
      <div className="dep-grid">
        {list.map((d) => (
          <article key={d.name} className="dep-card">
            <div className="dep-card__media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={d.img} alt={d.name} className="dep-card__img" />
              <span className="dep-card__fac">{d.faculty}</span>
            </div>
            <div className="dep-card__body">
              <h3 className="dep-card__name">{d.name}</h3>
              <div className="dep-card__levels">
                {d.levels.includes('ug') && <span className="dep-level dep-level--ug">Undergraduate</span>}
                {d.levels.includes('grad') && <span className="dep-level dep-level--grad">Graduate</span>}
              </div>
              <Link href={d.href} className="dep-card__cta">
                View Details <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {list.length === 0 && <p className="dep-empty">No departments match this filter.</p>}

      <style>{`
        .dep-filters {
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 18px;
          padding: 28px 36px; box-shadow: 0 12px 32px rgba(43,49,117,0.06); margin-bottom: 22px;
          display: flex; flex-wrap: wrap; gap: 24px 40px; align-items: stretch; justify-content: flex-start;
        }
        .dep-fgroup { display: flex; flex-direction: column; align-items: flex-start; gap: 14px; }
        .dep-fdivider { width: 1px; align-self: stretch; background: #ECECF3; }
        @media (max-width: 767px) { .dep-fdivider { display: none; } }
        .dep-fgroup__label {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175;
          font-size: 13px; letter-spacing: 0.04em; text-transform: uppercase;
        }
        .dep-fgroup__label::before { content: ''; width: 4px; height: 16px; border-radius: 2px; background: linear-gradient(180deg, #2B3175, #CC1579); }
        .dep-pills { display: flex; flex-wrap: wrap; gap: 10px; }
        .dep-pill {
          width: auto; padding: 9px 20px; border-radius: 999px; cursor: pointer; font-size: 14px; font-weight: 600;
          border: 1px solid #E2E3ED; background: #F8F8FC; color: #2B3175; transition: all .2s ease;
        }
        .dep-pill:hover { background: #fff; border-color: #2B3175; }
        .dep-pill.is-active {
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff; border-color: transparent;
          box-shadow: 0 8px 18px rgba(43,49,117,0.22);
        }
        .dep-count {
          color: #8A8AA3; font-size: 13.5px; font-weight: 600; margin: 0 0 26px; padding-left: 2px;
          text-transform: uppercase; letter-spacing: 0.04em;
        }

        .dep-grid { display: grid; grid-template-columns: 1fr; gap: 28px; }
        @media (min-width: 600px) { .dep-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .dep-grid { grid-template-columns: 1fr 1fr 1fr; } }
        .dep-card {
          display: flex; flex-direction: column; background: #fff; border: 1px solid #ECECF3;
          border-radius: 18px; overflow: hidden; box-shadow: 0 12px 34px rgba(43,49,117,0.06);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .dep-card:hover { transform: translateY(-6px); box-shadow: 0 24px 50px rgba(43,49,117,0.14); }
        .dep-card__media { position: relative; overflow: hidden; }
        .dep-card__media::after {
          content: ''; position: absolute; inset: 0; pointer-events: none;
          background: linear-gradient(to top, rgba(20,16,40,0.45) 0%, rgba(20,16,40,0) 48%);
        }
        .dep-card__img { width: 100%; height: 245px; object-fit: cover; display: block; transition: transform .45s ease; }
        .dep-card:hover .dep-card__img { transform: scale(1.06); }
        .dep-card__fac {
          position: absolute; top: 14px; left: 14px; z-index: 1;
          background: rgba(255,255,255,0.92); backdrop-filter: blur(4px);
          color: #2B3175; font-size: 11.5px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; padding: 6px 13px; border-radius: 999px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        .dep-card__body { padding: 24px 26px 26px; display: flex; flex-direction: column; flex: 1; }
        .dep-card__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 20px; line-height: 1.3; margin: 0 0 16px; }
        .dep-card__levels { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 22px; }
        .dep-level { font-size: 12.5px; font-weight: 600; padding: 5px 13px; border-radius: 999px; }
        .dep-level--ug { background: rgba(43,49,117,0.08); color: #2B3175; }
        .dep-level--grad { background: rgba(204,21,121,0.10); color: #CC1579; }
        .dep-card__cta {
          margin-top: auto; display: inline-flex; align-items: center; gap: 7px; align-self: flex-start;
          color: #CC1579; font-weight: 700; font-size: 14.5px; text-decoration: none;
          padding-top: 16px; border-top: 1px solid #F0F0F5; width: 100%;
        }
        .dep-card__cta:hover { gap: 11px; }
        .dep-empty { color: #8A8AA3; font-size: 15.5px; text-align: center; padding: 30px 0; }
      `}</style>
    </div>
  );
}
