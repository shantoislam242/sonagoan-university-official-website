import { buildMetadata } from '@/lib/metadata';
import HeaderUniversity from '@/components/layout/HeaderUniversity';
import FooterUniversity from '@/components/layout/FooterUniversity';
import PageBanner from '@/components/sections/PageBanner';
import Container from '@/components/ui/Container';
import { User } from 'lucide-react';

export const metadata = buildMetadata({
  title: 'Editorial Board Members',
  description:
    'The patrons, advisory board, and editorial board of the Sonargaon University Journal (ISSN 2518-3125), the scholars guiding its peer-reviewed, multidisciplinary publication.',
  path: '/editorial-board',
});

type Person = { name: string; role?: string; affiliation: string; photo?: string };

const PATRONS: Person[] = [
  {
    name: 'Engr. Md. Abdul Alim',
    role: 'Chief Patron',
    affiliation: 'Founder of Sonargaon University (SU) & General Secretary of BoT, SU Trust',
    photo: '/assets/images/leadership/abdul-alim.jpeg',
  },
  {
    name: 'Engr. Abdul Aziz',
    role: 'Patron',
    affiliation: 'Founder of Sonargaon University (SU) & Chairman of BoT, SU Trust',
    photo: '/assets/images/leadership/abdul-aziz.jpeg',
  },
];

const ADVISORY: Person[] = [
  { name: 'Prof. Shamim Ara Hassan', affiliation: 'Vice-Chancellor, SU', photo: '/assets/images/leadership/shamim-ara-hassan.png' },
  { name: 'Prof. Mohammad Ali Naqi', affiliation: 'Professor, Department of Architecture, SU' },
  { name: 'Prof. Dr. Asghar Afshar Jahanshahi', affiliation: 'Research Professor, IPADE Business School, Mexico' },
  { name: 'Prof. Khabirul Haque Chowdhury', affiliation: 'Department of Naval Architecture & Marine Engineering, SU', photo: '/assets/images/heads/naval.png' },
  { name: 'Prof. Dr. Mohammad Ali', affiliation: 'Department of Mechanical Engineering, BUET' },
  { name: 'Prof. Md. Al-Amin Molla', affiliation: 'Dean, Faculty of Business, SU', photo: '/assets/images/faculty/dean-business.jpg' },
  { name: 'Prof. Dr. Md. Mostofa Akbar', affiliation: 'Department of CSE, BUET' },
  { name: 'Brig. Gen. (Retd.) Prof. Habibur Rahman Kamal, NDC, PSC', affiliation: 'Dean, Faculty of Science & Engineering, SU', photo: '/assets/images/faculty/dean-kamal.png' },
  { name: 'Prof. Dr. Md. Shamsul Hoque', affiliation: 'Department of Civil Engineering, BUET' },
  { name: 'Dr. Mosab Tabash', affiliation: 'Associate Professor & MBA Director, College of Business, Al Ain University, UAE' },
];

const EDITORIAL_LEAD: Person[] = [
  {
    name: 'Prof. Dr. Mohammad Ekramol Islam',
    role: 'Editor-in-Chief',
    affiliation: 'Treasurer, Sonargaon University',
    photo: '/assets/images/leadership/ekramol-islam.png',
  },
  {
    name: 'Prof. Dr. Md. Abdul Mabud',
    role: 'Executive Editor',
    affiliation: 'Dean, Faculty of Arts and Humanities, SU',
    photo: '/assets/images/crtc/mohammed-a-mabud.png',
  },
];

const ASSOCIATE: Person[] = [
  { name: 'Dr. Mohammad Rashed Hasan Polas', affiliation: 'Lecturer, Department of Business Administration, SU' },
  { name: 'Mr. Imamur Hossain', affiliation: 'Assistant Professor, Department of Architecture, SU' },
  { name: 'Dr. H.B. Muhammad Zukaul Islam', affiliation: 'Assistant Professor, Department of Basic Science, SU' },
  { name: 'Mr. Moyenul Hasan', affiliation: 'Coordinator, GED, SU' },
];

