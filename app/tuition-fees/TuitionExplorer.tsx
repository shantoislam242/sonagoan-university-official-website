'use client';

import { useMemo, useState } from 'react';
import { Search, ChevronDown, GraduationCap, Layers } from 'lucide-react';
import {
  UG_TRI, UG_BI, PG_TRI, PG_BI, ugHeadline,
  type UGProgram, type PGProgram,
} from '@/lib/tuition-data';

const fmt = (n: number | null) => (n == null ? '—' : `৳${n.toLocaleString('en-US')}`);

type TabKey = 'ug-tri' | 'ug-bi' | 'pg';
const TABS: { key: TabKey; label: string; sub: string }[] = [
  { key: 'ug-tri', label: 'Undergraduate', sub: 'Tri-Semester' },
  { key: 'ug-bi', label: 'Undergraduate', sub: 'Bi-Semester' },
  { key: 'pg', label: 'Postgraduate', sub: 'Master’s' },
];

function UGCard({ p, open, onToggle }: { p: UGProgram; open: boolean; onToggle: () => void }) {
  const head = ugHeadline(p);
  return (
    <article className={`tf-card${open ? ' is-open' : ''}`}>
      <button className="tf-card__head" onClick={onToggle} aria-expanded={open}>
        <span className="tf-card__code">{p.code}</span>
        <span className="tf-card__main">
          <span className="tf-card__name">{p.name}</span>
          <span className="tf-card__meta">{p.credit} Credits &middot; {p.shifts.length} shift{p.shifts.length > 1 ? 's' : ''}</span>
        </span>
        <span className="tf-card__figs">
          <span className="tf-card__fig">
            <small>Admission</small>
            <b>{fmt(head.admissionFee)}</b>
          </span>
          <span className="tf-card__fig">
            <small>Full Program</small>
            <b>{fmt(head.total)}</b>
          </span>
        </span>
        <ChevronDown className="tf-card__chevron" size={20} />
      </button>

      <div className="tf-card__panel">
        <div className="tf-card__panelInner">
          {p.shifts.map((s) => {
            const hasDip = s.rows.some((r) => r.totalDip != null);
            return (
              <div key={s.name} className="tf-shift">
                <div className="tf-shift__head">
                  <h4>{s.name}</h4>
                  <span>Admission {fmt(s.admissionFee)} &middot; Semester Fee {fmt(s.semesterFee)}</span>
                </div>
                {/* Desktop table */}
                <div className="tf-tablewrap">
                  <table className="tf-table">
                    <thead>
                      <tr>
                        <th>Result (SSC+HSC / SSC+Dip)</th>
                        <th>Waiver</th>
                        <th>Per Credit</th>
                        <th>Total (HSC)</th>
                        {hasDip && <th>Total (Diploma)</th>}
                      </tr>
                    </thead>
                    <tbody>
                      {s.rows.map((r, i) => (
                        <tr key={i} className={r.waiver == null ? 'is-base' : ''}>
                          <td>{r.band}</td>
                          <td>{r.waiver == null ? '—' : `${r.waiver}%`}</td>
                          <td>{fmt(r.perCredit)}</td>
                          <td>{fmt(r.totalHsc)}</td>
                          {hasDip && <td>{fmt(r.totalDip)}</td>}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile list */}
                <div className="tf-rowcards">
                  {s.rows.map((r, i) => (
                    <div key={i} className={`tf-mrow${r.waiver == null ? ' is-base' : ''}`}>
                      <span className="tf-mrow__label">
                        {r.waiver == null ? 'Full fee (no waiver)' : `${r.waiver}% waiver`}
                        {r.perCredit != null && <small>{fmt(r.perCredit)} / credit</small>}
                      </span>
                      <span className="tf-mrow__val">
                        {fmt(r.totalHsc)}
                        {r.totalDip != null && <small>Diploma {fmt(r.totalDip)}</small>}
                      </span>
                    </div>
                  ))}
                </div>

                {s.note && <p className="tf-shift__note">{s.note}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

function PGTable({ rows, title }: { rows: PGProgram[]; title: string }) {
  if (!rows.length) return null;
  return (
    <div className="tf-pg">
      <h3 className="tf-pg__title"><Layers size={17} /> {title}</h3>
      {/* Desktop table */}
      <div className="tf-tablewrap tf-tablewrap--pg">
        <table className="tf-table tf-table--pg">
          <thead>
            <tr>
              <th>Program</th>
              <th>Credit</th>
              <th>Duration</th>
              <th>Per Credit</th>
              <th>Semester Fee</th>
              <th>Admission</th>
              <th>Total Fee</th>
              <th>SU Students</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.code}>
                <td><b className="tf-pg__code">{p.code}</b><span className="tf-pg__name">{p.name}</span></td>
                <td>{p.credit}</td>
                <td>{p.duration}</td>
                <td>{fmt(p.perCredit)}<small className="tf-pg__reg"> / {fmt(p.regularPerCredit)}</small></td>
                <td>{fmt(p.semesterFee)}</td>
                <td>{fmt(p.admissionFee)}</td>
                <td className="tf-pg__total">{fmt(p.total)}</td>
                <td className="tf-pg__su">{fmt(p.suTotal)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="tf-pgcards">
        {rows.map((p) => (
          <div key={p.code} className="tf-pgcard">
            <div className="tf-pgcard__head">
              <b>{p.code}</b><span>{p.name}</span>
            </div>
            <div className="tf-mrow"><span className="tf-mrow__label">Credit</span><span className="tf-mrow__val">{p.credit}</span></div>
            <div className="tf-mrow"><span className="tf-mrow__label">Duration</span><span className="tf-mrow__val">{p.duration}</span></div>
            <div className="tf-mrow"><span className="tf-mrow__label">Per Credit</span><span className="tf-mrow__val">{fmt(p.perCredit)}<small>regular {fmt(p.regularPerCredit)}</small></span></div>
            <div className="tf-mrow"><span className="tf-mrow__label">Semester Fee</span><span className="tf-mrow__val">{fmt(p.semesterFee)}</span></div>
            <div className="tf-mrow"><span className="tf-mrow__label">Admission</span><span className="tf-mrow__val">{fmt(p.admissionFee)}</span></div>
            <div className="tf-mrow"><span className="tf-mrow__label">Total Fee</span><span className="tf-mrow__val tf-pg__total">{fmt(p.total)}</span></div>
            <div className="tf-mrow"><span className="tf-mrow__label">SU Students</span><span className="tf-mrow__val tf-pg__su">{fmt(p.suTotal)}</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TuitionExplorer() {
  const [tab, setTab] = useState<TabKey>('ug-tri');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<string | null>(UG_TRI[0]?.code ?? null);

  const firstOf = (k: TabKey): string | null =>
    k === 'ug-tri' ? UG_TRI[0]?.code ?? null : k === 'ug-bi' ? UG_BI[0]?.code ?? null : null;

  const q = query.trim().toLowerCase();
  const match = (code: string, name: string) =>
    !q || code.toLowerCase().includes(q) || name.toLowerCase().includes(q);

  const ugList = useMemo(
    () => (tab === 'ug-tri' ? UG_TRI : UG_BI).filter((p) => match(p.code, p.name)),
    [tab, q],
  );
  const pgTri = useMemo(() => PG_TRI.filter((p) => match(p.code, p.name)), [q]);
  const pgBi = useMemo(() => PG_BI.filter((p) => match(p.code, p.name)), [q]);

  return (
    <div className="tf">
      <div className="tf-bar">
        <div className="tf-tabs" role="tablist">
          {TABS.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              className={`tf-tab${tab === t.key ? ' is-active' : ''}`}
              onClick={() => { setTab(t.key); setOpen(firstOf(t.key)); }}
            >
              <GraduationCap size={16} />
              <span>{t.label}<small>{t.sub}</small></span>
            </button>
          ))}
        </div>
        <label className="tf-search">
          <Search size={17} />
          <input
            type="text"
            placeholder="Search a program…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </div>

      {tab !== 'pg' ? (
        <div className="tf-list">
          {ugList.length ? (
            ugList.map((p) => (
              <UGCard key={p.code} p={p} open={open === p.code} onToggle={() => setOpen(open === p.code ? null : p.code)} />
            ))
          ) : (
            <p className="tf-empty">No programs match “{query}”.</p>
          )}
        </div>
      ) : (
        <div className="tf-pgwrap">
          {pgTri.length === 0 && pgBi.length === 0 ? (
            <p className="tf-empty">No programs match “{query}”.</p>
          ) : (
            <>
              <PGTable rows={pgTri} title="Tri-Semester (Four-Month Semesters)" />
              <PGTable rows={pgBi} title="Bi-Semester (Six-Month Semesters)" />
            </>
          )}
        </div>
      )}

      <style>{`
        .tf-bar { display: flex; flex-direction: column; gap: 18px; margin-bottom: 32px; }
        @media (min-width: 980px) { .tf-bar { flex-direction: row; align-items: center; justify-content: space-between; } }

        .tf-tabs { display: grid; grid-template-columns: 1fr; gap: 10px; }
        @media (min-width: 560px) { .tf-tabs { display: flex; flex-wrap: nowrap; } .tf-tab { flex: 1 1 0; } }
        .tf-tab {
          display: inline-flex; align-items: center; gap: 11px; cursor: pointer;
          background: #fff; border: 1.5px solid #E7E8F1; border-radius: 13px;
          padding: 13px 18px; color: #5B5B78; font-weight: 600; font-size: 14px; text-align: left;
          transition: border-color .18s ease, color .18s ease, box-shadow .18s ease, background .18s ease;
        }
        .tf-tab small { display: block; font-size: 11px; font-weight: 600; opacity: 0.75; margin-top: 1px; }
        .tf-tab svg { flex-shrink: 0; color: #A6A6BC; transition: color .18s ease; }
        .tf-tab:hover { border-color: #CFD0DE; }
        .tf-tab.is-active { border-color: #CC1579; color: #2B3175; background: rgba(204,21,121,0.045); }
        .tf-tab.is-active svg { color: #CC1579; }

        .tf-search {
          display: flex; align-items: center; gap: 12px; background: #fff; border: 1.5px solid #E7E8F1;
          border-radius: 12px; padding: 10px 16px; width: 100%;
          transition: border-color .18s ease, box-shadow .18s ease;
        }
        @media (min-width: 980px) { .tf-search { max-width: 340px; } }
        .tf-search:focus-within { border-color: #CC1579; }
        .tf-search svg { color: #A6A6BC; flex-shrink: 0; }
        .tf-search input[type="text"] {
          -webkit-appearance: none !important; appearance: none !important;
          border: 0 !important; outline: 0 !important; box-shadow: none !important;
          background: transparent !important; border-radius: 0 !important;
          width: 100%; margin: 0; padding: 0 !important;
          min-height: 0 !important; height: auto !important; line-height: 1.4 !important;
          color: #2B3175 !important; font-size: 14.5px !important; font-weight: 500;
        }
        .tf-search input[type="text"]:focus { border: 0 !important; outline: 0 !important; box-shadow: none !important; }
        .tf-search input[type="text"]::placeholder { color: #A6A6BC; }

        .tf-list { display: flex; flex-direction: column; gap: 14px; }
        .tf-empty { color: #8A8AA3; font-size: 15px; text-align: center; padding: 40px 0; }

        .tf-card { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 26px rgba(43,49,117,0.05); transition: box-shadow .2s ease, border-color .2s ease; }
        .tf-card.is-open { border-color: #d7d8e6; box-shadow: 0 18px 40px rgba(43,49,117,0.12); }
        .tf-card__head {
          width: 100%; border: 0; background: transparent; cursor: pointer; text-align: left;
          display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 16px; padding: 18px 20px;
        }
        .tf-card__code {
          flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; min-width: 56px; height: 40px;
          padding: 0 12px; border-radius: 10px; color: #fff; font-family: var(--font-poppins), Poppins, sans-serif;
          font-weight: 700; font-size: 14px; background: linear-gradient(135deg, #2B3175, #CC1579);
        }
        .tf-card__main { min-width: 0; }
        .tf-card__name { display: block; color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 16px; line-height: 1.3; }
        .tf-card__meta { display: block; color: #8A8AA3; font-size: 12.5px; margin-top: 3px; }
        .tf-card__figs { display: flex; align-items: center; gap: 22px; }
        .tf-card__fig { text-align: right; }
        .tf-card__fig small { display: block; color: #8A8AA3; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; }
        .tf-card__fig b { display: block; color: #2B3175; font-size: 15px; font-weight: 700; margin-top: 2px; }
        .tf-card__chevron { color: #CC1579; flex-shrink: 0; transition: transform .25s ease; }
        .tf-card.is-open .tf-card__chevron { transform: rotate(180deg); }
        @media (max-width: 620px) {
          .tf-card__head { grid-template-columns: auto 1fr auto; gap: 12px; }
          .tf-card__figs { display: none; }
        }

        .tf-card__panel { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .3s ease; }
        .tf-card.is-open .tf-card__panel { grid-template-rows: 1fr; }
        .tf-card__panelInner { overflow: hidden; }
        .tf-shift { padding: 0 20px; border-top: 1px solid #F0F0F5; }
        .tf-shift:first-child { border-top: 1px solid #ECECF3; }
        .tf-shift__head { display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between; gap: 8px; padding: 18px 0 12px; }
        .tf-shift__head h4 { margin: 0; color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 15px; }
        .tf-shift__head span { color: #8A8AA3; font-size: 12.5px; }
        .tf-shift__note { color: #8A6; color: #8A8AA3; font-size: 12.5px; line-height: 1.6; margin: 0 0 16px; font-style: italic; }

        .tf-tablewrap { overflow-x: auto; padding-bottom: 18px; }
        .tf-table { width: 100%; border-collapse: collapse; font-size: 13.5px; min-width: 460px; }
        .tf-table th { text-align: center; color: #8A8AA3; font-weight: 700; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.04em; padding: 10px 14px; border-bottom: 1px solid #ECECF3; white-space: nowrap; }
        .tf-table td { text-align: center; color: #4C4C68; padding: 12px 14px; border-bottom: 1px solid #F0F0F5; white-space: nowrap; }
        .tf-table tr.is-base td { color: #2B3175; font-weight: 600; background: #FAFAFE; }

        .tf-pgwrap { display: flex; flex-direction: column; gap: 36px; }
        .tf-pg__title { display: flex; align-items: center; gap: 9px; color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 18px; margin: 0 0 16px; }
        .tf-pg__title svg { color: #CC1579; }
        .tf-table--pg { min-width: 760px; }
        .tf-table--pg td { padding: 14px 16px; vertical-align: top; }
        .tf-table--pg th:first-child, .tf-table--pg td:first-child { text-align: left; }
        .tf-pg__code { display: block; color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-size: 14px; }
        .tf-pg__name { display: block; color: #8A8AA3; font-size: 12px; margin-top: 2px; white-space: normal; max-width: 240px; }
        .tf-pg__reg { color: #B6B6C8; }
        .tf-pg__total { color: #2B3175; font-weight: 700; }
        .tf-pg__su { color: #CC1579; font-weight: 700; }

        /* Mobile clean list (hidden on desktop) */
        .tf-rowcards { display: none; }
        .tf-mrow { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; padding: 13px 0; border-bottom: 1px solid #F0F0F5; }
        .tf-mrow:last-child { border-bottom: 0; }
        .tf-mrow__label { display: flex; flex-direction: column; gap: 3px; color: #5B5B78; font-size: 14px; }
        .tf-mrow__label small { color: #A6A6BC; font-size: 12px; }
        .tf-mrow__val { display: flex; flex-direction: column; align-items: flex-end; gap: 3px; color: #2B3175; font-weight: 600; font-size: 14.5px; text-align: right; white-space: nowrap; }
        .tf-mrow__val small { color: #A6A6BC; font-weight: 600; font-size: 11.5px; }
        .tf-mrow.is-base .tf-mrow__label { color: #2B3175; font-weight: 600; }

        .tf-pgcards { display: none; }
        .tf-pgcard { border: 1px solid #ECECF3; border-radius: 14px; padding: 4px 18px 8px; margin-bottom: 14px; background: #fff; box-shadow: 0 8px 22px rgba(43,49,117,0.05); }
        .tf-pgcard__head { padding: 16px 0 13px; }
        .tf-pgcard__head b { display: block; color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-size: 15px; }
        .tf-pgcard__head span { display: block; color: #8A8AA3; font-size: 12.5px; margin-top: 2px; }

        /* Mobile: hide tables, show clean card lists */
        @media (max-width: 640px) {
          .tf-shift .tf-tablewrap, .tf-tablewrap--pg { display: none; }
          .tf-rowcards { display: block; padding: 2px 0 16px; }
          .tf-pgcards { display: block; }
        }
      `}</style>
    </div>
  );
}
