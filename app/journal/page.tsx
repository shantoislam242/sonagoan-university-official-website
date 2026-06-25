import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import { JOURNAL_ISSUES, issueLabel } from '@/lib/journal-data';

export const metadata = buildMetadata({
  title: 'Sonargaon University Journal',
  description:
    'Sonargaon University Journal (ISSN 2518-3125) — a peer-reviewed, multidisciplinary academic journal. Browse all volumes and issues.',
  path: '/journal',
});

const current = JOURNAL_ISSUES.find((i) => i.current) ?? JOURNAL_ISSUES[0];

function Cover({ volume, issue, cover }: { volume: string; issue: string; cover?: string }) {
  if (cover) {
    return <img className="jr-cover-img" src={cover} alt="" aria-hidden />;
  }
  return (
    <span className="jr-cover" aria-hidden>
      <span className="jr-cover__eyebrow">SU Journal</span>
      <span className="jr-cover__vol">Vol {volume}</span>
      <span className="jr-cover__issue">Issue {issue}</span>
      <span className="jr-cover__issn">ISSN 2518-3125</span>
    </span>
  );
}

export default function JournalListingPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Sonargaon University Journal"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'SU Journal' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '70px 0 10px' }}>
        <Container className="!max-w-[1240px]">
          <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <span className="jr-hero__issn">ISSN 2518-3125</span>
            <p className="jr-intro__sub">
              The official journal of the Sonargaon University Research &amp; Journal Unit
            </p>
            <p className="jr-intro__tag">A peer-reviewed, multidisciplinary academic journal</p>
          </div>
        </Container>
      </section>

      {/* Current Issue */}
      <section id="current" style={{ background: '#ffffff', padding: '40px 0 60px' }}>
        <Container className="!max-w-[1240px]">
          <span className="jr-section-eyebrow">Current Issue</span>
          <div className="jr-feature">
            <div className="jr-feature__cover"><Cover volume={current.volume} issue={current.issue} cover={current.cover} /></div>
            <div className="jr-feature__body">
              <h2 className="jr-feature__title">{issueLabel(current)}</h2>
              <p className="jr-feature__period">{current.period}</p>
              <p className="jr-feature__meta">
                {current.articles?.length ?? 0} Articles
                {current.hasTechnicalNote ? ' · 1 Technical Note' : ''}
              </p>
              <p className="jr-feature__desc">
                The latest issue of the Sonargaon University Journal, with full-text articles available across
                multiple disciplines.
              </p>
              <Link href={`/journal/${current.slug}`} className="jr-btn jr-btn--solid">
                View Details <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* All Issues */}
      <section id="archive" style={{ background: '#F6F7FC', padding: '70px 0 90px' }}>
        <Container className="!max-w-[1240px]">
          <span className="jr-section-eyebrow">Archive</span>
          <h2 className="jr-section-title">All Issues</h2>
          <div className="jr-grid">
            {JOURNAL_ISSUES.map((i) => {
              const isFull = !i.articles;
              return (
                <article key={i.slug} className="jr-card">
                  <div className="jr-card__cover"><Cover volume={i.volume} issue={i.issue} cover={i.cover} /></div>
                  <div className="jr-card__body">
                    <h3 className="jr-card__title">{issueLabel(i)}</h3>
                    <p className="jr-card__period">{i.period}</p>
                    <p className="jr-card__meta">
                      {isFull
                        ? `Full issue PDF${i.size ? ` · ${i.size}` : ''}`
                        : `${i.articles!.length} Articles${i.hasTechnicalNote ? ' · 1 Technical Note' : ''}`}
                    </p>
                    <Link href={`/journal/${i.slug}`} className="jr-btn jr-btn--ghost">
                      <FileText size={16} /> View Details
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .jr-hero__issn {
          display: inline-block; background: rgba(204,21,121,0.10); color: #CC1579; font-weight: 700;
          font-size: 12px; letter-spacing: 0.1em; padding: 6px 16px; border-radius: 999px; margin-bottom: 16px;
        }
        .jr-intro__sub { color: #2B3175; font-weight: 600; font-size: clamp(16px, 2vw, 19px); margin: 0 0 8px; }
        .jr-intro__tag { color: #5B5B78; font-style: italic; font-size: 15.5px; margin: 0; }

        .jr-section-eyebrow {
          display: inline-block; color: #CC1579; font-weight: 700; font-size: 13px;
          letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 8px;
        }
        .jr-section-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(24px, 3.4vw, 34px); margin: 0 0 36px; }

        /* cover placeholder */
        .jr-cover {
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
          width: 100%; height: 100%; padding: 22px; text-align: center; color: #fff;
          background: linear-gradient(150deg, #2B3175 0%, #3a2c74 55%, #CC1579 150%);
        }
        .jr-cover__eyebrow { font-size: 12px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.85; }
        .jr-cover__vol { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 30px; margin-top: 6px; }
        .jr-cover__issue { font-size: 15px; opacity: 0.95; }
        .jr-cover__issn { margin-top: 10px; font-size: 11px; opacity: 0.7; letter-spacing: 0.08em; }
        .jr-cover-img { width: 100%; height: 100%; object-fit: cover; object-position: top center; display: block; }

        /* feature (current issue) */
        .jr-feature {
          display: grid; grid-template-columns: 1fr; gap: 0; overflow: hidden;
          background: #fff; border: 1px solid #ECECF3; border-radius: 22px;
          box-shadow: 0 24px 60px rgba(43,49,117,0.10);
        }
        @media (min-width: 760px) { .jr-feature { grid-template-columns: 300px 1fr; } }
        .jr-feature__cover { min-height: 260px; }
        .jr-feature__body { padding: clamp(28px, 4vw, 44px); }
        .jr-feature__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(22px, 3vw, 30px); margin: 0 0 6px; }
        .jr-feature__period { color: #5B5B78; font-size: 16px; margin: 0 0 10px; }
        .jr-feature__meta { display: inline-block; color: #CC1579; font-weight: 600; font-size: 14px; background: rgba(204,21,121,0.08); padding: 6px 14px; border-radius: 999px; margin: 0 0 18px; }
        .jr-feature__desc { color: #5B5B78; font-size: 16px; line-height: 1.8; margin: 0 0 26px; }

        /* archive grid */
        .jr-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 560px) { .jr-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 992px) { .jr-grid { grid-template-columns: repeat(4, 1fr); } }
        .jr-card {
          display: flex; flex-direction: column; background: #fff; border: 1px solid #ECECF3;
          border-radius: 16px; overflow: hidden; box-shadow: 0 12px 30px rgba(43,49,117,0.06);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .jr-card:hover { transform: translateY(-5px); box-shadow: 0 24px 48px rgba(43,49,117,0.13); }
        .jr-card__cover { aspect-ratio: 3 / 2; }
        .jr-card__body { padding: 20px 20px 22px; display: flex; flex-direction: column; flex: 1; }
        .jr-card__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; line-height: 1.3; margin: 0 0 5px; }
        .jr-card__period { color: #5B5B78; font-size: 13.5px; margin: 0 0 6px; }
        .jr-card__meta { color: #8A8AA3; font-size: 12.5px; font-weight: 600; margin: 0 0 16px; }

        .jr-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 8px;
          font-weight: 600; font-size: 14px; text-decoration: none; border-radius: 10px;
          transition: background .2s ease, color .2s ease, gap .2s ease; cursor: pointer;
        }
        .jr-btn--solid { background: #2B3175; color: #fff !important; padding: 13px 26px; }
        .jr-btn--solid:hover { background: #CC1579; gap: 12px; }
        .jr-btn--ghost {
          margin-top: auto; align-self: flex-start; background: #F6F7FC; color: #2B3175 !important;
          border: 1px solid #E2E3ED; padding: 10px 16px; width: 100%;
        }
        .jr-btn--ghost:hover { background: #2B3175; color: #fff !important; border-color: #2B3175; }
      `}</style>
    </>
  );
}