const MEMBERS: Person[] = [
  { name: 'Prof. Md. Mostofa Hossain', affiliation: 'Head, Department of Mechanical Engineering, SU', photo: '/assets/images/heads/mechanical.jpeg' },
  { name: 'M. Akmol Hakim', affiliation: 'Associate Professor & Head, Department of Architecture, SU', photo: '/assets/images/heads/architecture.jpg' },
  { name: 'Md. Tajbir Husain', affiliation: 'Assistant Professor & Head, Department of AMT, SU', photo: '/assets/images/heads/apparel.jpg' },
  { name: 'Prof. Bulbul Ahamed', affiliation: 'Head, Department of CSE, SU', photo: '/assets/images/heads/cse.jpg' },
  { name: 'Dr. Md. Masud Rana', affiliation: 'Associate Professor & Head, Department of Business Administration, SU' },
];

function Card({ p }: { p: Person }) {
  return (
    <article className="eb-card">
      <div className="eb-card__photo-wrap">
        {p.photo ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.photo} alt="" aria-hidden className="eb-card__bg" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.photo} alt={p.name} className="eb-card__photo" />
          </>
        ) : (
          <span className="eb-card__placeholder" aria-hidden>
            <User size={48} strokeWidth={1.5} />
          </span>
        )}
      </div>
      <div className="eb-card__body">
        {p.role && <span className="eb-card__role">{p.role}</span>}
        <h3 className="eb-card__name">{p.name}</h3>
        <p className="eb-card__aff">{p.affiliation}</p>
      </div>
    </article>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="eb-sec-head">
      {eyebrow && <span className="eb-sec-eyebrow">{eyebrow}</span>}
      <h2 className="eb-sec-title">{title}</h2>
    </div>
  );
}

