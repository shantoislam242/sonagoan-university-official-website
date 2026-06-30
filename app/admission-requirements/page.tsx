import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import { Info, FileCheck2, GraduationCap, FlaskConical, Globe, Layers, BookMarked, ArrowUpRight, Download } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Admission Requirements',
  description:
    'Admission requirements for Sonargaon University: general information, required documents, undergraduate and postgraduate eligibility, and alternative qualifications.',
  path: '/admission-requirements',
});

const SECTIONS = [
  { id: 'general', label: 'General Information', Icon: Info },
  { id: 'documents', label: 'Required Documents', Icon: FileCheck2 },
  { id: 'ug-general', label: 'Undergraduate: General', Icon: GraduationCap },
  { id: 'ug-science', label: 'Science & Engineering', Icon: FlaskConical },
  { id: 'alternative', label: 'Alternative Qualifications', Icon: Globe },
  { id: 'background', label: 'Program Background', Icon: Layers },
  { id: 'postgraduate', label: 'Postgraduate', Icon: BookMarked },
];

const GENERAL = [
  'No admission test or viva is required.',
  'Apply online through the SU ERP, or admit directly at the campus.',
  'Three sessions per year: Spring (January–April), Summer (May–August), and Fall (September–December).',
];

const DOCUMENTS = [
  'Photocopy of National ID (NID) or Birth Certificate',
  'Photocopy of SSC and HSC / Diploma marksheets or certificates',
  'One passport-size photograph',
];

const UG_GENERAL = [
  'Minimum GPA 2.50 (or second division) in both SSC and HSC.',
  'If GPA is 2.00 in one exam, the combined SSC + HSC GPA must be at least 6.00.',
  'FDT (Fashion Design & Technology): minimum GPA 2.00 in SSC and HSC individually.',
  'Children of freedom fighters: eligible with a combined SSC + HSC GPA of at least 5.00, supported by an authenticated certificate.',
];

const UG_SCIENCE = [
  'Minimum GPA 3.00 in SSC and GPA 2.50 in HSC / Diploma (on the 5.00 and 4.00 scales).',
  'Open to the Science stream only. Arts, Humanities, and Commerce students are not eligible.',
  'Engineering programs require passing Physics, Chemistry, and Mathematics (or Higher Math) in HSC / Diploma / A-Level.',
  'An “F” in one of these subjects as a 4th / additional subject may be allowed with the Department Head’s permission, for all engineering programs except CSE.',
];

const ALTERNATIVE = [
  'GCE O Level in 4 subjects plus A Level in 2 subjects, minimum GPA 2.50.',
  'GED: average 450 marks across 5 subjects.',
  'SAT: combined score of 1100 or above.',
  'Equivalents such as the American High School Diploma and IB are accepted on the approved scale.',
  'Foreign students: governed by memo SU/AO/APFS/2025/001.',
];

const POSTGRAD = [
  'A bachelor’s degree in a relevant subject from any recognized university, with a minimum GPA of 2.50 (on a 4.00 scale) or at least second division in all previous exams.',
  'Some students may need to complete preparatory / foundation courses; some departments may apply additional conditions.',
  'Foreign degree equivalence is determined by the Degree Equivalence Committee.',
];

const SCIENCE_PROGRAMS = ['CSE', 'EEE', 'ME', 'Civil', 'Textile', 'NAME', 'Architecture (BARC)'];
const ANY_PROGRAMS = ['AMT', 'FDT', 'BBA', 'LLB', 'Bangla (B.A. Hons)', 'JMS'];

const QUICK_LINKS = [
  { name: 'Tuition & Fees', href: '/tuition-fees' },
  { name: 'Waiver Policy', href: '/waiver-policy' },
  { name: 'Admission & Information', href: '/admission' },
  { name: 'Apply Online', href: '/admission' },
];

// Admission notices. Replace `pdf: '#'` with the real PDF path once available.
const NOTICES: { title: string; date: string; pdf: string }[] = [
  { title: 'Fall 2026 Admission Circular', date: '15 Jun 2026', pdf: '#' },
  { title: 'Admission Schedule & Important Dates', date: '02 Jun 2026', pdf: '#' },
  { title: 'Waiver & Scholarship Guidelines', date: '20 May 2026', pdf: '#' },
  { title: 'Required Documents Checklist', date: '10 May 2026', pdf: '#' },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="ar-bullets">
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}

