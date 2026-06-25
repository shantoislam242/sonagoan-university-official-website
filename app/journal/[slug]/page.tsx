import { notFound } from 'next/navigation';
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

const FRONT_MATTER = ['Editorial', 'Editorial Board Members', 'Call for Papers'];

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

      {/* Issue header */}
      <section style={{ background: '#ffffff', padding: '60px 0 50px' }}>
        <Container className="!max-w-[1100px]">
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
        </Container>
      </section>

      {/* Front Matter */}
      {issue.frontMatter && (
        <section style={{ background: '#F6F7FC', padding: '50px 0' }}>
          <Container className="!max-w-[1100px]">
            <h3 className="ji-section-title">Front Matter</h3>
            <div className="ji-front">
              {FRONT_MATTER.map((f) => (
                <a key={f} href="#" className="ji-front__card">
                  <FileText size={20} />
                  <span>{f}</span>
                </a>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Journal Articles */}
      {issue.articles && (
        <section style={{ background: '#ffffff', padding: '60px 0 40px' }}>
          <Container className="!max-w-[1100px]">
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
          </Container>
        </section>
      )}

      {/* Technical Note */}
      {issue.hasTechnicalNote && issue.technicalNote && (
        <section style={{ background: '#ffffff', padding: '10px 0 70px' }}>
          <Container className="!max-w-[1100px]">
            <h3 className="ji-section-title">Technical Note</h3>
            <div className="ji-note">
              <span className="ji-note__title">{issue.technicalNote.title}</span>
              <a href={issue.technicalNote.pdf} className="ji-row__btn">
                <FileText size={15} /> Full Text
              </a>
            </div>
          </Container>
        </section>
      )}

      <FooterUniversity />

      <style>{`
        .ji-header { display: grid; grid-template-columns: 1fr; gap: 30px; align-items: center; }
        @media (min-width: 700px) { .ji-header { grid-template-columns: 240px 1fr; gap: 44px; } }
        .ji-header__cover { border-radius: 16px; overflow: hidden; max-width: 240px; aspect-ratio: 3 / 4; box-shadow: 0 18px 44px rgba(43,49,117,0.18); }
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

        .ji-section-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(20px, 2.8vw, 26px); margin: 0 0 24px; }

        .ji-front { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 700px) { .ji-front { grid-template-columns: repeat(3, 1fr); } }
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
