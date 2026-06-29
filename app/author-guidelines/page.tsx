import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Mail, ArrowUpRight } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Author Guidelines',
  description:
    'Call for Papers and submission guidelines for the Sonargaon University Journal (SUJ), ISSN 2518-3125, a peer-reviewed, multidisciplinary academic journal.',
  path: '/author-guidelines',
});

const QUICK_FACTS = [
  { label: 'Word Limit', value: 'Within 6000 words' },
  { label: 'Plagiarism', value: 'Less than 20%' },
  { label: 'File Format', value: 'MS Word (.doc / .docx)' },
  { label: 'Referencing', value: 'APA 7th edition' },
  { label: 'Submission Deadline', value: '30 October 2025' },
];

type Guide = {
  title: string;
  paras?: string[];
  bullets?: string[];
  defs?: { label: string; text: string }[];
  note?: string;
  wide?: boolean;
};

const GUIDELINES: Guide[] = [
  {
    title: 'Word Limit',
    paras: ['The word limit for the article should be within 6000 words.'],
  },
  {
    title: 'Manuscript Formatting',
    bullets: [
      'Manuscripts must be written in English and submitted in a single-column format.',
      'Use 12-point Times New Roman font with double spacing.',
      'Include page numbers for easy reference.',
    ],
  },
  {
    title: 'Corresponding Author',
    paras: [
      'Please put an asterisk (*) immediately after the corresponding author’s name. Please also provide only the email of the corresponding author. Text should be Times New Roman, 1.5 line-spacing, centered.',
    ],
  },
  {
    title: 'Structure of the Manuscript',
    wide: true,
    defs: [
      { label: 'Title Page', text: 'Manuscript title, authors’ names, affiliations, and contact details of the corresponding author.' },
      { label: 'Abstract', text: 'A concise summary of the research (150–200 words).' },
      { label: 'Keywords', text: 'Include 4–6 keywords.' },
      { label: 'Introduction', text: 'Present the background, problem statement, and objectives of the study.' },
      { label: 'Literature Review', text: 'Critically summarize relevant research, identify gaps, and highlight the significance of the current study. Organize it thematically, chronologically, or methodologically, and cite sources using APA 7th edition.' },
      { label: 'Methodology', text: 'Clearly describe the methods, materials, and procedures used.' },
      { label: 'Results and Discussion', text: 'Present findings with appropriate analysis and interpretation.' },
      { label: 'Conclusion', text: 'Summarize the key insights and implications of the study.' },
      { label: 'Acknowledgments', text: 'Mention any funding or contributions (if any).' },
      { label: 'References', text: 'Follow the APA referencing style (7th edition) for citations and references.' },
    ],
    note: 'Manuscripts of science and engineering should follow the IEEE format, but references must follow the APA referencing style.',
  },
  {
    title: 'Heading / Sub-heading',
    bullets: [
      'Divide your article into clearly defined and numbered sections. Section headings are numbered 1.0 (then 2.0, 3.0, etc.). Text: Times New Roman, font size 12, bold, all caps, single spacing. Each paragraph starts without indent.',
      'Subsections are numbered 1.1 (then 1.2, 1.3, etc.). Text: Times New Roman, font size 12, bold, initial caps, single spacing.',
      'Sub-subsections are numbered 1.1.1 (then 1.1.2, 1.1.3, etc.). Text: Times New Roman, font size 12, bold, initial caps, single spacing. After this, use bullets or a, b, c, etc.',
    ],
  },
  {
    title: 'Figures and Tables',
    bullets: [
      'All figures and tables must be clearly labeled and placed within the text at appropriate positions (10-point font size).',
      'Submit high-resolution images in JPEG, PNG, or TIFF formats.',
    ],
  },
  {
    title: 'File Formats',
    paras: ['Manuscripts should be submitted as Microsoft Word documents (.doc or .docx).'],
  },
  {
    title: 'Ethical Considerations',
    bullets: [
      'Ensure that the work is original, free from plagiarism, and has not been published elsewhere.',
      'Include appropriate ethical approval and informed consent (if applicable).',
    ],
  },
];