export default function AdmissionRequirementsPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Admission Requirements"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
          { label: 'Requirements' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '70px 0 16px' }}>
        <Container>
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            <span className="ar-chip">Admission 2026</span>
            <h2 className="ar-title">Who can apply, and what you will need</h2>
            <p className="ar-lead">
              Everything you need to know before you apply to Sonargaon University, from general rules and
              required documents to program-specific eligibility for undergraduate and postgraduate study.
            </p>
          </div>
        </Container>
      </section>

      {/* Layout */}
      <section style={{ background: '#ffffff', padding: '30px 0 80px' }}>
        <Container>
          <div className="ar-layout">
            {/* Sidebar */}
            <aside className="ar-side">
              <span className="ar-side__title">On this page</span>
              <nav className="ar-side__nav">
                {SECTIONS.map(({ id, label, Icon }) => (
                  <a key={id} href={`#${id}`} className="ar-side__link">
                    <Icon size={16} /> <span>{label}</span>
                  </a>
                ))}
              </nav>

              <span className="ar-side__title ar-side__title--mt">Quick Links</span>
              <nav className="ar-side__nav">
                {QUICK_LINKS.map((l) => (
                  <Link key={l.name} href={l.href} className="ar-side__link ar-side__link--ql">
                    <span>{l.name}</span> <ArrowUpRight size={14} />
                  </Link>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="ar-main">
              <article id="general" className="ar-block">
                <h3 className="ar-block__title">General Information</h3>
                <Bullets items={GENERAL} />
              </article>

              <article id="documents" className="ar-block">
                <h3 className="ar-block__title">Required Documents</h3>
                <div className="ar-docs">
                  {DOCUMENTS.map((d, i) => (
                    <div key={i} className="ar-doc">
                      <FileCheck2 size={18} />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </article>

              <article id="ug-general" className="ar-block">
                <h3 className="ar-block__title">Undergraduate: General Programs</h3>
                <Bullets items={UG_GENERAL} />
              </article>

              <article id="ug-science" className="ar-block">
                <h3 className="ar-block__title">Undergraduate: Science &amp; Engineering Faculty</h3>
                <Bullets items={UG_SCIENCE} />
              </article>

              <article id="alternative" className="ar-block">
                <h3 className="ar-block__title">Alternative Qualifications</h3>
                <Bullets items={ALTERNATIVE} />
              </article>

              <article id="background" className="ar-block">
                <h3 className="ar-block__title">Program Background Requirements</h3>
                <div className="ar-bg">
                  <div className="ar-bg__group">
                    <h4>Science background <span>(Science stream only)</span></h4>
                    <div className="ar-tags">
                      {SCIENCE_PROGRAMS.map((p) => <span key={p} className="ar-tag ar-tag--sci">{p}</span>)}
                    </div>
                  </div>
                  <div className="ar-bg__group">
                    <h4>Any background</h4>
                    <div className="ar-tags">
                      {ANY_PROGRAMS.map((p) => <span key={p} className="ar-tag">{p}</span>)}
                    </div>
                  </div>
                </div>
              </article>

              <article id="postgraduate" className="ar-block">
                <h3 className="ar-block__title">Postgraduate (Master’s)</h3>
                <Bullets items={POSTGRAD} />
              </article>
            </div>
          </div>
        </Container>
      </section>

      {/* Admission Notices */}
      <section style={{ background: '#F6F7FC', padding: '74px 0 86px' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <span className="ar-chip">Downloads</span>
            <h2 className="ar-title" style={{ fontSize: 'clamp(24px, 3.2vw, 34px)' }}>Admission Notices</h2>
            <p className="ar-lead" style={{ maxWidth: 680, margin: '0 auto' }}>
              Download the latest admission circulars, schedules, and guidelines.
            </p>
          </div>
          <div className="ar-notices">
            {NOTICES.map((n) => {
              const live = n.pdf !== '#';
              return (
                <a
                  key={n.title}
                  href={n.pdf}
                  {...(live && { target: '_blank', rel: 'noopener noreferrer' })}
                  className="ar-notice"
                >
                  <span className="ar-notice__icon"><BookMarked size={20} /></span>
                  <span className="ar-notice__body">
                    <span className="ar-notice__title">{n.title}</span>
                    <span className="ar-notice__date">{n.date}</span>
                  </span>
                  <span className="ar-notice__dl"><Download size={16} /> PDF</span>
                </a>
              );
            })}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .ar-chip { display: inline-block; background: rgba(204,21,121,0.10); color: #CC1579; font-weight: 700; font-size: 12px; letter-spacing: 0.08em; padding: 6px 16px; border-radius: 999px; margin-bottom: 16px; }
        .ar-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(26px, 3.5vw, 40px); line-height: 1.2; margin: 0 0 16px; }
        .ar-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }

        .ar-layout { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: start; }
        @media (min-width: 920px) { .ar-layout { grid-template-columns: 270px 1fr; gap: 50px; } }

        .ar-side { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 22px 16px; box-shadow: 0 12px 30px rgba(43,49,117,0.06); }
        @media (min-width: 920px) { .ar-side { position: sticky; top: 96px; } }
        .ar-side__title { display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 13px; letter-spacing: 0.12em; text-transform: uppercase; padding: 0 8px 14px; border-bottom: 1px solid #EFEFF6; margin-bottom: 10px; }
        .ar-side__title--mt { margin-top: 16px; padding-top: 16px; border-top: 1px solid #EFEFF6; }
        .ar-side__link--ql { justify-content: space-between; color: #2B3175; }
        .ar-side__link--ql svg { color: #CC1579; }
        .ar-side__link--ql:hover { color: #CC1579; }
        .ar-side__nav { display: flex; flex-direction: column; gap: 2px; }
        .ar-side__link { display: flex; align-items: center; gap: 11px; padding: 11px 12px; border-radius: 10px; color: #5B5B78; font-weight: 600; font-size: 14px; text-decoration: none; transition: background .18s ease, color .18s ease; }
        .ar-side__link svg { color: #A6A6BC; flex-shrink: 0; transition: color .18s ease; }
        .ar-side__link:hover { background: #F6F7FC; color: #2B3175; }
        .ar-side__link:hover svg { color: #CC1579; }

        .ar-main { min-width: 0; }
        .ar-block { padding-bottom: 36px; margin-bottom: 36px; border-bottom: 1px solid #ECECF3; scroll-margin-top: 96px; }
        .ar-block:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
        .ar-block__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(20px, 2.6vw, 26px); margin: 0 0 18px; }

        .ar-bullets { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 13px; }
        .ar-bullets li { position: relative; padding-left: 26px; color: #4C4C68; font-size: 15.5px; line-height: 1.75; }
        .ar-bullets li::before { content: ''; position: absolute; left: 4px; top: 9px; width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg, #2B3175, #CC1579); }

        .ar-docs { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 680px) { .ar-docs { grid-template-columns: repeat(3, 1fr); } }
        .ar-doc { display: flex; align-items: flex-start; gap: 12px; background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 13px; padding: 18px 20px; color: #2B3175; font-weight: 600; font-size: 14.5px; line-height: 1.5; }
        .ar-doc svg { color: #CC1579; flex-shrink: 0; margin-top: 1px; }

        .ar-bg { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 720px) { .ar-bg { grid-template-columns: 1fr 1fr; } }
        .ar-bg__group h4 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; margin: 0 0 14px; }
        .ar-bg__group h4 span { color: #8A8AA3; font-weight: 600; font-size: 13px; }
        .ar-tags { display: flex; flex-wrap: wrap; gap: 9px; }
        .ar-tag { display: inline-flex; align-items: center; background: #F1F2F8; border: 1px solid #E5E6EF; color: #2B3175; font-weight: 600; font-size: 13.5px; padding: 7px 14px; border-radius: 999px; }
        .ar-tag--sci { background: rgba(204,21,121,0.07); border-color: rgba(204,21,121,0.18); color: #CC1579; }

        .ar-notices { display: grid; grid-template-columns: 1fr; gap: 14px; max-width: 920px; margin: 0 auto; }
        @media (min-width: 760px) { .ar-notices { grid-template-columns: 1fr 1fr; } }
        .ar-notice {
          display: flex; align-items: center; gap: 16px; text-decoration: none;
          background: #fff; border: 1px solid #ECECF3; border-radius: 14px; padding: 18px 20px;
          box-shadow: 0 10px 26px rgba(43,49,117,0.05);
          transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
        }
        .ar-notice:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(43,49,117,0.12); border-color: #d7d8e6; }
        .ar-notice__icon { flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 12px; color: #fff; background: linear-gradient(135deg, #2B3175, #CC1579); }
        .ar-notice__body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; }
        .ar-notice__title { color: #2B3175; font-weight: 600; font-size: 15px; line-height: 1.4; }
        .ar-notice__date { color: #8A8AA3; font-size: 12.5px; }
        .ar-notice__dl { flex-shrink: 0; display: inline-flex; align-items: center; gap: 6px; color: #CC1579; font-weight: 700; font-size: 13px; background: #F6F7FC; border: 1px solid #E2E3ED; padding: 8px 14px; border-radius: 9px; transition: background .2s ease, color .2s ease; }
        .ar-notice:hover .ar-notice__dl { background: #CC1579; color: #fff; border-color: #CC1579; }
      `}</style>
    </>
  );
}
