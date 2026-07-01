import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import Link from 'next/link';
import {
  FileCheck2, ClipboardList, Wallet, BadgePercent, GraduationCap, Building2, Layers,
  Users, BookOpen, Sparkles, CalendarDays, Award, Phone, Globe, MapPin,
  Sun, Moon, Star, ArrowUpRight, Mail,
} from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Information Hub',
  description:
    'Everything you need in one place: quick links to key pages, plus facilities, class schedules, campus life, career support, campuses, and division contacts of Sonargaon University.',
  path: '/information-hub',
});

const APPLY_ONLINE = 'http://sue.su.edu.bd:5081/sonargaon_erp/siteadmin/admission_info';

const QUICK_LINKS = [
  { name: 'Admission Requirements', href: '/admission-requirements', Icon: FileCheck2 },
  { name: 'Registration Policies', href: '/registration-policies', Icon: ClipboardList },
  { name: 'Tuition & Fees', href: '/tuition-fees', Icon: Wallet },
  { name: 'Waiver Policy', href: '/waiver-policy', Icon: BadgePercent },
  { name: 'Our Programs', href: '/academic', Icon: GraduationCap },
  { name: 'Faculties', href: '/faculty', Icon: Building2 },
  { name: 'Departments', href: '/academic-area', Icon: Layers },
  { name: 'Head of Departments', href: '/head-of-departments', Icon: Users },
  { name: 'Faculty Members', href: '/faculty-members', Icon: Users },
  { name: 'SU Journal', href: '/journal', Icon: BookOpen },
  { name: 'Campus Life', href: '/campus-life', Icon: Sparkles },
  { name: 'News & Events', href: '/event', Icon: CalendarDays },
  { name: 'Scholarship', href: '/scholarship', Icon: Award },
  { name: 'Alumni', href: '/alumni', Icon: GraduationCap },
  { name: 'Contact', href: '/contact', Icon: Phone },
  { name: 'Apply Online', href: APPLY_ONLINE, Icon: Globe, external: true },
];

const FACILITIES = [
  '15+ modern laboratories and AC classrooms with audio-visual multimedia.',
  'Library with 10,000+ books, plus an e-library and e-learning platform.',
  '24-hour campus-wide WiFi.',
  'On-campus medical service (Medimate Health Services), prayer room, and counseling.',
  'ERP and eLearning system for course materials, results, and academic information.',
];

const TRANSPORT = [
  'Free transport with a fleet of 20+ buses across Dhaka Metro (Morning batch only; no bus for the Friday batch).',
  'No university hostel; the university helps students find nearby hostels and mess facilities.',
];

const BATCHES = [
  { Icon: Sun, name: 'SUN (Morning)', time: '8:00 AM – 12:00 PM & 12:00 PM – 4:00 PM', days: 'Sun, Mon, Tue' },
  { Icon: Moon, name: 'MOON (Evening)', time: '6:00 PM – 10:00 PM', days: 'Mon, Tue, Wed' },
  { Icon: Star, name: 'STAR (Weekend)', time: 'Friday 8:00 AM – 10:00 PM', days: 'Plus online classes on Sat & Sun' },
];

const CAMPUS_LIFE = [
  '28 active student clubs across technology & research, arts & culture, professional development, sports, and social service, run by the Student Welfare Division.',
  'National-day and cultural events: Mother Language Day, Independence Day, Pohela Boishakh, Freshers’ Reception, Victory Day, and farewells.',
  'Sports: 200+ students at U-19, national, and international level; cricketers in the Dhaka Premier Division; Zia Inter-University T-10 champions.',
];

const CAREER = [
  'Career mentorship, 1-on-1 counseling, CV review, and interview preparation (Career Counseling Center under the SWD).',
  'Annual on-campus job fair, plus internships across departments (including at Walton and PRAN-RFL).',
  'Note: there is no guaranteed job placement; support is framed as mentorship, counseling, internships, and job fairs.',
];