export default function AuthorGuidelinesPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Author Guidelines"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'SU Journal', href: '/journal' },
          { label: 'Author Guidelines' },
        ]}
      />

      {/* Call for Papers */}
      <section style={{ background: '#ffffff', padding: '70px 0 60px' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 44 }}>
            <span className="ag-eyebrow">Sonargaon University Journal &middot; ISSN 2518-3125</span>
            <h2 className="ag-title">Call for Papers</h2>
            <p className="ag-subtitle">Vol. 5, Issue II &middot; December 2025</p>
          </div>

          <div className="ag-cfp-layout">
            <div className="ag-cfp">
              <p>
                Warm greetings from Sonargaon University (SU). On behalf of the Editorial Board of the
                Sonargaon University Journal (SUJ) (ISSN: 2518-3125), we invite manuscripts on original
                empirical work, theoretical papers, literature reviews, book reviews, and case studies dealing
                with Pure Science, Applied Science, Engineering, Technology, Business, and Humanities.
              </p>
              <p>
                The journal is peer-reviewed and fully refereed, published every year in June and December.
                Articles aim to inform academia, practitioners, and policy-makers on the unfolding trends and
                related issues in science, engineering, business, and the economy of developing economies.
              </p>
              <p>
                Authors should clearly write their designations, addresses, telephone (cell-phone) numbers,
                email addresses, fax numbers, and field of research on the cover page for use by the editorial
                and production offices. The article should be drafted in concise and unambiguous English and
                logically organized. Manuscripts must not have been published previously or be simultaneously
                submitted elsewhere, and the plagiarism report must be less than 20%.
              </p>
              <p>
                Manuscripts prepared according to the prescribed format should be submitted to the Editor by
                <strong> 30 October 2025</strong> for consideration in Vol. 5, Issue II.
              </p>
              <div className="ag-sign">
                <p className="ag-sign__name">Professor Dr. Mohammad Ekramol Islam</p>
                <p className="ag-sign__role">Editor-in-Chief, Sonargaon University Journal (SUJ)</p>
                <p className="ag-sign__meta">
                  <a href="mailto:journal@su.edu.bd">journal@su.edu.bd</a> &middot;{' '}
                  <a href="mailto:meislam2008@gmail.com">meislam2008@gmail.com</a>
                </p>
              </div>
            </div>

            <aside className="ag-aside">
              <span className="ag-aside__title">At a Glance</span>
              <ul className="ag-facts">
                {QUICK_FACTS.map((f) => (
                  <li key={f.label} className="ag-fact">
                    <span className="ag-fact__label">{f.label}</span>
                    <span className="ag-fact__value">{f.value}</span>
                  </li>
                ))}
              </ul>
              <a href="mailto:meislam2008@gmail.com" className="ag-submit-btn">
                <Mail size={17} /> Submit Manuscript <ArrowUpRight size={15} />
              </a>
            </aside>
          </div>
        </Container>
      </section>

      {/* Guidelines */}
      <section style={{ background: '#F6F7FC', padding: '74px 0 90px' }}>
        <Container>
          <div style={{ textAlign: 'center', marginBottom: 46 }}>
            <span className="ag-eyebrow">Submission</span>
            <h2 className="ag-title" style={{ fontSize: 'clamp(24px, 3.2vw, 34px)' }}>Guidelines for Authors</h2>
          </div>

          <div className="ag-list">
            {GUIDELINES.map((g, idx) => (
              <article key={g.title} className={`ag-item${g.defs ? ' ag-item--wide' : ''}`}>
                <h3 className="ag-item__title">
                  <span className="ag-item__num">{idx + 1}.</span> {g.title}
                </h3>
                {g.paras?.map((p, i) => <p key={i} className="ag-item__p">{p}</p>)}
                {g.bullets && (
                  <ul className="ag-bullets">
                    {g.bullets.map((b, i) => <li key={i}>{b}</li>)}
                  </ul>
                )}
                {g.defs && (
                  <ul className="ag-defs">
                    {g.defs.map((d) => (
                      <li key={d.label}>
                        <span className="ag-defs__label">{d.label}:</span> {d.text}
                      </li>
                    ))}
                  </ul>
                )}
                {g.note && <p className="ag-note"><strong>NB:</strong> {g.note}</p>}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .ag-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 12px; }
        .ag-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(28px, 3.6vw, 42px); line-height: 1.2; margin: 0 0 6px; }
        .ag-subtitle { color: #5B5B78; font-size: 17px; font-weight: 600; margin: 0; }

        /* Call for Papers layout */
        .ag-cfp-layout { display: grid; grid-template-columns: 1fr; gap: 28px; align-items: start; }
        @media (min-width: 900px) { .ag-cfp-layout { grid-template-columns: 1.7fr 1fr; gap: 36px; } }
        .ag-cfp {
          background: #fff; border: 1px solid #ECECF3; border-left: 5px solid #CC1579; border-radius: 16px;
          padding: clamp(26px, 3.5vw, 42px); box-shadow: 0 16px 40px rgba(43,49,117,0.06);
        }
        .ag-cfp p { color: #4C4C68; font-size: 16px; line-height: 1.9; margin: 0 0 16px; }
        .ag-cfp p:last-of-type { margin-bottom: 0; }
        .ag-cfp a { color: #CC1579; text-decoration: none; font-weight: 600; }
        .ag-cfp a:hover { text-decoration: underline; }
        .ag-cfp strong { color: #2B3175; }
        .ag-sign { margin-top: 24px; padding-top: 20px; border-top: 1px solid #EFEFF6; }
        .ag-sign__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; margin: 0 0 3px !important; }
        .ag-sign__role { color: #5B5B78; font-size: 14.5px; margin: 0 0 5px !important; }
        .ag-sign__meta { font-size: 14px; margin: 0 !important; }

        .ag-aside {
          background: linear-gradient(160deg, #2B3175 0%, #3a2c74 60%, #CC1579 150%);
          border-radius: 16px; padding: 28px 26px; color: #fff;
          box-shadow: 0 18px 44px rgba(43,49,117,0.18);
        }
        @media (min-width: 900px) { .ag-aside { position: sticky; top: 96px; } }
        .ag-aside__title { display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 13px; letter-spacing: 0.14em; text-transform: uppercase; opacity: 0.85; margin-bottom: 16px; }
        .ag-facts { list-style: none; margin: 0 0 22px; padding: 0; }
        .ag-fact { display: flex; flex-direction: column; gap: 2px; padding: 13px 0; border-bottom: 1px solid rgba(255,255,255,0.16); }
        .ag-fact:last-child { border-bottom: 0; }
        .ag-fact__label { color: rgba(255,255,255,0.78) !important; font-size: 11.5px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; }
        .ag-fact__value { color: #ffffff !important; font-size: 15.5px; font-weight: 700; line-height: 1.35; }
        .ag-aside__title { color: #fff; }
        .ag-submit-btn {
          display: inline-flex; align-items: center; justify-content: center; gap: 9px; width: 100%;
          background: #fff; color: #2B3175 !important; font-weight: 700; font-size: 15px;
          padding: 13px 20px; border-radius: 11px; text-decoration: none; transition: gap .2s ease, transform .2s ease;
        }
        .ag-submit-btn:hover { gap: 13px; transform: translateY(-2px); }

        /* Guidelines: clean document style */
        .ag-list { max-width: 1340px; margin: 0 auto; }
        .ag-item { padding-bottom: 30px; margin-bottom: 30px; border-bottom: 1px solid #E5E6EF; }
        .ag-item:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
        .ag-item__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 21px; line-height: 1.3; margin: 0 0 14px; }
        .ag-item__num { color: #CC1579; margin-right: 6px; }
        .ag-item__p { color: #4C4C68; font-size: 16px; line-height: 1.85; margin: 0 0 10px; }
        .ag-item__p:last-child { margin-bottom: 0; }
        .ag-bullets, .ag-defs { margin: 0; padding-left: 0; list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .ag-item--wide .ag-defs { display: grid; grid-template-columns: 1fr; gap: 11px; }
        @media (min-width: 820px) { .ag-item--wide .ag-defs { grid-template-columns: 1fr 1fr; gap: 11px 44px; } }
        .ag-bullets li, .ag-defs li { position: relative; padding-left: 22px; color: #4C4C68; font-size: 16px; line-height: 1.75; }
        .ag-bullets li::before, .ag-defs li::before {
          content: ''; position: absolute; left: 2px; top: 9px; width: 7px; height: 7px; border-radius: 50%; background: #CC1579;
        }
        .ag-defs__label { font-weight: 700; color: #2B3175; }
        .ag-note {
          margin: 18px 0 0; background: #F6F7FC; border: 1px solid #E7E8F1; border-radius: 10px;
          padding: 13px 16px; color: #5B5B78; font-size: 14.5px; line-height: 1.7;
        }
        .ag-note strong { color: #CC1579; }
      `}</style>
    </>
  );
}
