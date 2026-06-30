import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { FileText, Download } from 'lucide-react';
import { JOURNAL_ISSUES, getIssueBySlug, issueLabel } from '@/lib/journal-data';

export function generateStaticParams() {
  return JOURNAL_ISSUES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) return buildMetadata({ title: 'Journal Issue', description: 'Sonargaon University Journal issue.', path: `/journal/${slug}` });
  return buildMetadata({
    title: `${issueLabel(issue)} — SU Journal`,
    description: `Sonargaon University Journal, ${issueLabel(issue)} (${issue.period}).`,
    path: `/journal/${slug}`,
  });
}

const FRONT_MATTER = [
  { label: 'Editorial Board Members', href: '/editorial-board' },
  { label: 'Call for Papers', href: '/author-guidelines' },
];

const sideLabel = (i: (typeof JOURNAL_ISSUES)[number]) =>
  `Vol ${i.volume} · ${i.issue.includes('&') ? 'Issues' : 'Issue'} ${i.issue}`;

export default async function JournalIssuePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) notFound();

  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title={issueLabel(issue)}
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Journal', href: '/journal' },
          { label: `Volume ${issue.volume}` },
        ]}
      />

      <section style={{ background: '#ffffff', padding: '50px 0 70px' }}>
        <Container className="!max-w-[1540px]">
          <div className="ji-layout">
            {/* Sidebar: all issues */}
            <aside className="ji-side">
              <span className="ji-side__title">All Issues</span>
              <nav className="ji-side__list">
                {JOURNAL_ISSUES.map((it) => {
                  const active = it.slug === issue.slug;
                  return (
                    <Link
                      key={it.slug}
                      href={`/journal/${it.slug}`}
                      className={`ji-side__item${active ? ' is-active' : ''}`}
                      aria-current={active ? 'page' : undefined}
                    >
                      <span className="ji-side__vol">{sideLabel(it)}</span>
                      <span className="ji-side__period">{it.period}</span>
                    </Link>
                  );
                })}
              </nav>
              <Link href="/journal" className="ji-side__all">View journal home</Link>
            </aside>

            {/* Main content */}
            <div className="ji-main">
              {/* Issue header */}
              <div className="ji-header">
                <div className="ji-header__cover" aria-hidden>
                  {issue.cover ? (
                    <img className="ji-cover-img" src={issue.cover} alt="" />
                  ) : (
                    <span className="ji-cover">
                      <span className="ji-cover__eyebrow">SU Journal</span>
                      <span className="ji-cover__vol">Vol {issue.volume}</span>
                      <span className="ji-cover__issue">Issue {issue.issue}</span>
                    </span>
                  )}
                </div>
                <div className="ji-header__body">
                  <span className="ji-eyebrow">Sonargaon University Journal</span>
                  <h2 className="ji-title">{issueLabel(issue)}</h2>
                  <p className="ji-period">{issue.period}</p>
                  <p className="ji-issn">ISSN 2518-3125</p>
                  {issue.fullPdf && (
                    <a href={issue.fullPdf} className="ji-fullbtn">
                      <Download size={17} /> Download Full Issue{issue.size ? ` (${issue.size})` : ''}
                    </a>
                  )}
                </div>
              </div>

              {/* Front Matter */}
              {issue.frontMatter && (
                <div className="ji-block">
                  <h3 className="ji-section-title">Front Matter</h3>
                  <div className="ji-front">
                    {FRONT_MATTER.map((f) => (
                      <Link key={f.label} href={f.href} className="ji-front__card">
                        <FileText size={20} />
                        <span>{f.label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Journal Articles */}
              {issue.articles && (
                <div className="ji-block">
                  <h3 className="ji-section-title">Journal Articles</h3>
                  <ol className="ji-list">
                    {issue.articles.map((a, idx) => (
                      <li key={a.title} className="ji-row">
                        <span className="ji-row__num">{String(idx + 1).padStart(2, '0')}</span>
                        <span className="ji-row__title">{a.title}</span>
                        <a
                          href={a.pdf}
                          {...(a.pdf !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}
                          className="ji-row__btn"
                        >
                          <FileText size={15} /> Full Text
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Technical Note */}
              {issue.hasTechnicalNote && issue.technicalNote && (
                <div className="ji-block">
                  <h3 className="ji-section-title">Technical Note</h3>
                  <div className="ji-note">
                    <span className="ji-note__title">{issue.technicalNote.title}</span>
                    <a
                      href={issue.technicalNote.pdf}
                      {...(issue.technicalNote.pdf !== '#' && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="ji-row__btn"
                    >
                      <FileText size={15} /> Full Text
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .ji-layout { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: start; }
        @media (min-width: 900px) { .ji-layout { grid-template-columns: 260px 1fr; gap: 44px; } }

        /* Sidebar */
        .ji-side {
          background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 22px 18px;
          box-shadow: 0 12px 30px rgba(43,49,117,0.06);
        }
        @media (min-width: 900px) { .ji-side { position: sticky; top: 96px; } }
        .ji-side__title {
          display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase;
          padding: 0 6px 14px; border-bottom: 1px solid #EFEFF6; margin-bottom: 12px;
        }
        .ji-side__list { display: flex; flex-direction: column; gap: 4px; }
        .ji-side__item {
          display: flex; flex-direction: column; gap: 2px; text-decoration: none;
          padding: 11px 13px; border-radius: 11px; border-left: 3px solid transparent;
          transition: background .18s ease, border-color .18s ease, transform .18s ease;
        }
        .ji-side__item:hover { background: #F6F7FC; transform: translateX(2px); }
        .ji-side__vol { color: #2B3175; font-weight: 600; font-size: 14.5px; }
        .ji-side__period { color: #8A8AA3; font-size: 12px; }
        .ji-side__item.is-active {
          background: linear-gradient(135deg, rgba(43,49,117,0.08), rgba(204,21,121,0.08));
          border-left-color: #CC1579;
        }
        .ji-side__item.is-active .ji-side__vol { color: #CC1579; }
        .ji-side__all {
          display: block; margin-top: 14px; padding-top: 14px; border-top: 1px solid #EFEFF6;
          color: #2B3175; font-weight: 600; font-size: 13.5px; text-decoration: none; padding-left: 6px;
          transition: color .18s ease;
        }
        .ji-side__all:hover { color: #CC1579; }

        /* Main column blocks */
        .ji-main { min-width: 0; }
        .ji-block { margin-top: 46px; }

        .ji-header { display: grid; grid-template-columns: 1fr; gap: 28px; align-items: center; }
        @media (min-width: 620px) { .ji-header { grid-template-columns: 220px 1fr; gap: 40px; } }
        .ji-header__cover { border-radius: 16px; overflow: hidden; max-width: 220px; aspect-ratio: 3 / 4; box-shadow: 0 18px 44px rgba(43,49,117,0.18); }
        .ji-cover-img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .ji-cover {
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
          width: 100%; height: 100%; color: #fff; text-align: center;
          background: linear-gradient(150deg, #2B3175 0%, #3a2c74 55%, #CC1579 150%);
        }
        .ji-cover__eyebrow { font-size: 11px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.85; }
        .ji-cover__vol { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 34px; margin-top: 6px; }
        .ji-cover__issue { font-size: 15px; opacity: 0.95; }
        .ji-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px; }
        .ji-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(24px, 3.4vw, 36px); margin: 0 0 8px; }
        .ji-period { color: #5B5B78; font-size: 17px; margin: 0 0 4px; }
        .ji-issn { color: #8A8AA3; font-size: 14px; margin: 0; }
        .ji-fullbtn {
          display: inline-flex; align-items: center; gap: 9px; margin-top: 22px;
          background: #2B3175; color: #fff !important; font-weight: 600; font-size: 15px;
          padding: 13px 24px; border-radius: 10px; text-decoration: none; transition: background .2s ease, gap .2s ease;
        }
        .ji-fullbtn:hover { background: #CC1579; gap: 13px; }

        .ji-section-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(20px, 2.8vw, 26px); margin: 0 0 22px; }

        .ji-front { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 700px) { .ji-front { grid-template-columns: repeat(2, 1fr); } }
        .ji-front__card {
          display: flex; align-items: center; gap: 12px; text-decoration: none;
          background: #fff; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 20px;
          color: #2B3175; font-weight: 600; font-size: 15px; box-shadow: 0 8px 22px rgba(43,49,117,0.05);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .ji-front__card:hover { transform: translateY(-3px); box-shadow: 0 18px 36px rgba(43,49,117,0.12); border-color: #d7d8e6; }
        .ji-front__card svg { color: #CC1579; flex-shrink: 0; }

        .ji-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px; }
        .ji-row {
          position: relative; display: flex; align-items: center; gap: 18px;
          background: #fff; border: 1px solid #ECECF3; border-radius: 14px; padding: 18px 22px 18px 20px;
          box-shadow: 0 8px 22px rgba(43,49,117,0.04); overflow: hidden;
          transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .ji-row::before {
          content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
          background: linear-gradient(180deg, #2B3175, #CC1579);
          transform: scaleY(0); transform-origin: top; transition: transform .25s ease;
        }
        .ji-row:hover { transform: translateY(-3px); border-color: transparent; box-shadow: 0 18px 38px rgba(43,49,117,0.12); }
        .ji-row:hover::before { transform: scaleY(1); }
        .ji-row__num {
          flex-shrink: 0; width: 44px; height: 44px; border-radius: 11px;
          display: inline-flex; align-items: center; justify-content: center;
          background: rgba(43,49,117,0.07); color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif;
          font-weight: 700; font-size: 15px; transition: all .25s ease;
        }
        .ji-row:hover .ji-row__num { background: linear-gradient(135deg, #2B3175, #CC1579); color: #fff; }
        .ji-row__title { flex: 1; min-width: 0; color: #2B3175; font-size: 15.5px; line-height: 1.55; font-weight: 600; }
        .ji-row__btn {
          flex-shrink: 0; display: inline-flex; align-items: center; gap: 7px; text-decoration: none;
          background: #F6F7FC; border: 1px solid #E2E3ED; color: #CC1579; font-weight: 700; font-size: 13.5px;
          padding: 10px 18px; border-radius: 9px; transition: background .2s ease, color .2s ease, border-color .2s ease;
        }
        .ji-row__btn:hover { background: #CC1579; color: #fff; border-color: #CC1579; }
        @media (max-width: 575px) {
          .ji-row { flex-wrap: wrap; gap: 12px; }
          .ji-row__title { flex-basis: calc(100% - 56px); }
          .ji-row__btn { margin-left: 62px; }
        }

        .ji-note {
          display: flex; align-items: center; gap: 16px; justify-content: space-between;
          background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 12px; padding: 18px 22px;
        }
        .ji-note__title { color: #2B3175; font-weight: 600; font-size: 15.5px; }
      `}</style>
    </>
  );
}
