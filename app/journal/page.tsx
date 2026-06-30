import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import Container from '@/components/ui/Container';
import PageBanner from '@/components/sections/PageBanner';
import Link from 'next/link';
import { ArrowRight, FileText, CalendarRange, Unlock, Building2 } from 'lucide-react';
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
    return (
      <>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="jr-cover-img jr-cover-img--bg" src={cover} alt="" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="jr-cover-img jr-cover-img--main" src={cover} alt="" aria-hidden />
      </>
    );
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

      {/* About the Journal */}
      <section id="about" style={{ background: '#ffffff', padding: '84px 0 92px' }}>
        <Container className="!max-w-[1240px]">
          <span className="jr-section-eyebrow">About the Journal</span>
          <h2 className="jr-section-title" style={{ marginBottom: 18 }}>Focus &amp; Scope</h2>
          <p className="jr-about__lead">
            The Sonargaon University Journal is a half-yearly, peer-reviewed publication dedicated to original
            scholarly contributions across all disciplines of university research. It welcomes high-quality work
            from researchers around the world, fostering an open and rigorous platform for the exchange of new
            ideas and findings.
          </p>

          <div className="jr-about__grid">
            <div className="jr-about__card">
              <span className="jr-about__icon"><CalendarRange size={22} /></span>
              <h3 className="jr-about__title">Publication Frequency</h3>
              <p className="jr-about__text">
                The journal publishes two issues in each volume per year, released in June and December.
              </p>
            </div>
            <div className="jr-about__card">
              <span className="jr-about__icon"><Unlock size={22} /></span>
              <h3 className="jr-about__title">Open Access Policy</h3>
              <p className="jr-about__text">
                The journal provides immediate open access to all of its content, on the principle that making
                research freely available to the public supports a greater global exchange of knowledge.
              </p>
            </div>
            <div className="jr-about__card">
              <span className="jr-about__icon"><Building2 size={22} /></span>
              <h3 className="jr-about__title">Publisher</h3>
              <p className="jr-about__text">
                Published by Sonargaon University (SU), through its Research &amp; Journal Unit.
              </p>
            </div>
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

        .jr-about__lead { color: #5B5B78; font-size: 17px; line-height: 1.9; margin: 0 0 40px; max-width: 980px; }
        .jr-about__grid { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 640px) { .jr-about__grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 980px) { .jr-about__grid { grid-template-columns: repeat(3, 1fr); } }
        .jr-about__card {
          background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 28px 26px;
          box-shadow: 0 12px 30px rgba(43,49,117,0.05);
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .jr-about__card:hover { transform: translateY(-4px); box-shadow: 0 22px 44px rgba(43,49,117,0.12); }
        .jr-about__icon {
          display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px;
          border-radius: 13px; margin-bottom: 16px; color: #fff;
          background: linear-gradient(135deg, #2B3175, #CC1579);
        }
        .jr-about__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 18px; margin: 0 0 9px; }
        .jr-about__text { color: #5B5B78; font-size: 15px; line-height: 1.75; margin: 0; }

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
        .jr-cover-img--bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; transform: scale(1.18); filter: blur(20px) brightness(0.95); z-index: 0; }
        .jr-cover-img--main { position: relative; z-index: 1; width: 100%; height: 100%; object-fit: contain; object-position: center; display: block; }

        /* feature (current issue) */
        .jr-feature {
          display: grid; grid-template-columns: 1fr; gap: 0; overflow: hidden;
          background: #fff; border: 1px solid #ECECF3; border-radius: 22px;
          box-shadow: 0 24px 60px rgba(43,49,117,0.10);
        }
        @media (min-width: 760px) { .jr-feature { grid-template-columns: 300px 1fr; } }
        .jr-feature__cover { position: relative; overflow: hidden; min-height: 300px; background: #EEF0F6; }
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
        .jr-card__cover { aspect-ratio: 1 / 1; position: relative; overflow: hidden; background: #EEF0F6; }
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
