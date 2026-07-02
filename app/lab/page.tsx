import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import {
  Cpu, Zap, Wrench, Building2, Layers, Anchor, PenTool,
  Briefcase, Scale, Radio, Shirt,
  FlaskConical, MapPin, ArrowUpRight, Info,
} from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Lab Facilities',
  description:
    'Explore Sonargaon University laboratory facilities across departments. 15+ modern labs for hands-on, industry-relevant learning, grouped by faculty, plus shared computer, EEE, hardware, physics & chemistry, and drawing labs.',
  path: '/lab',
});

const ME_LAB_URL = 'https://mechanical-engineering-olive.vercel.app/about/lab-facility';

type Dept = {
  name: string;
  icon: typeof Cpu;
  desc: string;
  href?: string; // department lab page (live). Absent = coming soon.
  image?: string; // real photo; falls back to gradient + icon when absent.
};

type Faculty = { title: string; departments: Dept[] };

const FACULTIES: Faculty[] = [
  {
    title: 'Faculty of Science & Engineering',
    departments: [
      { name: 'Computer Science & Engineering', icon: Cpu, desc: 'Programming, networking, and CAD work in high-tech computer and hardware labs.', image: '/assets/images/lab/cse.webp' },
      { name: 'Electrical & Electronic Engineering', icon: Zap, desc: 'Circuits, electronics, and hardware practicals in dedicated EEE laboratories.', image: '/assets/images/lab/eee.webp' },
      { name: 'Mechanical Engineering', icon: Wrench, desc: '8 specialised labs: machine tools, welding, solid & fluid mechanics, heat engine and heat transfer.', href: ME_LAB_URL, image: '/assets/images/lab/me.webp' },
      { name: 'Civil Engineering', icon: Building2, desc: '8 labs covering structures, fluids, geotechnics, highway materials, surveying and environment.', image: '/assets/images/lab/civil.webp' },
      { name: 'Textile Engineering', icon: Shirt, desc: 'Practical training in textile testing, processing, and quality facilities.', image: '/assets/images/lab/textile.webp' },
      { name: 'Naval Architecture & Marine Engineering', icon: Anchor, desc: 'Shares the Green Road engineering workshops with Mechanical Engineering (8 labs).', image: '/assets/images/lab/name.webp' },
      { name: 'Architecture', icon: PenTool, desc: 'Design studios and drawing labs for architectural modelling and presentation.', image: '/assets/images/lab/architecture.webp' },
    ],
  },
  {
    title: 'Faculty of Business',
    departments: [
      { name: 'Business Administration (BBA)', icon: Briefcase, desc: 'Computer labs and software for business analytics, accounting, and case work.', image: '/assets/images/lab/bba.webp' },
    ],
  },
  {
    title: 'Faculty of Arts & Humanities',
    departments: [
      { name: 'Law (LLB)', icon: Scale, desc: 'Moot facilities and computer labs for legal research and practice.', image: '/assets/images/lab/llb.webp' },
      { name: 'Journalism, Media & Communication', icon: Radio, desc: 'Dedicated Media & Journalism Studies lab for production and reporting practice.' },
      { name: 'Fashion Design & Technology', icon: Shirt, desc: 'Design studios and practical setups for fashion and apparel work.' },
    ],
  },
];

type SharedLab = { icon: typeof Cpu; name: string; rooms?: string };
const SHARED_LABS: SharedLab[] = [
  { icon: Cpu, name: 'Computer Lab', rooms: '204, 602, 611, 612' },
  { icon: Zap, name: 'EEE Lab', rooms: '207, 208, 604, 605' },
  { icon: Layers, name: 'EEE & CSE Hardware Lab', rooms: '510' },
  { icon: FlaskConical, name: 'Physics & Chemistry Lab', rooms: '608' },
  { icon: PenTool, name: 'Drawing Lab', rooms: '701' },
  { icon: Radio, name: 'Media & Journalism Studies Lab' },
];