export default function EditorialBoardPage() {
  return (
    <>
      <HeaderUniversity />
      <PageBanner
        title="Editorial Board Members"
        breadcrumb={[
          { label: 'Home', href: '/' },
          { label: 'Research', href: '/research' },
          { label: 'SU Journal', href: '/journal' },
          { label: 'Editorial Board' },
        ]}
      />

      {/* Intro */}
      <section style={{ background: '#ffffff', padding: '74px 0 10px' }}>
        <Container>
          <div style={{ textAlign: 'center' }}>
            <span className="eb-hero-eyebrow">Sonargaon University Journal &middot; ISSN 2518-3125</span>
            <h2 className="eb-hero-title">Editorial Board</h2>
            <p className="eb-hero-text">
              The Sonargaon University Journal is guided by a distinguished body of scholars and academic
              leaders. Its patrons provide institutional vision, the advisory board sets scholarly direction
              across disciplines, and the editorial board oversees the peer-review, selection, and publication
              of every issue, upholding the journal&rsquo;s standards of academic rigor and integrity.
            </p>
          </div>
        </Container>
      </section>

      {/* Patrons */}
      <section style={{ background: '#ffffff', padding: '50px 0 20px' }}>
        <Container>
          <SectionTitle eyebrow="Leadership" title="Patrons" />
          <div className="eb-grid eb-grid--lead">
            {PATRONS.map((p) => <Card key={p.name} p={p} />)}
          </div>
        </Container>
      </section>

      {/* Advisory Board */}
      <section style={{ background: '#F6F7FC', padding: '70px 0 80px' }}>
        <Container>
          <SectionTitle eyebrow="Scholarly Direction" title="Members of Advisory Board" />
          <div className="eb-grid">
            {ADVISORY.map((p) => <Card key={p.name} p={p} />)}
          </div>
        </Container>
      </section>

      {/* Editorial Board */}
      <section style={{ background: '#ffffff', padding: '80px 0 90px' }}>
        <Container>
          <SectionTitle eyebrow="Editorial Team" title="Editorial Board" />

          <div className="eb-grid eb-grid--lead">
            {EDITORIAL_LEAD.map((p) => <Card key={p.name} p={p} />)}
          </div>

          <h3 className="eb-sub">Associate Editors</h3>
          <div className="eb-grid">
            {ASSOCIATE.map((p) => <Card key={p.name} p={p} />)}
          </div>

          <h3 className="eb-sub">Members</h3>
          <div className="eb-grid">
            {MEMBERS.map((p) => <Card key={p.name} p={p} />)}
          </div>
        </Container>
      </section>

      <FooterUniversity />

      <style>{`
        .eb-hero-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px; letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 14px; }
        .eb-hero-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(28px, 3.6vw, 42px); line-height: 1.2; margin: 0 0 16px; }
        .eb-hero-text { color: #5B5B78; font-size: 17px; line-height: 1.85; margin: 0 auto; max-width: 860px; }

        .eb-sec-head { text-align: center; margin: 0 0 40px; }
        .eb-sec-eyebrow { display: inline-block; color: #CC1579; font-weight: 700; font-size: 12.5px; letter-spacing: 0.16em; text-transform: uppercase; margin-bottom: 10px; }
        .eb-sec-title { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(24px, 3.2vw, 34px); margin: 0; }
        .eb-sub { font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700; color: #2B3175; font-size: clamp(18px, 2.4vw, 22px); margin: 56px 0 26px; text-align: center; }

        .eb-grid { display: grid; grid-template-columns: 1fr; gap: 20px; }
        @media (min-width: 520px) { .eb-grid { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 880px) { .eb-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1180px) { .eb-grid { grid-template-columns: repeat(4, 1fr); } }
        .eb-grid--lead { max-width: 680px; margin: 0 auto; grid-template-columns: 1fr; }
        @media (min-width: 520px) { .eb-grid--lead { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 880px) { .eb-grid--lead { grid-template-columns: 1fr 1fr; } }
        @media (min-width: 1180px) { .eb-grid--lead { grid-template-columns: 1fr 1fr; } }

        .eb-card {
          background: #ffffff; border: 1px solid #ECECF3; border-radius: 16px; overflow: hidden;
          box-shadow: 0 12px 34px rgba(43,49,117,0.06); display: flex; flex-direction: column;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .eb-card:hover { transform: translateY(-5px); box-shadow: 0 24px 50px rgba(43,49,117,0.13); }
        .eb-card__photo-wrap {
          display: block; position: relative; border-bottom: 1px solid #ECECF3; background: #EEF0F6;
          overflow: hidden; aspect-ratio: 1 / 1;
        }
        .eb-card__bg {
          position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
          object-position: center; transform: scale(1.15); filter: blur(18px) brightness(0.92); z-index: 0;
        }
        .eb-card__photo {
          position: relative; z-index: 1; width: 100%; height: 100%;
          object-fit: contain; object-position: center; display: block;
        }
        .eb-card__placeholder {
          display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;
          color: #fff; background: linear-gradient(150deg, #2B3175 0%, #3a2c74 55%, #CC1579 150%);
        }
        .eb-card__body { padding: 18px 20px 20px; display: flex; flex-direction: column; flex: 1; }
        .eb-card__role {
          display: inline-block; align-self: flex-start; background: rgba(204,21,121,0.10); color: #CC1579;
          font-weight: 700; font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          padding: 4px 11px; border-radius: 999px; margin-bottom: 10px;
        }
        .eb-card__name {
          font-family: var(--font-poppins), Poppins, sans-serif; font-weight: 700;
          color: #2B3175; font-size: 16px; line-height: 1.32; margin: 0 0 6px;
        }
        .eb-card__aff { color: #5B5B78; font-size: 13.5px; line-height: 1.6; margin: 0; }
      `}</style>
    </>
  );
}
