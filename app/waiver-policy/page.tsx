import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { Award, ShieldCheck, ExternalLink, Phone, Mail } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Waiver Policy',
  description:
    'Sonargaon University waiver and scholarship policy: result-based tuition waivers, quotas, continuing scholarships, full-payment discounts, and referral rewards.',
  path: '/waiver-policy',
});

const SUN_MOON: [string, string, string][] = [
  ['5.00 – 7.49', '5.00 – 6.99', '60%'],
  ['7.50 – 8.99', '7.00 – 7.99', '70%'],
  ['9.00 – 9.99', '8.00 – 9.00', '75%'],
  ['10.00', 'N/A', '80%'],
];
const STAR: [string, string, string][] = [
  ['5.00 – 7.49', '5.00 – 6.99', '50%'],
  ['7.50 – 8.99', '7.00 – 7.99', '60%'],
  ['9.00 – 9.99', '8.00 – 9.00', '65%'],
  ['10.00', 'N/A', '70%'],
];

const QUOTAS: [string, string, string][] = [
  ['Sibling / Husband-Wife / Issue-Parents / Others', '10%', '20% for 2 students (divided by 2), 30% for 3 students (divided by 3); effective after the last student’s admission'],
  ['Female students', '10% – 50%', 'With proper application'],
  ['Freedom Fighter quota', '100% of tuition', 'Lottery if more than 3 applications; maximum 1 per family; first month tuition and semester'],
  ['Disability quota', '10%', 'Authority may amend for special cases'],
  ['Group waiver', '3% – 5%', '2 to 4 persons: 3%; 5 or more: 5%. For Architecture, NAME & Journalism: 5% for 2 to 5+ students'],
  ['Sister-Concern Diploma (NIET, Wii, NPI, BIST, etc.)', 'BDT 4,000', 'Admission fee BDT 9,500 instead of 12,500'],
  ['Student Welfare Division (SWD) waiver', 'On tuition fee', 'Apply to SWD after admission'],
  ['Tribal quota', '10%', ''],
  ['Instructor quota', '10%', ''],
  ['Special Waiver (Admission Fair)', 'BDT 30,000 or 20,000 on tuition', 'Other programs'],
  ['Special Waiver (Admission Fair), LLB & Masters', 'BDT 10,000', ''],
];

const SCHOLARSHIP: [string, string, string, string][] = [
  ['4.00 out of 4', '25%', '30%', '50%'],
  ['3.90 – 3.99', '10%', '15%', '20%'],
];

const REFERRAL: [string, string][] = [
  ['Admission fee 12,500', 'BDT 5,000'],
  ['Admission fee 7,500', 'BDT 1,500'],
  ['Admission fee 9,500 (sister concern)', 'BDT 3,000'],
];

const NOTES = [
  'Multiple waivers generally do not stack on one program; the highest applicable benefit applies.',
  'Result-based waivers require maintaining the required CGPA and 75% attendance to retain them.',
  'Total cost varies by batch, program, and waiver tier, so confirm the exact figure with the admission office.',
  'Policies may change over time; verify against the official page.',
];

function SectionHead({ n, title }: { n: string; title: string }) {
  return (
    <div className="wp-head">
      <span className="wp-head__num">{n}</span>
      <h2 className="wp-head__title">{title}</h2>
    </div>
  );
}