// deterministic gradient variety for the card visuals (no Math.random)
const GRADIENTS = [
  'linear-gradient(145deg, #2B3175 0%, #4a2c86 100%)',
  'linear-gradient(145deg, #3a2c74 0%, #CC1579 130%)',
  'linear-gradient(145deg, #23285f 0%, #6f2379 120%)',
  'linear-gradient(145deg, #2B3175 0%, #8a1f7a 140%)',
];

export default function LabPage() {
  let cardIndex = 0;
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Laboratory Facilities"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Campus Life', href: '/campus-life' },
          { label: 'Lab Facilities' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '74px 0 20px' }}>
        <Container>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <span className="lab-chip">Facilities</span>
            <h2 className="lab-title">More than 15 modern laboratories</h2>
            <p className="lab-lead">
              Explore our state-of-the-art laboratories and research facilities across different departments.
              Sonargaon University equips students with well-resourced, industry-relevant labs for hands-on,
              practical learning. Each department&rsquo;s dedicated lab page is linked below as its website goes live.
            </p>
          </div>
        </Container>
      </section>

      {/* Faculty-grouped department cards */}
      <section style={{ background: '#ffffff', padding: '30px 0 40px' }}>
        <Container>
          {FACULTIES.map((fac) => (
            <div key={fac.title} className="lab-fac">
              <h3 className="lab-fac__title">{fac.title}</h3>
              <div className="lab-grid">
                {fac.departments.map((d) => {
                  const Icon = d.icon;
                  const live = Boolean(d.href);
                  const bg = GRADIENTS[cardIndex++ % GRADIENTS.length];
                  const card = (
                    <>
                      {d.image ? (
                        <div className="lab-card__visual lab-card__visual--photo">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={d.image} alt={`${d.name} lab`} />
                        </div>
                      ) : (
                        <div className="lab-card__visual" style={{ background: bg }}>
                          <Icon size={40} strokeWidth={1.4} />
                        </div>
                      )}
                      <div className="lab-card__body">
                        <h4 className="lab-card__name">{d.name}</h4>
                        <p className="lab-card__desc">{d.desc}</p>
                        <span className={`lab-card__link${live ? '' : ' lab-card__link--soon'}`}>
                          {live ? (<>View Labs <ArrowUpRight size={15} /></>) : 'Coming soon'}
                        </span>
                      </div>
                    </>
                  );
                  return live ? (
                    <a key={d.name} href={d.href} target="_blank" rel="noopener noreferrer" className="lab-card lab-card--live">
                      {card}
                    </a>
                  ) : (
                    <div key={d.name} className="lab-card">{card}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* Shared / common labs */}
      <section style={{ background: '#F6F7FC', padding: '80px 0 88px' }}>
        <Container>
          <div className="lab-sechead">
            <span className="lab-chip">Shared Facilities</span>
            <h3 className="lab-h2">Common &amp; Shared Labs</h3>
            <p className="lab-sublead">
              Cross-department laboratories available to students across programs, with campus room numbers.
            </p>
          </div>
          <div className="lab-shared-grid">
            {SHARED_LABS.map((l) => {
              const Icon = l.icon;
              return (
                <article key={l.name} className="lab-shared">
                  <span className="lab-shared__icon"><Icon size={22} /></span>
                  <div>
                    <h4 className="lab-shared__name">{l.name}</h4>
                    {l.rooms ? (
                      <p className="lab-shared__rooms"><MapPin size={13} /> Room {l.rooms}</p>
                    ) : (
                      <p className="lab-shared__rooms lab-shared__rooms--muted">Campus facility</p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
          <p className="lab-footnote">
            <Info size={15} /> SU has stated both &ldquo;11 labs&rdquo; and &ldquo;15+ modern labs&rdquo; in
            different materials; counting shared and departmental labs together, the 15+ figure is well
            supported. Named departmental lab lists are added as each department confirms and its website
            goes live.
          </p>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .lab-chip { display: inline-block; background: rgba(204,21,121,0.10); color: #CC1579; font-weight: 700; font-size: 12px; letter-spacing: 0.08em; padding: 6px 16px; border-radius: 999px; margin-bottom: 16px; }
        .lab-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(28px, 3.8vw, 44px); line-height: 1.15; margin: 0 0 18px; }
        .lab-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }

        /* Faculty sections */
        .lab-fac { margin-top: 46px; }
        .lab-fac:first-child { margin-top: 8px; }
        .lab-fac__title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(20px, 2.6vw, 27px); margin: 0 0 24px; padding-bottom: 14px; border-bottom: 2px solid #EFEFF6; position: relative; }
        .lab-fac__title::after { content: ''; position: absolute; left: 0; bottom: -2px; width: 64px; height: 2px; background: linear-gradient(90deg, #2B3175, #CC1579); }

        .lab-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 620px) { .lab-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1000px) { .lab-grid { grid-template-columns: repeat(3, 1fr); } }

        .lab-card { display: flex; flex-direction: column; background: #fff; border: 1px solid #ECECF3; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 30px rgba(43,49,117,0.05); text-decoration: none; transition: transform .25s ease, box-shadow .25s ease; }
        .lab-card--live:hover { transform: translateY(-6px); box-shadow: 0 26px 54px rgba(43,49,117,0.14); }
        .lab-card__visual { display: flex; align-items: center; justify-content: center; height: 210px; color: rgba(255,255,255,0.92); overflow: hidden; }
        .lab-card__visual--photo { padding: 0; }
        .lab-card__visual--photo img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
        .lab-card--live:hover .lab-card__visual--photo img { transform: scale(1.06); }
        .lab-card__body { padding: 22px 22px 24px; display: flex; flex-direction: column; flex: 1; }
        .lab-card__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 17px; line-height: 1.3; margin: 0 0 10px; }
        .lab-card__desc { color: #5B5B78; font-size: 14px; line-height: 1.7; margin: 0 0 18px; flex: 1; }
        .lab-card__link { display: inline-flex; align-items: center; gap: 7px; color: #CC1579; font-weight: 700; font-size: 14px; margin-top: auto; }
        .lab-card--live:hover .lab-card__link { gap: 11px; }
        .lab-card__link--soon { color: #A6A6BC; font-weight: 600; }

        /* Shared labs */
        .lab-sechead { text-align: center; max-width: 760px; margin: 0 auto 46px; }
        .lab-h2 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(24px, 3.2vw, 34px); line-height: 1.2; margin: 0 0 14px; }
        .lab-sublead { color: #5B5B78; font-size: 16px; line-height: 1.8; margin: 0; }
        .lab-shared-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        @media (min-width: 620px) { .lab-shared-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1000px) { .lab-shared-grid { grid-template-columns: repeat(3, 1fr); } }
        .lab-shared { display: flex; align-items: flex-start; gap: 16px; background: #fff; border: 1px solid #ECECF3; border-radius: 14px; padding: 22px 22px; box-shadow: 0 10px 26px rgba(43,49,117,0.05); transition: transform .2s ease, box-shadow .2s ease; }
        .lab-shared:hover { transform: translateY(-4px); box-shadow: 0 22px 44px rgba(43,49,117,0.12); }
        .lab-shared__icon { flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; width: 48px; height: 48px; border-radius: 12px; color: #fff; background: linear-gradient(135deg, #2B3175, #CC1579); }
        .lab-shared__name { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 16px; line-height: 1.35; margin: 0 0 6px; }
        .lab-shared__rooms { display: inline-flex; align-items: center; gap: 6px; color: #CC1579; font-size: 13.5px; font-weight: 600; margin: 0; }
        .lab-shared__rooms svg { flex-shrink: 0; }
        .lab-shared__rooms--muted { color: #8A8AA3; font-weight: 500; }

        .lab-footnote { display: flex; align-items: flex-start; gap: 10px; max-width: 900px; margin: 40px auto 0; background: #fff; border: 1px solid #ECECF3; border-radius: 12px; padding: 16px 20px; color: #5B5B78; font-size: 14px; line-height: 1.7; }
        .lab-footnote svg { color: #CC1579; flex-shrink: 0; margin-top: 3px; }
      `}</style>
    </>
  );
}
