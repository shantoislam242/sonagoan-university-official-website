'use client';

import { useState } from 'react';
import { Search, ArrowUpRight, Users } from 'lucide-react';

type Dept = { name: string; faculty: string; href: string };

const SE = 'Science & Engineering';
const BZ = 'Business';
const AH = 'Arts & Humanities';

// Per-department faculty-member listing pages. '#' until each department's
// page is published; the Mechanical Engineering list is already live.
const ME = 'https://mechanical-engineering-olive.vercel.app/faculty-member';

const DEPARTMENTS: Dept[] = [
  { name: 'Computer Science & Engineering', faculty: SE, href: '#' },
  { name: 'Electrical & Electronics Engineering', faculty: SE, href: '#' },
  { name: 'Mechanical Engineering', faculty: SE, href: ME },
  { name: 'Civil Engineering', faculty: SE, href: '#' },
  { name: 'Textile Engineering', faculty: SE, href: '#' },
  { name: 'Naval Architecture & Marine Engineering', faculty: SE, href: '#' },
  { name: 'Architecture', faculty: SE, href: '#' },
  { name: 'Apparel Manufacture & Technology', faculty: SE, href: '#' },
  { name: 'Fashion Design & Technology', faculty: SE, href: '#' },
  { name: 'Business Administration', faculty: BZ, href: '#' },
  { name: 'Law', faculty: AH, href: '#' },
  { name: 'B.A. Honours (Bangla)', faculty: AH, href: '#' },
];

const TABS = ['All', SE, BZ, AH];

export default function FacultyMembersExplorer() {
  const [faculty, setFaculty] = useState('All');
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const list = DEPARTMENTS.filter(
    (d) =>
      (faculty === 'All' || d.faculty === faculty) &&
      (q === '' || d.name.toLowerCase().includes(q) || d.faculty.toLowerCase().includes(q)),
  );

  return (
    <div className="fme">
      {/* controls */}
      <div className="fme-controls">
        <div className="fme-search">
          <Search size={18} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a department…"
            aria-label="Search department"
          />
        </div>
        <div className="fme-tabs">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setFaculty(t)}
              className={`fme-tab${faculty === t ? ' is-active' : ''}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <p className="fme-count">{list.length} department{list.length === 1 ? '' : 's'}</p>

      {/* department list */}
      <div className="fme-grid">
        {list.map((d) => {
          const ext = d.href.startsWith('http');
          const linkProps = ext ? { target: '_blank', rel: 'noopener noreferrer' } : {};
          return (
            <a key={d.name} href={d.href} {...linkProps} className="fme-card">
              <span className="fme-card__icon">
                <Users size={20} />
              </span>
              <span className="fme-card__text">
                <span className="fme-card__name">{d.name}</span>
                <span className="fme-card__fac">{d.faculty}</span>
              </span>
              <ArrowUpRight size={20} className="fme-card__arrow" />
            </a>
          );
        })}
      </div>

      {list.length === 0 && <p className="fme-empty">No departments match your search.</p>}

      <style>{`
        .fme-controls {
          display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between;
          gap: 16px 24px; margin-bottom: 22px;
        }
        .fme-search {
          display: inline-flex; align-items: center; gap: 10px; flex: 1 1 280px; max-width: 420px;
          background: #fff; border: 1px solid #E2E3ED; border-radius: 999px; padding: 0 18px;
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .fme-search:focus-within { border-color: #2B3175; box-shadow: 0 0 0 3px rgba(43,49,117,0.08); }
        .fme-search svg { color: #8A8AA3; flex-shrink: 0; }
        .fme-search input {
          width: 100%; border: 0; outline: 0; background: transparent; padding: 13px 0;
          font-size: 14.5px; color: #2B3175;
        }
        .fme-search input::placeholder { color: #9A9AB0; }
        .fme-tabs { display: flex; flex-wrap: wrap; gap: 10px; }
        .fme-tab {
          width: auto; padding: 9px 18px; border-radius: 999px; cursor: pointer; font-size: 13.5px; font-weight: 600;
          border: 1px solid #E2E3ED; background: #fff; color: #2B3175; transition: all .2s ease;
        }
        .fme-tab:hover { border-color: #2B3175; }
        .fme-tab.is-active {
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff; border-color: transparent;
          box-shadow: 0 8px 18px rgba(43,49,117,0.22);
        }
        .fme-count {
          color: #8A8AA3; font-size: 13px; font-weight: 600; margin: 0 0 22px; padding-left: 2px;
          text-transform: uppercase; letter-spacing: 0.04em;
        }

        .fme-grid { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 700px) { .fme-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1100px) { .fme-grid { grid-template-columns: 1fr 1fr 1fr; } }
        .fme-card {
          display: flex; align-items: center; gap: 16px; text-decoration: none;
          background: #fff; border: 1px solid #ECECF3; border-radius: 14px; padding: 18px 20px;
          box-shadow: 0 8px 24px rgba(43,49,117,0.05);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .fme-card:hover {
          transform: translateY(-3px); border-color: #d7d8e6;
          box-shadow: 0 18px 38px rgba(43,49,117,0.12);
        }
        .fme-card__icon {
          flex-shrink: 0; width: 46px; height: 46px; border-radius: 12px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(43,49,117,0.08); color: #2B3175; transition: all .25s ease;
        }
        .fme-card:hover .fme-card__icon {
          background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff;
        }
        .fme-card__text { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
        .fme-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 15.5px; line-height: 1.3;
        }
        .fme-card__fac { color: #8A8AA3; font-size: 12.5px; font-weight: 500; }
        .fme-card__arrow { color: #CC1579; flex-shrink: 0; transition: transform .2s ease; }
        .fme-card:hover .fme-card__arrow { transform: translate(2px, -2px); }
        .fme-empty { color: #8A8AA3; font-size: 15.5px; text-align: center; padding: 30px 0; }
      `}</style>
    </div>
  );
}