function GpaTable({ rows }: { rows: [string, string, string][] }) {
  return (
    <>
      <div className="wp-tablewrap">
        <table className="wp-table">
          <thead>
            <tr><th>SSC + HSC GPA</th><th>SSC + Diploma GPA</th><th>Waiver</th></tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td>{r[0]}</td>
                <td>{r[1]}</td>
                <td className="wp-w">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="wp-mlist wp-mlist--card">
        {rows.map((r, i) => (
          <div key={i} className="wp-mrow">
            <span className="wp-mrow__label">SSC+HSC {r[0]}<small>SSC+Diploma {r[1]}</small></span>
            <span className="wp-mrow__val">{r[2]}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default function WaiverPolicyPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Waiver Policy"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Admission', href: '/admission' },
          { label: 'Waiver Policy' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '70px 0 20px' }}>
        <Container>
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto' }}>
            <span className="wp-chip">Scholarships &amp; Waivers</span>
            <h2 className="wp-title">More ways to make SU affordable</h2>
            <p className="wp-lead">
              Sonargaon University rewards academic merit and supports students through a wide range of tuition
              waivers, quotas, scholarships, and discounts. Here is the full policy at a glance.
            </p>
          </div>
        </Container>
      </section>

      {/* 1. Result-Based Tuition Waiver */}
      <section style={{ background: '#ffffff', padding: '40px 0 60px' }}>
        <Container>
          <SectionHead n="1" title="Result-Based Tuition Fee Waiver (at admission)" />
          <p className="wp-text">
            Based on the combined GPA of SSC + HSC (or SSC + Diploma). SUN and MOON batches share the same
            rates; the STAR batch is slightly lower at the top tiers.
          </p>
          <div className="wp-twocol">
            <div className="wp-block">
              <h3 className="wp-block__title">SUN &amp; MOON Batch <span>(identical)</span></h3>
              <GpaTable rows={SUN_MOON} />
            </div>
            <div className="wp-block">
              <h3 className="wp-block__title">STAR Batch</h3>
              <GpaTable rows={STAR} />
            </div>
          </div>
          <p className="wp-fine">SUN = morning &middot; MOON = evening &middot; STAR = Friday / weekend.</p>
        </Container>
      </section>

      {/* 2. 100% Waiver */}
      <section style={{ background: '#F6F7FC', padding: '64px 0' }}>
        <Container>
          <SectionHead n="2" title="100% Tuition Fee Waiver" />
          <div className="wp-highlights">
            <article className="wp-hl">
              <span className="wp-hl__icon"><Award size={24} /></span>
              <h3>Golden A+ Achievers</h3>
              <p>Golden A+ in both SSC and HSC earns a 100% tuition waiver (excluding LLB and postgraduate programs).</p>
            </article>
            <article className="wp-hl">
              <span className="wp-hl__icon"><ShieldCheck size={24} /></span>
              <h3>Freedom Fighter Quota</h3>
              <p>A 100% tuition waiver (excluding postgraduate). If more than 3 applications are received, applicants are shortlisted by lottery, with a maximum of 1 per family.</p>
            </article>
          </div>
        </Container>
      </section>

      {/* 3. Waivers & Quotas */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <Container>
          <SectionHead n="3" title="Waivers & Quotas (full policy, effective Fall 2022)" />
          <div className="wp-tablewrap">
            <table className="wp-table wp-table--quota">
              <thead>
                <tr><th>Category</th><th>Waiver</th><th>Notes</th></tr>
              </thead>
              <tbody>
                {QUOTAS.map((r, i) => (
                  <tr key={i}>
                    <td data-label="Category" className="wp-cat">{r[0]}</td>
                    <td data-label="Waiver" className="wp-w">{r[1]}</td>
                    <td data-label="Notes" className="wp-note-cell">{r[2] || 'Standard policy applies'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="wp-mlist">
            {QUOTAS.map((r, i) => (
              <div key={i} className="wp-mcard">
                <div className="wp-mcard__head">{r[0]}</div>
                <div className="wp-mrow">
                  <span className="wp-mrow__label">Waiver</span>
                  <span className="wp-mrow__val">{r[1]}</span>
                </div>
                {r[2] && <p className="wp-mcard__notes">{r[2]}</p>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Continuing Scholarship */}
      <section style={{ background: '#F6F7FC', padding: '64px 0' }}>
        <Container>
          <SectionHead n="4" title="Result-Based Continuing Scholarship (effective Spring 2022)" />
          <p className="wp-text">For current students, based on the previous semester’s result and the credits taken:</p>
          <div className="wp-tablewrap">
            <table className="wp-table">
              <thead>
                <tr>
                  <th>Semester Result</th>
                  <th>Slab-1 (10 to &lt;12 cr)</th>
                  <th>Slab-2 (12 to &lt;15 cr)</th>
                  <th>Slab-3 (15+ cr)</th>
                </tr>
              </thead>
              <tbody>
                {SCHOLARSHIP.map((r, i) => (
                  <tr key={i}>
                    <td data-label="Semester Result">{r[0]}</td>
                    <td data-label="Slab-1 (10 to <12 cr)" className="wp-w">{r[1]}</td>
                    <td data-label="Slab-2 (12 to <15 cr)" className="wp-w">{r[2]}</td>
                    <td data-label="Slab-3 (15+ cr)" className="wp-w">{r[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="wp-mlist">
            {SCHOLARSHIP.map((r, i) => (
              <div key={i} className="wp-mcard">
                <div className="wp-mcard__head">{r[0]}</div>
                <div className="wp-mrow"><span className="wp-mrow__label">Slab-1 (10 to &lt;12 cr)</span><span className="wp-mrow__val">{r[1]}</span></div>
                <div className="wp-mrow"><span className="wp-mrow__label">Slab-2 (12 to &lt;15 cr)</span><span className="wp-mrow__val">{r[2]}</span></div>
                <div className="wp-mrow"><span className="wp-mrow__label">Slab-3 (15+ cr)</span><span className="wp-mrow__val">{r[3]}</span></div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Early / Full-Payment */}
      <section style={{ background: '#ffffff', padding: '64px 0' }}>
        <Container>
          <SectionHead n="5" title="Early / Full-Payment Waiver" />
          <div className="wp-pair">
            <div className="wp-pair__card">
              <span className="wp-pair__pct">10%</span>
              <p>Waiver on tuition for paying the full first-semester tuition at admission.</p>
            </div>
            <div className="wp-pair__card">
              <span className="wp-pair__pct">15%</span>
              <p>Waiver on tuition for paying the full program fee at admission.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Referral Reward */}
      <section style={{ background: '#F6F7FC', padding: '64px 0' }}>
        <Container>
          <SectionHead n="6" title="Student Referral Reward (current students only)" />
          <p className="wp-text">Paid within 7 working days for referring a newly admitted student through official channels:</p>
          <div className="wp-referral">
            {REFERRAL.map((r, i) => (
              <div key={i} className="wp-ref">
                <span className="wp-ref__for">{r[0]}</span>
                <span className="wp-ref__amt">{r[1]}</span>
              </div>
            ))}
          </div>
          <p className="wp-fine">
            Inform the admission office before admission. One referral per student; wrong or incomplete
            information voids the reward.
          </p>
        </Container>
      </section>

      {/* Important Notes */}
      <section style={{ background: '#ffffff', padding: '64px 0 50px' }}>
        <Container>
          <SectionHead n="!" title="Important Notes" />
          <ul className="wp-notes">
            {NOTES.map((n, i) => <li key={i}>{n}</li>)}
          </ul>
        </Container>
      </section>

      {/* Source */}
      <section style={{ background: '#ffffff', padding: '0 0 90px' }}>
        <Container>
          <div className="wp-source">
            <p>Official source &amp; latest updates:</p>
            <div className="wp-source__links">
              <a href="https://su.edu.bd/Admission/waiver_policy" target="_blank" rel="noopener noreferrer">
                <ExternalLink size={15} /> su.edu.bd/Admission/waiver_policy
              </a>
              <a href="tel:+8801933669966"><Phone size={15} /> +880 1933 669966</a>
              <a href="mailto:info@su.edu.bd"><Mail size={15} /> info@su.edu.bd</a>
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .wp-chip { display: inline-block; background: rgba(204,21,121,0.10); color: #CC1579; font-weight: 700; font-size: 12px; letter-spacing: 0.08em; padding: 6px 16px; border-radius: 999px; margin-bottom: 16px; }
        .wp-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(26px, 3.5vw, 40px); line-height: 1.2; margin: 0 0 16px; }
        .wp-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }

        .wp-head { display: flex; align-items: center; gap: 14px; margin: 0 0 18px; }
        .wp-head__num {
          flex-shrink: 0; width: 40px; height: 40px; border-radius: 11px; color: #fff;
          display: inline-flex; align-items: center; justify-content: center;
          background: linear-gradient(135deg, #2B3175, #CC1579);
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 17px;
        }
        .wp-head__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(19px, 2.6vw, 25px); margin: 0; line-height: 1.3; }
        .wp-text { color: #5B5B78; font-size: 15.5px; line-height: 1.8; margin: 0 0 22px; }
        .wp-fine { color: #8A8AA3; font-size: 13.5px; line-height: 1.7; margin: 16px 0 0; font-style: italic; }

        .wp-twocol { display: grid; grid-template-columns: 1fr; gap: 26px; }
        @media (min-width: 760px) { .wp-twocol { grid-template-columns: 1fr 1fr; } }
        .wp-block__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; margin: 0 0 14px; }
        .wp-block__title span { color: #8A8AA3; font-weight: 600; font-size: 13px; }

        .wp-tablewrap { overflow-x: auto; border: 1px solid #ECECF3; border-radius: 14px; box-shadow: 0 10px 26px rgba(43,49,117,0.04); }
        .wp-table { width: 100%; border-collapse: collapse; font-size: 14.5px; }
        .wp-table th { text-align: center; background: #F6F7FC; color: #2B3175; font-weight: 700; font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.03em; padding: 14px 18px; border-bottom: 1px solid #E5E6EF; white-space: nowrap; }
        .wp-table td { padding: 14px 18px; border-bottom: 1px solid #F0F0F5; color: #4C4C68; vertical-align: top; text-align: center; }
        .wp-table tr:last-child td { border-bottom: 0; }
        .wp-w { color: #CC1579; font-weight: 700; white-space: nowrap; }
        .wp-cat { color: #2B3175; font-weight: 600; }
        .wp-note-cell { color: #5B5B78; font-size: 13.5px; line-height: 1.6; min-width: 280px; }
        .wp-table--quota th:first-child, .wp-table--quota td:first-child { min-width: 230px; text-align: left; }
        .wp-table--quota th:last-child, .wp-table--quota td:last-child { text-align: left; }

        .wp-highlights { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 720px) { .wp-highlights { grid-template-columns: 1fr 1fr; } }
        .wp-hl { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 30px 28px; box-shadow: 0 12px 30px rgba(43,49,117,0.05); }
        .wp-hl__icon { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 14px; margin-bottom: 18px; color: #fff; background: linear-gradient(135deg, #2B3175, #CC1579); }
        .wp-hl h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 18px; margin: 0 0 10px; }
        .wp-hl p { color: #5B5B78; font-size: 14.5px; line-height: 1.75; margin: 0; }

        .wp-pair { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 640px) { .wp-pair { grid-template-columns: 1fr 1fr; } }
        .wp-pair__card { display: flex; align-items: center; gap: 20px; background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 16px; padding: 24px 26px; }
        .wp-pair__pct { flex-shrink: 0; display: inline-block; line-height: 1.25; padding: 2px 0; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 34px; background: linear-gradient(135deg, #2B3175, #CC1579); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
        .wp-pair__card p { color: #5B5B78; font-size: 14.5px; line-height: 1.7; margin: 0; }

        .wp-referral { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 720px) { .wp-referral { grid-template-columns: repeat(3, 1fr); } }
        .wp-ref { background: #fff; border: 1px solid #ECECF3; border-radius: 14px; padding: 22px 24px; box-shadow: 0 10px 26px rgba(43,49,117,0.04); }
        .wp-ref__for { display: block; color: #5B5B78; font-size: 13.5px; margin-bottom: 8px; }
        .wp-ref__amt { display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #CC1579; font-size: 22px; }

        .wp-notes { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .wp-notes li { position: relative; padding-left: 26px; color: #4C4C68; font-size: 15px; line-height: 1.75; }
        .wp-notes li::before { content: ''; position: absolute; left: 4px; top: 9px; width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg, #2B3175, #CC1579); }

        .wp-source { text-align: center; padding: 28px 24px; background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 16px; }
        .wp-source p { color: #2B3175; font-weight: 600; font-size: 15px; margin: 0 0 14px; }
        .wp-source__links { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 26px; }
        .wp-source__links a { display: inline-flex; align-items: center; gap: 7px; color: #5B5B78; font-size: 14px; text-decoration: none; transition: color .18s ease; }
        .wp-source__links a:hover { color: #CC1579; }
        .wp-source__links svg { color: #CC1579; }

        /* Mobile clean cards (hidden on desktop) */
        .wp-mlist { display: none; }
        .wp-mlist--card { border: 1px solid #ECECF3; border-radius: 12px; background: #fff; padding: 4px 16px; box-shadow: 0 8px 20px rgba(43,49,117,0.04); }
        .wp-mcard { border: 1px solid #ECECF3; border-radius: 12px; background: #fff; padding: 4px 16px; margin-bottom: 12px; box-shadow: 0 8px 20px rgba(43,49,117,0.04); }
        .wp-mcard__head { color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 15px; line-height: 1.4; padding: 14px 0 12px; border-bottom: 1px solid #ECECF3; }
        .wp-mcard__notes { color: #5B5B78; font-size: 13px; line-height: 1.65; margin: 11px 0 14px; }
        .wp-mrow { display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; padding: 13px 0; border-bottom: 1px solid #F0F0F5; }
        .wp-mlist--card .wp-mrow:last-child, .wp-mcard .wp-mrow:last-child { border-bottom: 0; }
        .wp-mrow__label { display: flex; flex-direction: column; gap: 3px; color: #5B5B78; font-size: 14px; }
        .wp-mrow__label small { color: #A6A6BC; font-size: 12px; }
        .wp-mrow__val { color: #CC1579; font-weight: 700; font-size: 15.5px; text-align: right; white-space: nowrap; }
        @media (max-width: 640px) {
          .wp-tablewrap { display: none; }
          .wp-mlist { display: block; }
        }
      `}</style>
    </>
  );
}