const CAMPUSES = [
  { name: 'Permanent Campus (Main)', detail: 'Dasherkandi, Khilgaon, Dhaka', map: 'https://maps.app.goo.gl/ohMNbdCgJvyXdTpa6' },
  { name: 'City Campus 1', detail: 'Green Road, Dhaka', map: 'https://maps.app.goo.gl/L63SDT3h777sMEH1A' },
  { name: 'City Campus 2', detail: 'Mohakhali, Dhaka', map: 'https://maps.app.goo.gl/1acukaudzYupXq4BA' },
];

const CONTACTS = [
  { div: 'Student Welfare', phones: ['01955-544907', '01955-544910'] },
  { div: 'Academic (ACAD)', phones: ['01955-544906', '01955-544957'] },
  { div: 'Accounts', phones: ['01955-544934', '01955-544933'] },
  { div: 'Examination', phones: ['01992-077240', '01992-077127'] },
  { div: 'IT & Admission', phones: ['01955-544923', '01992-077408'] },
];

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div style={{ marginBottom: 34 }}>
      <span className="ai-eyebrow">{eyebrow}</span>
      <h2 className="ai-h2">{title}</h2>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="ai-bullets">
      {items.map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  );
}

export default function InformationHubPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Information Hub"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Information Hub' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '70px 0 20px' }}>
        <Container>
          <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
            <span className="ai-chip">Everything in one place</span>
            <h2 className="ai-title">Your quick guide to Sonargaon University</h2>
            <p className="ai-lead">
              Jump to any key page, and get a snapshot of campus facilities, class schedules, student life,
              career support, campuses, and division contacts.
            </p>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section style={{ background: '#ffffff', padding: '40px 0 70px' }}>
        <Container>
          <SectionHead eyebrow="Quick Links" title="Explore the site" />
          <div className="ai-links">
            {QUICK_LINKS.map(({ name, href, Icon, external }) => {
              const inner = (
                <>
                  <span className="ai-link__icon"><Icon size={20} /></span>
                  <span className="ai-link__name">{name}</span>
                  <ArrowUpRight className="ai-link__arrow" size={15} />
                </>
              );
              return external ? (
                <a key={name} href={href} target="_blank" rel="noopener noreferrer" className="ai-link">{inner}</a>
              ) : (
                <Link key={name} href={href} className="ai-link">{inner}</Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Facilities & Transport */}
      <section style={{ background: '#F6F7FC', padding: '74px 0' }}>
        <Container>
          <div className="ai-twocol">
            <div>
              <SectionHead eyebrow="On Campus" title="Facilities & Services" />
              <Bullets items={FACILITIES} />
            </div>
            <div>
              <SectionHead eyebrow="Getting Here" title="Transport & Accommodation" />
              <Bullets items={TRANSPORT} />
            </div>
          </div>
        </Container>
      </section>

      {/* Class Schedules */}
      <section style={{ background: '#ffffff', padding: '74px 0' }}>
        <Container>
          <SectionHead eyebrow="Batches" title="Class Schedules" />
          <div className="ai-batches">
            {BATCHES.map(({ Icon, name, time, days }) => (
              <article key={name} className="ai-batch">
                <span className="ai-batch__icon"><Icon size={22} /></span>
                <h3>{name}</h3>
                <p className="ai-batch__time">{time}</p>
                <p className="ai-batch__days">{days}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Campus Life & Career */}
      <section style={{ background: '#F6F7FC', padding: '74px 0' }}>
        <Container>
          <div className="ai-twocol">
            <div>
              <SectionHead eyebrow="Student Life" title="Campus Life" />
              <Bullets items={CAMPUS_LIFE} />
            </div>
            <div>
              <SectionHead eyebrow="After Studies" title="Career Support" />
              <Bullets items={CAREER} />
            </div>
          </div>
        </Container>
      </section>

      {/* Campuses */}
      <section style={{ background: '#ffffff', padding: '74px 0' }}>
        <Container>
          <SectionHead eyebrow="Locations" title="Campuses in Dhaka" />
          <div className="ai-campuses">
            {CAMPUSES.map((c) => (
              <a key={c.name} href={c.map} target="_blank" rel="noopener noreferrer" className="ai-campus">
                <span className="ai-campus__icon"><MapPin size={20} /></span>
                <h3>{c.name}</h3>
                <p>{c.detail}</p>
                <span className="ai-campus__link">View on map <ArrowUpRight size={14} /></span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Division Contacts */}
      <section style={{ background: '#F6F7FC', padding: '74px 0 84px' }}>
        <Container>
          <SectionHead eyebrow="Get in Touch" title="Division Contacts" />
          <div className="ai-contacts">
            {CONTACTS.map((c) => (
              <article key={c.div} className="ai-contact">
                <h3>{c.div}</h3>
                <div className="ai-contact__phones">
                  {c.phones.map((p) => (
                    <a key={p} href={`tel:${p.replace(/[^0-9+]/g, '')}`}><Phone size={14} /> {p}</a>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="ai-hotline">
            <span>Main hotline</span>
            <div>
              <a href="tel:+8801933669966"><Phone size={16} /> +880 1933 669966</a>
              <a href="mailto:info@su.edu.bd"><Mail size={16} /> info@su.edu.bd</a>
            </div>
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .ai-chip { display: inline-block; background: rgba(204,21,121,0.10); color: #CC1579; font-weight: 700; font-size: 12px; letter-spacing: 0.08em; padding: 6px 16px; border-radius: 999px; margin-bottom: 16px; }
        .ai-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(26px, 3.5vw, 40px); line-height: 1.2; margin: 0 0 16px; }
        .ai-lead { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0; }
        .ai-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px; }
        .ai-h2 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(23px, 3vw, 32px); margin: 0; }

        .ai-links { display: grid; grid-template-columns: 1fr; gap: 14px; }
        @media (min-width: 520px) { .ai-links { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 860px) { .ai-links { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1200px) { .ai-links { grid-template-columns: repeat(4, 1fr); } }
        .ai-link { position: relative; display: flex; align-items: center; gap: 13px; text-decoration: none; background: #fff; border: 1px solid #ECECF3; border-radius: 13px; padding: 16px 18px; box-shadow: 0 8px 22px rgba(43,49,117,0.05); transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .ai-link:hover { transform: translateY(-3px); box-shadow: 0 18px 38px rgba(43,49,117,0.12); border-color: #d7d8e6; }
        .ai-link__icon { display: inline-flex; align-items: center; justify-content: center; width: 42px; height: 42px; border-radius: 11px; color: #fff; background: linear-gradient(135deg, #2B3175, #CC1579); flex-shrink: 0; }
        .ai-link__name { color: #2B3175; font-weight: 600; font-size: 14.5px; line-height: 1.3; }
        .ai-link__arrow { color: #C2C4D6; margin-left: auto; flex-shrink: 0; transition: color .2s ease, transform .2s ease; }
        .ai-link:hover .ai-link__arrow { color: #CC1579; transform: translate(3px, -3px); }

        .ai-twocol { display: grid; grid-template-columns: 1fr; gap: 44px; }
        @media (min-width: 900px) { .ai-twocol { grid-template-columns: 1fr 1fr; gap: 56px; } }
        .ai-bullets { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 14px; }
        .ai-bullets li { position: relative; padding-left: 26px; color: #4C4C68; font-size: 15.5px; line-height: 1.75; }
        .ai-bullets li::before { content: ''; position: absolute; left: 4px; top: 9px; width: 8px; height: 8px; border-radius: 50%; background: linear-gradient(135deg, #2B3175, #CC1579); }

        .ai-batches { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) { .ai-batches { grid-template-columns: repeat(3, 1fr); } }
        .ai-batch { background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 28px 26px; box-shadow: 0 12px 30px rgba(43,49,117,0.05); text-align: center; }
        .ai-batch__icon { display: inline-flex; align-items: center; justify-content: center; width: 52px; height: 52px; border-radius: 14px; color: #fff; background: linear-gradient(135deg, #2B3175, #CC1579); margin-bottom: 16px; }
        .ai-batch h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 18px; margin: 0 0 10px; }
        .ai-batch__time { color: #2B3175; font-weight: 600; font-size: 14.5px; margin: 0 0 6px; }
        .ai-batch__days { color: #8A8AA3; font-size: 13.5px; margin: 0; }

        .ai-campuses { display: grid; grid-template-columns: 1fr; gap: 22px; }
        @media (min-width: 760px) { .ai-campuses { grid-template-columns: repeat(3, 1fr); } }
        .ai-campus { display: block; text-decoration: none; background: #F8F8FC; border: 1px solid #ECECF3; border-radius: 16px; padding: 28px 26px; transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease; }
        .ai-campus:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(43,49,117,0.12); border-color: #d7d8e6; }
        .ai-campus__icon { display: inline-flex; align-items: center; justify-content: center; width: 46px; height: 46px; border-radius: 12px; color: #CC1579; background: rgba(204,21,121,0.10); margin-bottom: 16px; }
        .ai-campus h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 17px; margin: 0 0 6px; }
        .ai-campus p { color: #5B5B78; font-size: 14.5px; margin: 0; }
        .ai-campus__link { display: inline-flex; align-items: center; gap: 6px; margin-top: 14px; color: #CC1579; font-weight: 700; font-size: 13px; transition: gap .2s ease; }
        .ai-campus:hover .ai-campus__link { gap: 9px; }

        .ai-leaders { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 640px) { .ai-leaders { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1040px) { .ai-leaders { grid-template-columns: repeat(3, 1fr); } }
        .ai-leader { background: #fff; border: 1px solid #ECECF3; border-left: 4px solid #CC1579; border-radius: 12px; padding: 18px 22px; box-shadow: 0 8px 22px rgba(43,49,117,0.05); }
        .ai-leader__role { display: block; color: #8A8AA3; font-size: 12.5px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 5px; }
        .ai-leader__name { display: block; color: #2B3175; font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; font-size: 16px; }

        .ai-stats { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (min-width: 760px) { .ai-stats { grid-template-columns: repeat(4, 1fr); } }
        .ai-stat { background: linear-gradient(150deg, #2B3175 0%, #3a2c74 60%, #CC1579 165%); color: #fff; border-radius: 16px; padding: 26px 20px; text-align: center; box-shadow: 0 18px 40px rgba(43,49,117,0.18); }
        .ai-stat strong { display: block; font-family: var(--font-poppins), Poppins, sans-serif; font-size: clamp(26px, 3.4vw, 34px); line-height: 1; margin-bottom: 8px; }
        .ai-stat span { display: block; font-size: 14px; opacity: 0.9; font-weight: 600; }

        .ai-contacts { display: grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 620px) { .ai-contacts { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 980px) { .ai-contacts { grid-template-columns: repeat(3, 1fr); } }
        .ai-contact { background: #fff; border: 1px solid #ECECF3; border-radius: 14px; padding: 20px 22px; box-shadow: 0 8px 22px rgba(43,49,117,0.05); }
        .ai-contact h3 { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: 15.5px; margin: 0 0 12px; }
        .ai-contact__phones { display: flex; flex-direction: column; gap: 8px; }
        .ai-contact__phones a { display: inline-flex; align-items: center; gap: 8px; color: #5B5B78; font-size: 14.5px; text-decoration: none; transition: color .18s ease; }
        .ai-contact__phones a:hover { color: #CC1579; }
        .ai-contact__phones svg { color: #CC1579; }

        .ai-hotline { display: flex; flex-direction: column; gap: 12px; align-items: center; text-align: center; margin: 34px auto 0; background: #fff; border: 1px solid #ECECF3; border-radius: 16px; padding: 26px 24px; max-width: 640px; box-shadow: 0 12px 30px rgba(43,49,117,0.06); }
        .ai-hotline > span { color: #2B3175; font-weight: 700; font-family: var(--font-poppins), Poppins, sans-serif; font-size: 15px; }
        .ai-hotline > div { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 24px; }
        .ai-hotline a { display: inline-flex; align-items: center; gap: 8px; color: #5B5B78; font-size: 15px; font-weight: 600; text-decoration: none; transition: color .18s ease; }
        .ai-hotline a:hover { color: #CC1579; }
        .ai-hotline svg { color: #CC1579; }
      `}</style>
    </>
  );
}
